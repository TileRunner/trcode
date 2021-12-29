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






const buttonClassName = 'trButton'; // There is no availableActionStart because there is a specific Start button in the Prisoners row

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
                  children: "All Participants >"
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "h3 trParagraph",
                children: "Nickname:"
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
                className: "trParagraph",
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
                  className: "trEmphasis",
                  children: "Prisoners >"
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "h3 trParagraph",
                children: "Game ID:"
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
                className: "trParagraph",
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "h3 trParagraph",
                children: "Rack Size:"
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
                  className: "trParagraph",
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
                  className: "trEmphasis",
                  children: "Guards >"
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
                className: "trParagraph",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "Find and click the \"Join Game\" button for your game."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 49
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trParagraph h3",
                children: "Game list:"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvbkpvaW4iLCJhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QiLCJhdmFpbGFibGVBY3Rpb25PYnNlcnZlIiwiYXZhaWxhYmxlQWN0aW9uRXhhbWluZSIsIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInNldElzcmVqb2luIiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibmlja25hbWUiLCJzZXROaWNrbmFtZSIsInNldFBhcnRpY2lwYW50IiwicmFja3NpemUiLCJzZXRSYWNrc2l6ZSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJ1c2VTdGF0ZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwiZnVuYyIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJuZXdHYW1lbGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwibmV3R2FtZU9iamVjdCIsInBuYW1lIiwiZ25hbWUiLCJnYW1lc3RhdHVzIiwid2hvc2V0dXJuIiwiYyIsInB1c2giLCJnZXRHYW1lbGlzdEluZGV4IiwiZ2lkIiwiaSIsImxlbmd0aCIsImdhbWVBbHJlYWR5U3RhcnRlZCIsImdpIiwiYXZhaWxhYmxlQWN0aW9uUCIsImdkIiwiYXZhaWxhYmxlQWN0aW9uRyIsInNlbGVjdFJhY2tTaXplIiwibmV3UmFja3NpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciLCJhbGVydCIsIm1hcCIsImluZGV4Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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cUJBQVUsWUFBV29ELEtBQU0sRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUF1T0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFNLGdCQUFNLEVBQUV2RCxNQUFkO0FBQXNCLGtCQUFRLEVBQUVLLFFBQWhDO0FBQTBDLGNBQUksRUFBRVEsUUFBaEQ7QUFBMEQsaUJBQU8sRUFBRUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdk9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQW9QRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwUEQsQ0E1VEg7O0dBQU1oQixLOztLQUFBQSxLO0FBOFROLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0NzkzODgzZTcyNzE4NTEyMGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL3BiL2NoYXRTZWN0aW9uJztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGIvcHJpc29uQnJlYWtDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9saWIvc2Nyb2xsVG9Cb3R0b21cIjtcclxuXHJcbmNvbnN0IGJ1dHRvbkNsYXNzTmFtZSA9ICd0ckJ1dHRvbic7XHJcbi8vIFRoZXJlIGlzIG5vIGF2YWlsYWJsZUFjdGlvblN0YXJ0IGJlY2F1c2UgdGhlcmUgaXMgYSBzcGVjaWZpYyBTdGFydCBidXR0b24gaW4gdGhlIFByaXNvbmVycyByb3dcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uTm9uZSA9IDA7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbkpvaW4gPSAxO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgPSAyO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25PYnNlcnZlID0gMztcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uRXhhbWluZSA9IDQ7XHJcblxyXG5jb25zdCBMb2JieSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCBzZXRJc3Jlam9pbiwgd3NtZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRQYXJ0aWNpcGFudFxyXG4gICAgLCByYWNrc2l6ZSwgc2V0UmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pIC8vIEdhbWUgaW5mbyBieSBnYW1lIGlkXHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiICYmIG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiICYmICFtZXNzYWdlRGF0YS5nYW1laWQgJiYgbWVzc2FnZURhdGEubmlja25hbWUgIT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIiAmJiBtZXNzYWdlRGF0YS5mdW5jID09PSBcImdhbWVsaXN0XCIpIHtcclxuICAgICAgICAvLyBBY2NlcHQgdGhlIGdhbWUgbGlzdCBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgICAgICBsZXQgbmV3R2FtZWxpc3QgPSBbXTtcclxuICAgICAgICBtZXNzYWdlRGF0YS5nYW1lbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgbGV0IG5ld0dhbWVPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZWxlbWVudC5nYW1laWQsXHJcbiAgICAgICAgICAgIHBuYW1lOiBlbGVtZW50LnBuYW1lLFxyXG4gICAgICAgICAgICBnbmFtZTogZWxlbWVudC5nbmFtZSxcclxuICAgICAgICAgICAgZ2FtZXN0YXR1czogZWxlbWVudC53aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/IFwiR2FtZSBvdmVyXCIgOiBcIlVuZmluaXNoZWRcIixcclxuICAgICAgICAgICAgcmFja3NpemU6IGVsZW1lbnQucmFja3NpemVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBuZXdHYW1lbGlzdC5wdXNoKG5ld0dhbWVPYmplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEdhbWVsaXN0KFsuLi5uZXdHYW1lbGlzdF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0R2FtZWxpc3RJbmRleChnaWQpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChnYW1lbGlzdFtpXS5nYW1laWQgPT09IGdpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdhbWVBbHJlYWR5U3RhcnRlZChnaWQpIHtcclxuICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgICByZXR1cm4gZ2kgPiAtMTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvblAoZ2QpIHtcclxuICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfSAvLyBObyBwYXJ0aWNwYXRpb24gd2l0aG91dCBuaWNrbmFtZVxyXG4gICAgICBpZiAoZ2QucG5hbWUgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH0gLy8gQWxsb3cgcmVjb25uZWN0IGlmIG5pY2tuYW1lIG1hdGNoZXNcclxuICAgICAgaWYgKGdkLmduYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25PYnNlcnZlOyB9IC8vIElmIGd1YXJkcyBoYXZlIGpvaW5lZCBhbGxvdyBvYnNlcnZlXHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyAvLyBHdWFyZHMgaGF2ZSBub3Qgam9pbmVkIHRvIGFsbG93IG9ic2VydmUsIG5vdCBteSBnYW1lIHRvIGFsbG93IHJlY29ubmVjdFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9IC8vIE5vIHBhcnRpY3BhdGlvbiB3aXRob3V0IG5pY2tuYW1lXHJcbiAgICAgIGlmIChnZC5nbmFtZSA9PT0gbmlja25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdDsgfSAvLyBBbGxvdyByZWNvbm5lY3QgaWYgbmlja25hbWUgbWF0Y2hlc1xyXG4gICAgICBpZiAoIWdkLmduYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9IC8vIEFsbG93IGpvaW4gaWYgZ3VhcmRzIGhhdmUgbm90IGpvaW5lZFxyXG4gICAgICBpZiAoZ2QuZ2FtZXN0YXR1cyA9PT0gJ0dhbWUgb3ZlcicpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbkV4YW1pbmU7IH0gLy8gQWxsb3cgZXhhbWluZSBpZiBnYW1lIG92ZXJcclxuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IC8vIFRoZSBvYnNlcnZlIG9wdGlvbiBpcyBpbiB0aGUgcHJpc29uZXJzIGNvbHVtblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgICAgc2V0UmFja3NpemUobmV3UmFja3NpemUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1iYXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB0clRpdGxlXCI+UHJpc29uIEJyZWFrIExvYmJ5PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHM5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5BbGwgUGFydGljaXBhbnRzICZndDs8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaDMgdHJQYXJhZ3JhcGhcIj5OaWNrbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Qcmlzb25lcnMgJmd0Ozwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoMyB0clBhcmFncmFwaFwiPkdhbWUgSUQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaDMgdHJQYXJhZ3JhcGhcIj5SYWNrIFNpemU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNFwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDQgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI0IGxldHRlciByYWNrcywgOSB4IDkgYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU1XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNSA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjUgbGV0dGVyIHJhY2tzLCAxMSB4IDExIGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU2XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNiA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjYgbGV0dGVyIHJhY2tzLCAxMyB4IDEzIGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU3XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNyA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjcgbGV0dGVyIHJhY2tzLCAxNSB4IDE1IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+e3JhY2tzaXplfSBsZXR0ZXIgcmFja3MsIHtyYWNrc2l6ZSoyKzF9IHgge3JhY2tzaXplKjIrMX0gYm9hcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIG5pY2tuYW1lIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZUFscmVhZHlTdGFydGVkKGdhbWVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkdhbWUgYWxyZWFkeSBzdGFydGVkIHdpdGggdGhhdCBpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBHYW1lIElEIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+R3VhcmRzICZndDs8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPjxoMj5GaW5kIGFuZCBjbGljayB0aGUgXCJKb2luIEdhbWVcIiBidXR0b24gZm9yIHlvdXIgZ2FtZS48L2gyPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJXYXJuaW5nXCI+SWYgeW91IGxvc3QgY29ubmVjdGlvbiwgZmluZCBhbmQgY2xpY2sgdGhlIFwiUmVjb25uZWN0XCIgYnV0dG9uIGZvciB5b3VyIG5pY2tuYW1lLjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggaDNcIj5HYW1lIGxpc3Q6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZS1hbGwgdzMtY2FyZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsdWUgaDQgbXlDb21tb25Gb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+UmFjayBTaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1sZWZ0XCI+RGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibXlDb21tb25Gb250IHczLWdyZXkgdzMtaG92ZXItZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+PGI+e3ZhbHVlLmdhbWVpZH08L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uUCh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNSZWpvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWQgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUFJJU09ORVJTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25PYnNlcnZlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc09ic2VydmUke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My15ZWxsb3cgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX09CU0VSVkVSKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ic2VydmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc05vQWN0aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkIHczLXJvdW5kIHczLWhvdmVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX0dVQVJEUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbkpvaW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzSm9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfR1VBUkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uRXhhbWluZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNFeGFtaW5lJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9FWEFNSU5FUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGFtaW5lIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFJhY2tTaXplJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHYW1lU3RhdHVzJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgRGVsZXRlR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobmlja25hbWUgPT09IFwiVGlsZVJ1bm5lclwiIHx8IG5pY2tuYW1lID09PSB2YWx1ZS5wbmFtZSB8fCBuaWNrbmFtZSA9PT0gdmFsdWUuZ25hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1ib3JkZXIgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogXCJkZWxldGVnYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiB2YWx1ZS5nYW1laWQgLy8gR2FtZSBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHMzXCI+XHJcbiAgICAgICAgICAgIDxDaGF0IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTG9iYnk7ICAiXSwic291cmNlUm9vdCI6IiJ9