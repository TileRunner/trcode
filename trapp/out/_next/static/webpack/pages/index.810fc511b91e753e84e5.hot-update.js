self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/game.js":
/*!***************************!*\
  !*** ./pages/fyb/game.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\game.js",
    _s = $RefreshSig$();




const Game = ({
  setWhereto,
  client,
  thisisme,
  wsmessage,
  nickname,
  gameid
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gamedata,
    1: setGamedata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    goal: 99,
    whoseturn: -1,
    players: [{
      index: 0,
      nickname: 'Loading...'
    }]
  });
  const {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // my word to submit

  const {
    0: syncstamp,
    1: setSyncstamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (gamedata.whoseturn > -1 && gamedata.players.length > 0) {
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
          func: 'interval',
          syncstamp: syncstamp,
          thisisme: thisisme,
          nickname: nickname,
          gameid: gamedata.gameid
        });
      }
    }, _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        setSnat(messageData.snat);
        setGamedata(messageData.game);
        setSyncstamp(messageData.game.syncstamp);
      } else if (messageData.func = _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMECREATED) {// Nothing to do, this is really for the lobby dwellers
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  const handleKeyDown = event => {
    if (!meToEnterWord()) {
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
      return;
    }
  };

  const meToEnterWord = () => {
    if (gamedata.whoseturn < 0) {
      // Game has not started or has ended
      return false;
    } else if (gamedata.freeforall) {
      // In free-for-all round
      if (gamedata.excludedPlayer === nickname) {
        return false;
      }

      for (let i = 0; i < gamedata.freeforallMoves.length; i++) {
        if (gamedata.freeforallMoves[i].nickname === nickname) {
          return false;
        }
      }

      return true;
    } else {
      return nickname === gamedata.players[gamedata.whoseturn].nickname;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "fybGame",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Fry Your Brain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybHomeButton",
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
          lineNumber: 76,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h4",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "2",
            className: "fybGameSectionHeader",
            children: ["First to ", gamedata.goal, " wins!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGamePlayer",
            children: pl.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            class: "fybGameScore",
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              class: "fybWinner",
              children: "Winner!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Moves previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Moves this round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Free-for-all results:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fryLetterDiv",
      children: ["Fry Letters:", gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fryLetter",
        children: fl
      }, `FryLetter${i}`, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "fybSnat",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, undefined), gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "fybGameSectionHeader",
          children: "Game Over"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameWordSubmitButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 35
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, undefined);
};

_s(Game, "cdNnKYLZ7C4vJeR8ej+Y2GRwpwA=");

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return;
  {
    moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "fybGamePlayer",
        children: move.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "fybGameWord",
        children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "fybGameWord pass",
          children: " passed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: `fybGameWord ${move.valid ? 'valid' : 'invalid'}`,
          children: move.word
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, this)]
    }, `${moveListKey}${move.nickname}`, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this));
  }
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      autoComplete: "off",
      spellCheck: "false",
      name: "word",
      value: word,
      onChange: e => {
        setWord(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordSubmitButton",
        onClick: () => {
          submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
        },
        children: "SUBMIT"
      }, "submitWord", false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordPassButton",
        onClick: () => {
          submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 12
  }, this);
}

function submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord) {
  let fixedword = word.toUpperCase().trim(); // Check if the word is allowed based on previous words this round

  for (let i = 0; i < gamedata.movesThisRound.length; i++) {
    const pw = gamedata.movesThisRound[i].word;

    if (pw === fixedword) {
      setSnat(`You cannot reuse a previous word from this round (${pw}).`);
      return;
    }

    if (pw + 'S' === fixedword && pw.substring(pw.length - 1) !== 'S' && gamedata.movesThisRound[i].valid) {
      setSnat(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
      return;
    }
  } // Check if the have all the fry letters


  for (let i = 0; i < gamedata.fryLetters.length; i++) {
    let letterCountRequired = 0;
    let actualLetterCount = 0;

    for (let j = 0; j < gamedata.fryLetters.length; j++) {
      if (gamedata.fryLetters[i] === gamedata.fryLetters[j]) {
        letterCountRequired = letterCountRequired + 1;
      }
    }

    for (let j = 0; j < fixedword.length; j++) {
      if (gamedata.fryLetters[i] === fixedword[j]) {
        actualLetterCount = actualLetterCount + 1;
      }
    }

    if (actualLetterCount < letterCountRequired) {
      setSnat(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
      return;
    }
  } // If you get here they have all the required letters. Send the guess to the server.


  setSnat(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: false,
    thisisme: thisisme,
    gameid: gamedata.gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: fixedword
  });
  setWord('');
}

function submitPass(setSnat, client, thisisme, gameid, nickname, setWord) {
  // If you get here they have all the required letters. Send the guess to the server.
  setSnat(`Sending PASS ... shouldn't take long.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: true,
    valid: false,
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: ''
  });
  setWord('');
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'replay',
    thisisme: thisisme,
    game: gamedata,
    nickname: nickname,
    timestamp: Date.now()
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwicGxheWVycyIsImluZGV4Iiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2VuZCIsInR5cGUiLCJjIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyZWVmb3JhbGwiLCJleGNsdWRlZFBsYXllciIsImkiLCJmcmVlZm9yYWxsTW92ZXMiLCJtYXAiLCJwbCIsInBvaW50cyIsIm1vdmVzUHJldlJvdW5kIiwic2hvd01vdmVMaXN0IiwibW92ZXNUaGlzUm91bmQiLCJmcnlMZXR0ZXJzIiwiZmwiLCJnZXRQbGF5ZXJXb3JkIiwiZ2FtZU92ZXIiLCJzZW5kUmVwbGF5UmVxdWVzdCIsIm1vdmVMaXN0S2V5IiwibW92ZUFycmF5IiwibW92ZSIsInBhc3MiLCJ2YWxpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsInRpbWVzdGFt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QVVBcEQsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVNtRCxVQUFULENBQW9CNUQsT0FBcEIsRUFBNkJOLE1BQTdCLEVBQXFDQyxRQUFyQyxFQUErQ0csTUFBL0MsRUFBdURELFFBQXZELEVBQWlFWSxPQUFqRSxFQUEwRTtBQUN0RTtBQUNBVCxTQUFPLENBQUUsdUNBQUYsQ0FBUDtBQUNBTixRQUFNLENBQUNzQixJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsTUFGRTtBQUdSaUMsUUFBSSxFQUFFLElBSEU7QUFJUkMsU0FBSyxFQUFFLEtBSkM7QUFLUjFELFlBQVEsRUFBRUEsUUFMRjtBQU1SRyxVQUFNLEVBQUVBLE1BTkE7QUFPUkQsWUFBUSxFQUFFQSxRQVBGO0FBUVJzRSxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQVJIO0FBU1I3RCxRQUFJLEVBQUU7QUFURSxHQUFaO0FBV0FDLFNBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDs7QUFFRCxTQUFTdUMsaUJBQVQsQ0FBMkJ0RCxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNPLFFBQTdDLEVBQXVETCxRQUF2RCxFQUFpRTtBQUM3REgsUUFBTSxDQUFDc0IsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUnhCLFlBQVEsRUFBRUEsUUFIRjtBQUlSZ0MsUUFBSSxFQUFFekIsUUFKRTtBQUtSTCxZQUFRLEVBQUVBLFFBTEY7QUFNUnNFLGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBTkgsR0FBWjtBQVFIOztBQUVELCtEQUFlN0UsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTBmYzUxMWI5MWU3NTNlODRlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtnb2FsOjk5LCB3aG9zZXR1cm46LTEsIHBsYXllcnM6W3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJ31dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA+IC0xICYmIGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdpbnRlcnZhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShtZXNzYWdlRGF0YS5nYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9IGMuUzJDX0ZVTkNfR0FNRUNSRUFURUQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8sIHRoaXMgaXMgcmVhbGx5IGZvciB0aGUgbG9iYnkgZHdlbGxlcnNcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPCAwKSB7IC8vIEdhbWUgaGFzIG5vdCBzdGFydGVkIG9yIGhhcyBlbmRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsKSB7IC8vIEluIGZyZWUtZm9yLWFsbCByb3VuZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZXhjbHVkZWRQbGF5ZXIgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXNbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobmlja25hbWUgPT09IGdhbWVkYXRhLnBsYXllcnNbZ2FtZWRhdGEud2hvc2V0dXJuXS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkdhbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+RnJ5IFlvdXIgQnJhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkhvbWVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImg0XCI+R2FtZSBpZDoge2dhbWVpZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJmeWJHYW1lU2VjdGlvbkhlYWRlclwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfSB3aW5zITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVQbGF5ZXJcIj57cGwubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImZ5YkdhbWVTY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPCAxMCA/IDxzcGFuPiZuYnNwOzwvc3Bhbj4gOiAnJ317cGwucG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPj0gZ2FtZWRhdGEuZ29hbCAmJiA8c3BhbiBjbGFzcz1cImZ5Yldpbm5lclwiPldpbm5lciE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPk1vdmVzIHByZXZpb3VzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVTZWN0aW9uSGVhZGVyXCIgY29sU3Bhbj1cIjJcIj5Nb3ZlcyB0aGlzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPkZyZWUtZm9yLWFsbCByZXN1bHRzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdmZmFNb3ZlcycsIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLmZyeUxldHRlcnMubWFwKChmbCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEZyeUxldHRlciR7aX1gfSBjbGFzc05hbWU9XCJmcnlMZXR0ZXJcIj57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge21lVG9FbnRlcldvcmQoKSAmJlxyXG4gICAgICAgICAgICAgICAgZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnliU25hdFwiPntzbmF0fTwvcD5cclxuICAgICAgICAgICAge2dhbWVkYXRhLmdhbWVPdmVyICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmeWJHYW1lU2VjdGlvbkhlYWRlclwiPkdhbWUgT3Zlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFN1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBMQVkgQUdBSU5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01vdmVMaXN0KG1vdmVMaXN0S2V5LCBtb3ZlQXJyYXkpIHtcclxuICAgIHJldHVyblxyXG4gICAgICAgIHttb3ZlQXJyYXkubWFwKChtb3ZlKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Ake21vdmVMaXN0S2V5fSR7bW92ZS5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lUGxheWVyXCI+e21vdmUubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFwiPlxyXG4gICAgICAgICAgICAgICAge21vdmUucGFzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnliR2FtZVdvcmQgcGFzc1wiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZnliR2FtZVdvcmQgJHttb3ZlLnZhbGlkID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJ31gfT57bW92ZS53b3JkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8bGFiZWw+RW50ZXIgV29yZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkU3VibWl0QnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFBhc3NCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogZml4ZWR3b3JkXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQYXNzKHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgU2VuZGluZyBQQVNTIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3JlcGxheScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWU6IGdhbWVkYXRhLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9