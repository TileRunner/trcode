self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/lobby.js":
/*!****************************!*\
  !*** ./pages/fyb/lobby.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createGame */ "./pages/fyb/createGame.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\lobby.js",
    _s = $RefreshSig$();

 //import Link from "next/link";




const Lobby = ({
  ismobile,
  setWhereto,
  client,
  thisisme,
  setParticipant,
  wsmessage,
  nickname,
  setNickname,
  gameid,
  setGameid
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Welcome!');
  const {
    0: gamelist,
    1: setGamelist
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: gotNickname,
    1: setGotNickname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: mainAction,
    1: setMainAction
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMELIST) {
        setGamelist(messageData.gamelist);
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        /*
        If server sends me a game then it has decided I am a player but I have not marked myself as a player yet
        If I had marked mysefl as a player then fryyourbrain.cs would have called <Game> not <Lobby>
        I do not mark myself as a player when sending create/join/rejoin in case there is a blip in the server
        */
        if (messageData.thisisme === thisisme) {
          // Make sure this game is for me
          setGameid(messageData.game.gameid);
          setSnat(messageData.snat);
          setParticipant(_lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PARTY_TYPE_PLAYER);
        } else {
          setSnat(`Why am I getting game data from ${messageData.nickname} for game ${messageData.gameid}?`);
        }
      } else if (messageData.func === 'gameidtaken') {
        setSnat('That game ID is already taken');
      } else if (messageData.func === 'gameidunknown') {
        setSnat('That game ID is not being used');
      } else if (messageData.func === 'gamefull') {
        setSnat('That game is full');
      } else if (messageData.func === 'notinthatgame') {
        setSnat('You are not in that game');
      } else if (messageData.func === 'otherclientfound') {
        setSnat('That nickname is already in that game');
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    id: "fybLobby",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Fry Your Brain", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined), !gotNickname && getNickname(nickname, setNickname, setGotNickname), gotNickname && gamelist && displayGamelist(gamelist, client, thisisme, nickname), gotNickname && !mainAction && getMainAction(setMainAction), gotNickname && mainAction === 'C' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createGame__WEBPACK_IMPORTED_MODULE_3__.default, {
      client: client,
      thisisme: thisisme,
      nickname: nickname,
      gameid: gameid,
      setGameid: setGameid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fivepxdivider",
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};

_s(Lobby, "nfotbJKDxGqOnJ3FbBBCX9/oEHQ=");

_c = Lobby;

function displayGamelist(gamelist, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: "Game List:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "trTable",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Ppl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Pts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "By"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "State"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: gamelist.map((game, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.gameid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [game.players.length, "/", game.numPlayers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.goal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.players[0].nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: isPlayerInArray(game.players, nickname) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              type: "submit",
              onClick: () => {
                sendRejoinGameRequest(client, thisisme, game.gameid, nickname);
              },
              children: "REJOIN"
            }, `rejoinButton${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 37
            }, this) : game.players.length < game.numPlayers ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              type: "submit",
              onClick: () => {
                sendJoinGameRequest(client, thisisme, game.gameid, nickname);
              },
              children: "JOIN"
            }, `joinButton${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 37
            }, this) : 'In progress'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 12
  }, this);
}

function getNickname(nickname, setNickname, setGotNickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nickname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "nickname",
        value: nickname,
        onChange: e => {
          setNickname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this), nickname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        type: "submit",
        onClick: () => {
          let trimmed = nickname.trim();
          setNickname(trimmed);
          setGotNickname(true);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 12
  }, this);
}

function getMainAction(setMainAction) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "trButton",
      type: "submit",
      id: "chooseCreateGame",
      onClick: () => {
        setMainAction('C');
      },
      children: "CREATE A GAME"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 12
  }, this);
}

function sendJoinGameRequest(client, thisisme, gameid, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'join',
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now()
  });
}

function sendRejoinGameRequest(client, thisisme, gameid, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'rejoin',
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now()
  });
}

