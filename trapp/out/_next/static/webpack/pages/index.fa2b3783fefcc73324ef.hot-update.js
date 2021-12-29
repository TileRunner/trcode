self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/pb/lobby.js":
/*!***************************!*\
  !*** ./pages/pb/lobby.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\lobby.js",
    _s = $RefreshSig$();






const buttonClassName = 'w3-button w3-border w3-blue w3-hover-black w3-round'; // There is no availableActionStart because there is a specific Start button in the Prisoners row

const availableActionNone = 0;
const availableActionJoin = 1;
const availableActionReconnect = 2;
const availableActionObserve = 3;
const availableActionExamine = 4;

const Lobby = ({
  setWhereto,
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Game info by game id

  const {
    0: chatmsgs,
    1: setChatmsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_5__.scrollToBottom)("ScrollableChat");
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

    if (messageData.type === "pb" && messageData.func === "gamelist") {
      // Accept the game list from the server
      let newGamelist = [];
      messageData.gamelist.forEach(element => {
        let newGameObject = {
          gameid: element.gameid,
          pname: element.pname,
          gname: element.gname,
          gamestatus: element.whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.WHOSE_TURN_GAMEOVER ? "Game over" : "Unfinished",
          racksize: element.racksize
        };
        newGamelist.push(newGameObject);
      });
      setGamelist([...newGamelist]);
      return;
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

  function gameAlreadyStarted(gid) {
    let gi = getGamelistIndex(gid);
    return gi > -1;
  }

  function availableActionP(gd) {
    if (nickname.length === 0) {
      return availableActionNone;
    } // No particpation without nickname


    if (gd.pname === nickname) {
      return availableActionReconnect;
    } // Allow reconnect if nickname matches


    if (gd.gname) {
      return availableActionObserve;
    } // If guards have joined allow observe


    return availableActionNone; // Guards have not joined to allow observe, not my game to allow reconnect
  }

  function availableActionG(gd) {
    if (nickname.length === 0) {
      return availableActionNone;
    } // No particpation without nickname


    if (gd.gname === nickname) {
      return availableActionReconnect;
    } // Allow reconnect if nickname matches


    if (!gd.gname) {
      return availableActionJoin;
    } // Allow join if guards have not joined


    if (gd.gamestatus === 'Game over') {
      return availableActionExamine;
    } // Allow examine if game over


    return availableActionNone; // The observe option is in the prisoners column
  }

  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "w3-bar-item trTitle",
        children: "Prison Break Lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-bar-item w3-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
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
            lineNumber: 87,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-col s9",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "trEmphasis",
                  children: "All Participants ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Nickname:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "w3-input w3-border w3-blue myCommonFont",
                type: "text",
                name: "nickname",
                value: nickname,
                onChange: e => {
                  setNickname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "pbPlayerTitle",
                  children: "Prisoners ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Game ID:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "w3-input w3-border w3-blue myCommonFont",
                type: "text",
                name: "gameid",
                value: gameid,
                onChange: e => {
                  setGameid(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Rack Size:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w3-row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  id: "selectracksize4",
                  className: racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(4),
                  "data-toggle": "tooltip",
                  title: "4 letter racks, 9 x 9 board",
                  autoFocus: true,
                  children: "4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  id: "selectracksize5",
                  className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(5),
                  "data-toggle": "tooltip",
                  title: "5 letter racks, 11 x 11 board",
                  children: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  id: "selectracksize6",
                  className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(6),
                  "data-toggle": "tooltip",
                  title: "6 letter racks, 13 x 13 board",
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  id: "selectracksize7",
                  className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
                  onClick: () => selectRackSize(7),
                  "data-toggle": "tooltip",
                  title: "7 letter racks, 15 x 15 board",
                  children: "7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w3-row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "pbLobbyCellBlockInfo",
                  children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                id: "startgame",
                className: buttonClassName,
                onClick: function () {
                  if (nickname.length === 0) {
                    window.alert("Please enter nickname before starting a game");
                  } else if (gameid.length > 0) {
                    if (gameAlreadyStarted(gameid)) {
                      window.alert("Game already started with that id");
                    } else {
                      setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_PRISONERS);
                    }
                  } else {
                    window.alert("Please enter Game ID before starting a game");
                  }
                },
                children: "Start Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "pbPlayerTitle",
                  children: "Guards ~"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "myCommonFont",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "Find and click the \"Join Game\" button for your game."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 50
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "trWarning",
                children: "If you lost connection, find and click the \"Reconnect\" button for your nickname."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "myCommonFont",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Game list:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 48
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w3-bar-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
                className: "w3-table-all w3-card-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                    className: "w3-blue h4 myCommonFont",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      className: "w3-border-right",
                      children: "Game ID"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      className: "w3-border-right",
                      children: "Prisoners"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      className: "w3-border-right",
                      children: "Guards"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      className: "w3-border-right",
                      children: "Rack Size"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      children: "Game Status"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                      className: "w3-border-left",
                      children: "Delete"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                  children: gamelist.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                    className: "myCommonFont w3-grey w3-hover-green",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                        children: value.gameid
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 59
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 27
                    }, undefined), availableActionP(value) === availableActionReconnect ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `PrisonersRejoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: "w3-button w3-red w3-round w3-hover-black",
                        onClick: function () {
                          setIsrejoin(true);
                          setGameid(value.gameid);
                          setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_PRISONERS);
                          setRacksize(value.racksize);
                        },
                        children: "Reconnect"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 29
                    }, undefined) : availableActionP(value) === availableActionObserve ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `PrisonersObserve${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: "w3-button w3-yellow w3-round w3-hover-black",
                        onClick: function () {
                          setIsrejoin(false);
                          setGameid(value.gameid);
                          setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_OBSERVER);
                          setRacksize(value.racksize);
                        },
                        children: "Observe"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 29
                    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `PrisonersNoAction${index}`,
                      className: "w3-border-right",
                      children: "No action available"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 29
                    }, undefined), availableActionG(value) === availableActionReconnect ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `GuardsRejoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: "w3-button w3-red w3-round w3-hover-black",
                        onClick: function () {
                          setIsrejoin(true);
                          setGameid(value.gameid);
                          setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_GUARDS);
                          setRacksize(value.racksize);
                        },
                        children: "Reconnect"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 253,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 29
                    }, undefined) : availableActionG(value) === availableActionJoin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `GuardsJoin${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: buttonClassName,
                        onClick: function () {
                          setGameid(value.gameid);
                          setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_GUARDS);
                          setRacksize(value.racksize);
                        },
                        children: "Join Game"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 29
                    }, undefined) : availableActionG(value) === availableActionExamine ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `GuardsExamine${index}`,
                      className: "w3-border-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: buttonClassName,
                        onClick: function () {
                          setGameid(value.gameid);
                          setParticipant(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_4__.PARTY_TYPE_EXAMINER);
                          setRacksize(value.racksize);
                        },
                        children: "Examine Game"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 29
                    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `GuardsNoAction${index}`,
                      className: "w3-border-right",
                      children: "No action available"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `RackSize${index}`,
                      className: "w3-center w3-border-right",
                      children: value.racksize
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `GameStatus${index}`,
                      children: value.gamestatus
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      id: `DeleteGame${index}`,
                      className: "w3-border-left",
                      children: (nickname === "TileRunner" || nickname === value.pname || nickname === value.gname) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: "w3-button w3-red w3-border w3-round w3-hover-black",
                        onClick: function () {
                          client.send({
                            type: "pb",
                            func: "deletegame",
                            gameid: value.gameid // Game id

                          });
                        },
                        children: "Delete Game"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 27
                    }, undefined)]
                  }, `OtherGame${index}`, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 25
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-col s3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_3__.default, {
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 7
  }, undefined);
};

_s(Lobby, "zseng7CV3m9Wt0DcQEV601TG+Fw=");

_c = Lobby;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvbkpvaW4iLCJhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QiLCJhdmFpbGFibGVBY3Rpb25PYnNlcnZlIiwiYXZhaWxhYmxlQWN0aW9uRXhhbWluZSIsIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInNldElzcmVqb2luIiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibmlja25hbWUiLCJzZXROaWNrbmFtZSIsInNldFBhcnRpY2lwYW50IiwicmFja3NpemUiLCJzZXRSYWNrc2l6ZSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJ1c2VTdGF0ZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwiZnVuYyIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJuZXdHYW1lbGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwibmV3R2FtZU9iamVjdCIsInBuYW1lIiwiZ25hbWUiLCJnYW1lc3RhdHVzIiwid2hvc2V0dXJuIiwiYyIsInB1c2giLCJnZXRHYW1lbGlzdEluZGV4IiwiZ2lkIiwiaSIsImxlbmd0aCIsImdhbWVBbHJlYWR5U3RhcnRlZCIsImdpIiwiYXZhaWxhYmxlQWN0aW9uUCIsImdkIiwiYXZhaWxhYmxlQWN0aW9uRyIsInNlbGVjdFJhY2tTaXplIiwibmV3UmFja3NpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJhbGVydCIsIm1hcCIsImluZGV4Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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O0FBT0QseUJBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQTdFRjtBQUFBLHFCQUFVLFlBQVdvRCxLQUFNLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBdU9FO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFBTSxnQkFBTSxFQUFFdkQsTUFBZDtBQUFzQixrQkFBUSxFQUFFSyxRQUFoQztBQUEwQyxjQUFJLEVBQUVRLFFBQWhEO0FBQTBELGlCQUFPLEVBQUVDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZPRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFvUEU7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcFBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMFBELENBNVRIOztHQUFNaEIsSzs7S0FBQUEsSztBQThUTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTJiMzc4M2ZlZmNjNzMzMjRlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcblxyXG5jb25zdCBidXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWJvcmRlciB3My1ibHVlIHczLWhvdmVyLWJsYWNrIHczLXJvdW5kJztcclxuLy8gVGhlcmUgaXMgbm8gYXZhaWxhYmxlQWN0aW9uU3RhcnQgYmVjYXVzZSB0aGVyZSBpcyBhIHNwZWNpZmljIFN0YXJ0IGJ1dHRvbiBpbiB0aGUgUHJpc29uZXJzIHJvd1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Ob25lID0gMDtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uSm9pbiA9IDE7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA9IDI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbk9ic2VydmUgPSAzO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25FeGFtaW5lID0gNDtcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHNldElzcmVqb2luLCB3c21lc3NhZ2UsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldFBhcnRpY2lwYW50XHJcbiAgICAsIHJhY2tzaXplLCBzZXRSYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gR2FtZSBpbmZvIGJ5IGdhbWUgaWRcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIgJiYgbWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgIW1lc3NhZ2VEYXRhLmdhbWVpZCAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZSAhPT0gbmlja25hbWUpIHtcclxuICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiICYmIG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZ2FtZWxpc3RcIikge1xyXG4gICAgICAgIC8vIEFjY2VwdCB0aGUgZ2FtZSBsaXN0IGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgIGxldCBuZXdHYW1lbGlzdCA9IFtdO1xyXG4gICAgICAgIG1lc3NhZ2VEYXRhLmdhbWVsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBsZXQgbmV3R2FtZU9iamVjdCA9IHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBlbGVtZW50LmdhbWVpZCxcclxuICAgICAgICAgICAgcG5hbWU6IGVsZW1lbnQucG5hbWUsXHJcbiAgICAgICAgICAgIGduYW1lOiBlbGVtZW50LmduYW1lLFxyXG4gICAgICAgICAgICBnYW1lc3RhdHVzOiBlbGVtZW50Lndob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSID8gXCJHYW1lIG92ZXJcIiA6IFwiVW5maW5pc2hlZFwiLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogZWxlbWVudC5yYWNrc2l6ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0LnB1c2gobmV3R2FtZU9iamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0R2FtZWxpc3QoWy4uLm5ld0dhbWVsaXN0XSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKGdhbWVsaXN0W2ldLmdhbWVpZCA9PT0gZ2lkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2FtZUFscmVhZHlTdGFydGVkKGdpZCkge1xyXG4gICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KGdpZCk7XHJcbiAgICAgIHJldHVybiBnaSA+IC0xO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uUChnZCkge1xyXG4gICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9IC8vIE5vIHBhcnRpY3BhdGlvbiB3aXRob3V0IG5pY2tuYW1lXHJcbiAgICAgIGlmIChnZC5wbmFtZSA9PT0gbmlja25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdDsgfSAvLyBBbGxvdyByZWNvbm5lY3QgaWYgbmlja25hbWUgbWF0Y2hlc1xyXG4gICAgICBpZiAoZ2QuZ25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk9ic2VydmU7IH0gLy8gSWYgZ3VhcmRzIGhhdmUgam9pbmVkIGFsbG93IG9ic2VydmVcclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IC8vIEd1YXJkcyBoYXZlIG5vdCBqb2luZWQgdG8gYWxsb3cgb2JzZXJ2ZSwgbm90IG15IGdhbWUgdG8gYWxsb3cgcmVjb25uZWN0XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25HKGdkKSB7XHJcbiAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH0gLy8gTm8gcGFydGljcGF0aW9uIHdpdGhvdXQgbmlja25hbWVcclxuICAgICAgaWYgKGdkLmduYW1lID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9IC8vIEFsbG93IHJlY29ubmVjdCBpZiBuaWNrbmFtZSBtYXRjaGVzXHJcbiAgICAgIGlmICghZ2QuZ25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbkpvaW47IH0gLy8gQWxsb3cgam9pbiBpZiBndWFyZHMgaGF2ZSBub3Qgam9pbmVkXHJcbiAgICAgIGlmIChnZC5nYW1lc3RhdHVzID09PSAnR2FtZSBvdmVyJykgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uRXhhbWluZTsgfSAvLyBBbGxvdyBleGFtaW5lIGlmIGdhbWUgb3ZlclxyXG4gICAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgLy8gVGhlIG9ic2VydmUgb3B0aW9uIGlzIGluIHRoZSBwcmlzb25lcnMgY29sdW1uXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3RSYWNrU2l6ZShuZXdSYWNrc2l6ZSkge1xyXG4gICAgICBzZXRSYWNrc2l6ZShuZXdSYWNrc2l6ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWJhclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHRyVGl0bGVcIj5Qcmlzb24gQnJlYWsgTG9iYnk8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgczlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkFsbCBQYXJ0aWNpcGFudHMgfjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz48Yj5OaWNrbmFtZTo8L2I+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPlByaXNvbmVycyB+PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxiPkdhbWUgSUQ6PC9iPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48Yj5SYWNrIFNpemU6PC9iPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTRcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA0ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNCBsZXR0ZXIgcmFja3MsIDkgeCA5IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNVwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDUgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg1KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI1IGxldHRlciByYWNrcywgMTEgeCAxMSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNlwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDYgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI2IGxldHRlciByYWNrcywgMTMgeCAxMyBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplN1wiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDcgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg3KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI3IGxldHRlciByYWNrcywgMTUgeCAxNSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5Q2VsbEJsb2NrSW5mb1wiPntyYWNrc2l6ZX0gbGV0dGVyIHJhY2tzLCB7cmFja3NpemUqMisxfSB4IHtyYWNrc2l6ZSoyKzF9IGJvYXJkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBuaWNrbmFtZSBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVBbHJlYWR5U3RhcnRlZChnYW1laWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJHYW1lIGFscmVhZHkgc3RhcnRlZCB3aXRoIHRoYXQgaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QUklTT05FUlMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgR2FtZSBJRCBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPkd1YXJkcyB+PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGgyPkZpbmQgYW5kIGNsaWNrIHRoZSBcIkpvaW4gR2FtZVwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lLjwvaDI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cldhcm5pbmdcIj5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCBjbGljayB0aGUgXCJSZWNvbm5lY3RcIiBidXR0b24gZm9yIHlvdXIgbmlja25hbWUuPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGI+R2FtZSBsaXN0OjwvYj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZS1hbGwgdzMtY2FyZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsdWUgaDQgbXlDb21tb25Gb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+UmFjayBTaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1sZWZ0XCI+RGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibXlDb21tb25Gb250IHczLWdyZXkgdzMtaG92ZXItZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+PGI+e3ZhbHVlLmdhbWVpZH08L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uUCh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNSZWpvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWQgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUFJJU09ORVJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25PYnNlcnZlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc09ic2VydmUke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My15ZWxsb3cgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX09CU0VSVkVSKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ic2VydmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc05vQWN0aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkIHczLXJvdW5kIHczLWhvdmVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX0dVQVJEUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbkpvaW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzSm9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfR1VBUkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uRXhhbWluZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNFeGFtaW5lJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9FWEFNSU5FUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGFtaW5lIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFJhY2tTaXplJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHYW1lU3RhdHVzJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgRGVsZXRlR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobmlja25hbWUgPT09IFwiVGlsZVJ1bm5lclwiIHx8IG5pY2tuYW1lID09PSB2YWx1ZS5wbmFtZSB8fCBuaWNrbmFtZSA9PT0gdmFsdWUuZ25hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1ib3JkZXIgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogXCJkZWxldGVnYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiB2YWx1ZS5nYW1laWQgLy8gR2FtZSBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHMzXCI+XHJcbiAgICAgICAgICAgIDxDaGF0IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTG9iYnk7ICAiXSwic291cmNlUm9vdCI6IiJ9