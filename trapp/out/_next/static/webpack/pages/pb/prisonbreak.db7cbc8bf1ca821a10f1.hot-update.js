webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./lib/pbconstants.js":
/*!****************************!*\
  !*** ./lib/pbconstants.js ***!
  \****************************/
/*! exports provided: BOARD_COL_HEADERS, BOARD_ROW_HEADERS, SQUARE_UNUSED, PARTY_TYPE_UNDETERMINED, PARTY_TYPE_PRISONERS, PARTY_TYPE_GUARDS, PARTY_TYPE_OBSERVER, WHOSE_TURN_PRISONERS, WHOSE_TURN_GUARDS, WHOSE_TURN_GAMEOVER, PARTY_ICON_PRISONERS, PARTY_ICON_GUARDS, PARTY_TITLE_PRISONERS, PARTY_TITLE_GUARDS, MOVE_TYPE_PLAY, MOVE_TYPE_SWAP, MOVE_TYPE_PASS, DIR_RIGHT, DIR_DOWN, DIR_NONE, USED_BY_NONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_COL_HEADERS", function() { return BOARD_COL_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_ROW_HEADERS", function() { return BOARD_ROW_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_UNUSED", function() { return SQUARE_UNUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_UNDETERMINED", function() { return PARTY_TYPE_UNDETERMINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_PRISONERS", function() { return PARTY_TYPE_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_GUARDS", function() { return PARTY_TYPE_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_OBSERVER", function() { return PARTY_TYPE_OBSERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_PRISONERS", function() { return WHOSE_TURN_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_GUARDS", function() { return WHOSE_TURN_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_GAMEOVER", function() { return WHOSE_TURN_GAMEOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_ICON_PRISONERS", function() { return PARTY_ICON_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_ICON_GUARDS", function() { return PARTY_ICON_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TITLE_PRISONERS", function() { return PARTY_TITLE_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TITLE_GUARDS", function() { return PARTY_TITLE_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_PLAY", function() { return MOVE_TYPE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_SWAP", function() { return MOVE_TYPE_SWAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_PASS", function() { return MOVE_TYPE_PASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_RIGHT", function() { return DIR_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOWN", function() { return DIR_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_NONE", function() { return DIR_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USED_BY_NONE", function() { return USED_BY_NONE; });
const BOARD_COL_HEADERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const BOARD_ROW_HEADERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const SQUARE_UNUSED = "."; // Types of participant

const PARTY_TYPE_UNDETERMINED = 'U'; // Not determined yet

const PARTY_TYPE_PRISONERS = 'P'; // Player representing prisoners

const PARTY_TYPE_GUARDS = 'G'; // Player representing guards

const PARTY_TYPE_OBSERVER = 'O'; // Observer (not implemented yet)
// Whose turn

const WHOSE_TURN_PRISONERS = PARTY_TYPE_PRISONERS;
const WHOSE_TURN_GUARDS = PARTY_TYPE_GUARDS;
const WHOSE_TURN_GAMEOVER = 'X'; // Participant material-icons name

const PARTY_ICON_PRISONERS = 'run_circle';
const PARTY_ICON_GUARDS = 'security'; // Participant title

const PARTY_TITLE_PRISONERS = 'PRISONERS';
const PARTY_TITLE_GUARDS = 'GUARDS'; // Types of move

const MOVE_TYPE_PLAY = 'PLAY';
const MOVE_TYPE_SWAP = 'SWAP';
const MOVE_TYPE_PASS = 'PASS'; // Directions (for the arrow on the board to signify word play direction)

const DIR_RIGHT = 'r';
const DIR_DOWN = 'd';
const DIR_NONE = ''; // Used by (for specifying who a square is used by, i.e. has a tile on that square)

const USED_BY_NONE = '';

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/pb/game.js":
/*!**************************!*\
  !*** ./pages/pb/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_playerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/playerSection */ "./pages/pb/playerSection.js");
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();








