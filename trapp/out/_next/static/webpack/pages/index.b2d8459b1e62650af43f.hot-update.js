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
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* harmony import */ var _lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/usePrevious */ "./lib/usePrevious.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
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
    0: chatmsgs,
    1: setChatmsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: warning,
    1: setWarning
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gamedata,
    1: setGamedata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    goal: 99,
    gameindex: 0,
    round: 0,
    freeforall: false,
    movesThisRound: [],
    movesPrevRound: [],
    whoseturn: -1,
    fryLetters: [],
    players: [{
      index: 0,
      nickname: 'Loading...',
      wins: 0
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
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const prevGamedata = (0,_lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(gamedata);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_6__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (gamedata.whoseturn > -1 && gamedata.players.length > 0) {
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
          func: 'interval',
          syncstamp: syncstamp,
          thisisme: thisisme,
          nickname: nickname,
          gameid: gamedata.gameid
        });
      }
    }, _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This sound will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
    if (prevGamedata && gamedata.gameindex === prevGamedata.gameindex && gamedata.round === prevGamedata.round && gamedata.freeforall && !prevGamedata.freeforall) {
      var myaudio = document.createElement('audio'); // Decide between Oops (phoney played) and Pass (player passed)

      myaudio.src = gamedata.movesThisRound[gamedata.movesThisRound.length - 1].pass ? "https://tilerunner.github.io/Pass.m4a" : "https://tilerunner.github.io/Oops.m4a";
      myaudio.play();
    }
  }, [gamedata]); // Play a sound when a rescue is made

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB) {
      if (messageData.func === "chat") {
        // Server decided whether this chat was for me
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_GAMEDATA) {
        /* SERVER SENT GAME DATA
        For a regular update due to player activity, this client needs the update.
          For dropped connections which made this client send a rejoin to update server's
           info for this client, which makes the server sends game info to this client,
           this client is already up to date and does not need the update. We do not take
           the update so as not to upset the fry letter rearrangements this client may have
           made.
        */
        if (messageData.game.gameindex !== gamedata.gameindex || messageData.game.round !== gamedata.round || messageData.goal !== gamedata.goal || messageData.players.length !== gamedata.players.length || messageData.game.movesThisRound.length !== gamedata.movesThisRound.length) {
          setSnat(messageData.snat);
          setSelected(-1);
          setGamedata(messageData.game);
          setSyncstamp(messageData.game.syncstamp);
          setWarning('');
        }
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_GAMECREATED) {// Nothing to do, this is really for the lobby dwellers
      } else {
        // I think this happens when a web socket connection drops and the new one loses the gameid on the server wss.clients
        // So send a rejoin request to get the server back on track
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
          func: 'rejoin',
          thisisme: thisisme,
          gameid: gamedata.gameid,
          nickname: nickname,
          timestamp: Date.now()
        });
      }
    }
  }

  const handleKeyDown = event => {
    if (!meToEnterWord()) {
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord);
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

  const GameSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: [gameid, ", ", nickname]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "trTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: ["First to ", gamedata.goal, " wins!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", pl.wins, ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "floatright",
              children: ":"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 47
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 60
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Fry Letters:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let shuffleSize = gamedata.fryLetters.length;
            let beforeShuffle = [...gamedata.fryLetters];
            let afterShuffle = [];

            while (afterShuffle.length < shuffleSize) {
              let rand = Math.floor(Math.random() * beforeShuffle.length);
              afterShuffle.push(beforeShuffle[rand]);
              beforeShuffle.splice(rand, 1);
            }

            ;
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...afterShuffle];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let sortwork = [...gamedata.fryLetters];
            sortwork.sort();
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...sortwork];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryLetterDiv",
        children: gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: i === selected ? "fybFryLetter Selected" : "fybFryLetter",
          onDoubleClick: () => {
            let moveLetter = gamedata.fryLetters[i];
            let shiftedLetters = [...gamedata.fryLetters];
            shiftedLetters.splice(i, 1);
            shiftedLetters.push(moveLetter);
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...shiftedLetters];
            setGamedata(newGamedata);
            setSelected(-1);
          },
          onClick: () => {
            if (selected === -1) {
              setSelected(i);
            } else if (i === selected) {
              setSelected(-1); // unselect when clicked a second time
            } else {
              // Move selected tile to this position
              let shiftedLetters = [];
              let moveLetter = gamedata.fryLetters[selected];

              for (let index = 0; index < gamedata.fryLetters.length; index++) {
                const element = gamedata.fryLetters[index];

                if (index === i) {
                  shiftedLetters.push(moveLetter);
                }

                if (index !== selected) {
                  shiftedLetters.push(element);
                }
              }

              let newGamedata = JSON.parse(JSON.stringify(gamedata));
              newGamedata.fryLetters = [...shiftedLetters];
              setGamedata(newGamedata);
              setSelected(-1);
            }
          },
          children: fl
        }, `FryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Game Over\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 25
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
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
          lineNumber: 277,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_5__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-8",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_5__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 273,
    columnNumber: 9
  }, undefined);
};

_s(Game, "7u1QHwUIawx4YZgj3JbcHMW93zM=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__.usePrevious];
});

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: [move.nickname, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "floatright",
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 36
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
        children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [" (", move.earned, " pts)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 41
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 311,
    columnNumber: 13
  }, this));
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
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
      lineNumber: 330,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord);
        },
        children: "SUBMIT"
      }, "submitWord", false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 12
  }, this);
}

function submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord) {
  let fixedword = word.toUpperCase().trim(); // Check if the word is allowed based on previous words this round

  for (let i = 0; i < gamedata.movesThisRound.length; i++) {
    const pw = gamedata.movesThisRound[i].word;

    if (pw === fixedword) {
      setWarning(`You cannot reuse a previous word from this round (${pw}).`);
      return;
    }

    if (pw + 'S' === fixedword && pw.substring(pw.length - 1) !== 'S' && gamedata.movesThisRound[i].valid) {
      setWarning(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
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
      setWarning(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
      return;
    }
  } // If you get here they have all the required letters. Send the guess to the server.


  setWarning(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: false,
    thisisme: thisisme,
    gameid: gamedata.gameid,
    nickname: nickname,
    timestamp: Date.now(),
    clientRound: gamedata.round,
    // for checking re-submissions
    clientMovesLength: gamedata.movesThisRound.length,
    // for checking re-submissions
    word: fixedword
  });
  setWord('');
}

function submitPass(setWarning, client, thisisme, gameid, nickname, setWord) {
  // If you get here they have all the required letters. Send the guess to the server.
  setWarning(`Sending PASS ... shouldn't take long.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
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
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJleGNsdWRlZFBsYXllciIsImkiLCJmcmVlZm9yYWxsTW92ZXMiLCJHYW1lU2VjdGlvbiIsIm1hcCIsInBsIiwicG9pbnRzIiwic2hvd01vdmVMaXN0Iiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJuZXdHYW1lZGF0YSIsInN0cmluZ2lmeSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiZWxlbWVudCIsIm51bVBvc3NpYmxlQW5zd2VycyIsImdldFBsYXllcldvcmQiLCJnYW1lT3ZlciIsInNlbmRSZXBsYXlSZXF1ZXN0IiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInRyaW0iLCJtYXRjaCIsInN1Ym1pdFBhc3MiLCJmaXhlZHdvcmQiLCJwdyIsInN1YnN0cmluZyIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJjbGllbnRSb3VuZCIsImNsaWVudE1vdmVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFD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bkM7QUFTMkM7QUFDbkRaLFFBQUksRUFBRW9GO0FBVkUsR0FBWjtBQVlBbkYsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVNrRixVQUFULENBQW9CakcsVUFBcEIsRUFBZ0NYLE1BQWhDLEVBQXdDQyxRQUF4QyxFQUFrREcsTUFBbEQsRUFBMERELFFBQTFELEVBQW9FdUIsT0FBcEUsRUFBNkU7QUFDekU7QUFDQWYsWUFBVSxDQUFFLHVDQUFGLENBQVY7QUFDQVgsUUFBTSxDQUFDc0MsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLE1BRkU7QUFHUlEsUUFBSSxFQUFFLElBSEU7QUFJUm1ELFNBQUssRUFBRSxLQUpDO0FBS1JuRyxZQUFRLEVBQUVBLFFBTEY7QUFNUkcsVUFBTSxFQUFFQSxNQU5BO0FBT1JELFlBQVEsRUFBRUEsUUFQRjtBQVFSd0QsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFSSDtBQVNScEMsUUFBSSxFQUFFO0FBVEUsR0FBWjtBQVdBQyxTQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0g7O0FBRUQsU0FBU3NFLGlCQUFULENBQTJCaEcsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDVyxRQUE3QyxFQUF1RFQsUUFBdkQsRUFBaUU7QUFDN0RILFFBQU0sQ0FBQ3NDLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxRQUZFO0FBR1J4QyxZQUFRLEVBQUVBLFFBSEY7QUFJUnlELFFBQUksRUFBRTlDLFFBSkU7QUFLUlQsWUFBUSxFQUFFQSxRQUxGO0FBTVJ3RCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCwrREFBZS9ELElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjJkODQ1OWIxZTYyNjUwYWY0M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vcGIvY2hhdFNlY3Rpb25cIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGdvYWw6IDk5XHJcbiAgICAgICAgLCBnYW1laW5kZXg6IDBcclxuICAgICAgICAsIHJvdW5kOiAwXHJcbiAgICAgICAgLCBmcmVlZm9yYWxsOiBmYWxzZVxyXG4gICAgICAgICwgbW92ZXNUaGlzUm91bmQ6IFtdXHJcbiAgICAgICAgLCBtb3Zlc1ByZXZSb3VuZDogW11cclxuICAgICAgICAsIHdob3NldHVybjogLTFcclxuICAgICAgICAsIGZyeUxldHRlcnM6IFtdXHJcbiAgICAgICAgLCBwbGF5ZXJzOiBbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nLCB3aW5zOiAwfV19KTtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTsgLy8gbXkgd29yZCB0byBzdWJtaXRcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IHByZXZHYW1lZGF0YSA9IHVzZVByZXZpb3VzKGdhbWVkYXRhKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJiBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jOiAnaW50ZXJ2YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgc291bmQgd2lsbCBub3QgcGxheSBvbiBzb21lIG1vYmlsZXMuIFNvbWV0aGluZyBhYm91dCBuZWVkaW5nIGEgdXNlciBpbnRlcmFjdGlvbiAocHJvdGVjdGluZyBjZWxsIGRhdGEgdXNhZ2UpLlxyXG4gICAgICAgIGlmIChwcmV2R2FtZWRhdGFcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZ2FtZWluZGV4ID09PSBwcmV2R2FtZWRhdGEuZ2FtZWluZGV4XHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLnJvdW5kID09PSBwcmV2R2FtZWRhdGEucm91bmRcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiAhcHJldkdhbWVkYXRhLmZyZWVmb3JhbGwpIHtcclxuICAgICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgICAvLyBEZWNpZGUgYmV0d2VlbiBPb3BzIChwaG9uZXkgcGxheWVkKSBhbmQgUGFzcyAocGxheWVyIHBhc3NlZClcclxuICAgICAgICAgICAgbXlhdWRpby5zcmMgPSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGgtMV0ucGFzcyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9QYXNzLm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09vcHMubTRhXCI7XHJcbiAgICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2dhbWVkYXRhXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLyogU0VSVkVSIFNFTlQgR0FNRSBEQVRBXHJcbiAgICAgICAgICAgICAgICBGb3IgYSByZWd1bGFyIHVwZGF0ZSBkdWUgdG8gcGxheWVyIGFjdGl2aXR5LCB0aGlzIGNsaWVudCBuZWVkcyB0aGUgdXBkYXRlLlxyXG5cclxuICAgICAgICAgICAgICAgIEZvciBkcm9wcGVkIGNvbm5lY3Rpb25zIHdoaWNoIG1hZGUgdGhpcyBjbGllbnQgc2VuZCBhIHJlam9pbiB0byB1cGRhdGUgc2VydmVyJ3NcclxuICAgICAgICAgICAgICAgICAgIGluZm8gZm9yIHRoaXMgY2xpZW50LCB3aGljaCBtYWtlcyB0aGUgc2VydmVyIHNlbmRzIGdhbWUgaW5mbyB0byB0aGlzIGNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgIHRoaXMgY2xpZW50IGlzIGFscmVhZHkgdXAgdG8gZGF0ZSBhbmQgZG9lcyBub3QgbmVlZCB0aGUgdXBkYXRlLiBXZSBkbyBub3QgdGFrZVxyXG4gICAgICAgICAgICAgICAgICAgdGhlIHVwZGF0ZSBzbyBhcyBub3QgdG8gdXBzZXQgdGhlIGZyeSBsZXR0ZXIgcmVhcnJhbmdlbWVudHMgdGhpcyBjbGllbnQgbWF5IGhhdmVcclxuICAgICAgICAgICAgICAgICAgIG1hZGUuXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWluZGV4ICE9PSBnYW1lZGF0YS5nYW1laW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLnJvdW5kICE9PSBnYW1lZGF0YS5yb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdvYWwgIT09IGdhbWVkYXRhLmdvYWxcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5wbGF5ZXJzLmxlbmd0aCAhPT0gZ2FtZWRhdGEucGxheWVycy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCAhPT0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FQ1JFQVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbywgdGhpcyBpcyByZWFsbHkgZm9yIHRoZSBsb2JieSBkd2VsbGVyc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSSB0aGluayB0aGlzIGhhcHBlbnMgd2hlbiBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBkcm9wcyBhbmQgdGhlIG5ldyBvbmUgbG9zZXMgdGhlIGdhbWVpZCBvbiB0aGUgc2VydmVyIHdzcy5jbGllbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBTbyBzZW5kIGEgcmVqb2luIHJlcXVlc3QgdG8gZ2V0IHRoZSBzZXJ2ZXIgYmFjayBvbiB0cmFja1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdyZWpvaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lVG9FbnRlcldvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA8IDApIHsgLy8gR2FtZSBoYXMgbm90IHN0YXJ0ZWQgb3IgaGFzIGVuZGVkXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGwpIHsgLy8gSW4gZnJlZS1mb3ItYWxsIHJvdW5kXHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5leGNsdWRlZFBsYXllciA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlc1tpXS5uaWNrbmFtZSA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuaWNrbmFtZSA9PT0gZ2FtZWRhdGEucGxheWVyc1tnYW1lZGF0YS53aG9zZXR1cm5dLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBHYW1lU2VjdGlvbiA9IDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtnYW1laWR9LCB7bmlja25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfSB3aW5zITwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwud2lucyA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtwbC53aW5zfSk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPCAxMCA/IDxzcGFuPiZuYnNwOzwvc3Bhbj4gOiAnJ317cGwucG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj4gV2lubmVyISZuYnNwOzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlByZXZpb3VzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCl9XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+VGhpcyByb3VuZDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzVGhpc1JvdW5kJywgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQpfVxyXG4gICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RnJlZS1mb3ItYWxsOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdmZmFNb3ZlcycsIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcyl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Z2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLmFmdGVyU2h1ZmZsZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc29ydHdvcmtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycy5tYXAoKGZsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCIgOiBcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc2hpZnRlZExldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc2hpZnRlZExldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAoI0Fuc3dlcnM6IHtnYW1lZGF0YS5udW1Qb3NzaWJsZUFuc3dlcnN9KVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICBHYW1lIE92ZXImbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVkgQUdBSU5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPntzbmF0fTwvZGl2PlxyXG4gICAgICAgICAgICB7d2FybmluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIHRyV2FybmluZ1wiPnt3YXJuaW5nfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2FtZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TW92ZUxpc3QobW92ZUxpc3RLZXksIG1vdmVBcnJheSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBtb3ZlQXJyYXkubWFwKChtb3ZlKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Ake21vdmVMaXN0S2V5fSR7bW92ZS5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57bW92ZS5uaWNrbmFtZX08c3BhbiBjbGFzc05hbWU9XCJmbG9hdHJpZ2h0XCI+Ojwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAge21vdmUucGFzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj4gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ30gJHttb3ZlLndvcmQubGVuZ3RoID4gMTAgJiYgbW92ZS5lYXJuZWQgPyAnbG9uZycgOiBtb3ZlLndvcmQubGVuZ3RoID4gMTMgPyAnbG9uZycgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgY2xpZW50Um91bmQ6IGdhbWVkYXRhLnJvdW5kLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICBjbGllbnRNb3Zlc0xlbmd0aDogZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICB3b3JkOiBmaXhlZHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVwbGF5JyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZTogZ2FtZWRhdGEsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=