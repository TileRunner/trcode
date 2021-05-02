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

    if (messageData.func === "chat" && messageData.nickname !== nickname) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvblN0YXJ0IiwiYXZhaWxhYmxlQWN0aW9uSm9pbiIsImF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCIsIkxvYmJ5IiwiY2xpZW50Iiwic2V0SXNyZWpvaW4iLCJ3c21lc3NhZ2UiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwic2V0UGFydGljaXBhbnQiLCJyYWNrc2l6ZSIsInNldFJhY2tzaXplIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsInVzZVN0YXRlIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImZ1bmMiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwic2VuZGVyZ2FtZWlkIiwic2VuZGVybmlja25hbWUiLCJ3dCIsIndob3NldHVybiIsInJzIiwibGVuZ3RoIiwiYW55VXBkYXRlcyIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJnaSIsImdldEdhbWVsaXN0SW5kZXgiLCJuZXdQbGF5aW5nUCIsImMiLCJwbGF5aW5nUCIsIm5ld1BsYXlpbmdHIiwicGxheWluZ0ciLCJuZXdSYWNrc2l6ZSIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsImdpZCIsImkiLCJpc1BsYXlpbmdQIiwiYXZhaWxhYmxlQWN0aW9uUCIsImdkIiwiYXZhaWxhYmxlQWN0aW9uRyIsInNlbGVjdFJhY2tTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2luZG93IiwiYWxlcnQiLCJtYXAiLCJpbmRleCIsImVsZW1lbnRpZCIsInRoZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxxREFBeEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUE1QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLENBQTdCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBNUI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxDQUFqQzs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFDQyxRQUFEO0FBQVNDLGFBQVQ7QUFBc0JDLFdBQXRCO0FBQWlDQyxRQUFqQztBQUF5Q0MsV0FBekM7QUFBb0RDLFVBQXBEO0FBQThEQyxhQUE5RDtBQUEyRUMsZ0JBQTNFO0FBQ1RDLFVBRFM7QUFDQ0MsYUFERCxDQUNhOztBQURiLENBQUQsS0FFSjtBQUFBOztBQUNOLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBRE0sQ0FDdUM7O0FBQzdDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLEdBQUcsR0FBR2QsU0FBVjtBQUNBLFFBQUljLEdBQUcsS0FBSyxFQUFaLEVBQWdCQyxtQkFBbUIsQ0FBQ0QsR0FBRCxDQUFuQjtBQUNqQixHQUhRLEVBR1AsQ0FBQ2QsU0FBRCxDQUhPLENBQVQ7QUFJQWEseURBQVMsQ0FBQyxNQUFNO0FBQ2RHLGtCQUFjLENBQUMsZ0JBQUQsQ0FBZDtBQUNELEdBRlEsRUFFUCxDQUFDTCxRQUFELENBRk8sQ0FBVDs7QUFJQSxXQUFTSSxtQkFBVCxDQUE2QkUsT0FBN0Is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QUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzTUYsZUE4TUU7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOU1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb05ELENBelRIOztHQUFNZixLOztLQUFBQSxLOztBQTJUTixNQUFNbUIsY0FBYyxHQUFJK0MsU0FBRCxJQUFlO0FBQ3BDLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNHLFNBQVgsR0FBdUJILFVBQVUsQ0FBQ0ksWUFBbEM7QUFDRCxDQUhEOztBQUtldkUsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuNDExODg5OGMxYmQ0MmZlNTI0NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYmNvbnN0YW50cyc7XHJcblxyXG5jb25zdCBidXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWJvcmRlciB3My1ibHVlIHczLWhvdmVyLWJsYWNrIHczLXJvdW5kJztcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uTm9uZSA9IDA7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblN0YXJ0ID0gMTtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uSm9pbiA9IDI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA9IDM7XHJcblxyXG5jb25zdCBMb2JieSA9ICh7Y2xpZW50LCBzZXRJc3Jlam9pbiwgd3NtZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRQYXJ0aWNpcGFudFxyXG4gICAgLCByYWNrc2l6ZSwgc2V0UmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pIC8vIEdhbWUgaW5mbyBieSBnYW1lIGlkXHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEubmlja25hbWUgIT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNlbmRlcmdhbWVpZCA9IG1lc3NhZ2VEYXRhLmdhbWVpZDtcclxuICAgICAgbGV0IHNlbmRlcm5pY2tuYW1lID0gbWVzc2FnZURhdGEubmlja25hbWU7XHJcbiAgICAgIGxldCB3dCA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgbGV0IHJzID0gbWVzc2FnZURhdGEucmFja3NpemU7XHJcbiAgICAgIGlmIChzZW5kZXJnYW1laWQgJiYgc2VuZGVyZ2FtZWlkLmxlbmd0aCA+IDAgJiYgcnMgJiYgd3QgJiYgd3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhbnlVcGRhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlbmRlclBHID0gbWVzc2FnZURhdGEuc2VuZGVyO1xyXG4gICAgICAgIGxldCBuZXdHYW1lbGlzdCA9IFsuLi5nYW1lbGlzdF07XHJcbiAgICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChzZW5kZXJnYW1laWQpO1xyXG4gICAgICAgIGxldCBuZXdQbGF5aW5nUCA9IHNlbmRlclBHID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdHIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1JhY2tzaXplID0gcnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lc3RhdHVzID0gXCJVbmtub3duXCI7XHJcbiAgICAgICAgaWYgKHd0ID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIlByaXNvbmVycyB0dXJuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUykge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiR3VhcmRzIHR1cm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lZGF0YSA9IHtcclxuICAgICAgICAgIGdhbWVpZDogc2VuZGVyZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWVQOiBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZUcgOiBcIlwiLFxyXG4gICAgICAgICAgZ2FtZXN0YXR1czogbmV3Z2FtZXN0YXR1cyxcclxuICAgICAgICAgIHBsYXlpbmdQOiBuZXdQbGF5aW5nUCxcclxuICAgICAgICAgIHBsYXlpbmdHOiBuZXdQbGF5aW5nRyxcclxuICAgICAgICAgIHJhY2tzaXplOiBuZXdSYWNrc2l6ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2kgPCAwKSB7IC8vIEdhbWUgbm90IGluIGxpc3QgeWV0LCBwdXQgaXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3QgPSBbLi4ubmV3R2FtZWxpc3QsIG5ld2dhbWVkYXRhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vIEdhbWUgaXMgaW4gdGhlIGxpc3QsIGNoZWNrIGZvciBuZWVkZWQgdXBkYXRlc1xyXG4gICAgICAgICAgbGV0IG9sZGdhbWVkYXRhID0gZ2FtZWxpc3RbZ2ldO1xyXG4gICAgICAgICAgaWYgKG9sZGdhbWVkYXRhLm5pY2tuYW1lUCAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEubmlja25hbWVHICE9PSBuZXdnYW1lZGF0YS5uaWNrbmFtZUcgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5nYW1lc3RhdHVzICE9PSBuZXdnYW1lZGF0YS5nYW1lc3RhdHVzIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ1AgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ0cgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucmFja3NpemUgIT09IG5ld2dhbWVkYXRhLnJhY2tzaXplXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG5ld0dhbWVsaXN0W2dpXSA9IG5ld2dhbWVkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbnlVcGRhdGVzKSB7XHJcbiAgICAgICAgICBzZXRHYW1lbGlzdChuZXdHYW1lbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEdhbWVsaXN0SW5kZXgoZ2lkKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZWxpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KGdpZCk7XHJcbiAgICAgIHJldHVybiBnaSA8IDAgPyBmYWxzZSA6IGdhbWVsaXN0W2dpXS5wbGF5aW5nUDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvblAoZ2QpIHtcclxuICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICAgIGlmIChnZC5uaWNrbmFtZVAgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25HKGdkKSB7XHJcbiAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICAgIGlmIChnZC5uaWNrbmFtZUcgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3RSYWNrU2l6ZShuZXdSYWNrc2l6ZSkge1xyXG4gICAgICBzZXRSYWNrc2l6ZShuZXdSYWNrc2l6ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWwgdzMtYmFyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtY2VudHJlIG15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWsgTG9iYnk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1yaWdodFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxoMj48Yj5OaWNrbmFtZTo8L2I+PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPlBSSVNPTkVSUzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgyPjxiPkdhbWUgSUQ6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj48Yj5SYWNrIFNpemU6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNFwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDQgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNCBsZXR0ZXIgcmFja3MsIDkgeCA5IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTVcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA1ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg1KX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjUgbGV0dGVyIHJhY2tzLCAxMSB4IDExIGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTZcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA2ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg2KX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjYgbGV0dGVyIHJhY2tzLCAxMyB4IDEzIGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTdcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA3ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg3KX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjcgbGV0dGVyIHJhY2tzLCAxNSB4IDE1IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTG9iYnlDZWxsQmxvY2tJbmZvXCI+e3JhY2tzaXplfSBsZXR0ZXIgcmFja3MsIHtyYWNrc2l6ZSoyKzF9IHgge3JhY2tzaXplKjIrMX0gYm9hcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIG5pY2tuYW1lIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1BsYXlpbmdQKGdhbWVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcmlzb25lcnMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUFJJU09ORVJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIEdhbWUgSUQgYmVmb3JlIHN0YXJ0aW5nIGEgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5HVUFSRFM8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPjwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPjxoMj5GaW5kIGFuZCBjbGljayB0aGUgXCJKb2luIEdhbWVcIiBidXR0b24gZm9yIHlvdXIgZ2FtZS48L2gyPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHczLXJpZ2h0XCI+cmVwb3J0X3Byb2JsZW08L2k+PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+SWYgeW91IGxvc3QgY29ubmVjdGlvbiwgZmluZCBhbmQgY2xpY2sgdGhlIFwiUmVjb25uZWN0XCIgYnV0dG9uIGZvciB5b3VyIGdhbWUgaWQuPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPjxiPkdhbWUgbGlzdDo8L2I+PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUtYWxsIHczLWNhcmQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsdWUgaDQgbXlDb21tb25Gb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R2FtZSBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+UHJpc29uZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlJhY2sgU2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+R2FtZSBTdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BPdGhlckdhbWUke2luZGV4fWB9IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udCB3My1ob3Zlci1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+PGI+e3ZhbHVlLmdhbWVpZH08L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uUCh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1yb3VuZCB3My1ob3Zlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUFJJU09ORVJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1N0YXJ0JHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUFJJU09ORVJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfR1VBUkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9HVUFSRFMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BSYWNrU2l6ZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtY2VudGVyIHczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5yYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR2FtZVN0YXR1cyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmdhbWVzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsXCI+XHJcbiAgICAgICAgICA8Q2hhdCBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgICA8aDE+SGF2ZSBmdW4hPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG5jb25zdCBzY3JvbGxUb0JvdHRvbSA9IChlbGVtZW50aWQpID0+IHtcclxuICBjb25zdCB0aGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcclxuICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgICJdLCJzb3VyY2VSb290IjoiIn0=