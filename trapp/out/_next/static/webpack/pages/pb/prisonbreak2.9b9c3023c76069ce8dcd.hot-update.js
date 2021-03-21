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




const racklen = 6;
const numrows = racklen + racklen + 1;
const middlerow = racklen;
const lastrow = numrows - 1;
const numcols = numrows;
const middlecol = racklen;
const lastcol = numcols - 1;
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const joke = 'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"';
const joke2 = "Two peanuts were walking down a back alley. One was a salted.";
const jokes = [joke, joke2];
const escapehatches = ["0-0", "0-" + middlecol, "0-" + lastcol, middlerow + "-0", middlerow + "-" + lastcol, lastrow + "-0", lastrow + "-" + middlecol, lastrow + "-" + lastcol]; // coords of escape hatches

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "L", "M", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const squareunused = ".";
const usedbynoone = "";
const initialsquares = Array(numrows).fill(Array(numcols).fill(squareunused));
const initialusedby = Array(numrows).fill(Array(numcols).fill(usedbynoone));
const nodirection = "";
const availableActionNone = 0;
const availableActionStart = 1;
const availableActionJoin = 2;
const availableActionReconnect = 3;
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
    0: nickname,
    1: setNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: prisonersOrGuards,
    1: setPrisonersOrGuards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: wsmessage,
    1: setWsmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // Latest messages from the websocket

  const {
    0: upsidedownMode,
    1: setUpsidedownMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let host = false ? undefined : 'ws://localhost:5000';

  const acceptMessage = message => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    setWsmessage(message.data);
  };

  const {
    0: client
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new _ws__WEBPACK_IMPORTED_MODULE_3__["default"](host, acceptMessage));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => client.connect(), []);
  return prisonersOrGuards === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Lobby, {
    setIsrejoin: setIsrejoin,
    wsmessage: wsmessage // client={client}
    ,
    gameid: gameid,
    setGameid: setGameid,
    nickname: nickname,
    setNickname: setNickname,
    setPrisonersOrGuards: setPrisonersOrGuards,
    upsidedownMode: upsidedownMode,
    setUpsidedownMode: setUpsidedownMode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 7
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    isrejoin: isrejoin,
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    nickname: nickname,
    wsmessage: wsmessage,
    client: client,
    upsidedownMode: upsidedownMode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 7
  }, this);
}

_s(PrisonBreak, "EUL/uE8+U8MqSdvPyhhyDctQDE0=");

_c = PrisonBreak;

