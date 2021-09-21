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
  setParticipant,
  wsmessage,
  nickname,
  gameid,
  numPlayers
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
      client.send({
        type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
        func: 'interval',
        syncstamp: syncstamp,
        thisisme: thisisme,
        nickname: nickname,
        gameid: gamedata.gameid
      });
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
        console.log(messageData.game);
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
      // In free for all round
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
          lineNumber: 72,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-mobile",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Game id: ", gameid]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Nickname: ", nickname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: [numPlayers, " player game"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Game under construction"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: snat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-responsive w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            className: "w3-teal",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Player"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Points"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            className: "w3-green",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: pl.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: "w3-monospace",
              children: ["\xA0\xA0", pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 55
              }, undefined) : '', pl.points, pl.points > 10 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                class: "w3-purple w3-cursive w3-margin w3-wide",
                children: "Winner!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 56
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, undefined)]
          }, `Player${pl.index}`, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), !gamedata.freeforall && gamedata.playersWhoMoved && gamedata.playersWhoMoved.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Previous free for all results:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }, undefined), gamedata.playersWhoMoved.map(pwm => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: pwm.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [pwm.nickname, " passed"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [pwm.nickname, " played ", pwm.word, " ", pwm.valid ? '(valid)' : '(invalid)']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 33
        }, undefined)
      }, `PlayerWhoMovedFFA${pwm.nickname}`, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Moves this round:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, undefined), gamedata.movesThisRound.map(mtr => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: mtr.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [mtr.nickname, " passed"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [mtr.nickname, " played ", mtr.word, " ", mtr.valid ? '(valid)' : '(invalid)']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 33
        }, undefined)
      }, `PlayerWhoMovedThisRound${mtr.nickname}`, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }, undefined), gamedata.fryLetters && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-white w3-quarter",
        children: ["Fry Letters: ", gamedata.fryLetters]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, undefined);
};

_s(Game, "dK+jkWHGi4wyh9lh6YaxlZcfozM=");

_c = Game;

function getPlayerWord(handleKeyDown, word, setWord, fryLetters, setSnat, client, thisisme, gameid, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-quarter w3-margin",
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 152,
      columnNumber: 9
    }, this), word && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-green w3-margin",
      onClick: () => {
        submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "SUBMIT"
    }, "submitWord", false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 18
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-red w3-margin",
      onClick: () => {
        submitPass(setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "PASS"
    }, "passButton", false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 12
  }, this);
}

async function submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord) {
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
  let url =  true ? 'http://localhost:5000/ENABLE2K?exists=' : 0;
  const response = await fetch(url + word);
  const jdata = await response.json();
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: false,
    valid: jdata.exists,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsInNldFBhcnRpY2lwYW50Iiwid3NtZXNzYWdlIiwibmlja25hbWUiLCJnYW1laWQiLCJudW1QbGF5ZXJzIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJ3aG9zZXR1cm4iLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3b3JkIiwic2V0V29yZCIsInN5bmNzdGFtcCIsInNldFN5bmNzdGFtcCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyeUxldHRlcnMiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwicGxheWVyc1dob01vdmVkIiwibGVuZ3RoIiwibWFwIiwicGwiLCJwb2ludHMiLCJwd20iLCJwYXNzIiwidmFsaWQiLCJtb3Zlc1RoaXNSb3VuZCIsIm10ciIsImdldFBsYXllcldvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInN1Ym1pdFBhc3MiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpkYXRhIiwianNvbiIsImV4aXN0cyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUUsS0FKQztBQUtScEQsWUFBUSxFQUFFQSxRQUxGO0FBTVJJLFVBQU0sRUFBRUEsTUFOQTtBQU9SRCxZQUFRLEVBQUVBLFFBUEY7QUFRUm1FLGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBUkg7QUFTUjFELFFBQUksRUFBRTtBQVRFLEdBQVo7QUFXQUMsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELCtEQUFlbEIsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZDUwOGRmNGIxYmQxMDJiMGEyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7d2hvc2V0dXJuOi0xLCBwbGF5ZXJzOlt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLid9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEuZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuIDwgMCkgeyAvLyBHYW1lIGhhcyBub3Qgc3RhcnRlZCBvciBoYXMgZW5kZWRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbCkgeyAvLyBJbiBmcmVlIGZvciBhbGwgcm91bmRcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmV4Y2x1ZGVkUGxheWVyID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEucGxheWVyc1dob01vdmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWRhdGEucGxheWVyc1dob01vdmVkW2ldLm5pY2tuYW1lID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKG5pY2tuYW1lID09PSBnYW1lZGF0YS5wbGF5ZXJzW2dhbWVkYXRhLndob3NldHVybl0ubmlja25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My10ZWFsIHczLWNlbGwtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLWNlbGwtbWlkZGxlIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5GcnkgWW91ciBCcmFpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPkdhbWUgaWQ6IHtnYW1laWR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+Tmlja25hbWU6IHtuaWNrbmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj57bnVtUGxheWVyc30gcGxheWVyIGdhbWU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMT5HYW1lIHVuZGVyIGNvbnN0cnVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxwPntzbmF0fTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtcmVzcG9uc2l2ZSB3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUgdzMtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLXRlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzLm1hcCgocGwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9IGNsYXNzTmFtZT1cInczLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbC5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInczLW1vbm9zcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPiAxMCAmJiA8c3BhbiBjbGFzcz1cInczLXB1cnBsZSB3My1jdXJzaXZlIHczLW1hcmdpbiB3My13aWRlXCI+V2lubmVyITwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZCAmJiBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5QcmV2aW91cyBmcmVlIGZvciBhbGwgcmVzdWx0czo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubWFwKChwd20pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgUGxheWVyV2hvTW92ZWRGRkEke3B3bS5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwd20ucGFzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3B3bS5uaWNrbmFtZX0gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwd20ubmlja25hbWV9IHBsYXllZCB7cHdtLndvcmR9IHtwd20udmFsaWQgPyAnKHZhbGlkKScgOiAnKGludmFsaWQpJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Nb3ZlcyB0aGlzIHJvdW5kOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLm1hcCgobXRyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YFBsYXllcldob01vdmVkVGhpc1JvdW5kJHttdHIubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXRyLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttdHIubmlja25hbWV9IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bXRyLm5pY2tuYW1lfSBwbGF5ZWQge210ci53b3JkfSB7bXRyLnZhbGlkID8gJyh2YWxpZCknIDogJyhpbnZhbGlkKSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3czLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInczLXdoaXRlIHczLXF1YXJ0ZXJcIj5GcnkgTGV0dGVyczoge2dhbWVkYXRhLmZyeUxldHRlcnN9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEuZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyIHczLW1hcmdpblwiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgIDxsYWJlbD5FbnRlciBXb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuXHJcblxyXG4gICAgICAgIHt3b3JkICYmIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWdyZWVuIHczLW1hcmdpblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICA8L2J1dHRvbj59XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1tYXJnaW5cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSB3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtmcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBDaGVja2luZyB5b3VyIHdvcmQgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2V4aXN0cz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2V4aXN0cz0nXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHdvcmQpO1xyXG4gICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkOiBqZGF0YS5leGlzdHMsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogd29yZFxyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGFzcyhzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYFNlbmRpbmcgUEFTUyAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogdHJ1ZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogJydcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=