self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wm_mastermind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wm/mastermind */ "./pages/wm/mastermind.js");
/* harmony import */ var _wi_wordinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wi/wordinfo */ "./pages/wi/wordinfo.js");
/* harmony import */ var _pb_prisonbreak__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pb/prisonbreak */ "./pages/pb/prisonbreak.js");
/* harmony import */ var _fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fyb/fryyourbrain */ "./pages/fyb/fryyourbrain.js");
/* harmony import */ var _fyb_fybSolo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fyb/fybSolo */ "./pages/fyb/fybSolo.js");
/* harmony import */ var _sc_scrabbleclub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sc/scrabbleclub */ "./pages/sc/scrabbleclub.js");
/* harmony import */ var _morpho_morpho__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./morpho/morpho */ "./pages/morpho/morpho.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();










function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('menu');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_3__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }, this), whereto === 'fybsolo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fybSolo__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }, this), whereto === 'sc' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sc_scrabbleclub__WEBPACK_IMPORTED_MODULE_8__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 28
    }, this), whereto === 'morpho' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_morpho_morpho__WEBPACK_IMPORTED_MODULE_9__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(Home, "X4zKO771MBoQLHMaoj5H2Dl1VSk=");

_c = Home;

const Menu = props => {
  _s2();

  // Menu option toggle description flags
  const {
    0: descWm,
    1: setDescWm
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe prison break

  const {
    0: descFyb,
    1: setDescFyb
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe fry your brain

  const {
    0: descFybsolo,
    1: setDescFybsolo
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe fry your brain solo

  const {
    0: descSc,
    1: setDescSc
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe scrabble club

  const {
    0: descMorpho,
    1: setDescMorpho
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe morpho
  // Acknowledgements description toggles

  const {
    0: descEnable2k,
    1: setDescEnable2k
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe ENABLE2K

  const {
    0: descFriends,
    1: setDescFriends
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe friends

  const {
    0: descPhotos,
    1: setDescPhotos
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe photo takers

  const MenuOption = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: "trButton",
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Word Mastermind is a single player code cracking game."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Word Info is a utility to get information on words."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Prison Break is a two player crossword style game."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Fry Your Brain is a word game that can be contested by two to six players."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot reuse a word from the same round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot merely add an S to a valid word from the same round, unless that word ends in S."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 32
  }, undefined);

  const DescribeFryYourBrainSolo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Fry Your Brain Solo is a practise ground for Fry Your Brain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A new tile pool is started with 3 letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Make a word that has all the letters in the tile pool, plus any additional letters, or pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A letter will be added to the pool after each word or pass, or a new tile pool will be started."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The display will indicate whether each made word is valid or not."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The display will show the shortest answer, using alphabetical order as the tiebreak."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Unlike regular Fry Your Brain, you may reuse a word or simply add or remove an S at the end."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 36
  }, undefined);

  const DescribeScrabbleClub = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "The Scrabble Club page is Scrabble Club stuff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 32
  }, undefined);

  const DescribeMorpho = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "UNDER CONSTRUCTION"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 26
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.ackText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph trEmphasis",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 28
  }, undefined);

  const DescribeFriends = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph trEmphasis",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, Jessica, Cheryl, ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Thanks for technical help, feedback, suggestions, or simply having fun here. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "material-icons heart",
        children: "favorite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 85
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 27
  }, undefined);

  const DescribePhotos = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph trEmphasis",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Morpho larva Photo by Egor Kamelev from Pexels"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Morpho cocoon (part of) Photo by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://unsplash.com/@scw1217?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        children: "Suzanne D. Williams"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 41
      }, undefined), " on ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://unsplash.com/s/photos/morpho-cocoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        children: "Unsplash"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 175
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Morpho butterlfy Photo by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://www.pexels.com/@fotostudio-all-eyes-on-you-134458509?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels",
        children: "Fotostudio - All Eyes On You"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 34
      }, undefined), " from Pexels"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 26
  }, undefined);

  const MenuOptionKmMarkers = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: ["Hamilton to Cambridge Rail Trail:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://1drv.ms/u/s!AoRKcQVZC5rH4XIvB_r0uq414KU2?e=aSSkK1",
      target: "_blank",
      children: " Km Marker Videos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 37
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Tile Stuff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWm,
              setDescFlag: setDescWm,
              setWhereto: props.setWhereto,
              targetWhereto: "wm",
              optionText: "Word Mastermind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWi,
              setDescFlag: setDescWi,
              setWhereto: props.setWhereto,
              targetWhereto: "wi",
              optionText: "Word Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descPb,
              setDescFlag: setDescPb,
              setWhereto: props.setWhereto,
              targetWhereto: "pb",
              optionText: "Prison Break"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFyb,
              setDescFlag: setDescFyb,
              setWhereto: props.setWhereto,
              targetWhereto: "fyb",
              optionText: "Fry Your Brain"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFybsolo,
              setDescFlag: setDescFybsolo,
              setWhereto: props.setWhereto,
              targetWhereto: "fybsolo",
              optionText: "FYB Solo Mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descSc,
              setDescFlag: setDescSc,
              setWhereto: props.setWhereto,
              targetWhereto: "sc",
              optionText: "Scrabble Club"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descMorpho,
              setDescFlag: setDescMorpho,
              setWhereto: props.setWhereto,
              targetWhereto: "morpho",
              optionText: "Morpho"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.MobileOnlyView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWm,
              setDescFlag: setDescWm,
              setWhereto: props.setWhereto,
              targetWhereto: "wm",
              optionText: "Word Mastermind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWi,
              setDescFlag: setDescWi,
              setWhereto: props.setWhereto,
              targetWhereto: "wi",
              optionText: "Word Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFyb,
              setDescFlag: setDescFyb,
              setWhereto: props.setWhereto,
              targetWhereto: "fyb",
              optionText: "Fry Your Brain"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFybsolo,
              setDescFlag: setDescFybsolo,
              setWhereto: props.setWhereto,
              targetWhereto: "fybsolo",
              optionText: "FYB Solo Mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descMorpho,
              setDescFlag: setDescMorpho,
              setWhereto: props.setWhereto,
              targetWhereto: "morpho",
              optionText: "Morpho"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, descFybsolo && DescribeFryYourBrainSolo, descSc && DescribeScrabbleClub, descMorpho && DescribeMorpho]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Runner Stuff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOptionKmMarkers, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Special Thanks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
              ackText: "ENABLE2K",
              descFlag: descEnable2k,
              setDescFlag: setDescEnable2k
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
              ackText: "Friends",
              descFlag: descFriends,
              setDescFlag: setDescFriends
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
              ackText: "Photos By",
              descFlag: descPhotos,
              setDescFlag: setDescPhotos
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, undefined), descEnable2k && DescribeEnable2k, descFriends && DescribeFriends, descPhotos && DescribePhotos]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "rwVkTMpoz3fKjxDuG3M1468FAP8=");