const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const jokes = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const initialtiles4 = ["A", "A", "A", "B", "C", "D", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "J", "K", "L", "M", "N", "N", "O", "O", "O", "P", "Q", "R", "R", "S", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 4 letter rack mode

const initialtiles5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const Game = ({
  isrejoin,
  participant // Prisoners, Guards, or Observer
  ,
  gameid,
  nickname,
  wsmessage,
  client,
  racksize = 4 // Option for rack size (give it a default for Build)

}) => {
  _s2();

  var _s = $RefreshSig$();

  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : racksize === 5 ? initialtiles5 : initialtiles4;
  const initialsquares = Array(edge + 1).fill(Array(edge + 1).fill(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]));
  const initialusedby = Array(edge + 1).fill(Array(edge + 1).fill(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]));
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]); // game starts with prisoners play

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]]);
  const {
    0: moves,
    1: setMoves
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // move history, each element is the array is a json object of info about the move

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
    0: jokeindex,
    1: setJokeindex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: allowRewind,
    1: setAllowRewind
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: oppname,
    1: setOppname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // const rescueSound = new Audio("https://tilerunner.github.io/yippee.m4a"); // I couldn't get the syntax right to read it from pb folder

  const prevRescues = usePrevious(rescues);

  function usePrevious(value) {
    _s();

    const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      ref.current = value;
    });
    return ref.current;
  }

  _s(usePrevious, "8uVE59eA/r6b92xF80p7sH8rXLk=");

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (rescues > prevRescues) {
      var myaudio = document.createElement('audio');
      myaudio.src = "https://tilerunner.github.io/yippee.m4a";
      myaudio.play(); // rescueSound.play()
    }
  }, [rescues]); // Play a sound when a rescue is made

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newji = jokeindex + 1;

    if (newji >= jokes.length) {
      newji = 0;
    }

    setJokeindex(newji);
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (participant !== whoseturn && whoseturn !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]) {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, movewaittime); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
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
        sender: participant,
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
          sender: participant
        }));
      } catch {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableMoves");
  }, [moves]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableChat");
  }, [chatmsgs]);

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: participant,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != participant && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if (messageData.func === "requestgamedata" && messageData.sender !== participant) {
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
          sender: participant,
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          snapshot: snapshot,
          moves: moves,
          rescues: rescues,
          racksize: racksize,
          // rack size option (lobby needs to know for when guards join game and they call Game)
          allowRewind: allowRewind
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== participant) {
        // Opponent provided game data but do we need it?
        // If they have a different move count then we need it (they may have undone a move)
        // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
        // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
        if (messageData.moves.length !== moves.length || messageData.tiles.length !== tiles.length || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] && gtiles.length === 0 && currentcoords.length === 0 || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] && ptiles.length === 0 && currentcoords.length === 0 // Not sure I need it but...
        ) {
            setTiles(messageData.tiles);
            setSquares(messageData.squares);
            setPtiles(messageData.ptiles);
            setGtiles(messageData.gtiles);
            setUsedby(messageData.usedby);
            setWhoseturn(messageData.whoseturn);
            setSnapshot(messageData.snapshot);
            setMoves(messageData.moves);
            setRescues(messageData.rescues);
            setAllowRewind(messageData.allowRewind);
          }
      }

      if (messageData.func === "ept" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"]) {
        // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
        // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }

      if (messageData.func === "undoturn" && messageData.sender !== participant) {
        // opponent undid their last turn
        putAtMoveStart();
        setTiles(messageData.tiles);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setRescues(messageData.rescues);
        setMoves(messageData.moves);
        setSnapshot(messageData.snapshot);
      }

      if (messageData.func === "allowundo" && messageData.sender !== participant) {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
      }

      if (messageData.func === "chat" && messageData.sender != participant) {
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

    if (newSelection > -1 && squarevalue === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] && newSelection === newGtiles.length) {
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
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"];
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"];
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"] : //click new square, start with right
      rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"] : //click same square that was right, change to down
      rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"] : //click same square that was down, change to no direction
      _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]; // click same square that was no direction, change to right

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handleRackTileClick = tileindex => {
    // If no tile is selected already then set the selection
    if (selection === -1) {
      setSelection(tileindex);
      return;
    } // If the same tile is already selected then unselect


    if (selection === tileindex) {
      setSelection(-1);
      return;
    } // A tile was already selected and they clicked another tile - move the tile


    let newrack = participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? setPtiles(newrack) : setGtiles(newrack);
    setSelection(-1);
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let rewindInfo = getRewindInfo();
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
    let newWhoseturn = newPtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (usedby[0][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[0][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[0][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[middle][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[middle][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
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
      sender: participant,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      moves: newMoves,
      // a move was made
      rescues: newRescues // may have rescued another prisoner

    }));
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let rewindInfo = getRewindInfo();
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
    let newWhoseturn = newGtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (usedby[0][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[0][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[0][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[middle][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[middle][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][0] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && usedby[edge][edge] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
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
      sender: participant,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves,
      // a move was made
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let rewindInfo = getRewindInfo();
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
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
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
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"],
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
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on an exchange

    }));
  };

  const swapGuardsTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let rewindInfo = getRewindInfo();
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
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
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
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"],
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
      moves: newMoves // a move was made

    }));
  };

  function isPlayValid() {
    if (squares[middle][middle] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      window.alert("First play must hit center square");
      return false;
    }

    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var temprow = 0; temprow < numrows; ++temprow) {
      for (var tempcol = 0; tempcol < numcols; ++tempcol) {
        if (squares[temprow][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          if (!(temprow > 0 && squares[temprow - 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(tempcol > 0 && squares[temprow][tempcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(temprow < edge && squares[temprow + 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(tempcol < edge && squares[temprow][tempcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"])) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[temprow][tempcol] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            // This square was played on this turn
            if (temprow < lowrow) {
              lowrow = temprow;
            }

            if (temprow > highrow) {
              highrow = temprow;
            }

            if (tempcol < lowcol) {
              lowcol = tempcol;
            }

            if (tempcol > highcol) {
              highcol = tempcol;
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

    for (var temprow = lowrow; temprow <= highrow; ++temprow) {
      for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
        if (squares[temprow][tempcol] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[temprow][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          playthru = true;
        }

        if (lowrow === highrow && temprow > 0 && squares[temprow - 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowrow === highrow && temprow < edge && squares[temprow + 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol > 0 && squares[temprow][tempcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol < edge && squares[temprow][tempcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow + 1][lowcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[middle][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      window.alert("Words must be connected");
      return false;
    }

    return true;
  }

  function getPlayInfo() {
    let playinfo = {};
    let mainword = "";
    let extrawords = [];
    let wordstartcoord = "";
    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    let numcoords = currentcoords.length;

    for (var coord = 0; coord < numcoords; ++coord) {
      let row = parseInt(currentcoords[coord].split("-")[0]);
      let col = parseInt(currentcoords[coord].split("-")[1]);

      if (row < lowrow) {
        lowrow = row;
      }

      if (row > highrow) {
        highrow = row;
      }

      if (col < lowcol) {
        lowcol = col;
      }

      if (col > highcol) {
        highcol = col;
      }
    }

    if (lowrow < highrow || numcoords === 1) {
      // tiles placed on difference rows so play is vertical, or single tile played
      let col = lowcol; // lowcol and highcol will have the same value
      // find the lowest row number of the main word, which may be lower than that of the first played tile

      let lowestrow = lowrow;

      while (lowestrow > 0 && squares[lowestrow - 1][col] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squares[highestrow + 1][col] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_COL_HEADERS"][col] + _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_ROW_HEADERS"][lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squares[row][lowestcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squares[row][highestcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            highestcol = highestcol + 1;
          }

          if (lowestcol < highestcol) {
            // hook was made
            let extraword = "";

            for (var tempcol = lowestcol; tempcol <= highestcol; ++tempcol) {
              extraword = extraword + squares[row][tempcol];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    if (mainword.length < 2) {
      // Horizontal play or single tile drop that cannot be a vertical play
      let row = lowrow; // lowrow and highrow will have the same value
      // find the lowest col number of the main word, which may be lower than that of the first played tile

      let lowestcol = lowcol;

      while (lowestcol > 0 && squares[row][lowestcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squares[row][highestcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_ROW_HEADERS"][row] + _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_COL_HEADERS"][lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squares[lowestrow - 1][col] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squares[highestrow + 1][col] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            highestrow = highestrow + 1;
          }

          if (lowestrow < highestrow) {
            // hook was made
            let extraword = "";

            for (var temprow = lowestrow; temprow <= highestrow; ++temprow) {
              extraword = extraword + squares[temprow][col];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    playinfo = {
      mainword: mainword,
      extrawords: extrawords,
      pos: wordstartcoord
    };
    return playinfo;
  }

  function getRewindInfo() {
    // Must be called before you start setting new values for stuff

    /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
        squares: says what tile is on what square
        usedby: says who played what tile on what square (affects styling)
        rack: players rack before move was made 
        tiles: tile pool before picking new tiles
        rescues: rescue count
    */
    let rewindInfo = {
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      rack: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] ? [...snapshot.gtiles] : [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues
    };
    return rewindInfo;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "allowundo",
        // allow undo last turn
        racksize: racksize,
        // rack size option (lobby needs to know for when guards join game and they call Game)
        sender: participant // who is allowing it

      }));
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length - 1];
    let newSquares = [...lastMove.rewindInfo.squares];
    let newUsedby = [...lastMove.rewindInfo.usedby];
    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn

    let newMoves = [...moves];
    newMoves.splice(numMoves - 1, 1);
    let newSnapshot = {
      squares: [...newSquares],
      usedby: [...newUsedby],
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquares(newSquares);
    setUsedby(newUsedby);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setMoves(newMoves);
    setSnapshot(newSnapshot); // Just send everything even though some could be hard coded in processMessage by opponent

    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "undoturn",
      // undo last turn
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      sender: participant,
      tiles: newTiles,
      // tile pool
      ptiles: newPtiles,
      // prisoners rack
      gtiles: newGtiles,
      // guards rack
      squares: newSquares,
      // revert to start of turn squares
      usedby: newUsedby,
      // revert to start of turn used by
      whoseturn: newWhoseturn,
      // swap never ends the game so go to opponent
      rescues: newRescues,
      // rescue count
      moves: newMoves,
      // a move was made
      snapshot: newSnapshot
    }));
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: participant,
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
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: participant,
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
      moves: newMoves // a move was made

    }));
  };

  function isDoublePass(movelist) {
    let last = movelist.length - 1;
    let secondlast = last - 1;
    return secondlast > -1 && movelist[secondlast].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"] && movelist[last].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"];
  }

  const requestGameData = () => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      sender: participant,
      whoseturn: whoseturn,
      // for lobby to pick up this message
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      func: "requestgamedata" // request game data

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (participant !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]) {
            // playing rightwards
            let newc = -1;

            for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
              if (squares[row][tempcol] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
                newc = tempcol;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
            } else {
              newRcd = [row, newc, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"]) {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
              if (squares[temprow][col] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
                newr = temprow;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
            } else {
              newRcd = [newr, col, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"]];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

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
      let newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"];
      newSquares[row][col] = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"];
      let dir = rcd[2];

      if (dir !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]) {
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
    className: "prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "myHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1179,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1178,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1181,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1184,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
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
              lineNumber: 1189,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1189,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1188,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1187,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1192,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tiles: tiles,
          othertiles: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1198,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1199,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1197,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          racktiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          onClickPassPlay: () => prisonerPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1203,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          racktiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endGuardsTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapGuardsTiles(),
          onClickPassPlay: () => guardsPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1219,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1201,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: participant === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null),
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1239,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1238,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {},
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1249,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1248,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1236,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1260,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1261,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1259,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1196,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1267,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1269,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1265,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1264,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1176,
    columnNumber: 7
  }, undefined);
};

_s2(Game, "RuMV5VZ1Fsf2ETtCmIRqqOfIJvE=", true);

_c = Game;

const ShowRescues = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbRescuesMade",
    children: ["Rescues made: ", props.rescues]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1279,
    columnNumber: 7
  }, undefined);
};

_c2 = ShowRescues;

const Chat = ({
  gameid,
  client,
  nickname,
  msgs,
  setMsgs,
  participant
}) => {
  _s3();

  const {
    0: nextmsg,
    1: setNextmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleKeyDown = event => {
    if (event.key === "Enter" && nextmsg.length > 0) {
      event.preventDefault();
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
        sender: participant,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      }));
      return;
    } // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    // if (event.key.match(chartest)) {
    //   let newNextmsg = nextmsg + event.key;
    //   setNextmsg(newNextmsg);
    // }


    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0, nextmsg.length - 1);
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "ScrollableChat",
    className: "pbChat",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1325,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1326,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1324,
          columnNumber: 15
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              className: nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1331,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1330,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1329,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1322,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1321,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1320,
    columnNumber: 7
  }, undefined);
};

_s3(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c3 = Chat;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c, _c2, _c3;

$RefreshReg$(_c, "Game");
$RefreshReg$(_c2, "ShowRescues");
$RefreshReg$(_c3, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYi9nYW1lLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwiV0hPU0VfVFVSTl9HVUFSRFMiLCJXSE9TRV9UVVJOX0dBTUVPVkVSIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIlBBUlRZX1RJVExFX1BSSVNPTkVSUyIsIlBBUlRZX1RJVExFX0dVQVJEUyIsIk1PVkVfVFlQRV9QTEFZIiwiTU9WRV9UWVBFX1NXQVAiLCJNT1ZFX1RZUEVfUEFTUyIsIkRJUl9SSUdIVCIsIkRJUl9ET1dOIiwiRElSX05PTkUiLCJVU0VEX0JZX05PTkUiLCJtb3Zld2FpdHRpbWUiLCJqb2tlcyIsImluaXRpYWx0aWxlczQiLCJpbml0aWFsdGlsZXM1IiwiaW5pdGlhbHRpbGVzNiIsImluaXRpYWx0aWxlczciLCJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJtaWRkbGUiLCJlZGdlIiwiaW5pdGlhbHRpbGVzIiwiaW5pdGlhbHNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJjIiwiaW5pdGlhbHVzZWRieSIsInRpbGVzIiwic2V0VGlsZXMiLCJ1c2VTdGF0ZSIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlZGJ5Iiwic2V0VXNlZGJ5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInJjZCIsInNldFJjZCIsIm1vdmVzIiwic2V0TW92ZXMiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwiam9rZWluZGV4Iiwic2V0Sm9rZWluZGV4IiwiYWxsb3dSZXdpbmQiLCJzZXRBbGxvd1Jld2luZCIsIm9wcG5hbWUiLCJzZXRPcHBuYW1lIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInByZXZSZXNjdWVzIiwidXNlUHJldmlvdXMiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwibGVuZ3RoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RHYW1lRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwicGFyc2UiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsInJpIiwiY2kiLCJuZXdTZWxlY3Rpb24iLCJuZXdSY2QiLCJuZXdTcXVhcmVzIiwibmV3VXNlZGJ5IiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Um93Iiwic3F1YXJldmFsdWUiLCJuZXdDdXJyZW50Y29vcmRzIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUmFja1RpbGVDbGljayIsInRpbGVpbmRleCIsIm5ld3JhY2siLCJtb3ZlZnJvbSIsIm1vdmV0aWxlIiwibW92ZXRvIiwiZW5kUHJpc29uZXJzVHVybiIsImlzUGxheVZhbGlkIiwicmV3aW5kSW5mbyIsImdldFJld2luZEluZm8iLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsImkiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsImFsZXJ0Iiwic3dhcEd1YXJkc1RpbGVzIiwibnVtcm93cyIsIm51bWNvbHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInRlbXByb3ciLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsIndvcmRzdGFydGNvb3JkIiwibnVtY29vcmRzIiwicm93IiwicGFyc2VJbnQiLCJzcGxpdCIsImNvbCIsImxvd2VzdHJvdyIsImhpZ2hlc3Ryb3ciLCJsb3dlc3Rjb2wiLCJoaWdoZXN0Y29sIiwiZXh0cmF3b3JkIiwicmFjayIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsIm51bU1vdmVzIiwibGFzdE1vdmUiLCJuZXdTbmFwc2hvdCIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiaXNEb3VibGVQYXNzIiwiZ3VhcmRzUGFzcyIsIm1vdmVsaXN0IiwibGFzdCIsInNlY29uZGxhc3QiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJyZXR1cm5lZFRpbGUiLCJ0aSIsIlNob3dSZXNjdWVzIiwicHJvcHMiLCJDaGF0IiwibXNncyIsInNldE1zZ3MiLCJuZXh0bXNnIiwic2V0TmV4dG1zZyIsIm5ld01zZ3MiLCJuZXdOZXh0bXNnIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImUiLCJ0YXJnZXQiLCJlbGVtZW50aWQiLCJ0aGVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGlCQUFpQixHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxHQUFyQyxFQUF5QyxHQUF6QyxFQUE2QyxHQUE3QyxFQUFpRCxHQUFqRCxFQUFxRCxHQUFyRCxFQUF5RCxHQUF6RCxDQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxJQUFyQyxFQUEwQyxJQUExQyxFQUErQyxJQUEvQyxFQUFvRCxJQUFwRCxFQUF5RCxJQUF6RCxFQUE4RCxJQUE5RCxDQUExQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxHQUF0QixDLENBQ1A7O0FBQ08sTUFBTUMsdUJBQXVCLEdBQUcsR0FBaEMsQyxDQUFxQzs7QUFDckMsTUFBTUMsb0JBQW9CLEdBQUcsR0FBN0IsQyxDQUFrQzs7QUFD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QSxXQUFVLGNBQWFzSCxLQUFNLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsQ0FESCxlQU9FO0FBQUEsaUNBQ0U7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQSxtQ0FDRTtBQUFVLHVCQUFTLEVBQUVOLE9BQU8sS0FBSyxFQUFaLEdBQWlCLGtCQUFqQixHQUFzQyxhQUEzRDtBQUNFLGtCQUFJLEVBQUMsa0JBRFA7QUFFRSxtQkFBSyxFQUFFQSxPQUZUO0FBR0Usc0JBQVEsRUFBR08sQ0FBRCxJQUFPO0FBQUNOLDBCQUFVLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTeEosS0FBVixDQUFWO0FBQTRCLGVBSGhEO0FBSUUsOEJBQWdCLEVBQUU4SCxhQUpwQjtBQUtFLHlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRCxDQTNERDs7SUFBTWUsSTs7TUFBQUEsSTs7QUE2RE4sTUFBTTNHLGNBQWMsR0FBSXVILFNBQUQsSUFBZTtBQUNwQyxRQUFNQyxVQUFVLEdBQUdwSixRQUFRLENBQUNxSixjQUFULENBQXdCRixTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNFLFNBQVgsR0FBdUJGLFVBQVUsQ0FBQ0csWUFBbEM7QUFDRCxDQUhEOztBQUtlaE4sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuZGI3Y2JjOGJmMWNhODIxYTEwZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCT0FSRF9DT0xfSEVBREVSUyA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSicsJ0snLCdMJywnTScsJ04nLCdPJ107XHJcbmV4cG9ydCBjb25zdCBCT0FSRF9ST1dfSEVBREVSUyA9IFsnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnMTAnLCcxMScsJzEyJywnMTMnLCcxNCcsJzE1J107XHJcbmV4cG9ydCBjb25zdCBTUVVBUkVfVU5VU0VEID0gXCIuXCI7XHJcbi8vIFR5cGVzIG9mIHBhcnRpY2lwYW50XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX1VOREVURVJNSU5FRCA9ICdVJzsgLy8gTm90IGRldGVybWluZWQgeWV0XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX1BSSVNPTkVSUyA9ICdQJzsgLy8gUGxheWVyIHJlcHJlc2VudGluZyBwcmlzb25lcnNcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfR1VBUkRTID0gJ0cnOyAvLyBQbGF5ZXIgcmVwcmVzZW50aW5nIGd1YXJkc1xyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9PQlNFUlZFUiA9ICdPJzsgLy8gT2JzZXJ2ZXIgKG5vdCBpbXBsZW1lbnRlZCB5ZXQpXHJcbi8vIFdob3NlIHR1cm5cclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fUFJJU09ORVJTID0gUEFSVFlfVFlQRV9QUklTT05FUlM7XHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX0dVQVJEUyA9IFBBUlRZX1RZUEVfR1VBUkRTO1xyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9HQU1FT1ZFUiA9ICdYJztcclxuLy8gUGFydGljaXBhbnQgbWF0ZXJpYWwtaWNvbnMgbmFtZVxyXG5leHBvcnQgY29uc3QgUEFSVFlfSUNPTl9QUklTT05FUlMgPSAncnVuX2NpcmNsZSc7XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9JQ09OX0dVQVJEUyA9ICdzZWN1cml0eSc7XHJcbi8vIFBhcnRpY2lwYW50IHRpdGxlXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9USVRMRV9QUklTT05FUlMgPSAnUFJJU09ORVJTJztcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RJVExFX0dVQVJEUyA9ICdHVUFSRFMnO1xyXG4vLyBUeXBlcyBvZiBtb3ZlXHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfUExBWSA9ICdQTEFZJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9TV0FQID0gJ1NXQVAnO1xyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1BBU1MgPSAnUEFTUyc7XHJcbi8vIERpcmVjdGlvbnMgKGZvciB0aGUgYXJyb3cgb24gdGhlIGJvYXJkIHRvIHNpZ25pZnkgd29yZCBwbGF5IGRpcmVjdGlvbilcclxuZXhwb3J0IGNvbnN0IERJUl9SSUdIVCA9ICdyJztcclxuZXhwb3J0IGNvbnN0IERJUl9ET1dOID0gJ2QnO1xyXG5leHBvcnQgY29uc3QgRElSX05PTkUgPSAnJztcclxuLy8gVXNlZCBieSAoZm9yIHNwZWNpZnlpbmcgd2hvIGEgc3F1YXJlIGlzIHVzZWQgYnksIGkuZS4gaGFzIGEgdGlsZSBvbiB0aGF0IHNxdWFyZSlcclxuZXhwb3J0IGNvbnN0IFVTRURfQllfTk9ORSA9ICcnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlcyA9IFtcclxuICAnRXNjYXBlZTogXCJJJyArIFwiJ20gZnJlZSEgSSdtIGZyZWUhXCIgKyAnXCIuIExpdHRsZSBraWQ6IFwiSScrIFwiJ20gZm91ciEgSSdtIGZvdXIhXCIgKyAnXCInLFxyXG4gICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICBcIlRoZSBwc3ljaGljIGR3YXJmIGVzY2FwZWQhIFRoZXJlJ3MgYSBzbWFsbCBtZWRpdW0gYXQgbGFyZ2UhXCIsXHJcbiAgJ1doYXQgZG8geW91IGNhbGwgYSB2ZWdldGFibGUgd2hvIGhhcyBlc2NhcGVkIHByaXNvbj8gQW4gZXNjYXBlYSEnLFxyXG4gIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgXCJQcmlzb24gaXMgb25seSBvbmUgd29yZCwgYnV0IHRvIHJvYmJlcnMgaXQncyBhIHdob2xlIHNlbnRlbmNlLlwiXHJcbl07XHJcbmNvbnN0IGluaXRpYWx0aWxlczQgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDQgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM1ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDUgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLCAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLCAgXCJWXCIsXHJcbiAgXCJXXCIsICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIiwgIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA3IGxldHRlciByYWNrIG1vZGVcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luXHJcbiAgICAsIHBhcnRpY2lwYW50IC8vIFByaXNvbmVycywgR3VhcmRzLCBvciBPYnNlcnZlclxyXG4gICAgLCBnYW1laWRcclxuICAgICwgbmlja25hbWVcclxuICAgICwgd3NtZXNzYWdlXHJcbiAgICAsIGNsaWVudFxyXG4gICAgLCByYWNrc2l6ZT00IC8vIE9wdGlvbiBmb3IgcmFjayBzaXplIChnaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGQpXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gaW5pdGlhbHRpbGVzNiA6IHJhY2tzaXplID09PSA3ID8gaW5pdGlhbHRpbGVzNyA6IHJhY2tzaXplID09PSA1ID8gaW5pdGlhbHRpbGVzNSA6IGluaXRpYWx0aWxlczQ7XHJcbiAgICBjb25zdCBpbml0aWFsc3F1YXJlcyA9IEFycmF5KGVkZ2UrMSkuZmlsbChBcnJheShlZGdlKzEpLmZpbGwoYy5TUVVBUkVfVU5VU0VEKSk7XHJcbiAgICBjb25zdCBpbml0aWFsdXNlZGJ5ID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbChjLlVTRURfQllfTk9ORSkpO1xyXG4gICAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsc3F1YXJlc10pO1xyXG4gICAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdXNlZGJ5XSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICAgIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgcmVzY3VlU291bmQgPSBuZXcgQXVkaW8oXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIik7IC8vIEkgY291bGRuJ3QgZ2V0IHRoZSBzeW50YXggcmlnaHQgdG8gcmVhZCBpdCBmcm9tIHBiIGZvbGRlclxyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAvLyByZXNjdWVTb3VuZC5wbGF5KClcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGpva2VzLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgbW92ZXdhaXR0aW1lKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGlmICghaXNyZWpvaW4gJiYgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7fVxyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBcImFubm91bmNlXCIpIHtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcGFydGljaXBhbnQgJiYgb3BwbmFtZSA9PT0gXCJcIiAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZSAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBzZW50IGEgbWVzc2FnZSBpbmNsdWRpbmcgdGhlaXIgbmlja25hbWUgYW5kIEkgZG9uJ3QgaGF2ZSB0aGVpciBuaWNrbmFtZSB5ZXRcclxuICAgICAgICAgIHNldE9wcG5hbWUobWVzc2FnZURhdGEubmlja25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICAgIG1vdmVzOiBtb3ZlcyxcclxuICAgICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzLFxyXG4gICAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgICBhbGxvd1Jld2luZDogYWxsb3dSZXdpbmRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgXHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYnV0IGRvIHdlIG5lZWQgaXQ/XHJcbiAgICAgICAgICAvLyBJZiB0aGV5IGhhdmUgYSBkaWZmZXJlbnQgbW92ZSBjb3VudCB0aGVuIHdlIG5lZWQgaXQgKHRoZXkgbWF5IGhhdmUgdW5kb25lIGEgbW92ZSlcclxuICAgICAgICAgIC8vIElmIHRoZXkgaGF2ZSBzYW1lIG1vdmUgY291bnQgYnV0IGEgZGlmZmVyZW50IHRpbGUgYmFnIGNvdW50IHRoZW4gd2UgbmVlZCBpdCAobm8gbW92ZXMgbWFkZSBidXQgdGlsZXMgYXJlIHBpY2tlZClcclxuICAgICAgICAgIC8vIElmIGd1YXJkcyBqb2luIGFmdGVyIHByaXNvbmVycyBtYWRlIGEgbW92ZSB0aGVuIGd1YXJkcyBoYXZlIG5vIHRpbGVzIChcImVwdFwiIGdvdCBwcm9jZXNzZWQgd2hpY2ggbGVhdmVzIGd0aWxlcyBhbG9uZSlcclxuICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5tb3Zlcy5sZW5ndGggIT09IG1vdmVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEudGlsZXMubGVuZ3RoICE9PSB0aWxlcy5sZW5ndGhcclxuICAgICAgICAgICAgIHx8IChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyAmJiBndGlsZXMubGVuZ3RoID09PSAwICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgfHwgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTICYmIHB0aWxlcy5sZW5ndGggPT09IDAgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApIC8vIE5vdCBzdXJlIEkgbmVlZCBpdCBidXQuLi5cclxuICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICAgICAgc2V0QWxsb3dSZXdpbmQobWVzc2FnZURhdGEuYWxsb3dSZXdpbmQpOyAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiICYmIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7IC8vIFByaXNvbmVycyBzZW50IGVuZCBwcmlzb25lcnMgdHVybiwgR3VhcmRzIHBpY2sgaXQgdXBcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiICYmIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7IC8vIEd1YXJkcyBzZW50IGVuZCBndWFyZHMgdHVybiwgUHJpc29uZXJzIHBpY2sgaXQgdXBcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInVuZG90dXJuXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwYXJ0aWNpcGFudCkgeyBcclxuICAgICAgICAgIC8vIG9wcG9uZW50IHVuZGlkIHRoZWlyIGxhc3QgdHVyblxyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImFsbG93dW5kb1wiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcGFydGljaXBhbnQpIHsgLy8gT3Bwb25lbnQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAgIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSU1xyXG4gICAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICAgIG5ld1Jvd1tjaV0gPSBjLlNRVUFSRV9VTlVTRUQ7XHJcbiAgICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuICBcclxuICAgICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBjLkRJUl9SSUdIVCA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCByaWdodFxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX1JJR0hUID8gYy5ESVJfRE9XTiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgcmlnaHQsIGNoYW5nZSB0byBkb3duXHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfRE9XTiA/IGMuRElSX05PTkUgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIGRvd24sIGNoYW5nZSB0byBubyBkaXJlY3Rpb25cclxuICAgICAgICAgYy5ESVJfUklHSFQ7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vIGRpcmVjdGlvbiwgY2hhbmdlIHRvIHJpZ2h0XHJcbiAgICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICAgIFwiMC0wXCIsXHJcbiAgICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQdGlsZXMubGVuZ3RoID4gMCA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fR0FNRU9WRVI7XHJcbiAgICAgIGlmICh1c2VkYnlbMF1bMF0gICAgICAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICB1c2VkYnlbbWlkZGxlXVswXSAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bbWlkZGxlXSAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBjLldIT1NFX1RVUk5fUFJJU09ORVJTIDogYy5XSE9TRV9UVVJOX0dBTUVPVkVSO1xyXG4gICAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICB1c2VkYnlbMF1bbWlkZGxlXSAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICB1c2VkYnlbbWlkZGxlXVtlZGdlXSAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bZWRnZV0gICAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTLCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgICBzZXRXaG9zZXR1cm4oYy5XSE9TRV9UVVJOX0dVQVJEUyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fR1VBUkRTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfU1dBUCwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIGlmIChzcXVhcmVzW21pZGRsZV1bbWlkZGxlXSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgdGVtcHJvdz0wOyB0ZW1wcm93IDwgbnVtcm93czsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgZm9yICh2YXIgdGVtcGNvbD0wOyB0ZW1wY29sIDwgbnVtY29sczsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlc1t0ZW1wcm93XVt0ZW1wY29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRlbXByb3cgPiAwICYmIHNxdWFyZXNbdGVtcHJvdy0xXVt0ZW1wY29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSAmJlxyXG4gICAgICAgICAgICAgISh0ZW1wY29sID4gMCAmJiBzcXVhcmVzW3RlbXByb3ddW3RlbXBjb2wtMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkgJiZcclxuICAgICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1t0ZW1wcm93KzFdW3RlbXBjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpICYmXHJcbiAgICAgICAgICAgICAhKHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZXNbdGVtcHJvd11bdGVtcGNvbCsxXSAhPT0gYy5TUVVBUkVfVU5VU0VEKVxyXG4gICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3RlbXByb3ddW3RlbXBjb2xdID09PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgICAgaWYgKHRlbXByb3cgPCBsb3dyb3cpIHsgbG93cm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgICAgICAgIGlmICh0ZW1wY29sIDwgbG93Y29sKSB7IGxvd2NvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgICAgICAgICBpZiAodGVtcGNvbCA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93ID09PSBudW1yb3dzKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZXNbdGVtcHJvd11bdGVtcGNvbF0gPT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3RlbXByb3ddW3RlbXBjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVzW3RlbXByb3ctMV1bdGVtcGNvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1t0ZW1wcm93KzFdW3RlbXBjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZXNbdGVtcHJvd11bdGVtcGNvbC0xXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVzW3RlbXByb3ddW3RlbXBjb2wrMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2hpZ2hjb2wrMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzW21pZGRsZV1bbWlkZGxlXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZ2V0UGxheUluZm8oKSB7XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgZXh0cmF3b3JkcyA9IFtdO1xyXG4gICAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkge1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmIChyb3cgPCBsb3dyb3cpIHtcclxuICAgICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+IGhpZ2hyb3cpIHtcclxuICAgICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPCBsb3djb2wpIHtcclxuICAgICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA+IGhpZ2hjb2wpIHtcclxuICAgICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IGhpZ2hyb3c7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2VzdGNvbDsgdGVtcGNvbCA8PSBoaWdoZXN0Y29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZXNbcm93XVt0ZW1wY29sXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX1JPV19IRUFERVJTW3Jvd10gKyBjLkJPQVJEX0NPTF9IRUFERVJTW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgICAgbWFpbndvcmQgPSBcIlwiOyAvLyBJbiBjYXNlIHdlIGdvdCBhIDEgbGV0dGVyIG1haW53b3JkIGluIHRoZSBwcmV2aW91cyBibG9ja1xyXG4gICAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVzW3RlbXByb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwbGF5aW5mbyA9IHttYWlud29yZDogbWFpbndvcmQsIGV4dHJhd29yZHM6IGV4dHJhd29yZHMsIHBvczogd29yZHN0YXJ0Y29vcmR9O1xyXG4gICAgICByZXR1cm4gcGxheWluZm87XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBnZXRSZXdpbmRJbmZvKCkgeyAvLyBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgeW91IHN0YXJ0IHNldHRpbmcgbmV3IHZhbHVlcyBmb3Igc3R1ZmZcclxuICAgICAgLyogUmV3aW5kIGluZm8gaXMgZXZlcnl0aGluZyB5b3UgbmVlZCB0byByZXZlcnNlIHRoZSBtb3ZlIHRoYXQgd2UgZG8gbm90IGFscmVhZHkgaGF2ZSBpbiB0aGUgbmV3IG1vdmUgdmFyaWFibGU6XHJcbiAgICAgICAgICBzcXVhcmVzOiBzYXlzIHdoYXQgdGlsZSBpcyBvbiB3aGF0IHNxdWFyZVxyXG4gICAgICAgICAgdXNlZGJ5OiBzYXlzIHdobyBwbGF5ZWQgd2hhdCB0aWxlIG9uIHdoYXQgc3F1YXJlIChhZmZlY3RzIHN0eWxpbmcpXHJcbiAgICAgICAgICByYWNrOiBwbGF5ZXJzIHJhY2sgYmVmb3JlIG1vdmUgd2FzIG1hZGUgXHJcbiAgICAgICAgICB0aWxlczogdGlsZSBwb29sIGJlZm9yZSBwaWNraW5nIG5ldyB0aWxlc1xyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlIGNvdW50XHJcbiAgICAgICovXHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0ge1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICAgIHJhY2s6IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyA/IFsuLi5zbmFwc2hvdC5ndGlsZXNdOiBbLi4uc25hcHNob3QucHRpbGVzXSxcclxuICAgICAgICB0aWxlczogWy4uLnRpbGVzXSxcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiByZXdpbmRJbmZvO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWxsb3dVbmRvTGFzdFR1cm4oKSB7XHJcbiAgICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgICAgLyogUmV3aW5kIHRoZSBsYXN0IG1vdmUgYW5kIHRha2UgaXQgb2ZmIHRoZSBlbmQgb2YgdGhlIG1vdmUgbGlzdCAqL1xyXG4gICAgICBsZXQgbnVtTW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICAgIGxldCBsYXN0TW92ZSA9IG1vdmVzW21vdmVzLmxlbmd0aC0xXTtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnVzZWRieV07XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnRpbGVzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSBsYXN0TW92ZS5yZXdpbmRJbmZvLnJlc2N1ZXM7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBsYXN0TW92ZS5ieTsgLy8gQmFjayB0byB0aGVpciB0dXJuXHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICAgIG5ld01vdmVzLnNwbGljZShudW1Nb3Zlcy0xLDEpO1xyXG4gICAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ld1NxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLm5ld1VzZWRieV0sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdXHJcbiAgICAgIH07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgICAvLyBKdXN0IHNlbmQgZXZlcnl0aGluZyBldmVuIHRob3VnaCBzb21lIGNvdWxkIGJlIGhhcmQgY29kZWQgaW4gcHJvY2Vzc01lc3NhZ2UgYnkgb3Bwb25lbnRcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIsIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB0aWxlIHBvb2xcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIGd1YXJkcyByYWNrXHJcbiAgICAgICAgICBzcXVhcmVzOiBuZXdTcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgICB1c2VkYnk6IG5ld1VzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcywgLy8gcmVzY3VlIGNvdW50XHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgc25hcHNob3Q6IG5ld1NuYXBzaG90XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICBzZXRSY2QoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTUywgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX0dVQVJEUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTUywgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNEb3VibGVQYXNzKG1vdmVsaXN0KSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBtb3ZlbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBzZWNvbmRsYXN0ID0gbGFzdCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZGxhc3QgPiAtMSAmJlxyXG4gICAgICAgICAgbW92ZWxpc3Rbc2Vjb25kbGFzdF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUEFTUyAmJlxyXG4gICAgICAgICAgbW92ZWxpc3RbbGFzdF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUEFTUztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLCAvLyBmb3IgbG9iYnkgdG8gcGljayB1cCB0aGlzIG1lc3NhZ2VcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBjLkRJUl9OT05FKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9SSUdIVCkgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBjb2wgKyAxOyB0ZW1wY29sIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IHRlbXBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcm93XVt0ZW1wY29sXSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7bmV3YyA9IHRlbXBjb2w7fVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbdGVtcHJvd11bY29sXSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7bmV3ciA9IHRlbXByb3c7fVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgYy5ESVJfRE9XTl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdVc2VkYnlbcm93XVtjb2xdID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlc1tyb3ddW2NvbF0gPSBjLlNRVUFSRV9VTlVTRUQ7XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBjLkRJUl9OT05FKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuaWNrbmFtZSA6IG9wcG5hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3ByaWdodCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21yaWdodCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR3VhcmRzOiB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBvcHBuYW1lIDogbmlja25hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e21vdmVzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUHJpc29uZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2pva2VzW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgU2hvd1Jlc2N1ZXMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJSZXNjdWVzTWFkZVwiPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IENoYXQgPSAoe2dhbWVpZCwgY2xpZW50LCBuaWNrbmFtZSwgbXNncywgc2V0TXNncywgcGFydGljaXBhbnR9KSA9PiB7XHJcbiAgICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TXNncyA9IFsuLi5tc2dzLCB7ZnJvbTogbmlja25hbWUsIG1zZzogbmV4dG1zZ31dXHJcbiAgICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgICAgc2V0TmV4dG1zZygnJyk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJjaGF0XCIsIC8vIHNlbmQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsIC8vIHdobyBzZW50IGl0XHJcbiAgICAgICAgICAgIHNlbmRtc2c6IHNlbmRtc2cgLy8gdGhlIG1lc3NhZ2UgdHlwZWQgaW4gdGhlIGNoYXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gbGV0IGNoYXJ0ZXN0ID0gL15bQS1aYS16MC05IFxcLixcXChcXClcXD86ISdcIl0kLzsgLy8gQWxsb3cgbGV0dGVyLCBudW1iZXIsIHNwYWNlLCBwZXJpb2QsIGNvbW1hLCByb3VuZCBicmFja2V0cywgcXVlc3Rpb24gbWFyaywgY29sb24sIGV4Y2xhbWF0aW9uIG1hcmssIHF1b3RlLCBkb3VibGUgcXVvdGVcclxuICAgICAgLy8gaWYgKGV2ZW50LmtleS5tYXRjaChjaGFydGVzdCkpIHtcclxuICAgICAgLy8gICBsZXQgbmV3TmV4dG1zZyA9IG5leHRtc2cgKyBldmVudC5rZXk7XHJcbiAgICAgIC8vICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnLnNsaWNlKDAsbmV4dG1zZy5sZW5ndGgtMSk7XHJcbiAgICAgICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIlNjcm9sbGFibGVDaGF0XCIgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQ2hhdFRhYmxlXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRGcm9tXCI+e3ZhbHVlLmZyb219PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRNc2dcIj57dmFsdWUubXNnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInBiQ2hhdElucHV0RW1wdHlcIiA6IFwicGJDaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5leHRtc2dJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmV4dG1zZ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjaGF0Li4uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgICBjb25zdCB0aGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcclxuICAgIHRoZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=