function isPlayerInArray(players, nickname) {
  let found = false;

  for (let i = 0; i < players.length; i++) {
    if (players[i].nickname === nickname) {
      found = true;
    }
  }

  return found;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5IiwiaXNtb2JpbGUiLCJzZXRXaGVyZXRvIiwiY2xpZW50IiwidGhpc2lzbWUiLCJzZXRQYXJ0aWNpcGFudCIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwic2V0Tmlja25hbWUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsImdvdE5pY2tuYW1lIiwic2V0R290Tmlja25hbWUiLCJtYWluQWN0aW9uIiwic2V0TWFpbkFjdGlvbiIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwiYyIsImZ1bmMiLCJnYW1lIiwiZ2V0Tmlja25hbWUiLCJkaXNwbGF5R2FtZWxpc3QiLCJnZXRNYWluQWN0aW9uIiwibWFwIiwiaW5kZXgiLCJwbGF5ZXJzIiwibGVuZ3RoIiwibnVtUGxheWVycyIsImdvYWwiLCJpc1BsYXllckluQXJyYXkiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiLCJzZW5kSm9pbkdhbWVSZXF1ZXN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbW1lZCIsInRyaW0iLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImZvdW5kIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUFXQyxZQUFYO0FBQXVCQyxRQUF2QjtBQUErQkMsVUFBL0I7QUFBeUNDLGdCQUF6QztBQUF5REMsV0FBekQ7QUFBb0VDLFVBQXBFO0FBQThFQyxhQUE5RTtBQUEyRkMsUUFBM0Y7QUFBbUdDO0FBQW5HLENBQUQsS0FBbUg7QUFBQTs7QUFDN0gsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLFVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0osK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQU8sa0RBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUMsR0FBRyxHQUFHZixTQUFWO0FBQ0EsUUFBSWUsR0FBRyxLQUFLLEVBQVosRUFBZ0JDLG1CQUFtQixDQUFDRCxHQUFELENBQW5CO0FBQ25CLEdBSFEsRUFHUCxDQUFDZixTQUFELENBSE8sQ0FBVDs7QUFJQSxXQUFTZ0IsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQ2xDLFFBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQVgsQ0FBbEI7O0FBQ0EsUUFBSUMsV0FBVyxDQUFDRyxJQUFaLEtBQXFCQywrREFBekIsRUFBNEM7QUFDeEMsVUFBSUosV0FBVyxDQUFDSyxJQUFaLEtBQXFCRCxpRUFBekIsRUFBOEM7QUFDMUNiLG1CQUFXLENBQUNTLFdBQVcsQ0FBQ1YsUUFBYixDQUFYO0FBQ0gsT0FGRCxNQUVPLElBQUlVLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQkQsaUVBQXpCLEVBQThDO0FBQ2pEO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCLFlBQUlKLFdBQVcsQ0FBQ3BCLFFBQVosS0FBeUJBLFFBQTdCLEVBQXVDO0FBQUU7QUFDckNNLG1CQUFTLENBQUNjLFdBQVcsQ0FBQ00sSUFBWixDQUFpQnJCLE1BQWxCLENBQVQ7QUFDQUcsaUJBQU8sQ0FBQ1ksV0FBVyxDQUFDYixJQUFiLENBQVA7QUFDQU4sd0JBQWMsQ0FBQ3VCLGlFQUFELENBQWQ7QUFDSCxTQUpELE1BSU87QUFDSGhCLGlCQUFPLENBQUUsbUNBQWtDWSxXQUFXLENBQUNqQixRQUFTLGFBQVlpQixXQUFXLENBQUNmLE1BQU8sR0FBeEYsQ0FBUDtBQUNIO0FBQ0osT0FiTSxNQWFBLElBQUllLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQixhQUF6QixFQUF3QztBQUMzQ2pCLGVBQU8sQ0FBQywrQkFBRCxDQUFQO0FBQ0gsT0FGTSxNQUVBLElBQUlZLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQixlQUF6QixFQUEwQztBQUM3Q2pCLGVBQU8sQ0FBQyxnQ0FBRCxDQUFQO0FBQ0gsT0FGTSxNQUVBLElBQUlZLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQixVQUF6QixFQUFxQztBQUN4Q2pCLGVBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0gsT0FGTSxNQUVBLElBQUlZLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQixlQUF6QixFQUEwQztBQUM3Q2pCLGVBQU8sQ0FBQywwQkFBRCxDQUFQO0FBQ0gsT0FGTSxNQUVBLElBQUlZLFdBQVcsQ0FBQ0ssSUFBWixLQUFxQixrQkFBekIsRUFBNkM7QUFDaERqQixlQUFPLENBQUMsdUNBQUQsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNIQSxlQUFPLENBQUUsc0JBQXFCVyxPQUFRLEVBQS9CLENBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixNQUFFLEVBQUMsVUFBakM7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsZ0RBRUk7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGVBQU8sRUFBRSxNQUFNO0FBQUNyQixvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDSTtBQUFBLGtCQUFRUztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLEVBVUssQ0FBQ0ssV0FBRCxJQUFnQmUsV0FBVyxDQUFDeEIsUUFBRCxFQUFXQyxXQUFYLEVBQXdCUyxjQUF4QixDQVZoQyxFQVdLRCxXQUFXLElBQUlGLFFBQWYsSUFBMkJrQixlQUFlLENBQUNsQixRQUFELEVBQVdYLE1BQVgsRUFBbUJDLFFBQW5CLEVBQTZCRyxRQUE3QixDQVgvQyxFQVlLUyxXQUFXLElBQUksQ0FBQ0UsVUFBaEIsSUFBOEJlLGFBQWEsQ0FBQ2QsYUFBRCxDQVpoRCxFQWFLSCxXQUFXLElBQUlFLFVBQVUsS0FBSyxHQUE5QixpQkFDRyw4REFBQyxnREFBRDtBQUNJLFlBQU0sRUFBRWYsTUFEWjtBQUVJLGNBQVEsRUFBRUMsUUFGZDtBQUdJLGNBQVEsRUFBRUcsUUFIZDtBQUlJLFlBQU0sRUFBRUUsTUFKWjtBQUtJLGVBQVMsRUFBRUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRSLGVBcUJJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBeUJILENBcEVEOztHQUFNVixLOztLQUFBQSxLOztBQXNFTixTQUFTZ0MsZUFBVCxDQUF5QmxCLFFBQXpCLEVBQW1DWCxNQUFuQyxFQUEyQ0MsUUFBM0MsRUFBcURHLFFBQXJELEVBQStEO0FBQzNELHNCQUFPO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBRUg7QUFBTyxlQUFTLEVBQUMsU0FBakI7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFVSTtBQUFBLGtCQUNLTyxRQUFRLENBQUNvQixHQUFULENBQWEsQ0FBQ0osSUFBRCxFQUFNSyxLQUFOLGtCQUNWO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0wsSUFBSSxDQUFDckI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSx1QkFBS3FCLElBQUksQ0FBQ00sT0FBTCxDQUFhQyxNQUFsQixPQUEyQlAsSUFBSSxDQUFDUSxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFBLHNCQUFLUixJQUFJLENBQUNTO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUEsc0JBQUtULElBQUksQ0FBQ00sT0FBTCxDQUFhLENBQWIsRUFBZ0I3QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBQSxzQkFFUWlDLGVBQWUsQ0FBQ1YsSUFBSSxDQUFDTSxPQUFOLEVBQWU3QixRQUFmLENBQWYsZ0JBQ0k7QUFBUSx1QkFBUyxFQUFDLFVBQWxCO0FBRUksa0JBQUksRUFBQyxRQUZUO0FBR0kscUJBQU8sRUFBRSxNQUFNO0FBQ1hrQyxxQ0FBcUIsQ0FBQ3RDLE1BQUQsRUFBU0MsUUFBVCxFQUFtQjBCLElBQUksQ0FBQ3JCLE1BQXhCLEVBQWdDRixRQUFoQyxDQUFyQjtBQUNDLGVBTFQ7QUFBQTtBQUFBLGVBQ1UsZUFBYzRCLEtBQU0sRUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixHQVNFTCxJQUFJLENBQUNNLE9BQUwsQ0FBYUMsTUFBYixHQUFzQlAsSUFBSSxDQUFDUSxVQUEzQixnQkFDRTtBQUFRLHVCQUFTLEVBQUMsVUFBbEI7QUFFSSxrQkFBSSxFQUFDLFFBRlQ7QUFHSSxxQkFBTyxFQUFFLE1BQU07QUFDWEksbUNBQW1CLENBQUN2QyxNQUFELEVBQVNDLFFBQVQsRUFBbUIwQixJQUFJLENBQUNyQixNQUF4QixFQUFnQ0YsUUFBaEMsQ0FBbkI7QUFDQyxlQUxUO0FBQUE7QUFBQSxlQUNVLGFBQVk0QixLQUFNLEVBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsR0FTQTtBQXBCVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQStDSDs7QUFFRCxTQUFTSixXQUFULENBQXFCeEIsUUFBckIsRUFBK0JDLFdBQS9CLEVBQTRDUyxjQUE1QyxFQUE0RDtBQUN4RCxzQkFBTztBQUFBLDRCQUNIO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksYUFBSyxFQUFFVixRQUhYO0FBSUksZ0JBQVEsRUFBR29DLENBQUQsSUFBTztBQUNibkMscUJBQVcsQ0FBQ21DLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSDtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxFQVdGdEMsUUFBUSxpQkFBSTtBQUFBLDZCQUNUO0FBQ0ksaUJBQVMsRUFBQyxVQURkO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxlQUFPLEVBQUUsTUFBTTtBQUNYLGNBQUl1QyxPQUFPLEdBQUd2QyxRQUFRLENBQUN3QyxJQUFULEVBQWQ7QUFDQXZDLHFCQUFXLENBQUNzQyxPQUFELENBQVg7QUFDQTdCLHdCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsU0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXdCSDs7QUFFRCxTQUFTZ0IsYUFBVCxDQUF1QmQsYUFBdkIsRUFBc0M7QUFDbEMsc0JBQU87QUFBQSwyQkFDSDtBQUNJLGVBQVMsRUFBQyxVQURkO0FBRUksVUFBSSxFQUFDLFFBRlQ7QUFHSSxRQUFFLEVBQUMsa0JBSFA7QUFJSSxhQUFPLEVBQUUsTUFBTTtBQUNYQSxxQkFBYSxDQUFDLEdBQUQsQ0FBYjtBQUNILE9BTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFXSDs7QUFFRCxTQUFTdUIsbUJBQVQsQ0FBNkJ2QyxNQUE3QixFQUFxQ0MsUUFBckMsRUFBK0NLLE1BQS9DLEVBQXVERixRQUF2RCxFQUFpRTtBQUM3REosUUFBTSxDQUFDNkMsSUFBUCxDQUFZO0FBQ1JyQixRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxNQUZFO0FBR1J6QixZQUFRLEVBQUVBLFFBSEY7QUFJUkssVUFBTSxFQUFFQSxNQUpBO0FBS1JGLFlBQVEsRUFBRUEsUUFMRjtBQU1SMEMsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsU0FBU1YscUJBQVQsQ0FBK0J0QyxNQUEvQixFQUF1Q0MsUUFBdkMsRUFBaURLLE1BQWpELEVBQXlERixRQUF6RCxFQUFtRTtBQUMvREosUUFBTSxDQUFDNkMsSUFBUCxDQUFZO0FBQ1JyQixRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxRQUZFO0FBR1J6QixZQUFRLEVBQUVBLFFBSEY7QUFJUkssVUFBTSxFQUFFQSxNQUpBO0FBS1JGLFlBQVEsRUFBRUEsUUFMRjtBQU1SMEMsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsU0FBU1gsZUFBVCxDQUF5QkosT0FBekIsRUFBa0M3QixRQUFsQyxFQUE0QztBQUN4QyxNQUFJNkMsS0FBSyxHQUFHLEtBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHakIsT0FBTyxDQUFDQyxNQUE1QixFQUFvQ2dCLENBQUMsRUFBckMsRUFBeUM7QUFDckMsUUFBSWpCLE9BQU8sQ0FBQ2lCLENBQUQsQ0FBUCxDQUFXOUMsUUFBWCxLQUF3QkEsUUFBNUIsRUFBc0M7QUFDbEM2QyxXQUFLLEdBQUcsSUFBUjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsS0FBUDtBQUNIOztBQUVELCtEQUFlcEQsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNGNkZjMzMTYyMTMzY2QxZjE0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL2Z5Yi9jb25zdGFudHMnO1xyXG5pbXBvcnQgQ3JlYXRlR2FtZSBmcm9tIFwiLi9jcmVhdGVHYW1lXCI7XHJcblxyXG5jb25zdCBMb2JieSA9ICh7aXNtb2JpbGUsIHNldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHNldFBhcnRpY2lwYW50LCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgZ2FtZWlkLCBzZXRHYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnV2VsY29tZSEnKTtcclxuICAgIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2dvdE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWFpbkFjdGlvbiwgc2V0TWFpbkFjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pO1xyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRUxJU1QpIHtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVsaXN0KG1lc3NhZ2VEYXRhLmdhbWVsaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgSWYgc2VydmVyIHNlbmRzIG1lIGEgZ2FtZSB0aGVuIGl0IGhhcyBkZWNpZGVkIEkgYW0gYSBwbGF5ZXIgYnV0IEkgaGF2ZSBub3QgbWFya2VkIG15c2VsZiBhcyBhIHBsYXllciB5ZXRcclxuICAgICAgICAgICAgICAgIElmIEkgaGFkIG1hcmtlZCBteXNlZmwgYXMgYSBwbGF5ZXIgdGhlbiBmcnl5b3VyYnJhaW4uY3Mgd291bGQgaGF2ZSBjYWxsZWQgPEdhbWU+IG5vdCA8TG9iYnk+XHJcbiAgICAgICAgICAgICAgICBJIGRvIG5vdCBtYXJrIG15c2VsZiBhcyBhIHBsYXllciB3aGVuIHNlbmRpbmcgY3JlYXRlL2pvaW4vcmVqb2luIGluIGNhc2UgdGhlcmUgaXMgYSBibGlwIGluIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudGhpc2lzbWUgPT09IHRoaXNpc21lKSB7IC8vIE1ha2Ugc3VyZSB0aGlzIGdhbWUgaXMgZm9yIG1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KG1lc3NhZ2VEYXRhLnNuYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KGBXaHkgYW0gSSBnZXR0aW5nIGdhbWUgZGF0YSBmcm9tICR7bWVzc2FnZURhdGEubmlja25hbWV9IGZvciBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfT9gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWlkdGFrZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgSUQgaXMgYWxyZWFkeSB0YWtlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1laWR1bmtub3duJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIElEIGlzIG5vdCBiZWluZyB1c2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVmdWxsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIGlzIGZ1bGwnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnbm90aW50aGF0Z2FtZScpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1lvdSBhcmUgbm90IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdvdGhlcmNsaWVudGZvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBuaWNrbmFtZSBpcyBhbHJlYWR5IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCIgaWQ9XCJmeWJMb2JieVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEZyeSBZb3VyIEJyYWluXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57c25hdH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyFnb3ROaWNrbmFtZSAmJiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIGdhbWVsaXN0ICYmIGRpc3BsYXlHYW1lbGlzdChnYW1lbGlzdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgIW1haW5BY3Rpb24gJiYgZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdDJyAmJlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUdhbWVcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZT17dGhpc2lzbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZD17c2V0R2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml2ZXB4ZGl2aWRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUdhbWVsaXN0KGdhbWVsaXN0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkdhbWUgTGlzdDo8L2Rpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UHBsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UHRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Qnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKChnYW1lLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dhbWUuZ2FtZWlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2FtZS5wbGF5ZXJzLmxlbmd0aH0ve2dhbWUubnVtUGxheWVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dhbWUuZ29hbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dhbWUucGxheWVyc1swXS5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQbGF5ZXJJbkFycmF5KGdhbWUucGxheWVycywgbmlja25hbWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ByZWpvaW5CdXR0b24ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kUmVqb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZS5nYW1laWQsIG5pY2tuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRUpPSU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBnYW1lLnBsYXllcnMubGVuZ3RoIDwgZ2FtZS5udW1QbGF5ZXJzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bqb2luQnV0dG9uJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lLmdhbWVpZCwgbmlja25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSk9JTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdJbiBwcm9ncmVzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5OaWNrbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmlja25hbWUgJiYgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1tZWQgPSBuaWNrbmFtZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tmlja25hbWUodHJpbW1lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R290Tmlja25hbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5BY3Rpb24oc2V0TWFpbkFjdGlvbikge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBpZD1cImNob29zZUNyZWF0ZUdhbWVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdDJyk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBDUkVBVEUgQSBHQU1FXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRKb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdqb2luJyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BsYXllckluQXJyYXkocGxheWVycywgbmlja25hbWUpIHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYXllcnNbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5OyAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=