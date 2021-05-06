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
/* harmony import */ var _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/pbcommon */ "./lib/pbcommon.js");


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

    if (messageData.type === "pb" && messageData.func === "chat" && !messageData.gameid && messageData.nickname !== nickname) {
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
      let newPlayingP = senderPG === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"] ? true : gi > -1 ? gamelist[gi].playingP : false;
      let newPlayingG = senderPG === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"] ? true : gi > -1 ? gamelist[gi].playingG : false;
      let newRacksize = rs;
      let newgamestatus = "Unknown";

      if (wt === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_GAMEOVER"]) {
        newgamestatus = "Game over";
      } else if (wt === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_PRISONERS"]) {
        newgamestatus = "Prisoners turn";
      } else if (wt === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_GUARDS"]) {
        newgamestatus = "Guards turn";
      }

      let newgamedata = {
        gameid: sendergameid,
        nicknameP: senderPG === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"] ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
        nicknameG: senderPG === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"] ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
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
      className: "w3-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col s9 l8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pbPlayerTitle",
                  children: "All Participants ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Nickname:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
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
                lineNumber: 134,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pbPlayerTitle",
                  children: "Prisoners ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Game ID:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
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
                lineNumber: 152,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Rack Size:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w3-row",
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
                  lineNumber: 165,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  id: "selectracksize5",
                  className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(5),
                  "data-toggle": "tooltip",
                  title: "5 letter racks, 11 x 11 board",
                  children: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  id: "selectracksize6",
                  className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(6),
                  "data-toggle": "tooltip",
                  title: "6 letter racks, 13 x 13 board",
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  id: "selectracksize7",
                  className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(7),
                  "data-toggle": "tooltip",
                  title: "7 letter racks, 15 x 15 board",
                  children: "7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "w3-row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pbLobbyCellBlockInfo",
                  children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
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
                      setParticipant(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                    }
                  } else {
                    window.alert("Please enter Game ID before starting a game");
                  }
                },
                children: "Start Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "pbPlayerTitle",
                  children: "Guards ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "myCommonFont",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Find and click the \"Join Game\" button for your game."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 50
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
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
                  lineNumber: 229,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "myCommonFont",
                children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "myCommonFont",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Game list:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 48
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 17
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
                      lineNumber: 245,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "w3-border-right",
                      children: "Prisoners"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "w3-border-right",
                      children: "Guards"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "w3-border-right",
                      children: "Rack Size"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      children: "Game Status"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    className: "myCommonFont w3-hover-green",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "w3-border-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                        children: value.gameid
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 59
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 27
                    }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `PrisonersNoAction${index}`,
                      className: "w3-border-right",
                      children: "No action available"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 29
                    }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `PrisonersRejoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: "w3-button w3-red w3-round w3-hover-black",
                        onClick: function () {
                          setIsrejoin(true);
                          setGameid(value.gameid);
                          setParticipant(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                          setRacksize(value.racksize);
                        },
                        children: "Reconnect"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 259,
                      columnNumber: 29
                    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `PrisonersStart${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: buttonClassName,
                        onClick: function () {
                          setGameid(value.gameid);
                          setParticipant(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                        },
                        children: "Start Game"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 29
                    }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `GuardsNoAction${index}`,
                      className: "w3-border-right",
                      children: "No action available"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 29
                    }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `GuardsRejoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: buttonClassName,
                        onClick: function () {
                          setIsrejoin(true);
                          setGameid(value.gameid);
                          setParticipant(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"]);
                          setRacksize(value.racksize);
                        },
                        children: "Reconnect"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 29
                    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `GuardsJoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: buttonClassName,
                        onClick: function () {
                          setGameid(value.gameid);
                          setParticipant(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"]);
                          setRacksize(value.racksize);
                        },
                        children: "Join Game"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 300,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `RackSize${index}`,
                      className: "w3-center w3-border-right",
                      children: value.racksize
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      id: `GameStatus${index}`,
                      children: value.gamestatus
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 27
                    }, undefined)]
                  }, `OtherGame${index}`, true, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 25
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col s3 l4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_chatSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvblN0YXJ0IiwiYXZhaWxhYmxlQWN0aW9uSm9pbiIsImF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCIsIkxvYmJ5IiwiY2xpZW50Iiwic2V0SXNyZWpvaW4iLCJ3c21lc3NhZ2UiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwic2V0UGFydGljaXBhbnQiLCJyYWNrc2l6ZSIsInNldFJhY2tzaXplIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsInVzZVN0YXRlIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJmdW5jIiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsInNlbmRlcmdhbWVpZCIsInNlbmRlcm5pY2tuYW1lIiwid3QiLCJ3aG9zZXR1cm4iLCJycyIsImxlbmd0aCIsImFueVVwZGF0ZXMiLCJzZW5kZXJQRyIsInNlbmRlciIsIm5ld0dhbWVsaXN0IiwiZ2kiLCJnZXRHYW1lbGlzdEluZGV4IiwibmV3UGxheWluZ1AiLCJjIiwicGxheWluZ1AiLCJuZXdQbGF5aW5nRyIsInBsYXlpbmdHIiwibmV3UmFja3NpemUiLCJuZXdnYW1lc3RhdHVzIiwibmV3Z2FtZWRhdGEiLCJuaWNrbmFtZVAiLCJuaWNrbmFtZUciLCJnYW1lc3RhdHVzIiwib2xkZ2FtZWRhdGEiLCJnaWQiLCJpIiwiaXNQbGF5aW5nUCIsImF2YWlsYWJsZUFjdGlvblAiLCJnZCIsImF2YWlsYWJsZUFjdGlvbkciLCJzZWxlY3RSYWNrU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpbmRvdyIsImFsZXJ0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50aWQiLCJ0aGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUcscURBQXhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBNUI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUE3QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLENBQTVCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsQ0FBakM7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxhQUFUO0FBQXNCQyxXQUF0QjtBQUFpQ0MsUUFBakM7QUFBeUNDLFdBQXpDO0FBQW9EQyxVQUFwRDtBQUE4REMsYUFBOUQ7QUFBMkVDLGdCQUEzRTtBQUNUQyxVQURTO0FBQ0NDLGFBREQsQ0FDYTs7QUFEYixDQUFELEtBRUo7QUFBQTs7QUFDTixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QyxDQURNLENBQ3VDOztBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxHQUFHLEdBQUdkLFNBQVY7QUFDQSxRQUFJYyxHQUFHLEtBQUssRUFBWixFQUFnQkMsbUJBQW1CLENBQUNELEdBQUQsQ0FBbkI7QUFDakIsR0FIUSxFQUdQLENBQUNkLFNBQUQsQ0FITyxDQUFUO0FBSUFhLHlEQUFTLENBQUMsTUFBTTtBQUNkRyxrQkFBYyxDQUFDLGdCQUFELENBQWQ7QUFDRCxHQUZRLEVBRVAsQ0FBQ0wsUUFBRCxDQUZPLENBQVQ7O0FBSUEsV0FBU0ksbUJBQVQsQ0FBNkJF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QUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQTBNRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLHVEQUFEO0FBQU0sZ0JBQU0sRUFBRWpFLE1BQWQ7QUFBc0Isa0JBQVEsRUFBRUssUUFBaEM7QUFBMEMsY0FBSSxFQUFFUSxRQUFoRDtBQUEwRCxpQkFBTyxFQUFFQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExTUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBdU5FO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZORCxDQWxVSDs7R0FBTWYsSzs7S0FBQUEsSzs7QUFvVU4sTUFBTW1CLGNBQWMsR0FBSWdELFNBQUQsSUFBZTtBQUNwQyxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsU0FBeEIsQ0FBbkI7QUFDQUMsWUFBVSxDQUFDRyxTQUFYLEdBQXVCSCxVQUFVLENBQUNJLFlBQWxDO0FBQ0QsQ0FIRDs7QUFLZXhFLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjEzMzZjYzFiYWJkOTVkNmMxYWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL3BiL2NoYXRTZWN0aW9uJztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGJjb21tb24nO1xyXG5cclxuY29uc3QgYnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ib3JkZXIgdzMtYmx1ZSB3My1ob3Zlci1ibGFjayB3My1yb3VuZCc7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbk5vbmUgPSAwO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25TdGFydCA9IDE7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbkpvaW4gPSAyO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgPSAzO1xyXG5cclxuY29uc3QgTG9iYnkgPSAoe2NsaWVudCwgc2V0SXNyZWpvaW4sIHdzbWVzc2FnZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0UGFydGljaXBhbnRcclxuICAgICwgcmFja3NpemUsIHNldFJhY2tzaXplIC8vIE9wdGlvbiBmb3IgcmFjayBzaXplXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBbZ2FtZWxpc3QsIHNldEdhbWVsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBHYW1lIGluZm8gYnkgZ2FtZSBpZFxyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0xvYmJ5TWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICB9LFtjaGF0bXNnc10pXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzTG9iYnlNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIiAmJiBtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIiAmJiAhbWVzc2FnZURhdGEuZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lICE9PSBuaWNrbmFtZSkge1xyXG4gICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzZW5kZXJnYW1laWQgPSBtZXNzYWdlRGF0YS5nYW1laWQ7XHJcbiAgICAgIGxldCBzZW5kZXJuaWNrbmFtZSA9IG1lc3NhZ2VEYXRhLm5pY2tuYW1lO1xyXG4gICAgICBsZXQgd3QgPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgIGxldCBycyA9IG1lc3NhZ2VEYXRhLnJhY2tzaXplO1xyXG4gICAgICBpZiAoc2VuZGVyZ2FtZWlkICYmIHNlbmRlcmdhbWVpZC5sZW5ndGggPiAwICYmIHJzICYmIHd0ICYmIHd0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYW55VXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzZW5kZXJQRyA9IG1lc3NhZ2VEYXRhLnNlbmRlcjtcclxuICAgICAgICBsZXQgbmV3R2FtZWxpc3QgPSBbLi4uZ2FtZWxpc3RdO1xyXG4gICAgICAgIGxldCBnaSA9IGdldEdhbWVsaXN0SW5kZXgoc2VuZGVyZ2FtZWlkKTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ1AgPSBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdHID0gc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdSYWNrc2l6ZSA9IHJzO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHYW1lIG92ZXJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkd1YXJkcyB0dXJuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZWRhdGEgPSB7XHJcbiAgICAgICAgICBnYW1laWQ6IHNlbmRlcmdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lUDogc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVQIDogXCJcIixcclxuICAgICAgICAgIG5pY2tuYW1lRzogc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0csXHJcbiAgICAgICAgICByYWNrc2l6ZTogbmV3UmFja3NpemVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnJhY2tzaXplICE9PSBuZXdnYW1lZGF0YS5yYWNrc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKGdhbWVsaXN0W2ldLmdhbWVpZCA9PT0gZ2lkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNQbGF5aW5nUChnaWQpIHtcclxuICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgICByZXR1cm4gZ2kgPCAwID8gZmFsc2UgOiBnYW1lbGlzdFtnaV0ucGxheWluZ1A7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgICBpZiAoIWdkLnBsYXlpbmdQKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25TdGFydDsgfVxyXG4gICAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgICAgaWYgKCFnZC5wbGF5aW5nRykgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uSm9pbjsgfVxyXG4gICAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgICAgc2V0UmFja3NpemUobmV3UmFja3NpemUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsIHczLWJhclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLWNlbnRyZSBteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrIExvYmJ5PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHM5IGw4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5BbGwgUGFydGljaXBhbnRzIH48L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+PGI+Tmlja25hbWU6PC9iPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5Qcmlzb25lcnMgfjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48Yj5HYW1lIElEOjwvYj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+PGI+UmFjayBTaXplOjwvYj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU0XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNCA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjQgbGV0dGVyIHJhY2tzLCA5IHggOSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTVcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA1ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNSBsZXR0ZXIgcmFja3MsIDExIHggMTEgYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTZcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA2ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNiBsZXR0ZXIgcmFja3MsIDEzIHggMTMgYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTdcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA3ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNyBsZXR0ZXIgcmFja3MsIDE1IHggMTUgYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidzMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5Q2VsbEJsb2NrSW5mb1wiPntyYWNrc2l6ZX0gbGV0dGVyIHJhY2tzLCB7cmFja3NpemUqMisxfSB4IHtyYWNrc2l6ZSoyKzF9IGJvYXJkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBuaWNrbmFtZSBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGxheWluZ1AoZ2FtZWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJpc29uZXJzIGFscmVhZHkgcGxheWluZyB0aGF0IGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QUklTT05FUlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgR2FtZSBJRCBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPkd1YXJkcyB+PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGgyPkZpbmQgYW5kIGNsaWNrIHRoZSBcIkpvaW4gR2FtZVwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lLjwvaDI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB3My1yaWdodFwiPnJlcG9ydF9wcm9ibGVtPC9pPjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPklmIHlvdSBsb3N0IGNvbm5lY3Rpb24sIGZpbmQgYW5kIGNsaWNrIHRoZSBcIlJlY29ubmVjdFwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lIGlkLjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPjxiPkdhbWUgbGlzdDo8L2I+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUtYWxsIHczLWNhcmQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3My1ibHVlIGg0IG15Q29tbW9uRm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R2FtZSBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlJhY2sgU2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BPdGhlckdhbWUke2luZGV4fWB9IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udCB3My1ob3Zlci1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj48Yj57dmFsdWUuZ2FtZWlkfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1yb3VuZCB3My1ob3Zlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QUklTT05FUlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1N0YXJ0JHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QUklTT05FUlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9HVUFSRFMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX0dVQVJEUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb2luIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BSYWNrU2l6ZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtY2VudGVyIHczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnJhY2tzaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR2FtZVN0YXR1cyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuZ2FtZXN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgczMgbDRcIj5cclxuICAgICAgICAgICAgPENoYXQgY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgICA8aDE+SGF2ZSBmdW4hPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG5jb25zdCBzY3JvbGxUb0JvdHRvbSA9IChlbGVtZW50aWQpID0+IHtcclxuICBjb25zdCB0aGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcclxuICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgICJdLCJzb3VyY2VSb290IjoiIn0=