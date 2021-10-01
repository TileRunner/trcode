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
      submitPlayerWord(word, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
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

      for (let i = 0; i < gamedata.playersWhoMoved.length; i++) {
        if (gamedata.playersWhoMoved[i].nickname === nickname) {
          return false;
        }
      }

      return true;
    } else {
      return nickname === gamedata.players[gamedata.whoseturn].nickname;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-teal w3-cell-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-cell-middle w3-padding w3-mobile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "myHeadingFont",
          children: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-mobile",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Game id: ", gameid]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["First to ", gamedata.goal]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-padding w3-mobile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "w3-button",
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
            lineNumber: 81,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-panel w3-responsive",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-black w3-padding-small w3-cell",
        children: "Player totals:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "w3-green",
              children: pl.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: "w3-monospace",
              children: ["\xA0\xA0", pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 55
              }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                class: "w3-purple w3-cursive w3-margin w3-wide",
                children: "Winner!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 68
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }, undefined)]
          }, `Player${pl.index}`, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-black w3-padding-small w3-cell",
        children: "Moves this round:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: gamedata.movesThisRound.map((mtr, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "w3-green",
            children: ["\xA0", mtr.nickname, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: ["\xA0", mtr.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "w3-black",
              children: " passed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: `w3-monospace ${mtr.valid ? '' : 'w3-red'}`,
              children: mtr.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, undefined)]
        }, `PlayerWhoMovedThisRound${mtr.nickname}`, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }, undefined), !gamedata.freeforall && gamedata.playersWhoMoved && gamedata.playersWhoMoved.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "w3-panel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-black w3-padding-small w3-cell",
        children: "Free-for-all results:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: gamedata.playersWhoMoved.map(pwm => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "w3-green",
            children: ["\xA0", pwm.nickname, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: ["\xA0", pwm.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "w3-black",
              children: " passed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: `w3-monospace ${pwm.valid ? '' : 'w3-red'}`,
              children: pwm.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }, undefined)]
        }, `PlayerWhoMovedFFA${pwm.nickname}`, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-panel w3-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-black w3-cell w3-padding-small",
        children: ["Fry Letters: ", gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "FryLetter",
          children: fl
        }, `FryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }, undefined), gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Game Over"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 35
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined);
};

_s(Game, "cdNnKYLZ7C4vJeR8ej+Y2GRwpwA=");

_c = Game;

function getPlayerWord(handleKeyDown, word, setWord, fryLetters, setSnat, client, thisisme, gameid, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-quarter w3-margin",
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: "w3-input w3-border w3-blue myCommonFont",
      type: "text",
      name: "word",
      value: word,
      onChange: e => {
        setWord(e.target.value.toUpperCase());
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-green w3-margin",
      onClick: () => {
        submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "SUBMIT"
    }, "submitWord", false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-red w3-margin",
      onClick: () => {
        submitPass(setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "PASS"
    }, "passButton", false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 12
  }, this);
}

function submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord) {
  // First check if the have all the fry letters
  for (let i = 0; i < fryLetters.length; i++) {
    let letterCountRequired = 0;
    let actualLetterCount = 0;

    for (let j = 0; j < fryLetters.length; j++) {
      if (fryLetters[i] === fryLetters[j]) {
        letterCountRequired = letterCountRequired + 1;
      }
    }

    for (let j = 0; j < word.length; j++) {
      if (fryLetters[i] === word[j]) {
        actualLetterCount = actualLetterCount + 1;
      }
    }

    if (actualLetterCount < letterCountRequired) {
      setSnat(`You need the letter ${fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
      return;
    }
  } // If you get here they have all the required letters. Send the guess to the server.


  setSnat(`Checking your word ... shouldn't take long.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: false,
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: word
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwicGxheWVycyIsImluZGV4Iiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2VuZCIsInR5cGUiLCJjIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyeUxldHRlcnMiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwicGxheWVyc1dob01vdmVkIiwibWFwIiwicGwiLCJwb2ludHMiLCJtb3Zlc1RoaXNSb3VuZCIsIm10ciIsInBhc3MiLCJ2YWxpZCIsInB3bSIsImZsIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJzdWJtaXRQYXNzIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxRQUFiO0FBQXFCQyxV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RCxPQUFwQixFQUE2Qk4sTUFBN0IsRUFBcUNDLFFBQXJDLEVBQStDRyxNQUEvQyxFQUF1REQsUUFBdkQsRUFBaUVZLE9BQWpFLEVBQTBFO0FBQ3RFO0FBQ0FULFNBQU8sQ0FBRSx1Q0FBRixDQUFQO0FBQ0FOLFFBQU0sQ0FBQ3NCLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxNQUZFO0FBR1J5QixRQUFJLEVBQUUsSUFIRTtBQUlSQyxTQUFLLEVBQUUsS0FKQztBQUtSbEQsWUFBUSxFQUFFQSxRQUxGO0FBTVJHLFVBQU0sRUFBRUEsTUFOQTtBQU9SRCxZQUFRLEVBQUVBLFFBUEY7QUFRUjZELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBUkg7QUFTUnBELFFBQUksRUFBRTtBQVRFLEdBQVo7QUFXQUMsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELCtEQUFlakIsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZjBiNjc5ZDU2ZTJlY2ViZTE4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtnb2FsOjk5LCB3aG9zZXR1cm46LTEsIHBsYXllcnM6W3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJ31dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA+IC0xICYmIGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdpbnRlcnZhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShtZXNzYWdlRGF0YS5nYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGBVbmhhbmRsZWQgbWVzc2FnZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIW1lVG9FbnRlcldvcmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLmZyeUxldHRlcnMsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lVG9FbnRlcldvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA8IDApIHsgLy8gR2FtZSBoYXMgbm90IHN0YXJ0ZWQgb3IgaGFzIGVuZGVkXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGwpIHsgLy8gSW4gZnJlZS1mb3ItYWxsIHJvdW5kXHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5leGNsdWRlZFBsYXllciA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZFtpXS5uaWNrbmFtZSA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuaWNrbmFtZSA9PT0gZ2FtZWRhdGEucGxheWVyc1tnYW1lZGF0YS53aG9zZXR1cm5dLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtdGVhbCB3My1jZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1jZWxsLW1pZGRsZSB3My1wYWRkaW5nIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+RnJ5IFlvdXIgQnJhaW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5HYW1lIGlkOiB7Z2FtZWlkfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1wYW5lbCB3My1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcGFkZGluZy1zbWFsbCB3My1jZWxsXCI+UGxheWVyIHRvdGFsczo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YFBsYXllciR7cGwuaW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInczLWdyZWVuXCI+e3BsLm5pY2tuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidzMtbW9ub3NwYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzIDwgMTAgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9e3BsLnBvaW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzPVwidzMtcHVycGxlIHczLWN1cnNpdmUgdzMtbWFyZ2luIHczLXdpZGVcIj5XaW5uZXIhPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcGFkZGluZy1zbWFsbCB3My1jZWxsXCI+TW92ZXMgdGhpcyByb3VuZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQubWFwKChtdHIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXJXaG9Nb3ZlZFRoaXNSb3VuZCR7bXRyLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInczLWdyZWVuXCI+Jm5ic3A7e210ci5uaWNrbmFtZX06PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdHIucGFzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidzMtYmxhY2tcIj4gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHczLW1vbm9zcGFjZSAke210ci52YWxpZCA/ICcnIDogJ3czLXJlZCd9YH0+e210ci53b3JkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEucGxheWVyc1dob01vdmVkICYmIGdhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidzMtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcGFkZGluZy1zbWFsbCB3My1jZWxsXCI+RnJlZS1mb3ItYWxsIHJlc3VsdHM6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZC5tYXAoKHB3bSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyV2hvTW92ZWRGRkEke3B3bS5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3My1ncmVlblwiPiZuYnNwO3twd20ubmlja25hbWV9OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHdtLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInczLWJsYWNrXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3My1tb25vc3BhY2UgJHtwd20udmFsaWQgPyAnJyA6ICd3My1yZWQnfWB9Pntwd20ud29yZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3My1wYW5lbCB3My1yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1jZWxsIHczLXBhZGRpbmctc21hbGxcIj5GcnkgTGV0dGVyczoge2dhbWVkYXRhLmZyeUxldHRlcnMubWFwKChmbCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEZyeUxldHRlciR7aX1gfSBjbGFzc05hbWU9XCJGcnlMZXR0ZXJcIj57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLmZyeUxldHRlcnMsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiYgPGgyPkdhbWUgT3ZlcjwvaDI+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlciB3My1tYXJnaW5cIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8bGFiZWw+RW50ZXIgV29yZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSB9IC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWdyZWVuIHczLW1hcmdpblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkIHczLW1hcmdpblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcyhzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGxheWVyV29yZCh3b3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGUgaGF2ZSBhbGwgdGhlIGZyeSBsZXR0ZXJzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGV0dGVyQ291bnRSZXF1aXJlZCA9IDA7XHJcbiAgICAgICAgbGV0IGFjdHVhbExldHRlckNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IGZyeUxldHRlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgIGxldHRlckNvdW50UmVxdWlyZWQgPSBsZXR0ZXJDb3VudFJlcXVpcmVkICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IG5lZWQgdGhlIGxldHRlciAke2ZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYENoZWNraW5nIHlvdXIgd29yZCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogd29yZFxyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGFzcyhzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYFNlbmRpbmcgUEFTUyAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogdHJ1ZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogJydcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=