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
      className: "w3-panel w3-responsive w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            className: "w3-black",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Player"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Points"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            className: "w3-green",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: pl.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: "w3-monospace",
              children: ["\xA0\xA0", pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 55
              }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                class: "w3-purple w3-cursive w3-margin w3-wide",
                children: "Winner!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 68
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, undefined)]
          }, `Player${pl.index}`, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined), !gamedata.freeforall && gamedata.playersWhoMoved && gamedata.playersWhoMoved.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Previous free-for-all results:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }, undefined), gamedata.playersWhoMoved.map(pwm => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: pwm.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [pwm.nickname, " passed"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 33
        }, undefined) : pwm.valid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [pwm.nickname, " fried ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "w3-green",
            children: pwm.word
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 60
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [pwm.nickname, " miscooked ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "w3-red",
            children: pwm.word
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 64
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 33
        }, undefined)
      }, `PlayerWhoMovedFFA${pwm.nickname}`, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Moves this round:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-responsive",
        children: gamedata.movesThisRound.map((mtr, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: mtr.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: mtr.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "w3-black",
              children: " passed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: `${mtr.valid ? '' : 'w3-red'}`,
              children: mtr.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, undefined)]
        }, `PlayerWhoMovedThisRound${mtr.nickname}`, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }, undefined), gamedata.fryLetters && gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-panel w3-row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-white w3-cell w3-padding-small",
        children: ["Fry Letters: ", gamedata.fryLetters]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
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
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 9
    }, this), word && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-green w3-margin",
      onClick: () => {
        submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "SUBMIT"
    }, "submitWord", false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 18
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
    lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwicGxheWVycyIsImluZGV4Iiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2VuZCIsInR5cGUiLCJjIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyeUxldHRlcnMiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwicGxheWVyc1dob01vdmVkIiwibWFwIiwicGwiLCJwb2ludHMiLCJwd20iLCJwYXNzIiwidmFsaWQiLCJtb3Zlc1RoaXNSb3VuZCIsIm10ciIsImdldFBsYXllcldvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInN1Ym1pdFBhc3MiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQWFDLFFBQWI7QUFBcUJDLFVBQXJCO0FBQStCQyxXQUEv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QUN0RTtBQUNBVCxTQUFPLENBQUUsdUNBQUYsQ0FBUDtBQUNBTixRQUFNLENBQUNzQixJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsTUFGRTtBQUdSd0IsUUFBSSxFQUFFLElBSEU7QUFJUkMsU0FBSyxFQUFFLEtBSkM7QUFLUmpELFlBQVEsRUFBRUEsUUFMRjtBQU1SRyxVQUFNLEVBQUVBLE1BTkE7QUFPUkQsWUFBUSxFQUFFQSxRQVBGO0FBUVIyRCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQVJIO0FBU1JsRCxRQUFJLEVBQUU7QUFURSxHQUFaO0FBV0FDLFNBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDs7QUFFRCwrREFBZWpCLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGQ4M2IwZDQwYzJiNWVjNzI5NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL2Z5Yi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7Z29hbDo5OSwgd2hvc2V0dXJuOi0xLCBwbGF5ZXJzOlt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLid9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJiBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jOiAnaW50ZXJ2YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KG1lc3NhZ2VEYXRhLnNuYXQpO1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTeW5jc3RhbXAobWVzc2FnZURhdGEuZ2FtZS5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YS5mcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPCAwKSB7IC8vIEdhbWUgaGFzIG5vdCBzdGFydGVkIG9yIGhhcyBlbmRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsKSB7IC8vIEluIGZyZWUtZm9yLWFsbCByb3VuZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZXhjbHVkZWRQbGF5ZXIgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWRbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobmlja25hbWUgPT09IGdhbWVkYXRhLnBsYXllcnNbZ2FtZWRhdGEud2hvc2V0dXJuXS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXRlYWwgdzMtY2VsbC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtY2VsbC1taWRkbGUgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPkZyeSBZb3VyIEJyYWluPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+R2FtZSBpZDoge2dhbWVpZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5GaXJzdCB0byB7Z2FtZWRhdGEuZ29hbH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcGFuZWwgdzMtcmVzcG9uc2l2ZSB3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUgdzMtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheWVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyJHtwbC5pbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGwubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3My1tb25vc3BhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPCAxMCA/IDxzcGFuPiZuYnNwOzwvc3Bhbj4gOiAnJ317cGwucG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzID49IGdhbWVkYXRhLmdvYWwgJiYgPHNwYW4gY2xhc3M9XCJ3My1wdXJwbGUgdzMtY3Vyc2l2ZSB3My1tYXJnaW4gdzMtd2lkZVwiPldpbm5lciE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQgJiYgZ2FtZWRhdGEucGxheWVyc1dob01vdmVkLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJldmlvdXMgZnJlZS1mb3ItYWxsIHJlc3VsdHM6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVyc1dob01vdmVkLm1hcCgocHdtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YFBsYXllcldob01vdmVkRkZBJHtwd20ubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHdtLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwd20ubmlja25hbWV9IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHdtLnZhbGlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHdtLm5pY2tuYW1lfSBmcmllZCA8c3BhbiBjbGFzc05hbWU9XCJ3My1ncmVlblwiPntwd20ud29yZH08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwd20ubmlja25hbWV9IG1pc2Nvb2tlZCA8c3BhbiBjbGFzc05hbWU9XCJ3My1yZWRcIj57cHdtLndvcmR9PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPk1vdmVzIHRoaXMgcm91bmQ6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUgdzMtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5tYXAoKG10ciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YFBsYXllcldob01vdmVkVGhpc1JvdW5kJHttdHIubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e210ci5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge210ci5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3My1ibGFja1wiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttdHIudmFsaWQgPyAnJyA6ICd3My1yZWQnfWB9PnttdHIud29yZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2dhbWVkYXRhLmZyeUxldHRlcnMgJiYgZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3My1wYW5lbCB3My1yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3My13aGl0ZSB3My1jZWxsIHczLXBhZGRpbmctc21hbGxcIj5GcnkgTGV0dGVyczoge2dhbWVkYXRhLmZyeUxldHRlcnN9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEuZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cD57c25hdH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyIHczLW1hcmdpblwiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgIDxsYWJlbD5FbnRlciBXb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuXHJcblxyXG4gICAgICAgIHt3b3JkICYmIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWdyZWVuIHczLW1hcmdpblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICA8L2J1dHRvbj59XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1tYXJnaW5cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSB3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtmcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBDaGVja2luZyB5b3VyIHdvcmQgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6IHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9