_c2 = Menu;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NGeWJzb2xvIiwic2V0RGVzY0Z5YnNvbG8iLCJkZXNjU2MiLCJzZXREZXNjU2MiLCJkZXNjTW9ycGhvIiwic2V0RGVzY01vcnBobyIsImRlc2NFbmFibGUyayIsInNldERlc2NFbmFibGUyayIsImRlc2NGcmllbmRzIiwic2V0RGVzY0ZyaWVuZHMiLCJkZXNjUGhvdG9zIiwic2V0RGVzY1Bob3RvcyIsIk1lbnVPcHRpb24iLCJ0b2dnbGVEZXNjRmxhZyIsInNldERlc2NGbGFnIiwiZGVzY0ZsYWciLCJ0YXJnZXRXaGVyZXRvIiwib3B0aW9uVGV4dCIsIkRlc2NyaWJlV29yZE1hc3Rlcm1pbmQiLCJEZXNjcmliZVdvcmRJbmZvIiwiRGVzY3JpYmVQcmlzb25CcmVhayIsIkRlc2NyaWJlRnJ5WW91ckJyYWluIiwiRGVzY3JpYmVGcnlZb3VyQnJhaW5Tb2xvIiwiRGVzY3JpYmVTY3JhYmJsZUNsdWIiLCJEZXNjcmliZU1vcnBobyIsIkFja25vd2xlZGdlIiwiYWNrVGV4dCIsIkRlc2NyaWJlRW5hYmxlMmsiLCJEZXNjcmliZUZyaWVuZHMiLCJEZXNjcmliZVBob3RvcyIsIk1lbnVPcHRpb25LbU1hcmtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENB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LFdBQVcsSUFBSW9CLGVBVGxCLEVBVUdsQixVQUFVLElBQUltQixjQVZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQStEQyxDQXZORDs7SUFBTXZDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODExNTg1MzJhNTY5NzFlZTI3MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JkTWFzdGVybWluZCBmcm9tICcuL3dtL21hc3Rlcm1pbmQnO1xyXG5pbXBvcnQgV29yZEluZm8gZnJvbSAnLi93aS93b3JkaW5mbyc7XHJcbmltcG9ydCBQcmlzb25CcmVhayBmcm9tICcuL3BiL3ByaXNvbmJyZWFrJztcclxuaW1wb3J0IEZyeVlvdXJCcmFpbiBmcm9tICcuL2Z5Yi9mcnl5b3VyYnJhaW4nO1xyXG5pbXBvcnQgRnJ5WW91ckJyYWluU29sbyBmcm9tICcuL2Z5Yi9meWJTb2xvJztcclxuaW1wb3J0IFNjcmFiYmxlQ2x1YiBmcm9tICcuL3NjL3NjcmFiYmxlY2x1Yic7XHJcbmltcG9ydCBNb3JwaG8gZnJvbSAnLi9tb3JwaG8vbW9ycGhvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3doZXJldG8sIHNldFdoZXJldG9dID0gdXNlU3RhdGUoJ21lbnUnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt3aGVyZXRvID09PSAnbWVudScgJiYgPE1lbnUgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9NZW51Pn1cclxuICAgICAge3doZXJldG8gPT09ICd3bScgJiYgPFdvcmRNYXN0ZXJtaW5kIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZE1hc3Rlcm1pbmQ+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dpJyAmJiA8V29yZEluZm8gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkSW5mbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAncGInICYmIDxQcmlzb25CcmVhayBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1ByaXNvbkJyZWFrPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWInICYmIDxGcnlZb3VyQnJhaW4gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9GcnlZb3VyQnJhaW4+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ2Z5YnNvbG8nICYmIDxGcnlZb3VyQnJhaW5Tb2xvIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvRnJ5WW91ckJyYWluU29sbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnc2MnICYmIDxTY3JhYmJsZUNsdWIgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9TY3JhYmJsZUNsdWI+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ21vcnBobycgJiYgPE1vcnBobyBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L01vcnBobz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcclxuICAvLyBNZW51IG9wdGlvbiB0b2dnbGUgZGVzY3JpcHRpb24gZmxhZ3NcclxuICBjb25zdCBbZGVzY1dtLCBzZXREZXNjV21dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIG1hc3Rlcm1pbmRcclxuICBjb25zdCBbZGVzY1dpLCBzZXREZXNjV2ldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIGluZm9cclxuICBjb25zdCBbZGVzY1BiLCBzZXREZXNjUGJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBwcmlzb24gYnJlYWtcclxuICBjb25zdCBbZGVzY0Z5Yiwgc2V0RGVzY0Z5Yl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIGZyeSB5b3VyIGJyYWluXHJcbiAgY29uc3QgW2Rlc2NGeWJzb2xvLCBzZXREZXNjRnlic29sb10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIGZyeSB5b3VyIGJyYWluIHNvbG9cclxuICBjb25zdCBbZGVzY1NjLCBzZXREZXNjU2NdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBzY3JhYmJsZSBjbHViXHJcbiAgY29uc3QgW2Rlc2NNb3JwaG8sIHNldERlc2NNb3JwaG9dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBtb3JwaG9cclxuICAvLyBBY2tub3dsZWRnZW1lbnRzIGRlc2NyaXB0aW9uIHRvZ2dsZXNcclxuICBjb25zdCBbZGVzY0VuYWJsZTJrLCBzZXREZXNjRW5hYmxlMmtdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBFTkFCTEUyS1xyXG4gIGNvbnN0IFtkZXNjRnJpZW5kcywgc2V0RGVzY0ZyaWVuZHNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcmllbmRzXHJcbiAgY29uc3QgW2Rlc2NQaG90b3MsIHNldERlc2NQaG90b3NdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBwaG90byB0YWtlcnNcclxuXHJcbiAgY29uc3QgTWVudU9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlRGVzY0ZsYWcgPSAoKSA9PiB7XHJcbiAgICAgIHByb3BzLnNldERlc2NGbGFnKCFwcm9wcy5kZXNjRmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuc2V0V2hlcmV0byhwcm9wcy50YXJnZXRXaGVyZXRvKTt9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMub3B0aW9uVGV4dH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlRmxhZ1wiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY0ZsYWcoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmRlc2NGbGFnID8gXCJIaWRlIGluZm9cIiA6IFwiU2hvdyBpbmZvXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkTWFzdGVybWluZCA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPldvcmQgTWFzdGVybWluZCBpcyBhIHNpbmdsZSBwbGF5ZXIgY29kZSBjcmFja2luZyBnYW1lLjwvZGl2PlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPldvcmQgSW5mbyBpcyBhIHV0aWxpdHkgdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHdvcmRzLjwvZGl2PlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+QW5hZ3JhbXMgLSB3b3JkcyB0aGF0IHVzZSB0aGUgZXhhY3Qgc2FtZSBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgIDxsaT5JbnNlcnRzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBpbnNlcnRpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Ecm9wcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgZHJvcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Td2FwcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgc3dhcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVQcmlzb25CcmVhayA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlByaXNvbiBCcmVhayBpcyBhIHR3byBwbGF5ZXIgY3Jvc3N3b3JkIHN0eWxlIGdhbWUuPC9kaXY+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5Zb3UgcGxheSB0d28gZ2FtZXMsIG9uZSBhcyB0aGUgUHJpc29uZXJzIGFuZCBvbmUgYXMgdGhlIEd1YXJkcy4gV2hvZXZlciBmcmVlcyB0aGUgbW9zdCBwcmlzb25lcnMgd2lucy48L2xpPlxyXG4gICAgICA8bGk+UHJpc29uZXJzIGFsd2F5cyBwbGF5IGZpcnN0LjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICA8bGk+VG8gZnJlZSBhIHByaXNvbmVyLCB0aGUgUHJpc29uZXJzIG11c3QgcGxheSBhIHRpbGUgb24gb25lIG9mIHRoZSBzcGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHBiU3F1YXJlRXNjYXBlSGF0Y2hcIj5ydW5fY2lyY2xlPC9zcGFuPiBzcXVhcmVzLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGEgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIj4mbmJzcDs/Jm5ic3A7PC9zcGFuPiBpcyBwbGF5ZWQgaXQgcmVwcmVzZW50cyBhbnkgbGV0dGVyIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhcyB0aGUgc2FtZSBsZXR0ZXIgdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYSBwbGF5ZXIgZW1wdGllcyB0aGVpciByYWNrLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGFsbCB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcyBhcmUgdXNlZC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJ5WW91ckJyYWluID0gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+RnJ5IFlvdXIgQnJhaW4gaXMgYSB3b3JkIGdhbWUgdGhhdCBjYW4gYmUgY29udGVzdGVkIGJ5IHR3byB0byBzaXggcGxheWVycy48L2Rpdj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycy4gUGxheWVycyB0YWtlIHR1cm5zLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgcmV1c2UgYSB3b3JkIGZyb20gdGhlIHNhbWUgcm91bmQuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgbWVyZWx5IGFkZCBhbiBTIHRvIGEgdmFsaWQgd29yZCBmcm9tIHRoZSBzYW1lIHJvdW5kLCB1bmxlc3MgdGhhdCB3b3JkIGVuZHMgaW4gUy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBhIHBsYXllciBmYWlscyB0byBtYWtlIGEgdmFsaWQgd29yZCBvbiB0aGVpciB0dXJuLCB0aGUgb3RoZXIgcGxheWVycyB0YWtlIHBhcnQgaW4gdGhlIGZyZWUtZm9yLWFsbC48L2xpPlxyXG4gICAgICA8bGk+SW4gdGhlIGZyZWUtZm9yLWFsbCwgdGhlIGdvYWwgaXMgdG8gc3VibWl0IHRoZSBzaG9ydGVzdCBhbnN3ZXIgeW91IGNhbi4gQWxsIHBsYXllcnMgd2l0aCB0aGUgc2hvcnRlc3Qgb2YgdGhlIGFuc3dlcnMgZ2V0IHBvaW50cy48L2xpPlxyXG4gICAgICA8bGk+VGhlIHBvaW50cyBnaXZlbiBlcXVhbHMgdGhlIG51bWJlciBvZiBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wgdGhlIGxhc3QgdGltZSBzb21lb25lIGdhdmUgYSB2YWxpZCBhbnN3ZXIgZm9yIHRoYXQgcm91bmQuPC9saT5cclxuICAgICAgPGxpPlJvdW5kcyBjb250aW51ZSB1bnRpbCBzb21lb25lIHJlYWNoZXMgdGhlIHRhcmdldCBudW1iZXIgb2YgcG9pbnRzIGZvciB0aGUgZ2FtZS48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJ5WW91ckJyYWluU29sbyA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPkZyeSBZb3VyIEJyYWluIFNvbG8gaXMgYSBwcmFjdGlzZSBncm91bmQgZm9yIEZyeSBZb3VyIEJyYWluPC9kaXY+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5BIG5ldyB0aWxlIHBvb2wgaXMgc3RhcnRlZCB3aXRoIDMgbGV0dGVycy48L2xpPlxyXG4gICAgICA8bGk+TWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFkZGl0aW9uYWwgbGV0dGVycywgb3IgcGFzcy48L2xpPlxyXG4gICAgICA8bGk+QSBsZXR0ZXIgd2lsbCBiZSBhZGRlZCB0byB0aGUgcG9vbCBhZnRlciBlYWNoIHdvcmQgb3IgcGFzcywgb3IgYSBuZXcgdGlsZSBwb29sIHdpbGwgYmUgc3RhcnRlZC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGRpc3BsYXkgd2lsbCBpbmRpY2F0ZSB3aGV0aGVyIGVhY2ggbWFkZSB3b3JkIGlzIHZhbGlkIG9yIG5vdC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGRpc3BsYXkgd2lsbCBzaG93IHRoZSBzaG9ydGVzdCBhbnN3ZXIsIHVzaW5nIGFscGhhYmV0aWNhbCBvcmRlciBhcyB0aGUgdGllYnJlYWsuPC9saT5cclxuICAgICAgPGxpPlVubGlrZSByZWd1bGFyIEZyeSBZb3VyIEJyYWluLCB5b3UgbWF5IHJldXNlIGEgd29yZCBvciBzaW1wbHkgYWRkIG9yIHJlbW92ZSBhbiBTIGF0IHRoZSBlbmQuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBEZXNjcmliZVNjcmFiYmxlQ2x1YiA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlRoZSBTY3JhYmJsZSBDbHViIHBhZ2UgaXMgU2NyYWJibGUgQ2x1YiBzdHVmZjwvZGl2PlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVNb3JwaG8gPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICA8aDE+VU5ERVIgQ09OU1RSVUNUSU9OPC9oMT5cclxuICA8L2Rpdj5cclxuXHJcbiAgY29uc3QgQWNrbm93bGVkZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy5hY2tUZXh0fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NGbGFnKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjRmxhZyA/IFwiSGlkZSBpbmZvXCIgOiBcIlNob3cgaW5mb1wifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRW5hYmxlMmsgPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIHRyRW1waGFzaXNcIj5cclxuICAgIDxwPlRoaXMgc2l0ZSB1c2VzIHRoZSBFbmhhbmNlZCBOb3J0aCBBbWVyaWNhbiBCZW5jaG1hcmsgTEVleGljb24sIG1pbGxlbmlhbCBlZGl0aW9uLCBhIHB1YmxpYyBkb21haW4gd29yZCBsaXN0IHRoYXQgSSBncmF0ZWZ1bGx5IGFja25vd2xlZGdlLjwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgY29uc3QgRGVzY3JpYmVGcmllbmRzID0gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0ckVtcGhhc2lzXCI+XHJcbiAgICA8cD5EYW5pZWxsZSwgRW1lc2UsIENlc2FyLCBMZW5ub24sIEJldiwgTm9haCwgUmFjaCwgU2FyYWgsIFJvZCwgU29ueWEsIE5vbGFuLCBTaHlyYWksIEFnbmVzLCBKZXNzaWNhLCBDaGVyeWwsIC4uLjwvcD5cclxuICAgIDxwPlRoYW5rcyBmb3IgdGVjaG5pY2FsIGhlbHAsIGZlZWRiYWNrLCBzdWdnZXN0aW9ucywgb3Igc2ltcGx5IGhhdmluZyBmdW4gaGVyZS4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgaGVhcnRcIj5mYXZvcml0ZTwvaT48L3A+XHJcbiAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlUGhvdG9zID0gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0ckVtcGhhc2lzXCI+XHJcbiAgICA8cD5Nb3JwaG8gbGFydmEgUGhvdG8gYnkgRWdvciBLYW1lbGV2IGZyb20gUGV4ZWxzPC9wPlxyXG4gICAgPHA+TW9ycGhvIGNvY29vbiAocGFydCBvZikgUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzY3cxMjE3P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlN1emFubmUgRC4gV2lsbGlhbXM8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9tb3JwaG8tY29jb29uP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPjwvcD5cclxuICAgIDxwPk1vcnBobyBidXR0ZXJsZnkgUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBleGVscy5jb20vQGZvdG9zdHVkaW8tYWxsLWV5ZXMtb24teW91LTEzNDQ1ODUwOT91dG1fY29udGVudD1hdHRyaWJ1dGlvbkNvcHlUZXh0JnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT1wZXhlbHNcIj5Gb3Rvc3R1ZGlvIC0gQWxsIEV5ZXMgT24gWW91PC9hPiBmcm9tIFBleGVsczwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgY29uc3QgTWVudU9wdGlvbkttTWFya2VycyA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIEhhbWlsdG9uIHRvIENhbWJyaWRnZSBSYWlsIFRyYWlsOlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vMWRydi5tcy91L3MhQW9SS2NRVlpDNXJINFhJdkJfcjB1cTQxNEtVMj9lPWFTU2tLMVwiIHRhcmdldD1cIl9ibGFua1wiPiBLbSBNYXJrZXIgVmlkZW9zPC9hPlxyXG4gIDwvZGl2PlxyXG5cclxucmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5UaWxlIFN0dWZmPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXbX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXbX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd20nIG9wdGlvblRleHQ9J1dvcmQgTWFzdGVybWluZCcvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1BifSBzZXREZXNjRmxhZz17c2V0RGVzY1BifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdwYicgb3B0aW9uVGV4dD0nUHJpc29uIEJyZWFrJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJzb2xvfSBzZXREZXNjRmxhZz17c2V0RGVzY0Z5YnNvbG99IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J2Z5YnNvbG8nIG9wdGlvblRleHQ9J0ZZQiBTb2xvIE1vZGUnLz5cclxuICAgICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1NjfSBzZXREZXNjRmxhZz17c2V0RGVzY1NjfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdzYycgb3B0aW9uVGV4dD0nU2NyYWJibGUgQ2x1YicvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjTW9ycGhvfSBzZXREZXNjRmxhZz17c2V0RGVzY01vcnBob30gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nbW9ycGhvJyBvcHRpb25UZXh0PSdNb3JwaG8nLz5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXaX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXaX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd2knIG9wdGlvblRleHQ9J1dvcmQgSW5mbycvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlifSBzZXREZXNjRmxhZz17c2V0RGVzY0Z5Yn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nZnliJyBvcHRpb25UZXh0PSdGcnkgWW91ciBCcmFpbicvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlic29sb30gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJzb2xvfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWJzb2xvJyBvcHRpb25UZXh0PSdGWUIgU29sbyBNb2RlJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NNb3JwaG99IHNldERlc2NGbGFnPXtzZXREZXNjTW9ycGhvfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdtb3JwaG8nIG9wdGlvblRleHQ9J01vcnBobycvPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgIHtkZXNjV20gJiYgRGVzY3JpYmVXb3JkTWFzdGVybWluZH1cclxuICAgICAgICB7ZGVzY1dpICYmIERlc2NyaWJlV29yZEluZm99XHJcbiAgICAgICAge2Rlc2NQYiAmJiBEZXNjcmliZVByaXNvbkJyZWFrfVxyXG4gICAgICAgIHtkZXNjRnliICYmIERlc2NyaWJlRnJ5WW91ckJyYWlufVxyXG4gICAgICAgIHtkZXNjRnlic29sbyAmJiBEZXNjcmliZUZyeVlvdXJCcmFpblNvbG99XHJcbiAgICAgICAge2Rlc2NTYyAmJiBEZXNjcmliZVNjcmFiYmxlQ2x1Yn1cclxuICAgICAgICB7ZGVzY01vcnBobyAmJiBEZXNjcmliZU1vcnBob31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgUnVubmVyIFN0dWZmXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1lbnVPcHRpb25LbU1hcmtlcnM+PC9NZW51T3B0aW9uS21NYXJrZXJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgIFNwZWNpYWwgVGhhbmtzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0VOQUJMRTJLJyBkZXNjRmxhZz17ZGVzY0VuYWJsZTJrfSBzZXREZXNjRmxhZz17c2V0RGVzY0VuYWJsZTJrfS8+XHJcbiAgICAgICAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0ZyaWVuZHMnIGRlc2NGbGFnPXtkZXNjRnJpZW5kc30gc2V0RGVzY0ZsYWc9e3NldERlc2NGcmllbmRzfS8+XHJcbiAgICAgICAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J1Bob3RvcyBCeScgZGVzY0ZsYWc9e2Rlc2NQaG90b3N9IHNldERlc2NGbGFnPXtzZXREZXNjUGhvdG9zfS8+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAge2Rlc2NFbmFibGUyayAmJiBEZXNjcmliZUVuYWJsZTJrfVxyXG4gICAgICAgICAge2Rlc2NGcmllbmRzICYmIERlc2NyaWJlRnJpZW5kc31cclxuICAgICAgICAgIHtkZXNjUGhvdG9zICYmIERlc2NyaWJlUGhvdG9zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=