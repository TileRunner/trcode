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
/* harmony import */ var _thinChatSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thinChatSection */ "./pages/fyb/thinChatSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
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
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_7__.scrollToBottom)("ScrollableChat");
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
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_CHATDATA) {
        // It's goofy, but I delete chat when game ends, then someone can start a new game with the same gameid
        // So remove messages not from a player in this game
        let newmsgs = messageData.msgs.filter(function (e) {
          for (let index = 0; index < gamedata.players.length; index++) {
            const player = gamedata.players[index];

            if (player.nickname === e.from) {
              return true;
            }
          }

          return false;
        });
        setChatmsgs(newmsgs);
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
      children: [gameid, ": ", nickname]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
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
            lineNumber: 157,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
              children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (Won ", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
              children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 47
            }, undefined) : '', pl.points, "\xA0", pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 60
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
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
            lineNumber: 215,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
            lineNumber: 224,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
          lineNumber: 229,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
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
          lineNumber: 278,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 13
      }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
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
          lineNumber: 294,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-8",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thinChatSection__WEBPACK_IMPORTED_MODULE_5__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_6__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 290,
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
        lineNumber: 329,
        columnNumber: 36
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 17
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 328,
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
      lineNumber: 356,
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
      lineNumber: 357,
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
        lineNumber: 366,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 355,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld21zZ3MiLCJtc2dzIiwiZmlsdGVyIiwiZSIsInBsYXllciIsImZyb20iLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJleGNsdWRlZFBsYXllciIsImkiLCJmcmVlZm9yYWxsTW92ZXMiLCJHYW1lU2VjdGlvbiIsIm1hcCIsInBsIiwicG9pbnRzIiwic2hvd01vdmVMaXN0Iiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJuZXdHYW1lZGF0YSIsInN0cmluZ2lmeSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiZWxlbWVudCIsIm51bVBvc3NpYmxlQW5zd2VycyIsImdldFBsYXllcldvcmQiLCJnYW1lT3ZlciIsInNlbmRSZXBsYXlSZXF1ZXN0IiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSiwrQ0FBUSxD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QVMyQztBQUNuRFosUUFBSSxFQUFFc0Y7QUFWRSxHQUFaO0FBWUFyRixTQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0g7O0FBRUQsU0FBU29GLFVBQVQsQ0FBb0JuRyxVQUFwQixFQUFnQ1gsTUFBaEMsRUFBd0NDLFFBQXhDLEVBQWtERyxNQUFsRCxFQUEwREQsUUFBMUQsRUFBb0V1QixPQUFwRSxFQUE2RTtBQUN6RTtBQUNBZixZQUFVLENBQUUsdUNBQUYsQ0FBVjtBQUNBWCxRQUFNLENBQUNzQyxJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsTUFGRTtBQUdSUSxRQUFJLEVBQUUsSUFIRTtBQUlSc0QsU0FBSyxFQUFFLEtBSkM7QUFLUnRHLFlBQVEsRUFBRUEsUUFMRjtBQU1SRyxVQUFNLEVBQUVBLE1BTkE7QUFPUkQsWUFBUSxFQUFFQSxRQVBGO0FBUVIyRCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQVJIO0FBU1J2QyxRQUFJLEVBQUU7QUFURSxHQUFaO0FBV0FDLFNBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDs7QUFFRCxTQUFTeUUsaUJBQVQsQ0FBMkJuRyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNXLFFBQTdDLEVBQXVEVCxRQUF2RCxFQUFpRTtBQUM3REgsUUFBTSxDQUFDc0MsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUnhDLFlBQVEsRUFBRUEsUUFIRjtBQUlSNEQsUUFBSSxFQUFFakQsUUFKRTtBQUtSVCxZQUFRLEVBQUVBLFFBTEY7QUFNUjJELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBTkgsR0FBWjtBQVFIOztBQUVELCtEQUFlbEUsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYThiNjMwMzgyZmRlN2UyNDhiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcbmltcG9ydCBUaGluQ2hhdCBmcm9tIFwiLi90aGluQ2hhdFNlY3Rpb25cIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL3BiL2NoYXRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBnb2FsOiA5OVxyXG4gICAgICAgICwgZ2FtZWluZGV4OiAwXHJcbiAgICAgICAgLCByb3VuZDogMFxyXG4gICAgICAgICwgZnJlZWZvcmFsbDogZmFsc2VcclxuICAgICAgICAsIG1vdmVzVGhpc1JvdW5kOiBbXVxyXG4gICAgICAgICwgbW92ZXNQcmV2Um91bmQ6IFtdXHJcbiAgICAgICAgLCB3aG9zZXR1cm46IC0xXHJcbiAgICAgICAgLCBmcnlMZXR0ZXJzOiBbXVxyXG4gICAgICAgICwgcGxheWVyczogW3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJywgd2luczogMH1dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBwcmV2R2FtZWRhdGEgPSB1c2VQcmV2aW91cyhnYW1lZGF0YSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgICB9LFtjaGF0bXNnc10pXHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBUaGlzIHNvdW5kIHdpbGwgbm90IHBsYXkgb24gc29tZSBtb2JpbGVzLiBTb21ldGhpbmcgYWJvdXQgbmVlZGluZyBhIHVzZXIgaW50ZXJhY3Rpb24gKHByb3RlY3RpbmcgY2VsbCBkYXRhIHVzYWdlKS5cclxuICAgICAgICBpZiAocHJldkdhbWVkYXRhXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmdhbWVpbmRleCA9PT0gcHJldkdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAmJiBnYW1lZGF0YS5yb3VuZCA9PT0gcHJldkdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgIXByZXZHYW1lZGF0YS5mcmVlZm9yYWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgICAgLy8gRGVjaWRlIGJldHdlZW4gT29wcyAocGhvbmV5IHBsYXllZCkgYW5kIFBhc3MgKHBsYXllciBwYXNzZWQpXHJcbiAgICAgICAgICAgIG15YXVkaW8uc3JjID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLTFdLnBhc3MgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vUGFzcy5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9Pb3BzLm00YVwiO1xyXG4gICAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtnYW1lZGF0YV0pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19DSEFUREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSXQncyBnb29meSwgYnV0IEkgZGVsZXRlIGNoYXQgd2hlbiBnYW1lIGVuZHMsIHRoZW4gc29tZW9uZSBjYW4gc3RhcnQgYSBuZXcgZ2FtZSB3aXRoIHRoZSBzYW1lIGdhbWVpZFxyXG4gICAgICAgICAgICAgICAgLy8gU28gcmVtb3ZlIG1lc3NhZ2VzIG5vdCBmcm9tIGEgcGxheWVyIGluIHRoaXMgZ2FtZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld21zZ3MgPSBtZXNzYWdlRGF0YS5tc2dzLmZpbHRlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGdhbWVkYXRhLnBsYXllcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLm5pY2tuYW1lID09PSBlLmZyb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRDaGF0bXNncyhuZXdtc2dzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBTRVJWRVIgU0VOVCBHQU1FIERBVEFcclxuICAgICAgICAgICAgICAgIEZvciBhIHJlZ3VsYXIgdXBkYXRlIGR1ZSB0byBwbGF5ZXIgYWN0aXZpdHksIHRoaXMgY2xpZW50IG5lZWRzIHRoZSB1cGRhdGUuXHJcblxyXG4gICAgICAgICAgICAgICAgRm9yIGRyb3BwZWQgY29ubmVjdGlvbnMgd2hpY2ggbWFkZSB0aGlzIGNsaWVudCBzZW5kIGEgcmVqb2luIHRvIHVwZGF0ZSBzZXJ2ZXInc1xyXG4gICAgICAgICAgICAgICAgICAgaW5mbyBmb3IgdGhpcyBjbGllbnQsIHdoaWNoIG1ha2VzIHRoZSBzZXJ2ZXIgc2VuZHMgZ2FtZSBpbmZvIHRvIHRoaXMgY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgdGhpcyBjbGllbnQgaXMgYWxyZWFkeSB1cCB0byBkYXRlIGFuZCBkb2VzIG5vdCBuZWVkIHRoZSB1cGRhdGUuIFdlIGRvIG5vdCB0YWtlXHJcbiAgICAgICAgICAgICAgICAgICB0aGUgdXBkYXRlIHNvIGFzIG5vdCB0byB1cHNldCB0aGUgZnJ5IGxldHRlciByZWFycmFuZ2VtZW50cyB0aGlzIGNsaWVudCBtYXkgaGF2ZVxyXG4gICAgICAgICAgICAgICAgICAgbWFkZS5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZS5nYW1laW5kZXggIT09IGdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUucm91bmQgIT09IGdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEuZ29hbCAhPT0gZ2FtZWRhdGEuZ29hbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnBsYXllcnMubGVuZ3RoICE9PSBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUubW92ZXNUaGlzUm91bmQubGVuZ3RoICE9PSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRXYXJuaW5nKCcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCB0aGlzIGlzIHJlYWxseSBmb3IgdGhlIGxvYmJ5IGR3ZWxsZXJzXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaGFwcGVucyB3aGVuIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIGRyb3BzIGFuZCB0aGUgbmV3IG9uZSBsb3NlcyB0aGUgZ2FtZWlkIG9uIHRoZSBzZXJ2ZXIgd3NzLmNsaWVudHNcclxuICAgICAgICAgICAgICAgIC8vIFNvIHNlbmQgYSByZWpvaW4gcmVxdWVzdCB0byBnZXQgdGhlIHNlcnZlciBiYWNrIG9uIHRyYWNrXHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIW1lVG9FbnRlcldvcmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuIDwgMCkgeyAvLyBHYW1lIGhhcyBub3Qgc3RhcnRlZCBvciBoYXMgZW5kZWRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbCkgeyAvLyBJbiBmcmVlLWZvci1hbGwgcm91bmRcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmV4Y2x1ZGVkUGxheWVyID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzW2ldLm5pY2tuYW1lID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKG5pY2tuYW1lID09PSBnYW1lZGF0YS5wbGF5ZXJzW2dhbWVkYXRhLndob3NldHVybl0ubmlja25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTZWN0aW9uID0gPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5cclxuICAgICAgICAgICAge2dhbWVpZH06IHtuaWNrbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+Rmlyc3QgdG8ge2dhbWVkYXRhLmdvYWx9IHdpbnMhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YFBsYXllciR7cGwuaW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLndpbnMgPiAwICYmIDxzcGFuPiAoV29uIHtwbC53aW5zfSk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLndpbnMgPiAwICYmIDxzcGFuPiAoe3BsLndpbnN9KTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzIDwgMTAgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9e3BsLnBvaW50c30mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPj0gZ2FtZWRhdGEuZ29hbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+IFdpbm5lciEmbmJzcDs8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5QcmV2aW91cyByb3VuZDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzUHJldlJvdW5kJywgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQpfVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlRoaXMgcm91bmQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdtb3Zlc1RoaXNSb3VuZCcsIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kKX1cclxuICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkZyZWUtZm9yLWFsbDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnZmZhTW92ZXMnLCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAge2dhbWVkYXRhLndob3NldHVybiA+IC0xICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+RnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaHVmZmxlU2l6ZSA9IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU2h1ZmZsZSA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU2h1ZmZsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYWZ0ZXJTaHVmZmxlLmxlbmd0aCA8IHNodWZmbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlZm9yZVNodWZmbGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2h1ZmZsZS5wdXNoKGJlZm9yZVNodWZmbGVbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2h1ZmZsZS5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5hZnRlclNodWZmbGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29ydHdvcmsgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnR3b3JrLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNvcnR3b3JrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLmZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BGcnlMZXR0ZXIke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gc2VsZWN0ZWQgPyBcImZ5YkZyeUxldHRlciBTZWxlY3RlZFwiIDogXCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKCNBbnN3ZXJzOiB7Z2FtZWRhdGEubnVtUG9zc2libGVBbnN3ZXJzfSlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAge21lVG9FbnRlcldvcmQoKSAmJlxyXG4gICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2dhbWVkYXRhLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZSBPdmVyJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKTsgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZIEFHQUlOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj57c25hdH08L2Rpdj5cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2FtZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhpbkNoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnttb3ZlLm5pY2tuYW1lfTxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ30gJHttb3ZlLndvcmQubGVuZ3RoID4gMTAgJiYgbW92ZS5lYXJuZWQgPyAnbG9uZycgOiBtb3ZlLndvcmQubGVuZ3RoID4gMTMgPyAnbG9uZycgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgY2xpZW50Um91bmQ6IGdhbWVkYXRhLnJvdW5kLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICBjbGllbnRNb3Zlc0xlbmd0aDogZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICB3b3JkOiBmaXhlZHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVwbGF5JyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZTogZ2FtZWRhdGEsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=