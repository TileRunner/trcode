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
      className: "w3-container w3-responsive w3-quarter",
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
      }, undefined), gamedata.movesThisRound.map((mtr, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: mtr.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "w3-red",
            children: [mtr.nickname, " passed"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 37
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${mtr.valid ? '' : 'w3-red'}`,
            children: mtr.word
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 37
          }, undefined)
        }, `PlayerWhoMovedThisRound${mtr.nickname}`, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }, undefined), gamedata.fryLetters && gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-white w3-quarter",
        children: ["Fry Letters: ", gamedata.fryLetters]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 156,
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
      lineNumber: 157,
      columnNumber: 9
    }, this), word && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-green w3-margin",
      onClick: () => {
        submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "SUBMIT"
    }, "submitWord", false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 18
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w3-button w3-red w3-margin",
      onClick: () => {
        submitPass(setSnat, client, thisisme, gameid, nickname, setWord);
      },
      children: "PASS"
    }, "passButton", false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwicGxheWVycyIsImluZGV4Iiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2VuZCIsInR5cGUiLCJjIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyeUxldHRlcnMiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwicGxheWVyc1dob01vdmVkIiwibWFwIiwicGwiLCJwb2ludHMiLCJwd20iLCJwYXNzIiwidmFsaWQiLCJtb3Zlc1RoaXNSb3VuZCIsIm10ciIsImdldFBsYXllcldvcmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInN1Ym1pdFBhc3MiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQWFDLFFBQWI7QUFBcUJDLFVBQXJCO0FBQStCQyxXQUEv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REU7QUFFUkMsUUFBSSxFQUFFLE1BRkU7QUFHUndCLFFBQUksRUFBRSxJQUhFO0FBSVJDLFNBQUssRUFBRSxLQUpDO0FBS1JqRCxZQUFRLEVBQUVBLFFBTEY7QUFNUkcsVUFBTSxFQUFFQSxNQU5BO0FBT1JELFlBQVEsRUFBRUEsUUFQRjtBQVFSMkQsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFSSDtBQVNSbEQsUUFBSSxFQUFFO0FBVEUsR0FBWjtBQVdBQyxTQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0g7O0FBRUQsK0RBQWVqQixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0NDIzZWY4MzVkMjYyMDgyZTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHdzbWVzc2FnZSwgbmlja25hbWUsIGdhbWVpZH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoe2dvYWw6OTksIHdob3NldHVybjotMSwgcGxheWVyczpbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nfV19KTtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTsgLy8gbXkgd29yZCB0byBzdWJtaXRcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEuZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuIDwgMCkgeyAvLyBHYW1lIGhhcyBub3Qgc3RhcnRlZCBvciBoYXMgZW5kZWRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbCkgeyAvLyBJbiBmcmVlLWZvci1hbGwgcm91bmRcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmV4Y2x1ZGVkUGxheWVyID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEucGxheWVyc1dob01vdmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWRhdGEucGxheWVyc1dob01vdmVkW2ldLm5pY2tuYW1lID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKG5pY2tuYW1lID09PSBnYW1lZGF0YS5wbGF5ZXJzW2dhbWVkYXRhLndob3NldHVybl0ubmlja25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My10ZWFsIHczLWNlbGwtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLWNlbGwtbWlkZGxlIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5GcnkgWW91ciBCcmFpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPkdhbWUgaWQ6IHtnYW1laWR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+Rmlyc3QgdG8ge2dhbWVkYXRhLmdvYWx9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1wYWRkaW5nIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1yZXNwb25zaXZlIHczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZSB3My1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidzMtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzLm1hcCgocGwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9IGNsYXNzTmFtZT1cInczLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbC5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInczLW1vbm9zcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPj0gZ2FtZWRhdGEuZ29hbCAmJiA8c3BhbiBjbGFzcz1cInczLXB1cnBsZSB3My1jdXJzaXZlIHczLW1hcmdpbiB3My13aWRlXCI+V2lubmVyITwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZCAmJiBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5QcmV2aW91cyBmcmVlLWZvci1hbGwgcmVzdWx0czo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubWFwKChwd20pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgUGxheWVyV2hvTW92ZWRGRkEke3B3bS5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwd20ucGFzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3B3bS5uaWNrbmFtZX0gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwd20udmFsaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwd20ubmlja25hbWV9IGZyaWVkIDxzcGFuIGNsYXNzTmFtZT1cInczLWdyZWVuXCI+e3B3bS53b3JkfTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3B3bS5uaWNrbmFtZX0gbWlzY29va2VkIDxzcGFuIGNsYXNzTmFtZT1cInczLXJlZFwiPntwd20ud29yZH08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TW92ZXMgdGhpcyByb3VuZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5tYXAoKG10ciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YFBsYXllcldob01vdmVkVGhpc1JvdW5kJHttdHIubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge210ci5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidzMtcmVkXCI+e210ci5uaWNrbmFtZX0gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttdHIudmFsaWQgPyAnJyA6ICd3My1yZWQnfWB9PnttdHIud29yZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycyAmJiBnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3czLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInczLXdoaXRlIHczLXF1YXJ0ZXJcIj5GcnkgTGV0dGVyczoge2dhbWVkYXRhLmZyeUxldHRlcnN9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEuZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cD57c25hdH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyIHczLW1hcmdpblwiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgIDxsYWJlbD5FbnRlciBXb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuXHJcblxyXG4gICAgICAgIHt3b3JkICYmIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWdyZWVuIHczLW1hcmdpblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICA8L2J1dHRvbj59XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1tYXJnaW5cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZnJ5TGV0dGVycywgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSB3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtmcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBDaGVja2luZyB5b3VyIHdvcmQgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6IHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9