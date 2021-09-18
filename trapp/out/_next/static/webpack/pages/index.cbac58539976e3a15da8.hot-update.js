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
      submitPlayerWord(word, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname);
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
          lineNumber: 57,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-mobile",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Game id: ", gameid]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Nickname: ", nickname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: [numPlayers, " player game"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Game under construction"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: snat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Players:", gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "w3-teal",
        children: ["\xA0", pl.nickname, pl.index === gamedata.numPlayers - 1 ? '' : ',']
      }, `Player${pl.index}`, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined), !gamedata.freeforall && gamedata.playersWhoMoved && gamedata.playersWhoMoved.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Previous free for all results:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined), gamedata.playersWhoMoved.map(pwm => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [pwm.nickname, " played ", pwm.word, " ", pwm.valid ? '(valid)' : '(invalid)']
      }, `PlayerWhoMovedFFA${pwm.nickname}`, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Moves this round:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, undefined), gamedata.movesThisRound.map(mtr => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [mtr.nickname, " played ", mtr.word, " ", mtr.valid ? '(valid)' : '(invalid)']
      }, `PlayerWhoMovedThisRound${mtr.nickname}`, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }, undefined), gamedata.fryLetters && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "w3-white w3-margin",
        children: ["Fry Letters: ", gamedata.fryLetters]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, undefined);
};

_s(Game, "gwPJkgAbnHcZlW+KgA8xgzoHDiM=");

_c = Game;

function getPlayerWord(handleKeyDown, word, setWord, fryLetters, setSnat, client) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-quarter w3-margin",
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 12
  }, this);
}

async function submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname) {
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
    valid: jdata.exists,
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: word
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsInNldFBhcnRpY2lwYW50Iiwid3NtZXNzYWdlIiwibmlja25hbWUiLCJnYW1laWQiLCJudW1QbGF5ZXJzIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJ3aG9zZXR1cm4iLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3b3JkIiwic2V0V29yZCIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJjIiwiZnVuYyIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyeUxldHRlcnMiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwicGxheWVyc1dob01vdmVkIiwibGVuZ3RoIiwibWFwIiwicGwiLCJwd20iLCJ2YWxpZCIsIm1vdmVzVGhpc1JvdW5kIiwibXRyIiwiZ2V0UGxheWVyV29yZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqZGF0YSIsImpzb24iLCJzZW5kIiwiZXhpc3RzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQWFDLFFBQWI7QUFBcUJDLFVBQXJCO0FBQStCQyxnQkFBL0I7QUFBK0ND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Q0osR0FuQjBGLENBb0IzRjs7O0FBQ0E3QyxTQUFPLENBQUUsNkNBQUYsQ0FBUDtBQUNBLE1BQUlnRCxHQUFHLEdBQUksS0FBRCxHQUFvRSx3Q0FBcEUsR0FBK0csQ0FBekg7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLEdBQUd6QyxJQUFQLENBQTVCO0FBQ0EsUUFBTTRDLEtBQUssR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBcEI7QUFDQTVELFFBQU0sQ0FBQzZELElBQVAsQ0FBWTtBQUNSckMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsTUFGRTtBQUdSbUIsU0FBSyxFQUFFYyxLQUFLLENBQUNHLE1BSEw7QUFJUjdELFlBQVEsRUFBRUEsUUFKRjtBQUtSSSxVQUFNLEVBQUVBLE1BTEE7QUFNUkQsWUFBUSxFQUFFQSxRQU5GO0FBT1IyRCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQVBIO0FBUVJsRCxRQUFJLEVBQUVBO0FBUkUsR0FBWjtBQVVIOztBQUVELCtEQUFlakIsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYmFjNTg1Mzk5NzZlM2ExNWRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7d2hvc2V0dXJuOi0xLCBwbGF5ZXJzOlt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLid9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTtcclxuICAgICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YS5mcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPCAwKSB7IC8vIEdhbWUgaGFzIG5vdCBzdGFydGVkIG9yIGhhcyBlbmRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsKSB7IC8vIEluIGZyZWUgZm9yIGFsbCByb3VuZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZXhjbHVkZWRQbGF5ZXIgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWRbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobmlja25hbWUgPT09IGdhbWVkYXRhLnBsYXllcnNbZ2FtZWRhdGEud2hvc2V0dXJuXS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXRlYWwgdzMtY2VsbC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtY2VsbC1taWRkbGUgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPkZyeSBZb3VyIEJyYWluPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+R2FtZSBpZDoge2dhbWVpZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5OaWNrbmFtZToge25pY2tuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPntudW1QbGF5ZXJzfSBwbGF5ZXIgZ2FtZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxPkdhbWUgdW5kZXIgY29uc3RydWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICA8cD5QbGF5ZXJzOlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9IGNsYXNzTmFtZT0ndzMtdGVhbCc+Jm5ic3A7e3BsLm5pY2tuYW1lfXtwbC5pbmRleCA9PT0gZ2FtZWRhdGEubnVtUGxheWVycyAtIDEgPyAnJyA6ICcsJ308L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5wbGF5ZXJzV2hvTW92ZWQgJiYgZ2FtZWRhdGEucGxheWVyc1dob01vdmVkLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlByZXZpb3VzIGZyZWUgZm9yIGFsbCByZXN1bHRzOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnNXaG9Nb3ZlZC5tYXAoKHB3bSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2BQbGF5ZXJXaG9Nb3ZlZEZGQSR7cHdtLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B3bS5uaWNrbmFtZX0gcGxheWVkIHtwd20ud29yZH0ge3B3bS52YWxpZCA/ICcodmFsaWQpJyA6ICcoaW52YWxpZCknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TW92ZXMgdGhpcyByb3VuZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5tYXAoKG10cikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2BQbGF5ZXJXaG9Nb3ZlZFRoaXNSb3VuZCR7bXRyLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge210ci5uaWNrbmFtZX0gcGxheWVkIHttdHIud29yZH0ge210ci52YWxpZCA/ICcodmFsaWQpJyA6ICcoaW52YWxpZCknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidzMtd2hpdGUgdzMtbWFyZ2luXCI+RnJ5IExldHRlcnM6IHtnYW1lZGF0YS5mcnlMZXR0ZXJzfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLmZyeUxldHRlcnMsIHNldFNuYXQsIGNsaWVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBmcnlMZXR0ZXJzLCBzZXRTbmF0LCBjbGllbnQpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXIgdzMtbWFyZ2luXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGxhYmVsPkVudGVyIFdvcmQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGZyeUxldHRlcnMsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7ZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9leGlzdHM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9leGlzdHM9J1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB3b3JkKTtcclxuICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICB2YWxpZDogamRhdGEuZXhpc3RzLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6IHdvcmRcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9