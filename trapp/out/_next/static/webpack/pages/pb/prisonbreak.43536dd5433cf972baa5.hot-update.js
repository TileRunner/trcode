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
        className: "w3-col s9 m9 l8",
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
        className: "w3-col s3 m3 l4",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvblN0YXJ0IiwiYXZhaWxhYmxlQWN0aW9uSm9pbiIsImF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCIsIkxvYmJ5IiwiY2xpZW50Iiwic2V0SXNyZWpvaW4iLCJ3c21lc3NhZ2UiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwic2V0UGFydGljaXBhbnQiLCJyYWNrc2l6ZSIsInNldFJhY2tzaXplIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsInVzZVN0YXRlIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJmdW5jIiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsInNlbmRlcmdhbWVpZCIsInNlbmRlcm5pY2tuYW1lIiwid3QiLCJ3aG9zZXR1cm4iLCJycyIsImxlbmd0aCIsImFueVVwZGF0ZXMiLCJzZW5kZXJQRyIsInNlbmRlciIsIm5ld0dhbWVsaXN0IiwiZ2kiLCJnZXRHYW1lbGlzdEluZGV4IiwibmV3UGxheWluZ1AiLCJjIiwicGxheWluZ1AiLCJuZXdQbGF5aW5nRyIsInBsYXlpbmdHIiwibmV3UmFja3NpemUiLCJuZXdnYW1lc3RhdHVzIiwibmV3Z2FtZWRhdGEiLCJuaWNrbmFtZVAiLCJuaWNrbmFtZUciLCJnYW1lc3RhdHVzIiwib2xkZ2FtZWRhdGEiLCJnaWQiLCJpIiwiaXNQbGF5aW5nUCIsImF2YWlsYWJsZUFjdGlvblAiLCJnZCIsImF2YWlsYWJsZUFjdGlvbkciLCJzZWxlY3RSYWNrU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpbmRvdyIsImFsZXJ0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50aWQiLCJ0aGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUcscURBQXhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBNUI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUE3QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLENBQTVCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsQ0FBakM7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxhQUFUO0FBQXNCQyxXQUF0QjtBQUFpQ0MsUUFBakM7QUFBeUNDLFdBQXpDO0FBQW9EQyxVQUFwRDtBQUE4REMsYUFBOUQ7QUFBMkVDLGdCQUEzRTtBQUNUQyxVQURTO0FBQ0NDLGFBREQsQ0FDYTs7QUFEYixDQUFELEtBRUo7QUFBQTs7QUFDTixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QyxDQURNLENBQ3VDOztBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxHQUFHLEdBQUdkLFNBQVY7QUFDQSxRQUFJYyxHQUFHLEtBQUssRUFBWixFQUFnQkMsbUJBQW1CLENBQUNELEdBQUQsQ0FBbkI7QUFDakIsR0FIUSxFQUdQLENBQUNkLFNBQUQsQ0FITyxDQUFUO0FBSUFhLHlEQUFTLENBQUMsTUFBTTtBQUNkRyxrQkFBYyxDQUFDLGdCQUFELENBQWQ7QUFDRCxHQUZRLEVBRVAsQ0FBQ0wsUUFBRCxDQUZPLENBQVQ7O0FBSUEsV0FBU0ksbUJBQVQsQ0FBNkJF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QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUEwTUU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFBTSxnQkFBTSxFQUFFakUsTUFBZDtBQUFzQixrQkFBUSxFQUFFSyxRQUFoQztBQUEwQyxjQUFJLEVBQUVRLFFBQWhEO0FBQTBELGlCQUFPLEVBQUVDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUF1TkU7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdk5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNk5ELENBbFVIOztHQUFNZixLOztLQUFBQSxLOztBQW9VTixNQUFNbUIsY0FBYyxHQUFJZ0QsU0FBRCxJQUFlO0FBQ3BDLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNHLFNBQVgsR0FBdUJILFVBQVUsQ0FBQ0ksWUFBbEM7QUFDRCxDQUhEOztBQUtleEUsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuNDM1MzZkZDU0MzNjZjk3MmJhYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYmNvbW1vbic7XHJcblxyXG5jb25zdCBidXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWJvcmRlciB3My1ibHVlIHczLWhvdmVyLWJsYWNrIHczLXJvdW5kJztcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uTm9uZSA9IDA7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblN0YXJ0ID0gMTtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uSm9pbiA9IDI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA9IDM7XHJcblxyXG5jb25zdCBMb2JieSA9ICh7Y2xpZW50LCBzZXRJc3Jlam9pbiwgd3NtZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRQYXJ0aWNpcGFudFxyXG4gICAgLCByYWNrc2l6ZSwgc2V0UmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pIC8vIEdhbWUgaW5mbyBieSBnYW1lIGlkXHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiICYmIG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiICYmICFtZXNzYWdlRGF0YS5nYW1laWQgJiYgbWVzc2FnZURhdGEubmlja25hbWUgIT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNlbmRlcmdhbWVpZCA9IG1lc3NhZ2VEYXRhLmdhbWVpZDtcclxuICAgICAgbGV0IHNlbmRlcm5pY2tuYW1lID0gbWVzc2FnZURhdGEubmlja25hbWU7XHJcbiAgICAgIGxldCB3dCA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgbGV0IHJzID0gbWVzc2FnZURhdGEucmFja3NpemU7XHJcbiAgICAgIGlmIChzZW5kZXJnYW1laWQgJiYgc2VuZGVyZ2FtZWlkLmxlbmd0aCA+IDAgJiYgcnMgJiYgd3QgJiYgd3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhbnlVcGRhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlbmRlclBHID0gbWVzc2FnZURhdGEuc2VuZGVyO1xyXG4gICAgICAgIGxldCBuZXdHYW1lbGlzdCA9IFsuLi5nYW1lbGlzdF07XHJcbiAgICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChzZW5kZXJnYW1laWQpO1xyXG4gICAgICAgIGxldCBuZXdQbGF5aW5nUCA9IHNlbmRlclBHID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdHIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1JhY2tzaXplID0gcnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lc3RhdHVzID0gXCJVbmtub3duXCI7XHJcbiAgICAgICAgaWYgKHd0ID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIlByaXNvbmVycyB0dXJuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUykge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiR3VhcmRzIHR1cm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lZGF0YSA9IHtcclxuICAgICAgICAgIGdhbWVpZDogc2VuZGVyZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWVQOiBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZUcgOiBcIlwiLFxyXG4gICAgICAgICAgZ2FtZXN0YXR1czogbmV3Z2FtZXN0YXR1cyxcclxuICAgICAgICAgIHBsYXlpbmdQOiBuZXdQbGF5aW5nUCxcclxuICAgICAgICAgIHBsYXlpbmdHOiBuZXdQbGF5aW5nRyxcclxuICAgICAgICAgIHJhY2tzaXplOiBuZXdSYWNrc2l6ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2kgPCAwKSB7IC8vIEdhbWUgbm90IGluIGxpc3QgeWV0LCBwdXQgaXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3QgPSBbLi4ubmV3R2FtZWxpc3QsIG5ld2dhbWVkYXRhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vIEdhbWUgaXMgaW4gdGhlIGxpc3QsIGNoZWNrIGZvciBuZWVkZWQgdXBkYXRlc1xyXG4gICAgICAgICAgbGV0IG9sZGdhbWVkYXRhID0gZ2FtZWxpc3RbZ2ldO1xyXG4gICAgICAgICAgaWYgKG9sZGdhbWVkYXRhLm5pY2tuYW1lUCAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEubmlja25hbWVHICE9PSBuZXdnYW1lZGF0YS5uaWNrbmFtZUcgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5nYW1lc3RhdHVzICE9PSBuZXdnYW1lZGF0YS5nYW1lc3RhdHVzIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ1AgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ0cgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucmFja3NpemUgIT09IG5ld2dhbWVkYXRhLnJhY2tzaXplXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG5ld0dhbWVsaXN0W2dpXSA9IG5ld2dhbWVkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbnlVcGRhdGVzKSB7XHJcbiAgICAgICAgICBzZXRHYW1lbGlzdChuZXdHYW1lbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEdhbWVsaXN0SW5kZXgoZ2lkKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZWxpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KGdpZCk7XHJcbiAgICAgIHJldHVybiBnaSA8IDAgPyBmYWxzZSA6IGdhbWVsaXN0W2dpXS5wbGF5aW5nUDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvblAoZ2QpIHtcclxuICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICAgIGlmIChnZC5uaWNrbmFtZVAgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25HKGdkKSB7XHJcbiAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICAgIGlmIChnZC5uaWNrbmFtZUcgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3RSYWNrU2l6ZShuZXdSYWNrc2l6ZSkge1xyXG4gICAgICBzZXRSYWNrc2l6ZShuZXdSYWNrc2l6ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWwgdzMtYmFyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtY2VudHJlIG15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWsgTG9iYnk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1yaWdodFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgczkgbTkgbDhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPkFsbCBQYXJ0aWNpcGFudHMgfjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz48Yj5OaWNrbmFtZTo8L2I+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPlByaXNvbmVycyB+PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxiPkdhbWUgSUQ6PC9iPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48Yj5SYWNrIFNpemU6PC9iPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTRcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA0ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNCBsZXR0ZXIgcmFja3MsIDkgeCA5IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNVwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDUgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg1KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI1IGxldHRlciByYWNrcywgMTEgeCAxMSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNlwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDYgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI2IGxldHRlciByYWNrcywgMTMgeCAxMyBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplN1wiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDcgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg3KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI3IGxldHRlciByYWNrcywgMTUgeCAxNSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3My1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTG9iYnlDZWxsQmxvY2tJbmZvXCI+e3JhY2tzaXplfSBsZXR0ZXIgcmFja3MsIHtyYWNrc2l6ZSoyKzF9IHgge3JhY2tzaXplKjIrMX0gYm9hcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIG5pY2tuYW1lIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQbGF5aW5nUChnYW1laWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcmlzb25lcnMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBHYW1lIElEIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+R3VhcmRzIH48L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj48aDI+RmluZCBhbmQgY2xpY2sgdGhlIFwiSm9pbiBHYW1lXCIgYnV0dG9uIGZvciB5b3VyIGdhbWUuPC9oMj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHczLXJpZ2h0XCI+cmVwb3J0X3Byb2JsZW08L2k+PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+SWYgeW91IGxvc3QgY29ubmVjdGlvbiwgZmluZCBhbmQgY2xpY2sgdGhlIFwiUmVjb25uZWN0XCIgYnV0dG9uIGZvciB5b3VyIGdhbWUgaWQuPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGI+R2FtZSBsaXN0OjwvYj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZS1hbGwgdzMtY2FyZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsdWUgaDQgbXlDb21tb25Gb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+UmFjayBTaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibXlDb21tb25Gb250IHczLWhvdmVyLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPjxiPnt2YWx1ZS5nYW1laWR9PC9iPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc05vQWN0aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkIHczLXJvdW5kIHczLWhvdmVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzU3RhcnQke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc05vQWN0aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX0dVQVJEUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzSm9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfR1VBUkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFJhY2tTaXplJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHYW1lU3RhdHVzJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCBzMyBtMyBsNFwiPlxyXG4gICAgICAgICAgICA8Q2hhdCBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWxcIj5cclxuICAgICAgICAgIDxoMT5IYXZlIGZ1biE8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbmNvbnN0IHNjcm9sbFRvQm90dG9tID0gKGVsZW1lbnRpZCkgPT4ge1xyXG4gIGNvbnN0IHRoZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50aWQpO1xyXG4gIHRoZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5OyAgIl0sInNvdXJjZVJvb3QiOiIifQ==