const Lobby = ({
  setIsrejoin,
  wsmessage,
  gameid,
  setGameid,
  nickname,
  setNickname,
  setPrisonersOrGuards,
  upsidedownMode,
  setUpsidedownMode
}) => {
  _s2();

  const {
    0: gamelist,
    1: setGamelist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Game info by game id

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);

  function processLobbyMessage(message) {
    try {
      let messageData = JSON.parse(message);
      let sendergameid = messageData.gameid;
      let sendernickname = messageData.nickname;
      let wt = messageData.whoseturn;

      if (sendergameid && sendergameid.length > 0 && wt && wt.length > 0) {
        let anyUpdates = false;
        let senderPG = messageData.sender;
        let newGamelist = [...gamelist];
        let gi = getGamelistIndex(sendergameid);
        let newPlayingP = senderPG === "P" ? true : gi > -1 ? gamelist[gi].playingP : false;
        let newPlayingG = senderPG === "G" ? true : gi > -1 ? gamelist[gi].playingG : false;
        let newgamestatus = "Unknown";

        if (wt === "X") {
          newgamestatus = "Game over";
        } else if (wt === "P") {
          newgamestatus = "Prisoners turn";
        } else if (wt === "G") {
          newgamestatus = "Guards turn";
        }

        let newgamedata = {
          gameid: sendergameid,
          nicknameP: senderPG === "P" ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
          nicknameG: senderPG === "G" ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
          gamestatus: newgamestatus,
          playingP: newPlayingP,
          playingG: newPlayingG
        };

        if (gi < 0) {
          // Game not in list yet, put it in the list
          anyUpdates = true;
          newGamelist = [...newGamelist, newgamedata];
        } else {
          // Game is in the list, check for needed updates
          let oldgamedata = gamelist[gi];

          if (oldgamedata.nicknameP !== newgamedata.nicknameP || oldgamedata.nicknameG !== newgamedata.nicknameG || oldgamedata.gamestatus !== newgamedata.gamestatus || oldgamedata.playingP !== newgamedata.playingP || oldgamedata.playingG !== newgamedata.playingG) {
            anyUpdates = true;
            newGamelist[gi] = newgamedata;
          }
        }

        if (anyUpdates) {
          setGamelist(newGamelist);
        }
      }
    } catch {
      window.alert("Error processing lobby message");
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

  function togglerUpsidedownMode() {
    setUpsidedownMode(curr => !curr);
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
          lineNumber: 230,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
              lineNumber: 234,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 offset-1 h2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "*Nickname:\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "nickname",
          value: nickname,
          onChange: e => {
            setNickname(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\xA0(*required)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-7 offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle h2",
          children: "\xA0PRISONERS\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h3",
          children: "\xA0\xA0Enter a game id, select options and click \"Start Game\"."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 72
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-7 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          class: "h2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            class: "h1",
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 26
          }, undefined), "\xA0\xA0\xA0Game id:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "custom-control custom-checkbox h3 col offset-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "checkbox",
              id: "upsidedownModeCheckbox",
              className: "custom-control-input",
              value: upsidedownMode,
              onChange: () => togglerUpsidedownMode()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "custom-control-label",
              for: "upsidedownModeCheckbox",
              children: "\xA0Upside board on opponents turn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "startgame",
              className: "pbLobbyActionButton",
              onClick: function () {
                if (gameid.length > 0) {
                  if (isPlayingP(gameid)) {
                    window.alert("Prisoners already playing that game");
                  } else {
                    setPrisonersOrGuards('P');
                  }
                }
              },
              children: "Start Game"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-7 offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle h2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "security"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 44
          }, undefined), "GUARDS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "security"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 92
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h3",
          children: "\xA0\xA0Find and click the \"Join Game\" button for your game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 141
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game list:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
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
                children: "Game ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Prisoners"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Guards"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Game status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbGamesInProgressRow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameid",
                children: value.gameid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingP ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 17
              }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 19
              }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('P');
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersStart${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value.gameid);
                    setPrisonersOrGuards('P');
                  },
                  children: "Start Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingG ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 19
              }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsJoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                  },
                  children: "Join Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: value.gamestatus
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, undefined)]
            }, `OtherGame${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 15
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 10
  }, undefined);
};

_s2(Lobby, "S8yjMzgHtesJI/ynf+v9T6HCgMc=");

_c2 = Lobby;

const Square = props => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating backgrounds on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  // need rcd to display selected direction arrow when appropriate
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
  const tdclass = props.c !== squareunused ? usedbyclass : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareRightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareDownArrow" : props.ri === middlerow && props.ci === middlecol ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === middlerow || props.ri === lastrow) && (props.ci === 0 || props.ci === middlecol || props.ci === lastcol) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare1" : "pbSquare2";
  const tdvalue = props.c !== squareunused ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 417,
    columnNumber: 9
  }, undefined) : tdclass === "pbSquareEscapeHatch" ? "ꐕ" //💫
  : props.ri % 2 === props.ci % 2 ? "." // Display truly mucked up if I use empty string
  : "."; // Ditto. The dot blends in with the background image.

  return tdclass === "pbSquareEscapeHatch" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "material-icons",
      children: "run_circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 425,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 429,
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
        lineNumber: 439,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 459,
    columnNumber: 5
  }, undefined);
};

_c4 = Board;

const Game = ({
  isrejoin,
  prisonersOrGuards,
  gameid,
  nickname,
  wsmessage,
  client,
  upsidedownMode
}) => {
  _s3();

  const initialtiles = racklen === 6 ? initialtiles6 : initialtiles7;
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, nodirection]);
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
    }, movewaittime); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && prisonersOrGuards === "P") {
      // Prisoner is starting the game so pick racks
      let tempPTiles = [];
      let tempGTiles = [];
      let tempTiles = [...initialtiles];

      while (tempPTiles.length < racklen) {
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
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn
      }));
    } else {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
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
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn
      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) {
        // Opponent requested game info
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
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
        setRcd(-1, -1, nodirection);
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
        setRcd(-1, -1, nodirection);
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

    if (newSelection > -1 && squarevalue === squareunused) {
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
      newRow[ci] = squareunused;
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = usedbynoone;
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, nodirection); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === squareunused) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
      rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
      rcd[2] === "d" ? nodirection : //click same square that was "d", change to nodirection
      "r"; // click same square that was nodirection, change to "r"

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

    while (newPtiles.length < racklen && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over

    if (usedby[0][0] !== usedbynoone && usedby[0][middlecol] !== usedbynoone && usedby[0][lastcol] !== usedbynoone && usedby[middlerow][0] !== usedbynoone && usedby[middlerow][lastcol] !== usedbynoone && usedby[lastrow][0] !== usedbynoone && usedby[lastrow][middlecol] !== usedbynoone && usedby[lastrow][lastcol] !== usedbynoone) {
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
      nickname: nickname,
      // player nickname
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

    while (newGtiles.length < racklen && newTiles.length > 0) {
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

    if (usedby[0][0] !== usedbynoone && usedby[0][middlecol] !== usedbynoone && usedby[0][lastcol] !== usedbynoone && usedby[middlerow][0] !== usedbynoone && usedby[middlerow][lastcol] !== usedbynoone && usedby[lastrow][0] !== usedbynoone && usedby[lastrow][middlecol] !== usedbynoone && usedby[lastrow][lastcol] !== usedbynoone) {
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
      nickname: nickname,
      // player nickname
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
    if (tiles.length < racklen) {
      window.alert("Need " + racklen + " tiles in the bag to exchange");
      return;
    }

    let newPtiles = [];
    let newTiles = [...tiles];

    while (newPtiles.length < racklen && newTiles.length > 0) {
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
      nickname: nickname,
      // player nickname
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
    if (tiles.length < racklen) {
      window.alert("Need " + racklen + " tiles in the bag to exchange");
      return;
    }

    let newGtiles = [];
    let newTiles = [...tiles];

    while (newGtiles.length < racklen && newTiles.length > 0) {
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
      nickname: nickname,
      // player nickname
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
    if (squares[middlerow][middlecol] === squareunused) {
      window.alert("First play must hit center square");
      return false;
    }

    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var r = 0; r < numrows; ++r) {
      for (var c = 0; c < numcols; ++c) {
        if (squares[r][c] !== squareunused) {
          if (!(r > 0 && squares[r - 1][c] !== squareunused) && !(c > 0 && squares[r][c - 1] !== squareunused) && !(r < lastrow && squares[r + 1][c] !== squareunused) && !(c < lastcol && squares[r][c + 1] !== squareunused)) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][c] === squareunused) {
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

    if (lowrow === numrows) {
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
        if (squares[r][c] === squareunused) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[r][c] !== squareunused) {
          playthru = true;
        }

        if (lowrow === highrow && r > 0 && squares[r - 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowrow === highrow && r < lastrow && squares[r + 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c < lastcol && squares[r][c + 1] !== squareunused) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== squareunused) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < lastcol && snapshot.squares[lowrow][highcol + 1] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < lastrow && snapshot.squares[highrow + 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[middlerow][middlecol] !== squareunused) {
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
      nickname: nickname,
      // player nickname
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
      nickname: nickname,
      // player nickname
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
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      sender: prisonersOrGuards,
      whoseturn: whoseturn,
      // for lobby to pick up this message
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

        if (row > -1 && col > -1 && dir !== nodirection) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === "r") {
            // playing rightwards
            let newc = -1;

            for (var c = col + 1; c < numcols && newc === -1; c++) {
              if (squares[row][c] === squareunused) {
                newc = c;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, nodirection];
            } else {
              newRcd = [row, newc, "r"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            return;
          }

          if (dir === "d") {
            // playing downwards
            let newr = -1;

            for (var r = row + 1; r < numrows && newr === -1; r++) {
              if (squares[r][col] === squareunused) {
                newr = r;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, nodirection];
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
      let newRcd = [-1, -1, nodirection];
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

      newUsedby[row][col] = usedbynoone;
      newSquares[row][col] = squareunused;
      let dir = rcd[2];

      if (dir !== nodirection) {
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
        className: "col-2 pbGameid",
        children: ["Game id: ", gameid, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1186,
          columnNumber: 28
        }, undefined), "Nickname: ", nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1185,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1191,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1189,
        columnNumber: 9
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
              lineNumber: 1195,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1195,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1194,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1193,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1184,
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
          lineNumber: 1201,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1200,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1217,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1216,
          columnNumber: 13
        }, undefined) : whoseturn === "X" || !upsidedownMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1227,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1226,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row upsidedown",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1236,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1235,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1246,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: whoseturn === "P" ? jokes[0] : jokes[1]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1248,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1244,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1214,
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
          lineNumber: 1253,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1252,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1266,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1265,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1183,
    columnNumber: 5
  }, undefined);
};

_s3(Game, "QUkl5+1SmKyhtDGIjxCXWx9B43M=");

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
      lineNumber: 1286,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolDivider"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1287,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1291,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1295,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1289,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1285,
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
    lineNumber: 1304,
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
        lineNumber: 1313,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1313,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1312,
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
        lineNumber: 1321,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1321,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1320,
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
        lineNumber: 1329,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1329,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1328,
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
        lineNumber: 1337,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1337,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1336,
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
        lineNumber: 1349,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1348,
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
        lineNumber: 1361,
        columnNumber: 36
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1361,
        columnNumber: 123
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1361,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1362,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1379,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1377,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1360,
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
        lineNumber: 1391,
        columnNumber: 36
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1391,
        columnNumber: 114
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1391,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1392,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1390,
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
      lineNumber: 1415,
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
      lineNumber: 1421,
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
        lineNumber: 1433,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1432,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1436,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1435,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1439,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1438,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1442,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1441,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1431,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbInJhY2tsZW4iLCJudW1yb3dzIiwibWlkZGxlcm93IiwibGFzdHJvdyIsIm51bWNvbHMiLCJtaWRkbGVjb2wiLCJsYXN0Y29sIiwibW92ZXdhaXR0aW1lIiwiam9rZSIsImpva2UyIiwiam9rZXMiLCJlc2NhcGVoYXRjaGVzIiwiaW5pdGlhbHRpbGVzNiIsImluaXRpYWx0aWxlczciLCJzcXVhcmV1bnVzZWQiLCJ1c2VkYnlub29uZSIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaW5pdGlhbHVzZWRieSIsIm5vZGlyZWN0aW9uIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvblN0YXJ0IiwiYXZhaWxhYmxlQWN0aW9uSm9pbiIsImF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCIsIlByaXNvbkJyZWFrIiwiaXNyZWpvaW4iLCJzZXRJc3Jlam9pbiIsInVzZVN0YXRlIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibmlja25hbWUiLCJzZXROaWNrbmFtZSIsInByaXNvbmVyc09yR3VhcmRzIiwic2V0UHJpc29uZXJzT3JHdWFyZHMiLCJ3c21lc3NhZ2UiLCJzZXRXc21lc3NhZ2UiLCJ1cHNpZGVkb3duTW9kZSIsInNldFVwc2lkZWRvd25Nb2RlIiwiaG9zdCIsImFjY2VwdE1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsImNsaWVudCIsIkN1c3RvbVNvY2tldCIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJMb2JieSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJzZW5kZXJnYW1laWQiLCJzZW5kZXJuaWNrbmFtZSIsInd0Iiwid2hvc2V0dXJuIiwibGVuZ3RoIiwiYW55VXBkYXRlcyIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJnaSIsImdldEdhbWVsaXN0SW5kZXgiLCJuZXdQbGF5aW5nUCIsInBsYXlpbmdQIiwibmV3UGxheWluZ0ciLCJwbGF5aW5nRyIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsIndpbmRvdyIsImFsZXJ0IiwiZ2lkIiwiaSIsImlzUGxheWluZ1AiLCJhdmFpbGFibGVBY3Rpb25QIiwiZ2QiLCJhdmFpbGFibGVBY3Rpb25HIiwidG9nZ2xlclVwc2lkZWRvd25Nb2RlIiwiY3VyciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJ1c2VkYnljbGFzcyIsInNxdWFyZXVzZWRieSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJvbkNsaWNrIiwiQm9hcmQiLCJzcXVhcmVzIiwidXNlZGJ5IiwicmVuZGVyU3F1YXJlIiwicmVuZGVyUm93IiwiciIsIkdhbWUiLCJpbml0aWFsdGlsZXMiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1ZXN0R2FtZURhdGEiLCJjbGVhckludGVydmFsIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInNvcnQiLCJzZW5kIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiaGFuZGxlR3VhcmRUaWxlQ2xpY2siLCJlbmRQcmlzb25lcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJuZXdSZXNjdWVzIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJlbmRHdWFyZHNUdXJuIiwic25hcHNxdWFyZXMiLCJzbmFwdXNlZGJ5Iiwic25hcHB0aWxlcyIsInNuYXBndGlsZXMiLCJzd2FwUHJpc29uZXJzVGlsZXMiLCJzd2FwR3VhcmRzVGlsZXMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwicGFyc2VJbnQiLCJzcGxpdCIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Vuc2VlblRpbGVzIiwidW5zZWVuVGlsZXMiLCJvdGhlcnRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJUaWxlRXhjaGFuZ2VCdXR0b24iLCJQYXNzUGxheUJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJQbGF5ZXJUaWxlIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJzaG93QWN0aW9uQnV0dG9ucyIsIkd1YXJkcyIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwib25DbGlja1RpbGVSZWNhbGwiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwib25DbGlja1Bhc3NQbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELE9BQU8sR0FBR0EsT0FBVixHQUFvQixDQUFwQztBQUNBLE1BQU1FLFNBQVMsR0FBR0YsT0FBbEI7QUFDQSxNQUFNRyxPQUFPLEdBQUdGLE9BQU8sR0FBRyxDQUExQjtBQUNBLE1BQU1HLE9BQU8sR0FBR0gsT0FBaEI7QUFDQSxNQUFNSSxTQUFTLEdBQUdMLE9BQWxCO0FBQ0EsTUFBTU0sT0FBTyxHQUFHRixPQUFPLEdBQUcsQ0FBMUI7QUFDQSxNQUFNRyxZQUFZLEdBQUcsS0FBckIsQyxDQUE0Qjs7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLGdCQUFnQixvQkFBaEIsR0FBdUMsbUJBQXZDLEdBQTRELG9CQUE1RCxHQUFtRixHQUFoRztBQUNBLE1BQU1DLEtBQUssR0FBRywrREFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDRixJQUFELEVBQU9DLEtBQVAsQ0FBZDtBQUNBLE1BQU1FLGFBQWEsR0FBRyxDQUNwQixLQURvQixFQUVwQixPQUFPTixTQUZhLEVBR3BCLE9BQU9DLE9BSGEsRUFJcEJKLFNBQVMsR0FBRyxJQUpRLEVBS3BCQSxTQUFTLEdBQUcsR0FBWixHQUFrQkksT0FMRSxFQU1wQkgsT0FBTyxHQUFHLElBTlUsRUFPcEJBLE9BQU8sR0FBRyxHQUFWLEdBQWdCRSxTQVBJLEVBUXBC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UyxFQUFFQyxTQUhiO0FBSUUsYUFBTyxFQUFFLE1BQU03SSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxhQUFiO0FBSmpCLE9BQ08ySSxTQUFTLEdBQUdwRCxNQUFNLENBQUNNLFNBQUQsQ0FEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBY0QsR0FmRDtBQWdCRDs7QUFFRCxTQUFTMEQsaUJBQVQsQ0FBMkJ4SSxLQUEzQixFQUFrQztBQUNoQyxzQkFBTztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNMO0FBQUEsNkJBQ0UscUVBQUMsZ0JBQUQ7QUFBa0IsZUFBTyxFQUFFLE1BQU1BLEtBQUssQ0FBQzBJLGlCQUFOO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFJTDtBQUFBLDZCQUNFLHFFQUFDLGdCQUFEO0FBQWtCLGVBQU8sRUFBRSxNQUFNMUksS0FBSyxDQUFDMkksaUJBQU47QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSyxlQU9MO0FBQUEsNkJBQ0UscUVBQUMsa0JBQUQ7QUFBb0IsZUFBTyxFQUFFLE1BQU0zSSxLQUFLLENBQUM0SSxtQkFBTjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBLLGVBVUw7QUFBQSw2QkFDRSxxRUFBQyxjQUFEO0FBQWdCLGVBQU8sRUFBRSxNQUFNNUksS0FBSyxDQUFDNkksZUFBTjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBY0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsyLjliOWMzMDIzYzc2MDY5Y2U4ZGNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDdXN0b21Tb2NrZXQgZnJvbSBcIi4uLy4uL3dzXCI7XHJcbmNvbnN0IHJhY2tsZW4gPSA2O1xyXG5jb25zdCBudW1yb3dzID0gcmFja2xlbiArIHJhY2tsZW4gKyAxO1xyXG5jb25zdCBtaWRkbGVyb3cgPSByYWNrbGVuO1xyXG5jb25zdCBsYXN0cm93ID0gbnVtcm93cyAtIDE7XHJcbmNvbnN0IG51bWNvbHMgPSBudW1yb3dzO1xyXG5jb25zdCBtaWRkbGVjb2wgPSByYWNrbGVuO1xyXG5jb25zdCBsYXN0Y29sID0gbnVtY29scyAtIDE7XHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlID0gJ0VzY2FwZWU6IFwiSScgKyBcIidtIGZyZWUhIEknbSBmcmVlIVwiICsgJ1wiLiBMaXR0bGUga2lkOiBcIkknKyBcIidtIGZvdXIhIEknbSBmb3VyIVwiICsgJ1wiJztcclxuY29uc3Qgam9rZTIgPSBcIlR3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC5cIjtcclxuY29uc3Qgam9rZXMgPSBbam9rZSwgam9rZTJdO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLVwiICsgbWlkZGxlY29sLFxyXG4gIFwiMC1cIiArIGxhc3Rjb2wsXHJcbiAgbWlkZGxlcm93ICsgXCItMFwiLFxyXG4gIG1pZGRsZXJvdyArIFwiLVwiICsgbGFzdGNvbCxcclxuICBsYXN0cm93ICsgXCItMFwiLFxyXG4gIGxhc3Ryb3cgKyBcIi1cIiArIG1pZGRsZWNvbCxcclxuICBsYXN0cm93ICsgXCItXCIgKyBsYXN0Y29sXHJcbl07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLCAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsICBcIkJcIixcclxuICBcIkNcIiwgIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLCAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLCAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBzcXVhcmV1bnVzZWQgPSBcIi5cIjtcclxuY29uc3QgdXNlZGJ5bm9vbmUgPSBcIlwiO1xyXG5jb25zdCBpbml0aWFsc3F1YXJlcyA9IEFycmF5KG51bXJvd3MpLmZpbGwoQXJyYXkobnVtY29scykuZmlsbChzcXVhcmV1bnVzZWQpKTtcclxuY29uc3QgaW5pdGlhbHVzZWRieSA9IEFycmF5KG51bXJvd3MpLmZpbGwoQXJyYXkobnVtY29scykuZmlsbCh1c2VkYnlub29uZSkpO1xyXG5jb25zdCBub2RpcmVjdGlvbiA9IFwiXCI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbk5vbmUgPSAwO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25TdGFydCA9IDE7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbkpvaW4gPSAyO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgPSAzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lzcmVqb2luLCBzZXRJc3Jlam9pbl0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gVXNlZCB3aGVuIHBsYXllciBsb3NlcyBjb25uZWN0aW9uIGFuZCByZWpvaW5zXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuaWNrbmFtZSwgc2V0Tmlja25hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaXNvbmVyc09yR3VhcmRzLCBzZXRQcmlzb25lcnNPckd1YXJkc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbd3NtZXNzYWdlLCBzZXRXc21lc3NhZ2VdID0gdXNlU3RhdGUoJycpIC8vIExhdGVzdCBtZXNzYWdlcyBmcm9tIHRoZSB3ZWJzb2NrZXRcclxuICBjb25zdCBbdXBzaWRlZG93bk1vZGUsIHNldFVwc2lkZWRvd25Nb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIC8vIFJlYWN0IGlzIGhhcmQgdG8gdW5kZXJzdGFuZC4gSWYgSSByZWZlcmVuY2UgcHJpc29uZXJzT3JHdWFyZHMgaGVyZSBpdCB3aWxsIGFsd2F5cyBiZSB0aGUgaW5pdGlhbCB2YWx1ZS5cclxuICAgIHNldFdzbWVzc2FnZShtZXNzYWdlLmRhdGEpXHJcbiAgfVxyXG4gIGNvbnN0IFtjbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgcHJpc29uZXJzT3JHdWFyZHMgPT09ICcnID9cclxuICAgICAgPExvYmJ5XHJcbiAgICAgICAgc2V0SXNyZWpvaW49e3NldElzcmVqb2lufVxyXG4gICAgICAgIHdzbWVzc2FnZT17d3NtZXNzYWdlfVxyXG4gICAgICAgIC8vIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIHNldEdhbWVpZD17c2V0R2FtZWlkfVxyXG4gICAgICAgIG5pY2tuYW1lPXtuaWNrbmFtZX1cclxuICAgICAgICBzZXROaWNrbmFtZT17c2V0Tmlja25hbWV9XHJcbiAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHM9e3NldFByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgIHVwc2lkZWRvd25Nb2RlPXt1cHNpZGVkb3duTW9kZX1cclxuICAgICAgICBzZXRVcHNpZGVkb3duTW9kZT17c2V0VXBzaWRlZG93bk1vZGV9XHJcbiAgICAgIC8+XHJcbiAgICA6XHJcbiAgICAgIDxHYW1lXHJcbiAgICAgICAgaXNyZWpvaW49e2lzcmVqb2lufVxyXG4gICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgICBuaWNrbmFtZT17bmlja25hbWV9XHJcbiAgICAgICAgd3NtZXNzYWdlPXt3c21lc3NhZ2V9XHJcbiAgICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgdXBzaWRlZG93bk1vZGU9e3Vwc2lkZWRvd25Nb2RlfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTG9iYnkgPSAoe3NldElzcmVqb2luLCB3c21lc3NhZ2UsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldFByaXNvbmVyc09yR3VhcmRzLCB1cHNpZGVkb3duTW9kZSwgc2V0VXBzaWRlZG93bk1vZGV9KSA9PiB7XHJcbiAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gR2FtZSBpbmZvIGJ5IGdhbWUgaWRcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0xvYmJ5TWVzc2FnZShtc2cpO1xyXG4gIH0sW3dzbWVzc2FnZV0pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgbGV0IHNlbmRlcmdhbWVpZCA9IG1lc3NhZ2VEYXRhLmdhbWVpZDtcclxuICAgICAgbGV0IHNlbmRlcm5pY2tuYW1lID0gbWVzc2FnZURhdGEubmlja25hbWU7XHJcbiAgICAgIGxldCB3dCA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgaWYgKHNlbmRlcmdhbWVpZCAmJiBzZW5kZXJnYW1laWQubGVuZ3RoID4gMCAmJiB3dCAmJiB3dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGFueVVwZGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc2VuZGVyUEcgPSBtZXNzYWdlRGF0YS5zZW5kZXI7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVsaXN0ID0gWy4uLmdhbWVsaXN0XTtcclxuICAgICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KHNlbmRlcmdhbWVpZCk7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdQID0gc2VuZGVyUEcgPT09IFwiUFwiID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gXCJHXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiUFwiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiR1wiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHdWFyZHMgdHVyblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld2dhbWVkYXRhID0ge1xyXG4gICAgICAgICAgZ2FtZWlkOiBzZW5kZXJnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZVA6IHNlbmRlclBHID09PSBcIlBcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gXCJHXCIgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0dcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nR1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRXJyb3IgcHJvY2Vzc2luZyBsb2JieSBtZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgcmV0dXJuIGdpIDwgMCA/IGZhbHNlIDogZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG9nZ2xlclVwc2lkZWRvd25Nb2RlKCkge1xyXG4gICAgc2V0VXBzaWRlZG93bk1vZGUoKGN1cnIpID0+ICFjdXJyKTtcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgUHJpc29uIEJyZWFrIExvYmJ5XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG9mZnNldC0xIGgyXCI+XHJcbiAgICAgICAgPGxhYmVsPipOaWNrbmFtZTombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxzcGFuPiZuYnNwOygqcmVxdWlyZWQpPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGUgaDJcIj4mbmJzcDtQUklTT05FUlMmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiaDNcIj4mbmJzcDsmbmJzcDtFbnRlciBhIGdhbWUgaWQsIHNlbGVjdCBvcHRpb25zIGFuZCBjbGljayBcIlN0YXJ0IEdhbWVcIi48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG9mZnNldC0xXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoMlwiPjxzcGFuIGNsYXNzPVwiaDFcIj4mbmJzcDs8L3NwYW4+Jm5ic3A7Jm5ic3A7Jm5ic3A7R2FtZSBpZDombmJzcDtcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggaDMgY29sIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInVwc2lkZWRvd25Nb2RlQ2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Vwc2lkZWRvd25Nb2RlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVyVXBzaWRlZG93bk1vZGUoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwidXBzaWRlZG93bk1vZGVDaGVja2JveFwiPiZuYnNwO1Vwc2lkZSBib2FyZCBvbiBvcHBvbmVudHMgdHVybjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGlzUGxheWluZ1AoZ2FtZWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlByaXNvbmVycyBhbHJlYWR5IHBsYXlpbmcgdGhhdCBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZSBoMlwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VjdXJpdHk8L2k+R1VBUkRTPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eTwvaT48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiaDNcIj4mbmJzcDsmbmJzcDtGaW5kIGFuZCBjbGljayB0aGUgXCJKb2luIEdhbWVcIiBidXR0b24gZm9yIHlvdXIgZ2FtZS48L3NwYW4+XHJcbiAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgPGgzPklmIHlvdSBsb3N0IGNvbm5lY3Rpb24sIGZpbmQgYW5kIGNsaWNrIHRoZSBcIlJlY29ubmVjdFwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lIGlkLjwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxoMT5HYW1lIGxpc3Q6PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG9mZnNldC0yXCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPkdhbWUgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIiBjb2xTcGFuPVwiMlwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiIGNvbFNwYW49XCIyXCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCI+R2FtZSBzdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicGJHYW1lc0luUHJvZ3Jlc3NSb3dcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZWlkXCI+e3ZhbHVlLmdhbWVpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlQbGF5ZXJJbmRpY2F0b3JcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnt2YWx1ZS5wbGF5aW5nUCA/IFwiY2hlY2tfY2lyY2xlXCIgOiBcImNhbmNlbFwifTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25Ob25lXCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNSZWpvaW4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1N0YXJ0JHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5UGxheWVySW5kaWNhdG9yXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57dmFsdWUucGxheWluZ0cgPyBcImNoZWNrX2NpcmNsZVwiIDogXCJjYW5jZWxcIn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uTm9uZVwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNKb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kcyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPSBcclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IHVzZWRieWNsYXNzXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJyXCJcclxuICAgICAgPyBcInBiU3F1YXJlUmlnaHRBcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJkXCJcclxuICAgICAgPyBcInBiU3F1YXJlRG93bkFycm93XCJcclxuICAgICAgOiBwcm9wcy5yaSA9PT0gbWlkZGxlcm93ICYmIHByb3BzLmNpID09PSBtaWRkbGVjb2xcclxuICAgICAgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IG1pZGRsZXJvdyB8fCBwcm9wcy5yaSA9PT0gbGFzdHJvdykgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IG1pZGRsZWNvbCB8fCBwcm9wcy5jaSA9PT0gbGFzdGNvbClcclxuICAgICAgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCJwYlNxdWFyZTFcIlxyXG4gICAgICA6IFwicGJTcXVhcmUyXCI7XHJcbiAgY29uc3QgdGR2YWx1ZSA9XHJcbiAgICBwcm9wcy5jICE9PSBzcXVhcmV1bnVzZWRcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZVJpZ2h0QXJyb3dcIlxyXG4gICAgICA/IFwi4p6hXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRG93bkFycm93XCJcclxuICAgICAgPyBcIuKsh1wiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgID8gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyczwvaT5cclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA/IFwi6pCVXCIgLy/wn5KrXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcIi5cIi8vIERpc3BsYXkgdHJ1bHkgbXVja2VkIHVwIGlmIEkgdXNlIGVtcHR5IHN0cmluZ1xyXG4gICAgICA6IFwiLlwiOy8vIERpdHRvLiBUaGUgZG90IGJsZW5kcyBpbiB3aXRoIHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxyXG4gIHJldHVybiAoXHJcbiAgICB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgOlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7dGR2YWx1ZX1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfSBjbGFzc05hbWU9XCJwYlNxdWFyZVwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luLCBwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCBuaWNrbmFtZSwgd3NtZXNzYWdlLCBjbGllbnQsIHVwc2lkZWRvd25Nb2RlfSkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tsZW4gPT09IDYgPyBpbml0aWFsdGlsZXM2IDogaW5pdGlhbHRpbGVzNztcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWxzcXVhcmVzXSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdXNlZGJ5XSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxub2RpcmVjdGlvbl0pO1xyXG4gIGNvbnN0IFtwYXNzZWQsIHNldFBhc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHRydWUgd2hlbiBvcHBvbmVudCBqdXN0IHBhc3NlZDsgaWYgYm90aCBwYXNzIHRoZSBnYW1lIGVuZHNcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgIHB0aWxlczogW10sXHJcbiAgICBndGlsZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHtcclxuICAgICAgICAvLyBJIGFtIHdhaXRpbmcgZm9yIG9wcG9uZW50IG1vdmUgdG8gY29tZSB0aHJvdWdoIGJ1dCBzb21ldGltZXMgaXQgZ2V0cyBtaXNzZWQgKG5vIGlkZWEgd2h5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJ2YWw6IHByaXNvbmVyc09yR3VhcmRzPVwiICsgcHJpc29uZXJzT3JHdWFyZHMgKyBcIiB3aG9zZXR1cm49XCIgKyB3aG9zZXR1cm4gKyBcIiBhdCBcIiArIERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9LCBtb3Zld2FpdHRpbWUpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICBpZiAoIWlzcmVqb2luICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBQcmlzb25lciBpcyBzdGFydGluZyB0aGUgZ2FtZSBzbyBwaWNrIHJhY2tzXHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja2xlbikge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLmluaXRpYWxzcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVyblxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIC8vIFByaXNvbmVyIHJlam9pbiBvciBndWFyZCBqb2luIG9yIGd1YXJkIHJlam9pblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2gge31cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVyblxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHBhc3NlZDogcGFzc2VkLFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHsgXHJcbiAgICAgICAgLy8gb3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGFuZCB0aGlzIHBsYXllciBpcyBzdGlsbCB3YWl0aW5nIHRvIHNlZSBvcHBvbmVudCBtb3ZlXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIikgeyAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiKSB7IC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBzcXVhcmV1bnVzZWQpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gc3F1YXJldW51c2VkO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcblxyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gXCJyXCIgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggXCJyXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgcmNkWzJdID09PSBcImRcIiA/IG5vZGlyZWN0aW9uIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcImRcIiwgY2hhbmdlIHRvIG5vZGlyZWN0aW9uXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgbm9kaXJlY3Rpb24sIGNoYW5nZSB0byBcInJcIlxyXG4gICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlzb25lclRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1YXJkVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrbGVuICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBcIkdcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW21pZGRsZWNvbF0gICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW2xhc3Rjb2xdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZXJvd11bMF0gICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZXJvd11bbGFzdGNvbF0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2xhc3Ryb3ddWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2xhc3Ryb3ddW21pZGRsZWNvbF0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2xhc3Ryb3ddW2xhc3Rjb2xdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja2xlbiAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gXCJQXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVjb2xdICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtsYXN0Y29sXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVyb3ddWzBdICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVyb3ddW2xhc3Rjb2xdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtsYXN0cm93XVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtsYXN0cm93XVttaWRkbGVjb2xdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtsYXN0cm93XVtsYXN0Y29sXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tsZW4pIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tsZW4gKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tsZW4gJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJHXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tsZW4pIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tsZW4gKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tsZW4gJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJQXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1ttaWRkbGVyb3ddW21pZGRsZWNvbF0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IG51bXJvd3M7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjPTA7IGMgPCBudW1jb2xzOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBpZiAoIShyID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEociA8IGxhc3Ryb3cgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShjIDwgbGFzdGNvbCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IHNxdWFyZXVudXNlZClcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgIC8vIFRoaXMgc3F1YXJlIHdhcyBwbGF5ZWQgb24gdGhpcyB0dXJuXHJcbiAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChyID4gaGlnaHJvdykgeyBoaWdocm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAoYyA8IGxvd2NvbCkgeyBsb3djb2wgPSBjO31cclxuICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gbnVtcm93cykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjID0gbG93Y29sOyBjIDw9IGhpZ2hjb2w7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA8IGxhc3Ryb3cgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCBsYXN0Y29sICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCBsYXN0Y29sICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgbGFzdHJvdyAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUgJiYgc25hcHNob3Quc3F1YXJlc1ttaWRkbGVyb3ddW21pZGRsZWNvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIkdcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICBwYXNzZWQ6IHRydWUsXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIlBcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICBwYXNzZWQ6IHRydWVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBub2RpcmVjdGlvbikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgbnVtY29scyAmJiBuZXdjID09PSAtMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcm93XVtjXSA9PT0gc3F1YXJldW51c2VkKSB7bmV3YyA9IGM7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIpIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHJvdyArIDE7IHIgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBzcXVhcmV1bnVzZWQpIHtuZXdyID0gcjt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBcImRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VXNlZGJ5W3Jvd11bY29sXSA9IHVzZWRieW5vb25lO1xyXG4gICAgICBuZXdTcXVhcmVzW3Jvd11bY29sXSA9IHNxdWFyZXVudXNlZDtcclxuICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgaWYgKGRpciAhPT0gbm9kaXJlY3Rpb24pIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYkdhbWVpZFwiPlxyXG4gICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH08YnI+PC9icj5cclxuICAgICAgICAgIE5pY2tuYW1lOiB7bmlja25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICByZXNjdWVzPXtyZXNjdWVzfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgd2hvc2V0dXJuID09PSBcIlhcIiB8fCAhdXBzaWRlZG93bk1vZGUgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB1cHNpZGVkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYlVuZGVyYm9hcmRcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gXCJYXCIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPnt3aG9zZXR1cm4gPT09IFwiUFwiID8gam9rZXNbMF0gOiBqb2tlc1sxXX08L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaXRsZVwiPlRJTEVTPC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlIHJ1bl9jaXJjbGUgcnVuX2NpcmNsZTwvaT4mbmJzcDtQUklTT05FUlMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGUgcnVuX2NpcmNsZSBydW5fY2lyY2xlPC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eSBzZWN1cml0eSBzZWN1cml0eTwvaT4mbmJzcDtHVUFSRFMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5IHNlY3VyaXR5IHNlY3VyaXR5PC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKSB7XHJcbiAgcmV0dXJuICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aWxldmFsdWUgIT09IFwiKlwiID8gLy8gdGhpcyB0aWxlIGlzIGZvciB0aGlzIHBsYXllciwgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfSAvPlxyXG4gICAgICAgIDogLy8gdGhpcyB0aWxlIGlzIGZvciBvcHBvbmVudCwgZG8gbm90IGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=