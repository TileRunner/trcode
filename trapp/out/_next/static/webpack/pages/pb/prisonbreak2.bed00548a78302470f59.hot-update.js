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
            className: "pbLobbyActionButton",
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
            className: "pbLobbyActionButton",
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
                className: "pbLobbyGamesHeaderCol",
                children: ["Game ID", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Click to select"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 60
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: ["Prisoners", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Playing?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 62
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: ["Available", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 62
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: ["Guards", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Playing?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 59
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: ["Available", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 62
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
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
                className: "pbLobbyGameid",
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
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value);
                    setPrisonersOrGuards('P');
                  },
                  children: "Rejoin Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersStart${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value);
                    setPrisonersOrGuards('P');
                  },
                  children: "Start Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: gamelistG.indexOf(value) > -1 ? "check_circle_outline" : "highlight_off"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, undefined), getGameStatus(value) === "Game over" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "None"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 57
              }, undefined) : gamelistG.indexOf(value) > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value);
                    setPrisonersOrGuards('G');
                  },
                  children: "Rejoin Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsJoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value);
                    setPrisonersOrGuards('G');
                  },
                  children: "Join Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: getGameStatus(value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
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
    lineNumber: 433,
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
      lineNumber: 442,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 441,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 445,
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
        lineNumber: 455,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 475,
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
        lineNumber: 1169,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1174,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1172,
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
              lineNumber: 1178,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1178,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1177,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1176,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1168,
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
          lineNumber: 1184,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1183,
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
            lineNumber: 1200,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1207,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1198,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1217,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Two peanuts were walking down a back alley. One was a salted."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1219,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1215,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1197,
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
          lineNumber: 1224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1223,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1237,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1236,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1167,
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
      lineNumber: 1257,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolDivider"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1258,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1262,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1266,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1256,
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
    lineNumber: 1275,
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
        lineNumber: 1284,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
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
        lineNumber: 1292,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
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
        lineNumber: 1300,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
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
        lineNumber: 1308,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1308,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1307,
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
        lineNumber: 1320,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1319,
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
        lineNumber: 1332,
        columnNumber: 36
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1332,
        columnNumber: 123
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1332,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1333,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1350,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1348,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1331,
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
        lineNumber: 1362,
        columnNumber: 36
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1362,
        columnNumber: 114
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1362,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1363,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1361,
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
      lineNumber: 1386,
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
      lineNumber: 1392,
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
        lineNumber: 1404,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1403,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1407,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1406,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1410,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1409,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1413,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1412,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1402,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJpbml0aWFsc3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImluaXRpYWx1c2VkYnkiLCJQcmlzb25CcmVhayIsImlzcmVqb2luIiwic2V0SXNyZWpvaW4iLCJ1c2VTdGF0ZSIsImdhbWVpZCIsInNldEdhbWVpZCIsInByaXNvbmVyc09yR3VhcmRzIiwic2V0UHJpc29uZXJzT3JHdWFyZHMiLCJnYW1lTWVzc2FnZXMiLCJzZXRHYW1lTWVzc2FnZXMiLCJsb2JieU1lc3NhZ2VzIiwic2V0TG9iYnlNZXNzYWdlcyIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTG9iYnlNZXNzYWdlIiwibWVzc2FnZURhdGEiLCJpIiwiaW5kZXhPZiIsInciLCJzcGxpY2UiLCJyZW1vdmVHYW1lTWVzc2FnZSIsImNsaWVudCIsInNldENsaWVudCIsIkN1c3RvbVNvY2tldCIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJMb2JieSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJnYW1lbGlzdFAiLCJzZXRHYW1lbGlzdFAiLCJnYW1lbGlzdEciLCJzZXRHYW1lbGlzdEciLCJnYW1lc3RhdHVzbGlzdCIsInNldEdhbWVzdGF0dXNsaXN0IiwibXNnIiwicHJvY2Vzc0xvYmJ5TWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsInNlbmRlcmdhbWVpZCIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJuZXdHYW1lbGlzdFAiLCJuZXdHYW1lbGlzdEciLCJuZXdHYW1lc3RhdHVzbGlzdCIsImFueVVwZGF0ZXMiLCJsZW5ndGgiLCJ3dCIsIndob3NldHVybiIsImZvdW5kZ2FtZSIsImdhbWVzdGF0dXMiLCJncyIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwiZ2V0R2FtZVN0YXR1cyIsImdpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJ1c2VkYnljbGFzcyIsInNxdWFyZXVzZWRieSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJvbkNsaWNrIiwiQm9hcmQiLCJzcXVhcmVzIiwidXNlZGJ5IiwicmVuZGVyU3F1YXJlIiwicmVuZGVyUm93IiwiciIsIkdhbWUiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1ZXN0R2FtZURhdGEiLCJjbGVhckludGVydmFsIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNvcnQiLCJzZW5kIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJyYWNrIiwicm93IiwiY29sIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJwYXJzZUludCIsInNwbGl0IiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlRpbGVFeGNoYW5nZUJ1dHRvbiIsIlBhc3NQbGF5QnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlclBsYXllclRpbGUiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInNob3dBY3Rpb25CdXR0b25zIiwiR3VhcmRzIiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1B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QUssQ0FBQzBJLGVBQU47QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5iZWQwMDU0OGE3ODMwMjQ3MGY1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLTdcIixcclxuICBcIjAtMTRcIixcclxuICBcIjctMFwiLFxyXG4gIFwiNy0xNFwiLFxyXG4gIFwiMTQtMFwiLFxyXG4gIFwiMTQtN1wiLFxyXG4gIFwiMTQtMTRcIixcclxuXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFtcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIkhcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk1cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIixcclxuICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuY29uc3QgaW5pdGlhbHNxdWFyZXMgPSBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIi5cIikpO1xyXG5jb25zdCBpbml0aWFsdXNlZGJ5ID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCJcIikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lzcmVqb2luLCBzZXRJc3Jlam9pbl0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gVXNlZCB3aGVuIHBsYXllciBsb3NlcyBjb25uZWN0aW9uIGFuZCByZWpvaW5zXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2dhbWVNZXNzYWdlcywgc2V0R2FtZU1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKSAvLyBNZXNzYWdlcyBmb3Igd2hpbGUgcGxheWluZyB0aGUgZ2FtZVxyXG4gIGNvbnN0IFtsb2JieU1lc3NhZ2VzLCBzZXRMb2JieU1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKSAvLyBNZXNzYWdlcyBmb3Igd2hpbGUgaW4gdGhlIGxvYmJ5XHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAvLyBSZWFjdCBpcyBoYXJkIHRvIHVuZGVyc3RhbmQuIElmIEkgcmVmZXJlbmNlIHByaXNvbmVyc09yR3VhcmRzIGhlcmUgaXQgd2lsbCBhbHdheXMgYmUgdGhlIGluaXRpYWwgdmFsdWUuXHJcbiAgICAvLyBIZW5jZSBJIGNhbm5vdCBzZWxlY3RpdmVseSBzZXQgbG9iYnkgb3IgZ2FtZSBtZXNzYWdlcyBiYXNlZCBvbiB3aGV0aGVyIHByaXNvbmVyc09yR3VhcmRzIGlzIHNldCB5ZXQuXHJcbiAgICAvLyBIb3dldmVyLCBzZXR0aW5nIHRoZSBhcnJheXMgYmVsb3cgZG9lcyBzb21laG93IHNlZW0gdG8gZ2V0IHRoZSBtZXNzYWdlIGFjcm9zcy5cclxuICAgIC8vIFBlcmhhcHMgdGhlIGFycmF5cyBhcmUgYWx3YXlzIGVtcHR5IGhlcmUgYW5kIGl0IG9ubHkgZXZlciBhZGRzIGEgdmFsdWU/IEkgYW0gY29uZnVzZWQgYWJvdXQgdGhpcy5cclxuICAgIHNldExvYmJ5TWVzc2FnZXMoKGN1cnIpID0+IFsuLi5jdXJyLCBtZXNzYWdlLmRhdGFdKVxyXG4gICAgc2V0R2FtZU1lc3NhZ2VzKChjdXJyKSA9PiBbLi4uY3VyciwgbWVzc2FnZS5kYXRhXSlcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlTG9iYnlNZXNzYWdlID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBsZXQgaSA9IGxvYmJ5TWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlRGF0YSk7XHJcbiAgICBsZXQgdyA9IFsuLi5sb2JieU1lc3NhZ2VzXTtcclxuICAgIHcuc3BsaWNlKGksMSk7XHJcbiAgICBzZXRMb2JieU1lc3NhZ2VzKHcpO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVHYW1lTWVzc2FnZSA9IChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgbGV0IGkgPSBnYW1lTWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlRGF0YSk7XHJcbiAgICBsZXQgdyA9IFsuLi5nYW1lTWVzc2FnZXNdO1xyXG4gICAgdy5zcGxpY2UoaSwxKTtcclxuICAgIHNldEdhbWVNZXNzYWdlcyh3KTtcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIHByaXNvbmVyc09yR3VhcmRzID09PSAnJyA/XHJcbiAgICAgIDxMb2JieVxyXG4gICAgICAgIHNldElzcmVqb2luPXtzZXRJc3Jlam9pbn1cclxuICAgICAgICBsb2JieU1lc3NhZ2VzPXtsb2JieU1lc3NhZ2VzfVxyXG4gICAgICAgIHJlbW92ZUxvYmJ5TWVzc2FnZT17cmVtb3ZlTG9iYnlNZXNzYWdlfVxyXG4gICAgICAgIC8vIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIHNldEdhbWVpZD17c2V0R2FtZWlkfVxyXG4gICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzPXtzZXRQcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgLz5cclxuICAgIDpcclxuICAgICAgPEdhbWVcclxuICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgZ2FtZU1lc3NhZ2VzPXtnYW1lTWVzc2FnZXN9XHJcbiAgICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgcmVtb3ZlR2FtZU1lc3NhZ2U9e3JlbW92ZUdhbWVNZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTG9iYnkgPSAoe3NldElzcmVqb2luLCBsb2JieU1lc3NhZ2VzLCByZW1vdmVMb2JieU1lc3NhZ2UsIGdhbWVpZCwgc2V0R2FtZWlkLCBzZXRQcmlzb25lcnNPckd1YXJkc30pID0+IHtcclxuICBjb25zdCBbZ2FtZWxpc3QsIHNldEdhbWVsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBHYW1lIGlkcyBmcm9tIG90aGVyIGNsaWVudHNcclxuICBjb25zdCBbZ2FtZWxpc3RQLCBzZXRHYW1lbGlzdFBdID0gdXNlU3RhdGUoW10pIC8vIFByaXNvbmVycyBnYW1lIGlkcyBmcm9tIG90aGVyIGNsaWVudHNcclxuICBjb25zdCBbZ2FtZWxpc3RHLCBzZXRHYW1lbGlzdEddID0gdXNlU3RhdGUoW10pIC8vIEd1YXJkcyBnYW1lIGlkcyBmcm9tIG90aGVyIGNsaWVudHNcclxuICBjb25zdCBbZ2FtZXN0YXR1c2xpc3QsIHNldEdhbWVzdGF0dXNsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBMaXN0IG9mIGdhbWVzIHN0YXR1c2VzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gbG9iYnlNZXNzYWdlc1swXTtcclxuICAgIGlmIChtc2cpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgICAgICBcclxuICB9LFtsb2JieU1lc3NhZ2VzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgbGV0IHNlbmRlcmdhbWVpZCA9IG1lc3NhZ2VEYXRhLmdhbWVpZDtcclxuICAgIGxldCBzZW5kZXJQRyA9IG1lc3NhZ2VEYXRhLnNlbmRlcjtcclxuICAgIGxldCBuZXdHYW1lbGlzdCA9IFsuLi5nYW1lbGlzdF07XHJcbiAgICBsZXQgbmV3R2FtZWxpc3RQID0gWy4uLmdhbWVsaXN0UF07XHJcbiAgICBsZXQgbmV3R2FtZWxpc3RHID0gWy4uLmdhbWVsaXN0R107XHJcbiAgICBsZXQgbmV3R2FtZXN0YXR1c2xpc3QgPSBbLi4uZ2FtZXN0YXR1c2xpc3RdO1xyXG4gICAgbGV0IGFueVVwZGF0ZXMgPSBmYWxzZTtcclxuICAgIGlmIChzZW5kZXJnYW1laWQgJiYgc2VuZGVyZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgd3QgPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgICAgaWYgKHd0KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmRnYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICBsZXQgZ2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgICAgaWYgKHd0ID09PSBcIlhcIikge1xyXG4gICAgICAgICAgICBnYW1lc3RhdHVzID0gXCJHYW1lIG92ZXJcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiUFwiKSB7XHJcbiAgICAgICAgICAgIGdhbWVzdGF0dXMgPSBcIlByaXNvbmVycyB0dXJuXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBcIkdcIikge1xyXG4gICAgICAgICAgICBnYW1lc3RhdHVzID0gXCJHdWFyZHMgdHVyblwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG5ld0dhbWVzdGF0dXNsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBncyA9IG5ld0dhbWVzdGF0dXNsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZ3MuZ2FtZWlkID09PSBzZW5kZXJnYW1laWQpIHtcclxuICAgICAgICAgICAgICBmb3VuZGdhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGlmIChncy5zdGF0dXMgIT09IGdhbWVzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3R2FtZXN0YXR1c2xpc3RbaV0uc3RhdHVzID0gZ2FtZXN0YXR1cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZm91bmRnYW1lKSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVzdGF0dXNsaXN0ID0gWy4uLm5ld0dhbWVzdGF0dXNsaXN0LCB7Z2FtZWlkOiBzZW5kZXJnYW1laWQsIHN0YXR1czogZ2FtZXN0YXR1c31dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3R2FtZWxpc3QuaW5kZXhPZihzZW5kZXJnYW1laWQpIDwgMCkge1xyXG4gICAgICAgICAgYW55VXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICBuZXdHYW1lbGlzdCA9IFsuLi5uZXdHYW1lbGlzdCwgc2VuZGVyZ2FtZWlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbmRlclBHID09PSBcIlBcIiAmJiBuZXdHYW1lbGlzdFAuaW5kZXhPZihzZW5kZXJnYW1laWQpIDwgMCkge1xyXG4gICAgICAgICAgYW55VXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICBuZXdHYW1lbGlzdFAgPSBbLi4ubmV3R2FtZWxpc3RQLCBzZW5kZXJnYW1laWRdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VuZGVyUEcgPT09IFwiR1wiICYmIG5ld0dhbWVsaXN0Ry5pbmRleE9mKHNlbmRlcmdhbWVpZCkgPCAwKSB7XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0RyA9IFsuLi5uZXdHYW1lbGlzdEcsIHNlbmRlcmdhbWVpZF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJFcnJvciBoYW5kbGluZyBnYW1lIGlkIGFycmF5c1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgIHNldEdhbWVsaXN0KG5ld0dhbWVsaXN0KTtcclxuICAgICAgICBzZXRHYW1lbGlzdFAobmV3R2FtZWxpc3RQKTtcclxuICAgICAgICBzZXRHYW1lbGlzdEcobmV3R2FtZWxpc3RHKTtcclxuICAgICAgICBzZXRHYW1lc3RhdHVzbGlzdChuZXdHYW1lc3RhdHVzbGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUxvYmJ5TWVzc2FnZShtZXNzYWdlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0R2FtZVN0YXR1cyhnaWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZXN0YXR1c2xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgbGV0IGdzID0gZ2FtZXN0YXR1c2xpc3RbaV07XHJcbiAgICAgIGlmIChncy5nYW1laWQgPT09IGdpZCkge1xyXG4gICAgICAgIHJldHVybiBncy5zdGF0dXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlVua25vd25cIjtcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgUHJpc29uIEJyZWFrIExvYmJ5XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGgyPlByaXNvbmVyczogZW50ZXIgYSBnYW1lIGlkIGFuZCBjbGljayBcIlN0YXJ0IEdhbWVcIi4gVGVsbCB0aGUgR3VhcmRzIHRoZSBpZC48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8aDI+R3VhcmRzOiBnZXQgdGhlIGdhbWUgaWQgZnJvbSB0aGUgUHJpc29uZXJzLiBFbnRlciB0aGUgZ2FtZSBpZCBhbmQgY2xpY2sgXCJKb2luIEdhbWVcIi48L2gyPlxyXG4gICAgICAgIDxoMz5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCB0aGUgXCJSZWpvaW4gR2FtZVwiIGZvciB5b3VyIGdhbWUgaWQgYW5kIHBsYXllciB0eXBlLjwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxoMj5HYW1lIGlkOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWxpc3RQLmluZGV4T2YoZ2FtZWlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlByaXNvbmVycyBhbHJlYWR5IHBsYXlpbmcgdGhhdCBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImpvaW5nYW1lXCIgY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbkJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lbGlzdEcuaW5kZXhPZihnYW1laWQpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiR3VhcmRzIGFscmVhZHkgcGxheWluZyB0aGF0IGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGgxPkdhbWVzIGluIHByb2dyZXNzOjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMlwiPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HYW1lIElEPHA+Q2xpY2sgdG8gc2VsZWN0PC9wPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPlByaXNvbmVyczxwPlBsYXlpbmc/PC9wPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPkF2YWlsYWJsZTxwPkFjdGlvbjwvcD48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HdWFyZHM8cD5QbGF5aW5nPzwvcD48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5BdmFpbGFibGU8cD5BY3Rpb248L3A+PC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCI+R2FtZSBzdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVpZFwiIG9uQ2xpY2s9e2Z1bmN0aW9uKCl7c2V0R2FtZWlkKHZhbHVlKX19Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlQbGF5ZXJJbmRpY2F0b3JcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntnYW1lbGlzdFAuaW5kZXhPZih2YWx1ZSkgPiAtMSA/IFwiY2hlY2tfY2lyY2xlXCIgOiBcImNhbmNlbFwifTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAge2dldEdhbWVTdGF0dXModmFsdWUpID09PSBcIkdhbWUgb3ZlclwiID8gPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25Ob25lXCI+Tm9uZTwvdGQ+IDogZ2FtZWxpc3RQLmluZGV4T2YodmFsdWUpID4gLTEgP1xyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNSZWpvaW4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVqb2luIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzU3RhcnQke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieVBsYXllckluZGljYXRvclwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2dhbWVsaXN0Ry5pbmRleE9mKHZhbHVlKSA+IC0xID8gXCJjaGVja19jaXJjbGVfb3V0bGluZVwiIDogXCJoaWdobGlnaHRfb2ZmXCJ9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7Z2V0R2FtZVN0YXR1cyh2YWx1ZSkgPT09IFwiR2FtZSBvdmVyXCIgPyA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbk5vbmVcIj5Ob25lPC90ZD4gOiBnYW1lbGlzdEcuaW5kZXhPZih2YWx1ZSkgPiAtMSA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNKb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAge2dldEdhbWVTdGF0dXModmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBjaGFyYWN0ZXJzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgLy8gbmVlZCByY2QgdG8gZGlzcGxheSBzZWxlY3RlZCBkaXJlY3Rpb24gYXJyb3cgd2hlbiBhcHByb3ByaWF0ZVxyXG4gIGNvbnN0IHVzZWRieWNsYXNzID1cclxuICAgIHByb3BzLnNxdWFyZXVzZWRieSA9PT0gXCJQXCJcclxuICAgICAgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCJcclxuICAgICAgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI7XHJcbiAgY29uc3QgdGRjbGFzcyA9IFxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyB1c2VkYnljbGFzc1xyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiclwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVJpZ2h0QXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiZFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDdcclxuICAgICAgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpXHJcbiAgICAgID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwicGJTcXVhcmUxXCJcclxuICAgICAgOiBcInBiU3F1YXJlMlwiO1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZVJpZ2h0QXJyb3dcIlxyXG4gICAgICA/IFwi4p6hXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRG93bkFycm93XCJcclxuICAgICAgPyBcIuKsh1wiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgID8gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyczwvaT5cclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA/IFwi6pCVXCIgLy/wn5KrXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcIi5cIi8vXCLimLlcIi8vXCLijpRcIlxyXG4gICAgICA6IFwiLlwiOy8vXCLqkJVcIjsvL1wi4pymXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiID9cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA6XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHt0ZHZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSwgcmNkIH0pID0+IHtcclxuICBjb25zdCByZW5kZXJTcXVhcmUgPSAocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9IGNsYXNzTmFtZT1cInBiU3F1YXJlXCI+XHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgYz17Y31cclxuICAgICAgICAgIGNpPXtjaX1cclxuICAgICAgICAgIHJpPXtyaX1cclxuICAgICAgICAgIHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fVxyXG4gICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJSb3cgPSAocmkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicGJSb3dcIj5cclxuICAgICAgICB7c3F1YXJlc1tyaV0ubWFwKChjLCBjaSkgPT4gcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgdXNlZGJ5W3JpXVtjaV0pKX1cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgIDx0Ym9keT57c3F1YXJlcy5tYXAoKHIsIHJpKSA9PiByZW5kZXJSb3cocmkpKX08L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW4sIHByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIGdhbWVNZXNzYWdlcywgY2xpZW50LCByZW1vdmVHYW1lTWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWxzcXVhcmVzXSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdXNlZGJ5XSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxcIlwiXSk7XHJcbiAgY29uc3QgW3Bhc3NlZCwgc2V0UGFzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gdHJ1ZSB3aGVuIG9wcG9uZW50IGp1c3QgcGFzc2VkOyBpZiBib3RoIHBhc3MgdGhlIGdhbWUgZW5kc1xyXG4gIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgc3F1YXJlczogWy4uLmluaXRpYWxzcXVhcmVzXSxcclxuICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbXSxcclxuICAgIGd0aWxlczogW10sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgaXQgaXMgbm90IG15IHR1cm4gJiYgdGhlIGdhbWUgaGFzIG5vdCBlbmRlZFxyXG4gICAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7XHJcbiAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVydmFsOiBwcmlzb25lcnNPckd1YXJkcz1cIiArIHByaXNvbmVyc09yR3VhcmRzICsgXCIgd2hvc2V0dXJuPVwiICsgd2hvc2V0dXJuICsgXCIgYXQgXCIgKyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBnYW1lIGRhdGEgaW4gY2FzZSBvcHBvbmVudCBtb3ZlZCBhbmQgd2UgbWlzc2VkIHRoZSB1cGRhdGVcclxuICAgICAgfVxyXG4gICAgfSwgMTIwMDAwKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgaWYgKCFpc3Jlam9pbiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gZ2FtZU1lc3NhZ2VzWzBdO1xyXG4gICAgaWYgKG1zZykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgfSxbZ2FtZU1lc3NhZ2VzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb2Nlc3NHYW1lTWVzc2FnZSB0eXBlPVwiICsgbWVzc2FnZURhdGEudHlwZSArIFwiLCBmdW5jPVwiICsgbWVzc2FnZURhdGEuZnVuYyk7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlRGF0YS5nYW1laWQgKyBcIiB2cyBcIiArIGdhbWVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlRGF0YS5zZW5kZXIgKyBcIiB2cyBcIiArIHByaXNvbmVyc09yR3VhcmRzKTtcclxuICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBcImFubm91bmNlXCIpIHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm5cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICBwYXNzZWQ6IHBhc3NlZCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3Vlc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7IFxyXG4gICAgICAgIC8vIG9wcG9uZW50IHByb3ZpZGVkIGdhbWUgZGF0YSBhbmQgdGhpcyBwbGF5ZXIgaXMgc3RpbGwgd2FpdGluZyB0byBzZWUgb3Bwb25lbnQgbW92ZVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIpIHsgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsXCJcIik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiKSB7IC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUdhbWVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gXCIuXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpOyAvLyBtYWtlIHBsYXlyZSBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IFwiLlwiKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gXCJcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBcIlwiXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJcIiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQdGlsZXMubGVuZ3RoID4gMCA/IFwiR1wiIDogXCJYXCI7IC8vIFggPSBnYW1lIG92ZXJcclxuICAgIGlmICh1c2VkYnlbMF1bMF0gIT09IFwiXCIgJiYgdXNlZGJ5WzBdWzddICE9PSBcIlwiICYmIHVzZWRieVswXVsxNF0gIT09IFwiXCIgJiYgdXNlZGJ5WzddWzBdICE9PSBcIlwiICYmIHVzZWRieVs3XVsxNF0gIT09IFwiXCIgJiYgdXNlZGJ5WzE0XVswXSAhPT0gXCJcIiAmJiB1c2VkYnlbMTRdWzddICE9PSBcIlwiICYmIHVzZWRieVsxNF1bMTRdICE9PSBcIlwiKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdHdGlsZXMubGVuZ3RoID4gMCA/IFwiUFwiIDogXCJYXCI7IC8vIFggPSBnYW1lIG92ZXJcclxuICAgIGlmICh1c2VkYnlbMF1bMF0gIT09IFwiXCIgJiYgdXNlZGJ5WzBdWzddICE9PSBcIlwiICYmIHVzZWRieVswXVsxNF0gIT09IFwiXCIgJiYgdXNlZGJ5WzddWzBdICE9PSBcIlwiICYmIHVzZWRieVs3XVsxNF0gIT09IFwiXCIgJiYgdXNlZGJ5WzE0XVswXSAhPT0gXCJcIiAmJiB1c2VkYnlbMTRdWzddICE9PSBcIlwiICYmIHVzZWRieVsxNF1bMTRdICE9PSBcIlwiKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJHXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJQXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1s3XVs3XSA9PT0gXCIuXCIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbG93cm93ID0gMTU7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IDE1O1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IDE1OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYz0wOyBjIDwgMTU7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShyIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgaWYgKHIgPCBsb3dyb3cpIHsgbG93cm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAociA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICBpZiAoYyA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IGM7fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gMTUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgciA9IGxvd3JvdzsgciA8PSBoaWdocm93OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IGxvd2NvbDsgYyA8PSBoaWdoY29sOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPCAxNCAmJiBzcXVhcmVzW3IrMV1bY10gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvdy0xXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbN11bN10gIT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIldvcmRzIG11c3QgYmUgY29ubmVjdGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaXNvbmVyUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiR1wiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICBwYXNzZWQ6IHRydWUsXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIlBcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gXCJcIikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgMTUgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IFwiLlwiKSB7bmV3YyA9IGM7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IDE1ICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBcIi5cIikge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VXNlZGJ5W3Jvd11bY29sXSA9IFwiXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcm93XVtjb2xdID0gXCIuXCI7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IFwiXCIpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwYkdhbWVpZFwiPlxyXG4gICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICByZXNjdWVzPXtyZXNjdWVzfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYlVuZGVyYm9hcmRcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gXCJYXCIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPlR3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaXRsZVwiPlRJTEVTPC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlIHJ1bl9jaXJjbGUgcnVuX2NpcmNsZTwvaT4mbmJzcDtQUklTT05FUlMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGUgcnVuX2NpcmNsZSBydW5fY2lyY2xlPC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eSBzZWN1cml0eSBzZWN1cml0eTwvaT4mbmJzcDtHVUFSRFMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5IHNlY3VyaXR5IHNlY3VyaXR5PC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKSB7XHJcbiAgcmV0dXJuICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aWxldmFsdWUgIT09IFwiKlwiID8gLy8gdGhpcyB0aWxlIGlzIGZvciB0aGlzIHBsYXllciwgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfSAvPlxyXG4gICAgICAgIDogLy8gdGhpcyB0aWxlIGlzIGZvciBvcHBvbmVudCwgZG8gbm90IGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=