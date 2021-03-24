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
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();




const racklen = 6;
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const joke = 'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"';
const joke2 = "Two peanuts were walking down a back alley. One was a salted.";
const jokes = [joke, joke2];
const initialtiles5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const squareunused = ".";
const usedbynoone = "";
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
  const {
    0: racksize,
    1: setRacksize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(6); // Default to 6 letter racks

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
    setUpsidedownMode: setUpsidedownMode,
    racksize: racksize,
    setRacksize: setRacksize
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 7
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    isrejoin: isrejoin,
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    nickname: nickname,
    wsmessage: wsmessage,
    client: client,
    upsidedownMode: upsidedownMode,
    racksize: racksize
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 7
  }, this);
}

_s(PrisonBreak, "XXqttcnuE2ONBGCUMfulkKKHGDc=");

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
  setUpsidedownMode // Option for upside down mode
  ,
  racksize,
  setRacksize // Option for rack size

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
      let rs = messageData.racksize;

      if (sendergameid && sendergameid.length > 0 && rs && wt && wt.length > 0) {
        let anyUpdates = false;
        let senderPG = messageData.sender;
        let newGamelist = [...gamelist];
        let gi = getGamelistIndex(sendergameid);
        let newPlayingP = senderPG === "P" ? true : gi > -1 ? gamelist[gi].playingP : false;
        let newPlayingG = senderPG === "G" ? true : gi > -1 ? gamelist[gi].playingG : false;
        let newRacksize = rs;
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

  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
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
          lineNumber: 255,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
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
              lineNumber: 259,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 offset-1 h2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "*Nickname:\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "nickname",
          value: nickname,
          onChange: e => {
            setNickname(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\xA0(*required)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "custom-control custom-checkbox h3 col offset-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          id: "upsidedownModeCheckbox",
          className: "custom-control-input",
          value: upsidedownMode,
          onChange: () => togglerUpsidedownMode()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "custom-control-label",
          for: "upsidedownModeCheckbox",
          children: "\xA0Upside board on opponents turn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-7 offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle h2",
          children: "\xA0PRISONERS\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h3",
          children: "\xA0\xA0Enter a game id, select options and click \"Start Game\"."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 72
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
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
            lineNumber: 290,
            columnNumber: 26
          }, undefined), "\xA0\xA0\xA0Game id:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 11
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
            lineNumber: 297,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h2",
          children: "\xA0\xA0\xA0Rack size:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize6",
          className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(5),
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize6",
          className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(6),
          children: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize7",
          className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(7),
          children: "7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h2",
          children: "(rack size determines board size too)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-7 offset-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle h2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "security"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 44
          }, undefined), "GUARDS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "security"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 92
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "h3",
          children: "\xA0\xA0Find and click the \"Join Game\" button for your game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 141
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game list:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 342,
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
                lineNumber: 352,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Prisoners"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Guards"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Rack size"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Game status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbGamesInProgressRow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameid",
                children: value.gameid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingP ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 17
              }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 19
              }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('P');
                    setRacksize(value.racksize);
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
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
                  lineNumber: 381,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingG ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
                columnNumber: 17
              }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 19
              }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                    setRacksize(value.racksize);
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 396,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 395,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsJoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                    setRacksize(value.racksize);
                  },
                  children: "Join Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 409,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameRacksize",
                children: value.racksize
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 420,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: value.gamestatus
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 423,
                columnNumber: 17
              }, undefined)]
            }, `OtherGame${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 15
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 251,
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
  // need racksize to determine centre and board aarry edge positions
  const edge = props.racksize * 2;
  const middle = props.racksize;
  const addu = props.c === "Q" ? " u" : "";
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" + addu : "pbSquareUsedByGuards" + addu;
  const tdclass = props.c !== squareunused ? usedbyclass : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareRightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareDownArrow" : props.ri === middle && props.ci === middle ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === middle || props.ri === edge) && (props.ci === 0 || props.ci === middle || props.ci === edge) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare1" : "pbSquare2";
  const tdvalue = props.c !== squareunused ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 473,
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
      lineNumber: 482,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 481,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 485,
    columnNumber: 5
  }, undefined);
};

_c3 = Square;

const Board = ({
  onClick,
  squares,
  usedby,
  rcd,
  racksize
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
        onClick: () => onClick(ri, ci),
        racksize: racksize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 516,
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
  upsidedownMode // Option for upside down mode
  ,
  racksize // Option for rack size

}) => {
  _s3();

  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : initialtiles5;
  const initialsquares = Array(edge + 1).fill(Array(edge + 1).fill(squareunused));
  const initialusedby = Array(edge + 1).fill(Array(edge + 1).fill(usedbynoone));
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
  const {
    0: oppname,
    1: setOppname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    from: 'Fred',
    msg: 'Hello Betty'
  }, {
    from: 'Betty',
    msg: 'Hi Fred'
  }]);
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

      while (tempPTiles.length < racksize) {
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
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

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
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != prisonersOrGuards && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

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
          rescues: rescues,
          racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

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

      if (messageData.func === "chat" && messageData.sender != prisonersOrGuards) {
        // Opponent chat message
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
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
    let escapehatches = ["0-0", "0-" + middle, "0-" + edge, middle + "-0", middle + "-" + edge, edge + "-0", edge + "-" + middle, edge + "-" + edge]; // coords of escape hatches

    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }

    let newPtiles = [...ptiles];
    let newTiles = [...tiles];

    while (newPtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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

    while (newGtiles.length < racksize && newTiles.length > 0) {
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

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
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
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let newPtiles = [];
    let newTiles = [...tiles];

    while (newPtiles.length < racksize && newTiles.length > 0) {
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let newGtiles = [];
    let newTiles = [...tiles];

    while (newGtiles.length < racksize && newTiles.length > 0) {
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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
    if (squares[middle][middle] === squareunused) {
      window.alert("First play must hit center square");
      return false;
    }

    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var r = 0; r < numrows; ++r) {
      for (var c = 0; c < numcols; ++c) {
        if (squares[r][c] !== squareunused) {
          if (!(r > 0 && squares[r - 1][c] !== squareunused) && !(c > 0 && squares[r][c - 1] !== squareunused) && !(r < edge && squares[r + 1][c] !== squareunused) && !(c < edge && squares[r][c + 1] !== squareunused)) {
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

        if (lowrow === highrow && r < edge && squares[r + 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c < edge && squares[r][c + 1] !== squareunused) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== squareunused) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol + 1] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow + 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[middle][middle] !== squareunused) {
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
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

            for (var c = col + 1; c < edge + 1 && newc === -1; c++) {
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
            let numrows = racksize * 2 + 1;

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbGameid",
        children: ["Game id: ", gameid, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1282,
          columnNumber: 28
        }, undefined), "Nickname: ", nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1281,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1287,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1285,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1291,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1291,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1290,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1293,
          columnNumber: 11
        }, undefined), "Opponent: ", oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1289,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbPrisoners",
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
          lineNumber: 1299,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1298,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null),
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1315,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1314,
          columnNumber: 13
        }, undefined) : whoseturn === "X" || !upsidedownMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {},
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1326,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1325,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row upsidedown",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {},
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1336,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1335,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1347,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: whoseturn === "P" ? jokes[0] : jokes[1]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1349,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1345,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1312,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbGuards",
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
          lineNumber: 1354,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1353,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1367,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1366,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1370,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1369,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1297,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1279,
    columnNumber: 5
  }, undefined);
};

_s3(Game, "7wO4tgHBtyLwGOfEbZMAcGHW9ZA=");

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
      lineNumber: 1390,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolDivider"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1391,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1395,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1399,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1393,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1389,
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
    lineNumber: 1408,
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
        lineNumber: 1417,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1417,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1416,
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
        lineNumber: 1425,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1425,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1424,
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
        lineNumber: 1433,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1433,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1432,
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
        lineNumber: 1441,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1441,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1440,
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
        lineNumber: 1453,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1452,
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
        lineNumber: 1465,
        columnNumber: 36
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1465,
        columnNumber: 123
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1465,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRackSelectedP u" : "pbTileOnRackSelectedP" : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRackP u" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1466,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1483,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1481,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1464,
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
        lineNumber: 1495,
        columnNumber: 36
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1495,
        columnNumber: 114
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1495,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRackSelectedG u" : "pbTileOnRackSelectedG" : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRackG u" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1496,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1494,
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
      lineNumber: 1519,
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
      lineNumber: 1525,
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
        lineNumber: 1537,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1536,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1540,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1539,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1543,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1542,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1546,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1535,
    columnNumber: 10
  }, this);
}

const Chat = ({
  gameid,
  client,
  nickname,
  msgs,
  setMsgs,
  prisonersOrGuards
}) => {
  _s4();

  const {
    0: nextmsg,
    1: setNextmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleKeyDown = event => {
    event.preventDefault();

    if (event.key === "Enter" && nextmsg.length > 0) {
      let newMsgs = [...msgs, {
        from: nickname,
        msg: nextmsg
      }];
      let sendmsg = nextmsg;
      setMsgs(newMsgs);
      setNextmsg('');
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "chat",
        // send chat message
        sender: prisonersOrGuards,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      }));
      return;
    }

    let chartest = /^[A-Za-z0-9 \.,\(\)\?]$/; // Allow letter, number, space, period, comma, round brackets, question mark

    if (event.key.match(chartest)) {
      let newNextmsg = nextmsg + event.key;
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbChat",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbChatTitle",
      children: "Chat section"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1582,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: msgs.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1587,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1588,
            columnNumber: 13
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1586,
          columnNumber: 11
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1584,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1583,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "Message:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1593,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "pbChatInput",
      name: "nextmsg",
      value: nextmsg,
      onKeyDownCapture: handleKeyDown
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1594,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1581,
    columnNumber: 5
  }, undefined);
};

_s4(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c14 = Chat;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

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
$RefreshReg$(_c14, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbInJhY2tsZW4iLCJtb3Zld2FpdHRpbWUiLCJqb2tlIiwiam9rZTIiLCJqb2tlcyIsImluaXRpYWx0aWxlczUiLCJpbml0aWFsdGlsZXM2IiwiaW5pdGlhbHRpbGVzNyIsInNxdWFyZXVudXNlZCIsInVzZWRieW5vb25lIiwibm9kaXJlY3Rpb24iLCJhdmFpbGFibGVBY3Rpb25Ob25lIiwiYXZhaWxhYmxlQWN0aW9uU3RhcnQiLCJhdmFpbGFibGVBY3Rpb25Kb2luIiwiYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0IiwiUHJpc29uQnJlYWsiLCJpc3Jlam9pbiIsInNldElzcmVqb2luIiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwicHJpc29uZXJzT3JHdWFyZHMiLCJzZXRQcmlzb25lcnNPckd1YXJkcyIsIndzbWVzc2FnZSIsInNldFdzbWVzc2FnZSIsInVwc2lkZWRvd25Nb2RlIiwic2V0VXBzaWRlZG93bk1vZGUiLCJyYWNrc2l6ZSIsInNldFJhY2tzaXplIiwiaG9zdCIsImFjY2VwdE1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsImNsaWVudCIsIkN1c3RvbVNvY2tldCIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJMb2JieSIsImdhbWVsaXN0Iiwic2V0R2FtZWxpc3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJzZW5kZXJnYW1laWQiLCJzZW5kZXJuaWNrbmFtZSIsInd0Iiwid2hvc2V0dXJuIiwicnMiLCJsZW5ndGgiLCJhbnlVcGRhdGVzIiwic2VuZGVyUEciLCJzZW5kZXIiLCJuZXdHYW1lbGlzdCIsImdpIiwiZ2V0R2FtZWxpc3RJbmRleCIsIm5ld1BsYXlpbmdQIiwicGxheWluZ1AiLCJuZXdQbGF5aW5nRyIsInBsYXlpbmdHIiwibmV3UmFja3NpemUiLCJuZXdnYW1lc3RhdHVzIiwibmV3Z2FtZWRhdGEiLCJuaWNrbmFtZVAiLCJuaWNrbmFtZUciLCJnYW1lc3RhdHVzIiwib2xkZ2FtZWRhdGEiLCJ3aW5kb3ciLCJhbGVydCIsImdpZCIsImkiLCJpc1BsYXlpbmdQIiwiYXZhaWxhYmxlQWN0aW9uUCIsImdkIiwiYXZhaWxhYmxlQWN0aW9uRyIsInRvZ2dsZXJVcHNpZGVkb3duTW9kZSIsImN1cnIiLCJzZWxlY3RSYWNrU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJlZGdlIiwibWlkZGxlIiwiYWRkdSIsImMiLCJ1c2VkYnljbGFzcyIsInNxdWFyZXVzZWRieSIsInRkY2xhc3MiLCJyY2QiLCJyaSIsImNpIiwidGR2YWx1ZSIsIm9uQ2xpY2siLCJCb2FyZCIsInNxdWFyZXMiLCJ1c2VkYnkiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJyIiwiR2FtZSIsImluaXRpYWx0aWxlcyIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaW5pdGlhbHVzZWRieSIsInRpbGVzIiwic2V0VGlsZXMiLCJwdGlsZXMiLCJzZXRQdGlsZXMiLCJndGlsZXMiLCJzZXRHdGlsZXMiLCJzZXRTcXVhcmVzIiwic2V0VXNlZGJ5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInNldFJjZCIsInBhc3NlZCIsInNldFBhc3NlZCIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJmcm9tIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1ZXN0R2FtZURhdGEiLCJjbGVhckludGVydmFsIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInNvcnQiLCJzZW5kIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJuZXdDaGF0bXNncyIsInNlbmRtc2ciLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiaGFuZGxlR3VhcmRUaWxlQ2xpY2siLCJlbmRQcmlzb25lcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVzIiwic25hcHVzZWRieSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwic3dhcEd1YXJkc1RpbGVzIiwibnVtcm93cyIsIm51bWNvbHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwicGFyc2VJbnQiLCJzcGxpdCIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Vuc2VlblRpbGVzIiwidW5zZWVuVGlsZXMiLCJvdGhlcnRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJUaWxlRXhjaGFuZ2VCdXR0b24iLCJQYXNzUGxheUJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJQbGF5ZXJUaWxlIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJzaG93QWN0aW9uQnV0dG9ucyIsIkd1YXJkcyIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwib25DbGlja1RpbGVSZWNhbGwiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwib25DbGlja1Bhc3NQbGF5IiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwiY2hhcnRlc3QiLCJuZXdOZXh0bXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQWhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEtBQXJCLEMsQ0FBNEI7O0FBQzVCLE1BQU1DLElBQUksR0FBRyxnQkFBZ0Isb0JBQWhCLEdBQXVDLG1CQUF2QyxHQUE0RCxvQkFBNUQsR0FBbUYsR0FBaEc7QUFDQSxNQUFNQyxLQUFLLEdBQUcsK0RBQWQ7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0YsSUFBRCxFQUFPQyxLQUFQLENBQWQ7QUFDQSxNQUFNRSxhQUFhLEdBQUcsQ0FDcEIsR0FEb0IsRUFDZCxHQURjLEVBQ1IsR0FEUSxFQUNGLEdBREUsRUFDSSxHQURKLEVBRXBCLEdBRm9CLEVBR3BCLEdBSG9CLEVBSXBCLEdBSm9CLEVBSWQsR0FKYyxFQUtwQixHQUxvQixFQUtkLEdBTGMsRUFLUixHQUxRLEVBS0YsR0FMRSxFQUtJLEdBTEosRUFLVSxH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SSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxzQkFBMkJyRCxLQUFLLENBQUN6QztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsV0FBVSxjQUFhMkMsS0FBTSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWFFO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxXQUFLLEVBQUVvSyxPQUZUO0FBR0Usc0JBQWdCLEVBQUU1QztBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUJELENBbEREOztJQUFNeUMsSTs7T0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuYjc3YWEwZDM5MGZmMDQ1NDNjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgcmFja2xlbiA9IDY7XHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlID0gJ0VzY2FwZWU6IFwiSScgKyBcIidtIGZyZWUhIEknbSBmcmVlIVwiICsgJ1wiLiBMaXR0bGUga2lkOiBcIkknKyBcIidtIGZvdXIhIEknbSBmb3VyIVwiICsgJ1wiJztcclxuY29uc3Qgam9rZTIgPSBcIlR3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC5cIjtcclxuY29uc3Qgam9rZXMgPSBbam9rZSwgam9rZTJdO1xyXG5jb25zdCBpbml0aWFsdGlsZXM1ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDUgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLCAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLCAgXCJWXCIsXHJcbiAgXCJXXCIsICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIiwgIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA3IGxldHRlciByYWNrIG1vZGVcclxuY29uc3Qgc3F1YXJldW51c2VkID0gXCIuXCI7XHJcbmNvbnN0IHVzZWRieW5vb25lID0gXCJcIjtcclxuY29uc3Qgbm9kaXJlY3Rpb24gPSBcIlwiO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Ob25lID0gMDtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uU3RhcnQgPSAxO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Kb2luID0gMjtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID0gMztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpc3Jlam9pbiwgc2V0SXNyZWpvaW5dID0gdXNlU3RhdGUoZmFsc2UpIC8vIFVzZWQgd2hlbiBwbGF5ZXIgbG9zZXMgY29ubmVjdGlvbiBhbmQgcmVqb2luc1xyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmlja25hbWUsIHNldE5pY2tuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbWVzc2FnZSwgc2V0V3NtZXNzYWdlXSA9IHVzZVN0YXRlKCcnKSAvLyBMYXRlc3QgbWVzc2FnZXMgZnJvbSB0aGUgd2Vic29ja2V0XHJcbiAgY29uc3QgW3Vwc2lkZWRvd25Nb2RlLCBzZXRVcHNpZGVkb3duTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JhY2tzaXplLCBzZXRSYWNrc2l6ZV0gPSB1c2VTdGF0ZSg2KTsgLy8gRGVmYXVsdCB0byA2IGxldHRlciByYWNrc1xyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgLy8gUmVhY3QgaXMgaGFyZCB0byB1bmRlcnN0YW5kLiBJZiBJIHJlZmVyZW5jZSBwcmlzb25lcnNPckd1YXJkcyBoZXJlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gICAgc2V0V3NtZXNzYWdlKG1lc3NhZ2UuZGF0YSlcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8TG9iYnlcclxuICAgICAgICBzZXRJc3Jlam9pbj17c2V0SXNyZWpvaW59XHJcbiAgICAgICAgd3NtZXNzYWdlPXt3c21lc3NhZ2V9XHJcbiAgICAgICAgLy8gY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgc2V0R2FtZWlkPXtzZXRHYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHNldE5pY2tuYW1lPXtzZXROaWNrbmFtZX1cclxuICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcz17c2V0UHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgdXBzaWRlZG93bk1vZGU9e3Vwc2lkZWRvd25Nb2RlfVxyXG4gICAgICAgIHNldFVwc2lkZWRvd25Nb2RlPXtzZXRVcHNpZGVkb3duTW9kZX1cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgc2V0UmFja3NpemU9e3NldFJhY2tzaXplfVxyXG4gICAgICAvPlxyXG4gICAgOlxyXG4gICAgICA8R2FtZVxyXG4gICAgICAgIGlzcmVqb2luPXtpc3Jlam9pbn1cclxuICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHdzbWVzc2FnZT17d3NtZXNzYWdlfVxyXG4gICAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIHVwc2lkZWRvd25Nb2RlPXt1cHNpZGVkb3duTW9kZX1cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2JieSA9ICh7c2V0SXNyZWpvaW4sIHdzbWVzc2FnZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0UHJpc29uZXJzT3JHdWFyZHNcclxuICAsIHVwc2lkZWRvd25Nb2RlLCBzZXRVcHNpZGVkb3duTW9kZSAvLyBPcHRpb24gZm9yIHVwc2lkZSBkb3duIG1vZGVcclxuICAsIHJhY2tzaXplLCBzZXRSYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gIH0pID0+IHtcclxuICBjb25zdCBbZ2FtZWxpc3QsIHNldEdhbWVsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBHYW1lIGluZm8gYnkgZ2FtZSBpZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBsZXQgc2VuZGVyZ2FtZWlkID0gbWVzc2FnZURhdGEuZ2FtZWlkO1xyXG4gICAgICBsZXQgc2VuZGVybmlja25hbWUgPSBtZXNzYWdlRGF0YS5uaWNrbmFtZTtcclxuICAgICAgbGV0IHd0ID0gbWVzc2FnZURhdGEud2hvc2V0dXJuO1xyXG4gICAgICBsZXQgcnMgPSBtZXNzYWdlRGF0YS5yYWNrc2l6ZTtcclxuICAgICAgaWYgKHNlbmRlcmdhbWVpZCAmJiBzZW5kZXJnYW1laWQubGVuZ3RoID4gMCAmJiBycyAmJiB3dCAmJiB3dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGFueVVwZGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc2VuZGVyUEcgPSBtZXNzYWdlRGF0YS5zZW5kZXI7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVsaXN0ID0gWy4uLmdhbWVsaXN0XTtcclxuICAgICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KHNlbmRlcmdhbWVpZCk7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdQID0gc2VuZGVyUEcgPT09IFwiUFwiID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gXCJHXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdSYWNrc2l6ZSA9IHJzO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiUFwiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiR1wiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHdWFyZHMgdHVyblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld2dhbWVkYXRhID0ge1xyXG4gICAgICAgICAgZ2FtZWlkOiBzZW5kZXJnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZVA6IHNlbmRlclBHID09PSBcIlBcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gXCJHXCIgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0csXHJcbiAgICAgICAgICByYWNrc2l6ZTogbmV3UmFja3NpemVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnJhY2tzaXplICE9PSBuZXdnYW1lZGF0YS5yYWNrc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRXJyb3IgcHJvY2Vzc2luZyBsb2JieSBtZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgcmV0dXJuIGdpIDwgMCA/IGZhbHNlIDogZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG9nZ2xlclVwc2lkZWRvd25Nb2RlKCkge1xyXG4gICAgc2V0VXBzaWRlZG93bk1vZGUoKGN1cnIpID0+ICFjdXJyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgIHNldFJhY2tzaXplKG5ld1JhY2tzaXplKTtcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgUHJpc29uIEJyZWFrIExvYmJ5XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG9mZnNldC0xIGgyXCI+XHJcbiAgICAgICAgPGxhYmVsPipOaWNrbmFtZTombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxzcGFuPiZuYnNwOygqcmVxdWlyZWQpPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBoMyBjb2wgb2Zmc2V0LTJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ1cHNpZGVkb3duTW9kZUNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Vwc2lkZWRvd25Nb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZXJVcHNpZGVkb3duTW9kZSgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwidXBzaWRlZG93bk1vZGVDaGVja2JveFwiPiZuYnNwO1Vwc2lkZSBib2FyZCBvbiBvcHBvbmVudHMgdHVybjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZSBoMlwiPiZuYnNwO1BSSVNPTkVSUyZuYnNwOzwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJoM1wiPiZuYnNwOyZuYnNwO0VudGVyIGEgZ2FtZSBpZCwgc2VsZWN0IG9wdGlvbnMgYW5kIGNsaWNrIFwiU3RhcnQgR2FtZVwiLjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImgyXCI+PHNwYW4gY2xhc3M9XCJoMVwiPiZuYnNwOzwvc3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDtHYW1lIGlkOiZuYnNwO1xyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUGxheWluZ1AoZ2FtZWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcmlzb25lcnMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPiZuYnNwOyZuYnNwOyZuYnNwO1JhY2sgc2l6ZTo8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNlwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDUgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgNVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTZcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA2ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDYpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDZcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU3XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNyA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg3KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA3XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDJcIj4ocmFjayBzaXplIGRldGVybWluZXMgYm9hcmQgc2l6ZSB0b28pPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGUgaDJcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5PC9pPkdVQVJEUzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VjdXJpdHk8L2k+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImgzXCI+Jm5ic3A7Jm5ic3A7RmluZCBhbmQgY2xpY2sgdGhlIFwiSm9pbiBHYW1lXCIgYnV0dG9uIGZvciB5b3VyIGdhbWUuPC9zcGFuPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxoMz5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCBjbGljayB0aGUgXCJSZWNvbm5lY3RcIiBidXR0b24gZm9yIHlvdXIgZ2FtZSBpZC48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8aDE+R2FtZSBsaXN0OjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMlwiPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCIgY29sU3Bhbj1cIjJcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIiBjb2xTcGFuPVwiMlwiPkd1YXJkczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPlJhY2sgc2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPkdhbWUgc3RhdHVzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtnYW1lbGlzdC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2BPdGhlckdhbWUke2luZGV4fWB9IGNsYXNzTmFtZT1cInBiR2FtZXNJblByb2dyZXNzUm93XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVpZFwiPnt2YWx1ZS5nYW1laWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5UGxheWVySW5kaWNhdG9yXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57dmFsdWUucGxheWluZ1AgPyBcImNoZWNrX2NpcmNsZVwiIDogXCJjYW5jZWxcIn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uTm9uZVwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzUmVqb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1N0YXJ0JHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5UGxheWVySW5kaWNhdG9yXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57dmFsdWUucGxheWluZ0cgPyBcImNoZWNrX2NpcmNsZVwiIDogXCJjYW5jZWxcIn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uTm9uZVwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzUmVqb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBKb2luIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZVJhY2tzaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZS5yYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAge3ZhbHVlLmdhbWVzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGJhY2tncm91bmRzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgLy8gbmVlZCByY2QgdG8gZGlzcGxheSBzZWxlY3RlZCBkaXJlY3Rpb24gYXJyb3cgd2hlbiBhcHByb3ByaWF0ZVxyXG4gIC8vIG5lZWQgcmFja3NpemUgdG8gZGV0ZXJtaW5lIGNlbnRyZSBhbmQgYm9hcmQgYWFycnkgZWRnZSBwb3NpdGlvbnNcclxuICBjb25zdCBlZGdlID0gKHByb3BzLnJhY2tzaXplICogMik7XHJcbiAgY29uc3QgbWlkZGxlID0gcHJvcHMucmFja3NpemU7XHJcbiAgY29uc3QgYWRkdSA9IHByb3BzLmMgPT09IFwiUVwiID8gXCIgdVwiIDogXCJcIjtcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiICsgYWRkdVxyXG4gICAgICA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIiArIGFkZHU7XHJcbiAgY29uc3QgdGRjbGFzcyA9IFxyXG4gICAgcHJvcHMuYyAhPT0gc3F1YXJldW51c2VkXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSBtaWRkbGUgJiYgcHJvcHMuY2kgPT09IG1pZGRsZVxyXG4gICAgICA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gbWlkZGxlIHx8IHByb3BzLnJpID09PSBlZGdlKSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gbWlkZGxlIHx8IHByb3BzLmNpID09PSBlZGdlKVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlMVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IHByb3BzLmNcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlUmlnaHRBcnJvd1wiXHJcbiAgICAgID8gXCLinqFcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA/IFwi4qyHXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgPyA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXJzPC9pPlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgID8gXCLqkJVcIiAvL/CfkqtcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwiLlwiLy8gRGlzcGxheSB0cnVseSBtdWNrZWQgdXAgaWYgSSB1c2UgZW1wdHkgc3RyaW5nXHJcbiAgICAgIDogXCIuXCI7Ly8gRGl0dG8uIFRoZSBkb3QgYmxlbmRzIGluIHdpdGggdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbiAgcmV0dXJuIChcclxuICAgIHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiID9cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA6XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHt0ZHZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSwgcmNkLCByYWNrc2l6ZSB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfSBjbGFzc05hbWU9XCJwYlNxdWFyZVwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luLCBwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCBuaWNrbmFtZSwgd3NtZXNzYWdlLCBjbGllbnRcclxuICAsIHVwc2lkZWRvd25Nb2RlIC8vIE9wdGlvbiBmb3IgdXBzaWRlIGRvd24gbW9kZVxyXG4gICwgcmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICB9KSA9PiB7XHJcbiAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gaW5pdGlhbHRpbGVzNiA6IHJhY2tzaXplID09PSA3ID8gaW5pdGlhbHRpbGVzNyA6IGluaXRpYWx0aWxlczU7XHJcbiAgY29uc3QgaW5pdGlhbHNxdWFyZXMgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHNxdWFyZXVudXNlZCkpO1xyXG4gIGNvbnN0IGluaXRpYWx1c2VkYnkgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHVzZWRieW5vb25lKSk7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsc3F1YXJlc10pO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHVzZWRieV0pO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICBjb25zdCBbcGFzc2VkLCBzZXRQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB0cnVlIHdoZW4gb3Bwb25lbnQganVzdCBwYXNzZWQ7IGlmIGJvdGggcGFzcyB0aGUgZ2FtZSBlbmRzXHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFtdLFxyXG4gICAgZ3RpbGVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbe2Zyb206ICdGcmVkJywgbXNnOiAnSGVsbG8gQmV0dHknfSwge2Zyb206ICdCZXR0eScsIG1zZzogJ0hpIEZyZWQnfV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIElmIGl0IGlzIG5vdCBteSB0dXJuICYmIHRoZSBnYW1lIGhhcyBub3QgZW5kZWRcclxuICAgICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBcIlhcIikge1xyXG4gICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcnZhbDogcHJpc29uZXJzT3JHdWFyZHM9XCIgKyBwcmlzb25lcnNPckd1YXJkcyArIFwiIHdob3NldHVybj1cIiArIHdob3NldHVybiArIFwiIGF0IFwiICsgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgZ2FtZSBkYXRhIGluIGNhc2Ugb3Bwb25lbnQgbW92ZWQgYW5kIHdlIG1pc3NlZCB0aGUgdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH0sIG1vdmV3YWl0dGltZSk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgIGlmICghaXNyZWpvaW4gJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIFByaXNvbmVyIGlzIHN0YXJ0aW5nIHRoZSBnYW1lIHNvIHBpY2sgcmFja3NcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLmluaXRpYWxzcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIC8vIFByaXNvbmVyIHJlam9pbiBvciBndWFyZCBqb2luIG9yIGd1YXJkIHJlam9pblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2gge31cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgb3BwbmFtZSA9PT0gXCJcIiAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZSAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gT3Bwb25lbnQgc2VudCBhIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZWlyIG5pY2tuYW1lIGFuZCBJIGRvbid0IGhhdmUgdGhlaXIgbmlja25hbWUgeWV0XHJcbiAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5uaWNrbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcGFzc2VkOiBwYXNzZWQsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7IFxyXG4gICAgICAgIC8vIG9wcG9uZW50IHByb3ZpZGVkIGdhbWUgZGF0YSBhbmQgdGhpcyBwbGF5ZXIgaXMgc3RpbGwgd2FpdGluZyB0byBzZWUgb3Bwb25lbnQgbW92ZVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIpIHsgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIikgeyAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IGNoYXQgbWVzc2FnZVxyXG4gICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IHNxdWFyZXVudXNlZCkgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgIG5ld1Jvd1tjaV0gPVxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVybjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3JpXV07XHJcbiAgICAgIG5ld1Jvd1tjaV0gPSBzcXVhcmV1bnVzZWQ7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB1c2VkYnlub29uZTtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgKTtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuXHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7IC8vIG1ha2UgcGxheWVyIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgaWYgKHNxdWFyZXNbcmldW2NpXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gbm9kaXJlY3Rpb24gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiZFwiLCBjaGFuZ2UgdG8gbm9kaXJlY3Rpb25cclxuICAgICAgIFwiclwiOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBub2RpcmVjdGlvbiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICBcIjAtMFwiLFxyXG4gICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gXCJHXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gXCJQXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiR1wiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBcIlBcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1ttaWRkbGVdW21pZGRsZV0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCBudW1yb3dzOyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYz0wOyBjIDwgbnVtY29sczsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKHIgPCBlZGdlICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEoYyA8IGVkZ2UgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBzcXVhcmV1bnVzZWQpXHJcbiAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgaWYgKHIgPCBsb3dyb3cpIHsgbG93cm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAociA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICBpZiAoYyA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IGM7fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IG51bXJvd3MpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgciA9IGxvd3JvdzsgciA8PSBoaWdocm93OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IGxvd2NvbDsgYyA8PSBoaWdoY29sOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPCBlZGdlICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgZWRnZSAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93LTFdW2xvd2NvbF0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlc1toaWdocm93KzFdW2xvd2NvbF0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbbWlkZGxlXVttaWRkbGVdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IHBhc3NlZCA/IFwiWFwiIDogXCJHXCI7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lIGJ5IHVzaW5nIFwiWFwiXHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFBhc3NlZCh0cnVlKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogc25hcHNob3QucHRpbGVzLCAvLyBwcmlzb25lcnMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHBhc3NlZDogdHJ1ZSxcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiUFwiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IHRydWVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gbm9kaXJlY3Rpb24pIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiclwiKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IGVkZ2UgKyAxICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBzcXVhcmV1bnVzZWQpIHtuZXdjID0gYzt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBsZXQgbnVtcm93cyA9IChyYWNrc2l6ZSoyKSsxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHIrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3JdW2NvbF0gPT09IHNxdWFyZXVudXNlZCkge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgfVxyXG4gICAgICBuZXdVc2VkYnlbcm93XVtjb2xdID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgIG5ld1NxdWFyZXNbcm93XVtjb2xdID0gc3F1YXJldW51c2VkO1xyXG4gICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICBpZiAoZGlyICE9PSBub2RpcmVjdGlvbikge1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiR2FtZWlkXCI+XHJcbiAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfTxicj48L2JyPlxyXG4gICAgICAgICAgTmlja25hbWU6IHtuaWNrbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IHBidGl0bGVcIj5cclxuICAgICAgICAgIFByaXNvbiBCcmVha1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIE9wcG9uZW50OiB7b3BwbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICByZXNjdWVzPXtyZXNjdWVzfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgd2hvc2V0dXJuID09PSBcIlhcIiB8fCAhdXBzaWRlZG93bk1vZGUgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHVwc2lkZWRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGJVbmRlcmJvYXJkXCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IFwiWFwiID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD57d2hvc2V0dXJuID09PSBcIlBcIiA/IGpva2VzWzBdIDogam9rZXNbMV19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Vuc2VlblRpbGVzID0gKHByb3BzKSA9PiB7IC8vIHRpbGVzID0gdGlsZXMgaW4gYmFnLCBvdGhlcnRpbGVzID0gdGlsZXMgb24gb3RoZXIgcGxheWVycyByYWNrXHJcbiAgbGV0IHVuc2VlblRpbGVzID0gWy4uLnByb3BzLnRpbGVzLCAuLi5wcm9wcy5vdGhlcnRpbGVzXTtcclxuICB1bnNlZW5UaWxlcy5zb3J0KCk7XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpdGxlXCI+VElMRVM8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAge3Vuc2VlblRpbGVzLm1hcCgodCwgdGkpID0+IChcclxuICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gdW5zZWVuVGlsZXNbdGkgLSAxXSA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3QgPT09IFwiUVwiID8gXCJwYlRpbGVwb29sVGlsZSB1XCIgOiBcInBiVGlsZXBvb2xUaWxlXCJ9Pnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMudGlsZWNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3Byb3BzLnRpbGV2YWx1ZX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+Jm5ic3A7RmluaXNoIFR1cm48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT4mbmJzcDtSZWNhbGwgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+Jm5ic3A7U3dhcCBUaWxlczwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90X2ludGVyZXN0ZWQ8L2k+Jm5ic3A7UGFzcyBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRnJlZWRQcmlzb25lcnMgPSAoY291bnQpID0+IHtcclxuICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoXCJub25zZW5zZVwiKTtcclxuICAgIHJldHVybiBkdW1iLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfSBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkknbSBmcmVlISBJJ20gZnJlZSFcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvYnJlYWtmcmVlLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGUgcnVuX2NpcmNsZSBydW5fY2lyY2xlPC9pPiZuYnNwO1BSSVNPTkVSUyZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZSBydW5fY2lyY2xlIHJ1bl9jaXJjbGU8L2k+PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgID8gdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFAgdVwiIDogXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICA6IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwicGJUaWxlT25SYWNrUCB1XCIgOiAgXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eSBzZWN1cml0eSBzZWN1cml0eTwvaT4mbmJzcDtHVUFSRFMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5IHNlY3VyaXR5IHNlY3VyaXR5PC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEcgdVwiIDogXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXCJwYlRpbGVPblJhY2tHIHVcIiA6ICBcInBiVGlsZU9uUmFja0dcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpXHJcbiAgICAgIDogPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBsYXllclRpbGUocHJvcHMpIHtcclxuICByZXR1cm4gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRpbGV2YWx1ZSAhPT0gXCIqXCIgPyAvLyB0aGlzIHRpbGUgaXMgZm9yIHRoaXMgcGxheWVyLCBhbGxvdyBjbGlja1xyXG4gICAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9IC8+XHJcbiAgICAgICAgOiAvLyB0aGlzIHRpbGUgaXMgZm9yIG9wcG9uZW50LCBkbyBub3QgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9IC8+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25EaXZcIj5cclxuICAgIDxwPlxyXG4gICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlUmVjYWxsQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuY29uc3QgQ2hhdCA9ICh7Z2FtZWlkLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzLCBzZXRNc2dzLCBwcmlzb25lcnNPckd1YXJkc30pID0+IHtcclxuICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgbmV3TXNncyA9IFsuLi5tc2dzLCB7ZnJvbTogbmlja25hbWUsIG1zZzogbmV4dG1zZ31dXHJcbiAgICAgIGxldCBzZW5kbXNnID0gbmV4dG1zZztcclxuICAgICAgc2V0TXNncyhuZXdNc2dzKTtcclxuICAgICAgc2V0TmV4dG1zZygnJyk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJjaGF0XCIsIC8vIHNlbmQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLCAvLyB3aG8gc2VudCBpdFxyXG4gICAgICAgICAgc2VuZG1zZzogc2VuZG1zZyAvLyB0aGUgbWVzc2FnZSB0eXBlZCBpbiB0aGUgY2hhdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjaGFydGVzdCA9IC9eW0EtWmEtejAtOSBcXC4sXFwoXFwpXFw/XSQvOyAvLyBBbGxvdyBsZXR0ZXIsIG51bWJlciwgc3BhY2UsIHBlcmlvZCwgY29tbWEsIHJvdW5kIGJyYWNrZXRzLCBxdWVzdGlvbiBtYXJrXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGNoYXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbmV3TmV4dG1zZyA9IG5leHRtc2cgKyBldmVudC5rZXk7XHJcbiAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYkNoYXRcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJDaGF0VGl0bGVcIj5DaGF0IHNlY3Rpb248L3NwYW4+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7bXNncy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQ2hhdEZyb21cIj57dmFsdWUuZnJvbX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxsYWJlbD5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwYkNoYXRJbnB1dFwiXHJcbiAgICAgICAgbmFtZT1cIm5leHRtc2dcIlxyXG4gICAgICAgIHZhbHVlPXtuZXh0bXNnfVxyXG4gICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XHJcbiAgICAgIC8+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=