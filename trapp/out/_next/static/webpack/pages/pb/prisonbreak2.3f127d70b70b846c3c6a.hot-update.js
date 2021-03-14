webpackHotUpdate_N_E("pages/pb/prisonbreak2",{

/***/ "./pages/pb/prisonbreak2.js":
/*!**********************************!*\
  !*** ./pages/pb/prisonbreak2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrisonBreak; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ws */ "./ws.js");



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak2.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();




const escapehatches = ["0-0", "0-7", "0-14", "7-0", "7-14", "14-0", "14-7", "14-14"]; // coords of escape hatches

const initialtiles = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool

const initialsquares = Array(15).fill(Array(15).fill("."));
const initialusedby = Array(15).fill(Array(15).fill(""));
function PrisonBreak() {
  _s();

  const {
    0: isrejoin,
    1: setIsrejoin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // Used when player loses connection and rejoins

  const {
    0: gameid,
    1: setGameid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: prisonersOrGuards,
    1: setPrisonersOrGuards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: gameMessages,
    1: setGameMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Messages for while playing the game

  const {
    0: lobbyMessages,
    1: setLobbyMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Messages for while in the lobby

  let host = false ? undefined : 'ws://localhost:5000';

  const acceptMessage = message => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    // Hence I cannot selectively set lobby or game messages based on whether prisonersOrGuards is set yet.
    // However, setting the arrays below does somehow seem to get the message across.
    // Perhaps the arrays are always empty here and it only ever adds a value? I am confused about this.
    setLobbyMessages(curr => [...curr, message.data]);
    setGameMessages(curr => [...curr, message.data]);
  };

  const removeLobbyMessage = messageData => {
    let i = lobbyMessages.indexOf(messageData);
    let w = [...lobbyMessages];
    w.splice(i, 1);
    setLobbyMessages(w);
  };

  const removeGameMessage = messageData => {
    let i = gameMessages.indexOf(messageData);
    let w = [...gameMessages];
    w.splice(i, 1);
    setGameMessages(w);
  };

  const {
    0: client,
    1: setClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new _ws__WEBPACK_IMPORTED_MODULE_3__["default"](host, acceptMessage));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => client.connect(), []);
  return prisonersOrGuards === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Lobby, {
    setIsrejoin: setIsrejoin,
    lobbyMessages: lobbyMessages,
    removeLobbyMessage: removeLobbyMessage // client={client}
    ,
    gameid: gameid,
    setGameid: setGameid,
    setPrisonersOrGuards: setPrisonersOrGuards
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 7
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    gameMessages: gameMessages,
    client: client,
    removeGameMessage: removeGameMessage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 7
  }, this);
}

_s(PrisonBreak, "eIS/+efcdvWOtIa8t2rCe99Y1IY=");

_c = PrisonBreak;

const Lobby = ({
  setIsrejoin,
  lobbyMessages,
  removeLobbyMessage,
  gameid,
  setGameid,
  setPrisonersOrGuards
}) => {
  _s2();

  const {
    0: gamelist,
    1: setGamelist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Game ids from other clients

  const {
    0: gamelistP,
    1: setGamelistP
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Prisoners game ids from other clients

  const {
    0: gamelistG,
    1: setGamelistG
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Guards game ids from other clients

  const {
    0: gamestatuslist,
    1: setGamestatuslist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // List of games statuses

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = lobbyMessages[0];
    if (msg) processLobbyMessage(msg);
  }, [lobbyMessages]);

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);
    let sendergameid = messageData.gameid;
    let senderPG = messageData.sender;
    let newGamelist = [...gamelist];
    let newGamelistP = [...gamelistP];
    let newGamelistG = [...gamelistG];
    let newGamestatuslist = [...gamestatuslist];
    let anyUpdates = false;

    if (sendergameid && sendergameid.length > 0) {
      try {
        let wt = messageData.whoseturn;

        if (wt) {
          let foundgame = false;
          let gamestatus = "Unknown";

          if (wt === "X") {
            gamestatus = "Game over";
          } else if (wt === "P") {
            gamestatus = "Prisoners turn";
          } else if (wt === "G") {
            gamestatus = "Guards turn";
          }

          for (var i = 0; i < newGamestatuslist.length; ++i) {
            let gs = newGamestatuslist[i];

            if (gs.gameid === sendergameid) {
              foundgame = true;

              if (gs.status !== gamestatus) {
                anyUpdates = true;
                newGamestatuslist[i].status = gamestatus;
              }
            }
          }

          if (!foundgame) {
            newGamestatuslist = [...newGamestatuslist, {
              gameid: sendergameid,
              status: gamestatus
            }];
          }
        }

        if (newGamelist.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelist = [...newGamelist, sendergameid];
        }

        if (senderPG === "P" && newGamelistP.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelistP = [...newGamelistP, sendergameid];
        } else if (senderPG === "G" && newGamelistG.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelistG = [...newGamelistG, sendergameid];
        }
      } catch {
        window.alert("Error handling game id arrays");
      }

      if (anyUpdates) {
        setGamelist(newGamelist);
        setGamelistP(newGamelistP);
        setGamelistG(newGamelistG);
        setGamestatuslist(newGamestatuslist);
      }
    }

    removeLobbyMessage(message);
  }

  function getGameStatus(gid) {
    for (var i = 0; i < gamestatuslist.length; ++i) {
      let gs = gamestatuslist[i];

      if (gs.gameid === gid) {
        return gs.status;
      }
    }

    return "Unknown";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break Lobby", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink",
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
              lineNumber: 260,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Prisoners: enter a game id and click \"Start Game\". Tell the Guards the id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Guards: get the game id from the Prisoners. Enter the game id and click \"Join Game\"."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "If you lost connection, find and the \"Rejoin Game\" for your game id and player type."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Game id:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "startgame",
            onClick: function () {
              if (gameid.length > 0) {
                if (gamelistP.indexOf(gameid) > -1) {
                  window.alert("Prisoners already playing that game");
                } else {
                  setPrisonersOrGuards('P');
                }
              }
            },
            children: "Start Game"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "joingame",
            onClick: function () {
              if (gameid.length > 0) {
                if (gamelistG.indexOf(gameid) > -1) {
                  window.alert("Guards already playing that game");
                } else {
                  setPrisonersOrGuards('G');
                }
              }
            },
            children: "Join Game"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Games in progress:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbLobbyGamesHeader",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Game ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Prisoners"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Guards"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Game status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                onClick: function () {
                  setGameid(value);
                },
                children: value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: gamelistP.indexOf(value) > -1 ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
              }, undefined), getGameStatus(value) === "Game over" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "None"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 57
              }, undefined) : gamelistP.indexOf(value) > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersRejoin${index}`,
                className: "pbLobbyActionButton",
                onClick: function () {
                  setIsrejoin(true);
                  setGameid(value);
                  setPrisonersOrGuards('P');
                },
                children: "Rejoin Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersStart${index}`,
                className: "pbLobbyActionButton",
                onClick: function () {
                  setGameid(value);
                  setPrisonersOrGuards('P');
                },
                children: "Start Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: gamelistG.indexOf(value) > -1 ? "check_circle_outline" : "highlight_off"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 17
              }, undefined), getGameStatus(value) === "Game over" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "None"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 57
              }, undefined) : gamelistG.indexOf(value) > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsRejoin${index}`,
                className: "pbLobbyActionButton",
                onClick: function () {
                  setIsrejoin(true);
                  setGameid(value);
                  setPrisonersOrGuards('G');
                },
                children: "Rejoin Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsJoin${index}`,
                className: "pbLobbyActionButton",
                onClick: function () {
                  setGameid(value);
                  setPrisonersOrGuards('G');
                },
                children: "Join Game"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: getGameStatus(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, undefined)]
            }, `OtherGame${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 10
  }, undefined);
};

_s2(Lobby, "jtRiIbtqgzIbCyExrHLemvfi3Co=");

_c2 = Lobby;

const Square = props => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating characters on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  // need rcd to display selected direction arrow when appropriate
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
  const tdclass = props.c !== "." ? usedbyclass : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareRightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareDownArrow" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare1" : "pbSquare2";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 425,
    columnNumber: 9
  }, undefined) : tdclass === "pbSquareEscapeHatch" ? "ꐕ" //💫
  : props.ri % 2 === props.ci % 2 ? "." //"☹"//"⎔"
  : "."; //"ꐕ";//"✦";

  return tdclass === "pbSquareEscapeHatch" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "material-icons",
      children: "run_circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 433,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 437,
    columnNumber: 5
  }, undefined);
};

_c3 = Square;

const Board = ({
  onClick,
  squares,
  usedby,
  rcd
}) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "pbSquare",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        rcd: rcd,
        onClick: () => onClick(ri, ci)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 467,
    columnNumber: 5
  }, undefined);
};

_c4 = Board;

const Game = ({
  isrejoin,
  prisonersOrGuards,
  gameid,
  gameMessages,
  client,
  removeGameMessage
}) => {
  _s3();

  const {
    0: tiles,
    1: setTiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialtiles]);
  const {
    0: ptiles,
    1: setPtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gtiles,
    1: setGtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialsquares]);
  const {
    0: usedby,
    1: setUsedby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialusedby]);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("P"); // game starts with prisoners play

  const {
    0: currentcoords,
    1: setCurrentcoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rescues,
    1: setRescues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: rcd,
    1: setRcd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, ""]);
  const {
    0: passed,
    1: setPassed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // true when opponent just passed; if both pass the game ends

  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        console.log("Interval: prisonersOrGuards=" + prisonersOrGuards + " whoseturn=" + whoseturn + " at " + Date().toLocaleString());
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, 120000); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && prisonersOrGuards === "P") {
      // Prisoner is starting the game so pick racks
      let tempPTiles = [];
      let tempGTiles = [];
      let tempTiles = [...initialtiles];

      while (tempPTiles.length < 7) {
        let rand = Math.floor(Math.random() * tempTiles.length);
        tempPTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
        rand = Math.floor(Math.random() * tempTiles.length);
        tempGTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
      }

      tempPTiles.sort();
      tempGTiles.sort();
      setGtiles(tempGTiles);
      setPtiles(tempPTiles);
      setTiles(tempTiles);
      setSnapshot({
        squares: [...initialsquares],
        usedby: [...initialusedby],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]
      });
    } else {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          type: "pb",
          // prisonbreak
          func: "requestgamedata",
          // request game data
          sender: prisonersOrGuards
        }));
      } catch {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = gameMessages[0];
    if (msg) processGameMessage(msg);
  }, [gameMessages]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);
    console.log("processGameMessage type=" + messageData.type + ", func=" + messageData.func);
    console.log(messageData.gameid + " vs " + gameid);
    console.log(messageData.sender + " vs " + prisonersOrGuards);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        whoseturn: whoseturn
      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) {
        // Opponent requested game info
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          type: "pb",
          // prisonbreak
          func: "providegamedata",
          // provide game data
          sender: prisonersOrGuards,
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          selection: selection,
          currentcoords: currentcoords,
          snapshot: snapshot,
          passed: passed,
          rescues: rescues
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards && whoseturn !== prisonersOrGuards && whoseturn !== "X") {
        // opponent provided game data and this player is still waiting to see opponent move
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
      }

      if (messageData.func === "ept") {
        // end prisoners turn
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1, -1, "");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt") {
        // end guards turn
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1, -1, "");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }
    }

    removeGameMessage(message);
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd


  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (newSelection === -1) {
      newSelection = selection;
      newRcd = rcd;
    }

    if (newSelection > -1 && squarevalue === ".") {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === "P" ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      if (whoseturn === "P" && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === "G" && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
      }

      setSelection(newSelection);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
      setRcd(newRcd); // key down handler figured it out

      return;
    }

    if (cci > -1) {
      // clicked square has a tile on it from the current move in progress
      whoseturn === "P" ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = ".";
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = "";
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, ""); // make playre click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === ".") {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
      rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
      rcd[2] === "d" ? "" : //click same square that was "d", change to ""
      "r"; // click same square that was "", change to "r"

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handlePrisonerTileClick = tileindex => {
    // the index of ptiles
    if (whoseturn === "P") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const handleGuardTileClick = tileindex => {
    // the index of gtiles
    if (whoseturn === "G") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let newRescues = rescues;

    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }

    let newPtiles = [...ptiles];
    let newTiles = [...tiles];

    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over

    if (usedby[0][0] !== "" && usedby[0][7] !== "" && usedby[0][14] !== "" && usedby[7][0] !== "" && usedby[7][14] !== "" && usedby[14][0] !== "" && usedby[14][7] !== "" && usedby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }

    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      passed: false,
      // did not just pass
      rescues: newRescues // may have rescued another prisoner

    }));
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let newGtiles = [...gtiles];
    let newTiles = [...tiles];

    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    let snapsquares = [...squares];
    let snapusedby = [...usedby];
    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? "P" : "X"; // X = game over

    if (usedby[0][0] !== "" && usedby[0][7] !== "" && usedby[0][14] !== "" && usedby[7][0] !== "" && usedby[7][14] !== "" && usedby[14][0] !== "" && usedby[14][7] !== "" && usedby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }

    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      whoseturn: newWhoseturn // may have ended the game (whoseturn=X)

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange");
      return;
    }

    let newPtiles = [];
    let newTiles = [...tiles];

    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    newTiles = [...newTiles, ...snapshot.ptiles];
    newTiles.sort();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      whoseturn: "G",
      // swap never ends the game so go to opponent
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      rescues: rescues // no rescues on an exchange

    }));
  };

  const swapGuardsTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange");
      return;
    }

    let newGtiles = [];
    let newTiles = [...tiles];

    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      whoseturn: "P",
      // swap never ends the game so go to opponent
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false // did not just pass

    }));
  };

  function isPlayValid() {
    if (squares[7][7] === ".") {
      window.alert("First play must hit center square");
      return false;
    }

    let lowrow = 15;
    let highrow = -1;
    let lowcol = 15;
    let highcol = -1;

    for (var r = 0; r < 15; ++r) {
      for (var c = 0; c < 15; ++c) {
        if (squares[r][c] !== ".") {
          if (!(r > 0 && squares[r - 1][c] !== ".") && !(c > 0 && squares[r][c - 1] !== ".") && !(r < 14 && squares[r + 1][c] !== ".") && !(c < 14 && squares[r][c + 1] !== ".")) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][c] === ".") {
            // This square was played on this turn
            if (r < lowrow) {
              lowrow = r;
            }

            if (r > highrow) {
              highrow = r;
            }

            if (c < lowcol) {
              lowcol = c;
            }

            if (c > highcol) {
              highcol = c;
            }
          }
        }
      }
    }

    if (lowrow === 15) {
      window.alert("You didn't play any tiles");
      return false;
    }

    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }

    let playthru = false;
    let hookmade = false;

    for (var r = lowrow; r <= highrow; ++r) {
      for (var c = lowcol; c <= highcol; ++c) {
        if (squares[r][c] === ".") {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[r][c] !== ".") {
          playthru = true;
        }

        if (lowrow === highrow && r > 0 && squares[r - 1][c] !== ".") {
          hookmade = true;
        }

        if (lowrow === highrow && r < 14 && squares[r + 1][c] !== ".") {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== ".") {
          hookmade = true;
        }

        if (lowcol === highcol && c < 14 && squares[r][c + 1] !== ".") {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== ".") {
      playthru = true;
    }

    if (lowrow === highrow && highcol < 14 && snapshot.squares[lowrow][highcol + 1] !== ".") {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== ".") {
      playthru = true;
    }

    if (lowcol === highcol && highrow < 14 && snapshot.squares[highrow + 1][lowcol] !== ".") {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[7][7] !== ".") {
      window.alert("Words must be connected");
      return false;
    }

    return true;
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
  };

  const prisonerPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: snapshot.ptiles,
      // prisoners rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      passed: true,
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: snapshot.gtiles,
      // guards rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      passed: true
    }));
  };

  const requestGameData = () => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      sender: prisonersOrGuards,
      func: "requestgamedata" // request game data

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (prisonersOrGuards !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === "P" ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === "P" ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== "") {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === "r") {
            // playing rightwards
            let newc = -1;

            for (var c = col + 1; c < 15 && newc === -1; c++) {
              if (squares[row][c] === ".") {
                newc = c;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, ""];
            } else {
              newRcd = [row, newc, "r"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            return;
          }

          if (dir === "d") {
            // playing downwards
            let newr = -1;

            for (var r = row + 1; r < 15 && newr === -1; r++) {
              if (squares[r][col] === ".") {
                newr = r;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, ""];
            } else {
              newRcd = [newr, col, "d"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            return;
          }
        }
      }

      return;
    }

    if (event.key === "Backspace" && currentcoords.length > 0) {
      // Same as clicking on a played-this-move tile in terms of returning the tile to the rack
      // However we also want to set up rcd so they can press the key they meant and continue
      let coord = currentcoords[currentcoords.length - 1]; // tile to return to rack

      let newCurrentcoords = [...currentcoords];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newUsedby = [...usedby];
      let newSquares = [...squares];
      let newRcd = [-1, -1, ""];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];

      if (whoseturn === "P") {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = "";
      newSquares[row][col] = ".";
      let dir = rcd[2];

      if (dir !== "") {
        // direction was set so keep it
        newRcd = [row, col, dir];

        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }

      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setRcd(newRcd);
      setSelection(newSelection);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid prisonbreak",
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1 pbGameid",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1161,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1166,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1 pbhomelink",
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
              lineNumber: 1170,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1170,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1169,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1168,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPrisoners",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {
          ptiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handlePrisonerTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          onClickPassPlay: () => prisonerPass(),
          rescues: rescues,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1176,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1192,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1199,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1190,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1209,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Two peanuts were walking down a back alley. One was a salted."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1211,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1207,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1189,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbGuards",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
          gtiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleGuardTileClick(ti),
          onClickFinishTurn: () => endGuardsTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapGuardsTiles(),
          onClickPassPlay: () => guardsPass(),
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1216,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1215,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1229,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1228,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1159,
    columnNumber: 5
  }, undefined);
};

_s3(Game, "6e1OB5yMf7d1YebsaTNTYUhQETg=");

_c5 = Game;

const ShowUnseenTiles = props => {
  // tiles = tiles in bag, othertiles = tiles on other players rack
  let unseenTiles = [...props.tiles, ...props.othertiles];
  unseenTiles.sort();

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbTilepoolTitle",
      children: "TILES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1249,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolDivider"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1250,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1254,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1258,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1252,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1248,
    columnNumber: 5
  }, undefined);
};

_c6 = ShowUnseenTiles;

const RackTile = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: props.tileclass,
    onClick: props.onClick,
    children: props.tilevalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1267,
    columnNumber: 5
  }, undefined);
};

_c7 = RackTile;

const FinishTurnButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1276,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1276,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1275,
    columnNumber: 5
  }, undefined);
};

_c8 = FinishTurnButton;

const TileRecallButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1284,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1283,
    columnNumber: 5
  }, undefined);
};

_c9 = TileRecallButton;

const TileExchangeButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "cached"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1292,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1292,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1291,
    columnNumber: 5
  }, undefined);
};

_c10 = TileExchangeButton;

const PassPlayButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "not_interested"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1300,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1300,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1299,
    columnNumber: 5
  }, undefined);
};

_c11 = PassPlayButton;

const Prisoners = props => {
  const renderTile = renderPlayerTile(props);

  const renderFreedPrisoners = count => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      "data-toggle": "tooltip",
      title: "I'm free! I'm free!",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/breakfree.png",
        alt: "I'm free! I'm free!",
        width: "100",
        height: "100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1312,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1311,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1324,
        columnNumber: 36
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1324,
        columnNumber: 123
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1324,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1325,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1342,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1340,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1323,
    columnNumber: 5
  }, undefined);
};

_c12 = Prisoners;

const Guards = props => {
  const renderTile = renderPlayerTile(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1354,
        columnNumber: 36
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1354,
        columnNumber: 114
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1354,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1355,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1353,
    columnNumber: 5
  }, undefined);
};

_c13 = Guards;

function renderPlayerTile(props) {
  return (tileclass, tileindex, tilevalue) => {
    return tilevalue !== "*" ?
    /*#__PURE__*/
    // this tile is for this player, allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1378,
      columnNumber: 9
    }, this) :
    /*#__PURE__*/
    // this tile is for opponent, do not allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1384,
      columnNumber: 9
    }, this);
  };
}

function showActionButtons(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1396,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1395,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1399,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1398,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1402,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1401,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1405,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1404,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1394,
    columnNumber: 10
  }, this);
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Lobby");
$RefreshReg$(_c3, "Square");
$RefreshReg$(_c4, "Board");
$RefreshReg$(_c5, "Game");
$RefreshReg$(_c6, "ShowUnseenTiles");
$RefreshReg$(_c7, "RackTile");
$RefreshReg$(_c8, "FinishTurnButton");
$RefreshReg$(_c9, "TileRecallButton");
$RefreshReg$(_c10, "TileExchangeButton");
$RefreshReg$(_c11, "PassPlayButton");
$RefreshReg$(_c12, "Prisoners");
$RefreshReg$(_c13, "Guards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJpbml0aWFsc3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImluaXRpYWx1c2VkYnkiLCJQcmlzb25CcmVhayIsImlzcmVqb2luIiwic2V0SXNyZWpvaW4iLCJ1c2VTdGF0ZSIsImdhbWVpZCIsInNldEdhbWVpZCIsInByaXNvbmVyc09yR3VhcmRzIiwic2V0UHJpc29uZXJzT3JHdWFyZHMiLCJnYW1lTWVzc2FnZXMiLCJzZXRHYW1lTWVzc2FnZXMiLCJsb2JieU1lc3NhZ2VzIiwic2V0TG9iYnlNZXNzYWdlcyIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTG9iYnlNZXNzYWdlIiwibWVzc2FnZURhdGEiLCJpIiwiaW5kZXhPZiIsInciLCJzcGxpY2UiLCJyZW1vdmVHYW1lTWVzc2FnZSIsImNsaWVudCIsInNldENsaWVudCIsIkN1c3RvbVNvY2tldCIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJMb2JieSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJnYW1lbGlzdFAiLCJzZXRHYW1lbGlzdFAiLCJnYW1lbGlzdEciLCJzZXRHYW1lbGlzdEciLCJnYW1lc3RhdHVzbGlzdCIsInNldEdhbWVzdGF0dXNsaXN0IiwibXNnIiwicHJvY2Vzc0xvYmJ5TWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsInNlbmRlcmdhbWVpZCIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJuZXdHYW1lbGlzdFAiLCJuZXdHYW1lbGlzdEciLCJuZXdHYW1lc3RhdHVzbGlzdCIsImFueVVwZGF0ZXMiLCJsZW5ndGgiLCJ3dCIsIndob3NldHVybiIsImZvdW5kZ2FtZSIsImdhbWVzdGF0dXMiLCJncyIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwiZ2V0R2FtZVN0YXR1cyIsImdpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJ1c2VkYnljbGFzcyIsInNxdWFyZXVzZWRieSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJvbkNsaWNrIiwiQm9hcmQiLCJzcXVhcmVzIiwidXNlZGJ5IiwicmVuZGVyU3F1YXJlIiwicmVuZGVyUm93IiwiciIsIkdhbWUiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1ZXN0R2FtZURhdGEiLCJjbGVhckludGVydmFsIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNvcnQiLCJzZW5kIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJyYWNrIiwicm93IiwiY29sIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJwYXJzZUludCIsInNwbGl0IiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlRpbGVFeGNoYW5nZUJ1dHRvbiIsIlBhc3NQbGF5QnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlclBsYXllclRpbGUiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInNob3dBY3Rpb25CdXR0b25zIiwiR3VhcmRzIiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1B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QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUlMO0FBQUEsNkJBQ0UscUVBQUMsZ0JBQUQ7QUFBa0IsZUFBTyxFQUFFLE1BQU12SSxLQUFLLENBQUN3SSxpQkFBTjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpLLGVBT0w7QUFBQSw2QkFDRSxxRUFBQyxrQkFBRDtBQUFvQixlQUFPLEVBQUUsTUFBTXhJLEtBQUssQ0FBQ3lJLG1CQUFOO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEssZUFVTDtBQUFBLDZCQUNFLHFFQUFDLGNBQUQ7QUFBZ0IsZUFBTyxFQUFFLE1BQU16SSxLQUFLLENBQUMwSSxlQUFOO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFjRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuM2YxMjdkNzBiNzBiODQ2YzNjNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICBcIjAtMFwiLFxyXG4gIFwiMC03XCIsXHJcbiAgXCIwLTE0XCIsXHJcbiAgXCI3LTBcIixcclxuICBcIjctMTRcIixcclxuICBcIjE0LTBcIixcclxuICBcIjE0LTdcIixcclxuICBcIjE0LTE0XCIsXHJcbl07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsXHJcbiAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sXHJcbmNvbnN0IGluaXRpYWxzcXVhcmVzID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCIuXCIpKTtcclxuY29uc3QgaW5pdGlhbHVzZWRieSA9IEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiXCIpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpc3Jlam9pbiwgc2V0SXNyZWpvaW5dID0gdXNlU3RhdGUoZmFsc2UpIC8vIFVzZWQgd2hlbiBwbGF5ZXIgbG9zZXMgY29ubmVjdGlvbiBhbmQgcmVqb2luc1xyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpc29uZXJzT3JHdWFyZHMsIHNldFByaXNvbmVyc09yR3VhcmRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtnYW1lTWVzc2FnZXMsIHNldEdhbWVNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSkgLy8gTWVzc2FnZXMgZm9yIHdoaWxlIHBsYXlpbmcgdGhlIGdhbWVcclxuICBjb25zdCBbbG9iYnlNZXNzYWdlcywgc2V0TG9iYnlNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSkgLy8gTWVzc2FnZXMgZm9yIHdoaWxlIGluIHRoZSBsb2JieVxyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgLy8gUmVhY3QgaXMgaGFyZCB0byB1bmRlcnN0YW5kLiBJZiBJIHJlZmVyZW5jZSBwcmlzb25lcnNPckd1YXJkcyBoZXJlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gICAgLy8gSGVuY2UgSSBjYW5ub3Qgc2VsZWN0aXZlbHkgc2V0IGxvYmJ5IG9yIGdhbWUgbWVzc2FnZXMgYmFzZWQgb24gd2hldGhlciBwcmlzb25lcnNPckd1YXJkcyBpcyBzZXQgeWV0LlxyXG4gICAgLy8gSG93ZXZlciwgc2V0dGluZyB0aGUgYXJyYXlzIGJlbG93IGRvZXMgc29tZWhvdyBzZWVtIHRvIGdldCB0aGUgbWVzc2FnZSBhY3Jvc3MuXHJcbiAgICAvLyBQZXJoYXBzIHRoZSBhcnJheXMgYXJlIGFsd2F5cyBlbXB0eSBoZXJlIGFuZCBpdCBvbmx5IGV2ZXIgYWRkcyBhIHZhbHVlPyBJIGFtIGNvbmZ1c2VkIGFib3V0IHRoaXMuXHJcbiAgICBzZXRMb2JieU1lc3NhZ2VzKChjdXJyKSA9PiBbLi4uY3VyciwgbWVzc2FnZS5kYXRhXSlcclxuICAgIHNldEdhbWVNZXNzYWdlcygoY3VycikgPT4gWy4uLmN1cnIsIG1lc3NhZ2UuZGF0YV0pXHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZUxvYmJ5TWVzc2FnZSA9IChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgbGV0IGkgPSBsb2JieU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZURhdGEpO1xyXG4gICAgbGV0IHcgPSBbLi4ubG9iYnlNZXNzYWdlc107XHJcbiAgICB3LnNwbGljZShpLDEpO1xyXG4gICAgc2V0TG9iYnlNZXNzYWdlcyh3KTtcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlR2FtZU1lc3NhZ2UgPSAobWVzc2FnZURhdGEpID0+IHtcclxuICAgIGxldCBpID0gZ2FtZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZURhdGEpO1xyXG4gICAgbGV0IHcgPSBbLi4uZ2FtZU1lc3NhZ2VzXTtcclxuICAgIHcuc3BsaWNlKGksMSk7XHJcbiAgICBzZXRHYW1lTWVzc2FnZXModyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8TG9iYnlcclxuICAgICAgICBzZXRJc3Jlam9pbj17c2V0SXNyZWpvaW59XHJcbiAgICAgICAgbG9iYnlNZXNzYWdlcz17bG9iYnlNZXNzYWdlc31cclxuICAgICAgICByZW1vdmVMb2JieU1lc3NhZ2U9e3JlbW92ZUxvYmJ5TWVzc2FnZX1cclxuICAgICAgICAvLyBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgICBzZXRHYW1laWQ9e3NldEdhbWVpZH1cclxuICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcz17c2V0UHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgIC8+XHJcbiAgICA6XHJcbiAgICAgIDxHYW1lXHJcbiAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIGdhbWVNZXNzYWdlcz17Z2FtZU1lc3NhZ2VzfVxyXG4gICAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIHJlbW92ZUdhbWVNZXNzYWdlPXtyZW1vdmVHYW1lTWVzc2FnZX1cclxuICAgICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRJc3Jlam9pbiwgbG9iYnlNZXNzYWdlcywgcmVtb3ZlTG9iYnlNZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgc2V0UHJpc29uZXJzT3JHdWFyZHN9KSA9PiB7XHJcbiAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gR2FtZSBpZHMgZnJvbSBvdGhlciBjbGllbnRzXHJcbiAgY29uc3QgW2dhbWVsaXN0UCwgc2V0R2FtZWxpc3RQXSA9IHVzZVN0YXRlKFtdKSAvLyBQcmlzb25lcnMgZ2FtZSBpZHMgZnJvbSBvdGhlciBjbGllbnRzXHJcbiAgY29uc3QgW2dhbWVsaXN0Rywgc2V0R2FtZWxpc3RHXSA9IHVzZVN0YXRlKFtdKSAvLyBHdWFyZHMgZ2FtZSBpZHMgZnJvbSBvdGhlciBjbGllbnRzXHJcbiAgY29uc3QgW2dhbWVzdGF0dXNsaXN0LCBzZXRHYW1lc3RhdHVzbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gTGlzdCBvZiBnYW1lcyBzdGF0dXNlc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IGxvYmJ5TWVzc2FnZXNbMF07XHJcbiAgICBpZiAobXNnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgfSxbbG9iYnlNZXNzYWdlc10pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgIGxldCBzZW5kZXJnYW1laWQgPSBtZXNzYWdlRGF0YS5nYW1laWQ7XHJcbiAgICBsZXQgc2VuZGVyUEcgPSBtZXNzYWdlRGF0YS5zZW5kZXI7XHJcbiAgICBsZXQgbmV3R2FtZWxpc3QgPSBbLi4uZ2FtZWxpc3RdO1xyXG4gICAgbGV0IG5ld0dhbWVsaXN0UCA9IFsuLi5nYW1lbGlzdFBdO1xyXG4gICAgbGV0IG5ld0dhbWVsaXN0RyA9IFsuLi5nYW1lbGlzdEddO1xyXG4gICAgbGV0IG5ld0dhbWVzdGF0dXNsaXN0ID0gWy4uLmdhbWVzdGF0dXNsaXN0XTtcclxuICAgIGxldCBhbnlVcGRhdGVzID0gZmFsc2U7XHJcbiAgICBpZiAoc2VuZGVyZ2FtZWlkICYmIHNlbmRlcmdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHd0ID0gbWVzc2FnZURhdGEud2hvc2V0dXJuO1xyXG4gICAgICAgIGlmICh3dCkge1xyXG4gICAgICAgICAgbGV0IGZvdW5kZ2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgbGV0IGdhbWVzdGF0dXMgPSBcIlVua25vd25cIjtcclxuICAgICAgICAgIGlmICh3dCA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgICAgZ2FtZXN0YXR1cyA9IFwiR2FtZSBvdmVyXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBcIlBcIikge1xyXG4gICAgICAgICAgICBnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gXCJHXCIpIHtcclxuICAgICAgICAgICAgZ2FtZXN0YXR1cyA9IFwiR3VhcmRzIHR1cm5cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuZXdHYW1lc3RhdHVzbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgZ3MgPSBuZXdHYW1lc3RhdHVzbGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGdzLmdhbWVpZCA9PT0gc2VuZGVyZ2FtZWlkKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRnYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpZiAoZ3Muc3RhdHVzICE9PSBnYW1lc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0dhbWVzdGF0dXNsaXN0W2ldLnN0YXR1cyA9IGdhbWVzdGF0dXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZvdW5kZ2FtZSkge1xyXG4gICAgICAgICAgICBuZXdHYW1lc3RhdHVzbGlzdCA9IFsuLi5uZXdHYW1lc3RhdHVzbGlzdCwge2dhbWVpZDogc2VuZGVyZ2FtZWlkLCBzdGF0dXM6IGdhbWVzdGF0dXN9XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld0dhbWVsaXN0LmluZGV4T2Yoc2VuZGVyZ2FtZWlkKSA8IDApIHtcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3QgPSBbLi4ubmV3R2FtZWxpc3QsIHNlbmRlcmdhbWVpZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZW5kZXJQRyA9PT0gXCJQXCIgJiYgbmV3R2FtZWxpc3RQLmluZGV4T2Yoc2VuZGVyZ2FtZWlkKSA8IDApIHtcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3RQID0gWy4uLm5ld0dhbWVsaXN0UCwgc2VuZGVyZ2FtZWlkXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbmRlclBHID09PSBcIkdcIiAmJiBuZXdHYW1lbGlzdEcuaW5kZXhPZihzZW5kZXJnYW1laWQpIDwgMCkge1xyXG4gICAgICAgICAgYW55VXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICBuZXdHYW1lbGlzdEcgPSBbLi4ubmV3R2FtZWxpc3RHLCBzZW5kZXJnYW1laWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRXJyb3IgaGFuZGxpbmcgZ2FtZSBpZCBhcnJheXNcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFueVVwZGF0ZXMpIHtcclxuICAgICAgICBzZXRHYW1lbGlzdChuZXdHYW1lbGlzdCk7XHJcbiAgICAgICAgc2V0R2FtZWxpc3RQKG5ld0dhbWVsaXN0UCk7XHJcbiAgICAgICAgc2V0R2FtZWxpc3RHKG5ld0dhbWVsaXN0Ryk7XHJcbiAgICAgICAgc2V0R2FtZXN0YXR1c2xpc3QobmV3R2FtZXN0YXR1c2xpc3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVMb2JieU1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEdhbWVTdGF0dXMoZ2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVzdGF0dXNsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGxldCBncyA9IGdhbWVzdGF0dXNsaXN0W2ldO1xyXG4gICAgICBpZiAoZ3MuZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICByZXR1cm4gZ3Muc3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJVbmtub3duXCI7XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlxyXG4gICAgICAgIFByaXNvbiBCcmVhayBMb2JieVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxoMj5Qcmlzb25lcnM6IGVudGVyIGEgZ2FtZSBpZCBhbmQgY2xpY2sgXCJTdGFydCBHYW1lXCIuIFRlbGwgdGhlIEd1YXJkcyB0aGUgaWQuPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGgyPkd1YXJkczogZ2V0IHRoZSBnYW1lIGlkIGZyb20gdGhlIFByaXNvbmVycy4gRW50ZXIgdGhlIGdhbWUgaWQgYW5kIGNsaWNrIFwiSm9pbiBHYW1lXCIuPC9oMj5cclxuICAgICAgICA8aDM+SWYgeW91IGxvc3QgY29ubmVjdGlvbiwgZmluZCBhbmQgdGhlIFwiUmVqb2luIEdhbWVcIiBmb3IgeW91ciBnYW1lIGlkIGFuZCBwbGF5ZXIgdHlwZS48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8aDI+R2FtZSBpZDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWxpc3RQLmluZGV4T2YoZ2FtZWlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlByaXNvbmVycyBhbHJlYWR5IHBsYXlpbmcgdGhhdCBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImpvaW5nYW1lXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVsaXN0Ry5pbmRleE9mKGdhbWVpZCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJHdWFyZHMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8aDE+R2FtZXMgaW4gcHJvZ3Jlc3M6PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG9mZnNldC0yXCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRoPkdhbWUgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5HYW1lIHN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtgT3RoZXJHYW1lJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXtmdW5jdGlvbigpe3NldEdhbWVpZCh2YWx1ZSl9fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5UGxheWVySW5kaWNhdG9yXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Z2FtZWxpc3RQLmluZGV4T2YodmFsdWUpID4gLTEgPyBcImNoZWNrX2NpcmNsZVwiIDogXCJjYW5jZWxcIn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtnZXRHYW1lU3RhdHVzKHZhbHVlKSA9PT0gXCJHYW1lIG92ZXJcIiA/IDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uTm9uZVwiPk5vbmU8L3RkPiA6IGdhbWVsaXN0UC5pbmRleE9mKHZhbHVlKSA+IC0xID9cclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2luIEdhbWVcclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzU3RhcnQke2luZGV4fWB9IGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlQbGF5ZXJJbmRpY2F0b3JcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntnYW1lbGlzdEcuaW5kZXhPZih2YWx1ZSkgPiAtMSA/IFwiY2hlY2tfY2lyY2xlX291dGxpbmVcIiA6IFwiaGlnaGxpZ2h0X29mZlwifTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAge2dldEdhbWVTdGF0dXModmFsdWUpID09PSBcIkdhbWUgb3ZlclwiID8gPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25Ob25lXCI+Tm9uZTwvdGQ+IDogZ2FtZWxpc3RHLmluZGV4T2YodmFsdWUpID4gLTEgP1xyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNSZWpvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNKb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtnZXRHYW1lU3RhdHVzKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+O1xyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPSBcclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlMVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgID8gXCLirIdcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3RhcnM8L2k+XHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgPyBcIuqQlVwiIC8v8J+Sq1xyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCIuXCIvL1wi4pi5XCIvL1wi4o6UXCJcclxuICAgICAgOiBcIi5cIjsvL1wi6pCVXCI7Ly9cIuKcplwiO1xyXG4gIHJldHVybiAoXHJcbiAgICB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgOlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7dGR2YWx1ZX1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfSBjbGFzc05hbWU9XCJwYlNxdWFyZVwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luLCBwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCBnYW1lTWVzc2FnZXMsIGNsaWVudCwgcmVtb3ZlR2FtZU1lc3NhZ2V9KSA9PiB7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsc3F1YXJlc10pO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHVzZWRieV0pO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsXCJcIl0pO1xyXG4gIGNvbnN0IFtwYXNzZWQsIHNldFBhc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHRydWUgd2hlbiBvcHBvbmVudCBqdXN0IHBhc3NlZDsgaWYgYm90aCBwYXNzIHRoZSBnYW1lIGVuZHNcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgIHB0aWxlczogW10sXHJcbiAgICBndGlsZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIElmIGl0IGlzIG5vdCBteSB0dXJuICYmIHRoZSBnYW1lIGhhcyBub3QgZW5kZWRcclxuICAgICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBcIlhcIikge1xyXG4gICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcnZhbDogcHJpc29uZXJzT3JHdWFyZHM9XCIgKyBwcmlzb25lcnNPckd1YXJkcyArIFwiIHdob3NldHVybj1cIiArIHdob3NldHVybiArIFwiIGF0IFwiICsgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgZ2FtZSBkYXRhIGluIGNhc2Ugb3Bwb25lbnQgbW92ZWQgYW5kIHdlIG1pc3NlZCB0aGUgdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH0sIDEyMDAwMCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgIGlmICghaXNyZWpvaW4gJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIFByaXNvbmVyIGlzIHN0YXJ0aW5nIHRoZSBnYW1lIHNvIHBpY2sgcmFja3NcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy8gUHJpc29uZXIgcmVqb2luIG9yIGd1YXJkIGpvaW4gb3IgZ3VhcmQgcmVqb2luXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IGdhbWVNZXNzYWdlc1swXTtcclxuICAgIGlmIChtc2cpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgICAgIFxyXG4gIH0sW2dhbWVNZXNzYWdlc10pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9jZXNzR2FtZU1lc3NhZ2UgdHlwZT1cIiArIG1lc3NhZ2VEYXRhLnR5cGUgKyBcIiwgZnVuYz1cIiArIG1lc3NhZ2VEYXRhLmZ1bmMpO1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZURhdGEuZ2FtZWlkICsgXCIgdnMgXCIgKyBnYW1laWQpO1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZURhdGEuc2VuZGVyICsgXCIgdnMgXCIgKyBwcmlzb25lcnNPckd1YXJkcyk7XHJcbiAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcGFzc2VkOiBwYXNzZWQsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBcIlhcIikgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYW5kIHRoaXMgcGxheWVyIGlzIHN0aWxsIHdhaXRpbmcgdG8gc2VlIG9wcG9uZW50IG1vdmVcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiKSB7IC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIikgeyAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVHYW1lTWVzc2FnZShtZXNzYWdlKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgbmV3Um93W2NpXSA9IFwiLlwiO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gXCJcIjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgKTtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuXHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTsgLy8gbWFrZSBwbGF5cmUgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBcIi5cIikge1xyXG4gICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gXCJyXCIgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggXCJyXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgcmNkWzJdID09PSBcImRcIiA/IFwiXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiZFwiLCBjaGFuZ2UgdG8gXCJcIlxyXG4gICAgICAgXCJyXCI7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiXCIsIGNoYW5nZSB0byBcInJcIlxyXG4gICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlzb25lclRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1YXJkVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBcIkdcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICE9PSBcIlwiICYmIHVzZWRieVswXVs3XSAhPT0gXCJcIiAmJiB1c2VkYnlbMF1bMTRdICE9PSBcIlwiICYmIHVzZWRieVs3XVswXSAhPT0gXCJcIiAmJiB1c2VkYnlbN11bMTRdICE9PSBcIlwiICYmIHVzZWRieVsxNF1bMF0gIT09IFwiXCIgJiYgdXNlZGJ5WzE0XVs3XSAhPT0gXCJcIiAmJiB1c2VkYnlbMTRdWzE0XSAhPT0gXCJcIikge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBcIlBcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICE9PSBcIlwiICYmIHVzZWRieVswXVs3XSAhPT0gXCJcIiAmJiB1c2VkYnlbMF1bMTRdICE9PSBcIlwiICYmIHVzZWRieVs3XVswXSAhPT0gXCJcIiAmJiB1c2VkYnlbN11bMTRdICE9PSBcIlwiICYmIHVzZWRieVsxNF1bMF0gIT09IFwiXCIgJiYgdXNlZGJ5WzE0XVs3XSAhPT0gXCJcIiAmJiB1c2VkYnlbMTRdWzE0XSAhPT0gXCJcIikge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiR1wiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiUFwiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbN11bN10gPT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvd3JvdyA9IDE1O1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSAxNTtcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCAxNTsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IDE1OyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEociA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIilcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IDE1KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzWzddWzddICE9PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIkdcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogc25hcHNob3QucHRpbGVzLCAvLyBwcmlzb25lcnMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IHBhc3NlZCA/IFwiWFwiIDogXCJQXCI7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lIGJ5IHVzaW5nIFwiWFwiXHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFBhc3NlZCh0cnVlKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHBhc3NlZDogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBlbmRQcmlzb25lcnNUdXJuKCkgOiBlbmRHdWFyZHNUdXJuKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBsZXQgcmFjayA9IHdob3NldHVybiA9PT0gXCJQXCIgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IFwiXCIpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiclwiKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IDE1ICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBcIi5cIikge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIpIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHJvdyArIDE7IHIgPCAxNSAmJiBuZXdyID09PSAtMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gXCIuXCIpIHtuZXdyID0gcjt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLFwiXCJdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSBcIlwiO1xyXG4gICAgICBuZXdTcXVhcmVzW3Jvd11bY29sXSA9IFwiLlwiO1xyXG4gICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICBpZiAoZGlyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEgcGJHYW1laWRcIj5cclxuICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgUHJpc29uIEJyZWFrXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgIDxQcmlzb25lcnNcclxuICAgICAgICAgICAgcHRpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVQcmlzb25lclRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUHJpc29uZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgcmVzY3Vlcz17cmVzY3Vlc31cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGJVbmRlcmJvYXJkXCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IFwiWFwiID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD5Ud28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuPC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICBndGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGl0bGVcIj5USUxFUzwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaWxlXCI+e3R9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaW5pc2hUdXJuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT4mbmJzcDtGaW5pc2ggVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlUmVjYWxsQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj51bmRvPC9pPiZuYnNwO1JlY2FsbCBUaWxlczwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlRXhjaGFuZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhY2hlZDwvaT4mbmJzcDtTd2FwIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhc3NQbGF5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ub3RfaW50ZXJlc3RlZDwvaT4mbmJzcDtQYXNzIFR1cm48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpc29uZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9IHJlbmRlclBsYXllclRpbGUocHJvcHMpO1xyXG5cclxuICBjb25zdCByZW5kZXJGcmVlZFByaXNvbmVycyA9IChjb3VudCkgPT4ge1xyXG4gICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbChcIm5vbnNlbnNlXCIpO1xyXG4gICAgcmV0dXJuIGR1bWIubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9IGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkknbSBmcmVlISBJJ20gZnJlZSFcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZSBydW5fY2lyY2xlIHJ1bl9jaXJjbGU8L2k+Jm5ic3A7UFJJU09ORVJTJm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlIHJ1bl9jaXJjbGUgcnVuX2NpcmNsZTwvaT48L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrUFwiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcylcclxuICAgICAgOiA8PjwvPlxyXG4gICAgICB9XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAge3JlbmRlckZyZWVkUHJpc29uZXJzKHByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR3VhcmRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9IHJlbmRlclBsYXllclRpbGUocHJvcHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VjdXJpdHkgc2VjdXJpdHkgc2VjdXJpdHk8L2k+Jm5ic3A7R1VBUkRTJm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eSBzZWN1cml0eSBzZWN1cml0eTwvaT48L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMuZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrR1wiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyBcclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcylcclxuICAgICAgOiA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGxheWVyVGlsZShwcm9wcykge1xyXG4gIHJldHVybiAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGlsZXZhbHVlICE9PSBcIipcIiA/IC8vIHRoaXMgdGlsZSBpcyBmb3IgdGhpcyBwbGF5ZXIsIGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX0gLz5cclxuICAgICAgICA6IC8vIHRoaXMgdGlsZSBpcyBmb3Igb3Bwb25lbnQsIGRvIG5vdCBhbGxvdyBjbGlja1xyXG4gICAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJObyBwZWVraW5nIVwiKX0gLz5cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgPHA+XHJcbiAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8UGFzc1BsYXlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1Bhc3NQbGF5KCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9