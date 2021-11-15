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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wm_mastermind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wm/mastermind */ "./pages/wm/mastermind.js");
/* harmony import */ var _wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wi/wordinfo */ "./pages/wi/wordinfo.js");
/* harmony import */ var _pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pb/prisonbreak */ "./pages/pb/prisonbreak.js");
/* harmony import */ var _fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fyb/fryyourbrain */ "./pages/fyb/fryyourbrain.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

 // import styles from '../styles/Home.module.css'







function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('menu');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe prison break

  const {
    0: descFyb,
    1: setDescFyb
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe fry your brain
  // Acknowledgements description toggles

  const {
    0: descEnable2k,
    1: setDescEnable2k
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe ENABLE2K

  const {
    0: descExtendsClass,
    1: setDescExtendsClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe extendsclass.com

  const {
    0: descFriends,
    1: setDescFriends
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe friends

  const MenuOption = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "menuButton",
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: `menuToggleDescButton ${props.descFlag ? 'Y' : 'N'}`,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "CommenHeaderFontFamily",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Fry Your Brain is a word game that can be contested by two to six players."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot reuse a word from the same round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot merely add an S to a valid word from the same round, unless that word ends in S."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 32
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
        lineNumber: 119,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: `menuToggleDescButton ${props.descFlag ? 'Y' : 'N'}`,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 28
  }, undefined);

  const DescribeExtendsClass = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://extendsclass.com/contact",
        children: "Click here for more info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 83
      }, undefined), ". Thanks Cyril!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 32
  }, undefined);

  const DescribeFriends = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Thanks for technical help, feedback, suggestions, or simply having fun here. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "material-icons heart",
        children: "favorite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 85
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 27
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menu",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/tileTR.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: "A few word games and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:width",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:height",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "A few word games a and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://tilerunner.herokuapp.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meat", {
        property: "og:site_name",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:locale",
        content: "en_US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "menuHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Menu Options"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "menuOptTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descPb,
          setDescFlag: setDescPb,
          setWhereto: props.setWhereto,
          targetWhereto: "pb",
          optionText: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "menuOptTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "menuHeaderDiv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "myHeadingFont",
          children: "Special Thanks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "menuAckTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "ENABLE2K",
          descFlag: descEnable2k,
          setDescFlag: setDescEnable2k
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "extendsclass.com",
          descFlag: descExtendsClass,
          setDescFlag: setDescExtendsClass
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "Friends",
          descFlag: descFriends,
          setDescFlag: setDescFriends
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined), descEnable2k && DescribeEnable2k, descExtendsClass && DescribeExtendsClass, descFriends && DescribeFriends]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "lzQ0uYErUvXXwtRfdUNjsFRv2uY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NFbmFibGUyayIsInNldERlc2NFbmFibGUyayIsImRlc2NFeHRlbmRzQ2xhc3MiLCJzZXREZXNjRXh0ZW5kc0NsYXNzIiwiZGVzY0ZyaWVuZHMiLCJzZXREZXNjRnJpZW5kcyIsIk1lbnVPcHRpb24iLCJ0b2dnbGVEZXNjRmxhZyIsInNldERlc2NGbGFnIiwiZGVzY0ZsYWciLCJ0YXJnZXRXaGVyZXRvIiwib3B0aW9uVGV4dCIsIkRlc2NyaWJlV29yZE1hc3Rlcm1pbmQiLCJEZXNjcmliZVdvcmRJbmZvIiwiRGVzY3JpYmVQcmlzb25CcmVhayIsIkRlc2NyaWJlRnJ5WW91ckJyYWluIiwiQWNrbm93bGVkZ2UiLCJhY2tUZXh0IiwiRGVzY3JpYmVFbmFibGUyayIsIkRlc2NyaWJlRXh0ZW5kc0NsYXNzIiwiRGVzY3JpYmVGcmllbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsTUFBRCxDQUF0QztBQUVBLHNCQUNFO0FBQUEsZUFDR0YsT0FBTyxLQUFLLE1BQVosaUJBQXNCLDhEQUFDLElBQUQ7QUFBTSxnQkFBVSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHpCLEVBRUdELE9BQU8sS0FBSyxJQUFaLGlCQUFvQiw4REFBQyxtREFBRDtBQUFn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QUFBZ0Msa0JBQVEsRUFBRWYsWUFBMUM7QUFBd0QscUJBQVcsRUFBRUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLFdBQUQ7QUFBYSxpQkFBTyxFQUFDLGtCQUFyQjtBQUF3QyxrQkFBUSxFQUFFQyxnQkFBbEQ7QUFBb0UscUJBQVcsRUFBRUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLFdBQUQ7QUFBYSxpQkFBTyxFQUFDLFNBQXJCO0FBQStCLGtCQUFRLEVBQUVDLFdBQXpDO0FBQXNELHFCQUFXLEVBQUVDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLEVBU0dMLFlBQVksSUFBSWtCLGdCQVRuQixFQVVHaEIsZ0JBQWdCLElBQUlpQixvQkFWdkIsRUFXR2YsV0FBVyxJQUFJZ0IsZUFYbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlEQyxDQW5MRDs7SUFBTTlCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIxMDAzY2JjODQwMDNiMTU2NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge0Jyb3dzZXJWaWV3LCBNb2JpbGVPbmx5Vmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV29yZE1hc3Rlcm1pbmQgZnJvbSAnLi93bS9tYXN0ZXJtaW5kJztcclxuaW1wb3J0IFdvcmRJbmZvIGZyb20gJy4vd2kvd29yZGluZm8nO1xyXG5pbXBvcnQgUHJpc29uQnJlYWsgZnJvbSAnLi9wYi9wcmlzb25icmVhayc7XHJcbmltcG9ydCBGcnlZb3VyQnJhaW4gZnJvbSAnLi9meWIvZnJ5eW91cmJyYWluJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3doZXJldG8sIHNldFdoZXJldG9dID0gdXNlU3RhdGUoJ21lbnUnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt3aGVyZXRvID09PSAnbWVudScgJiYgPE1lbnUgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9NZW51Pn1cclxuICAgICAge3doZXJldG8gPT09ICd3bScgJiYgPFdvcmRNYXN0ZXJtaW5kIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZE1hc3Rlcm1pbmQ+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dpJyAmJiA8V29yZEluZm8gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkSW5mbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAncGInICYmIDxQcmlzb25CcmVhayBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1ByaXNvbkJyZWFrPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWInICYmIDxGcnlZb3VyQnJhaW4gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9GcnlZb3VyQnJhaW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gTWVudSBvcHRpb24gdG9nZ2xlIGRlc2NyaXB0aW9uIGZsYWdzXHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2Rlc2NGeWIsIHNldERlc2NGeWJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcnkgeW91ciBicmFpblxyXG4gIC8vIEFja25vd2xlZGdlbWVudHMgZGVzY3JpcHRpb24gdG9nZ2xlc1xyXG4gIGNvbnN0IFtkZXNjRW5hYmxlMmssIHNldERlc2NFbmFibGUya10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIEVOQUJMRTJLXHJcbiAgY29uc3QgW2Rlc2NFeHRlbmRzQ2xhc3MsIHNldERlc2NFeHRlbmRzQ2xhc3NdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBleHRlbmRzY2xhc3MuY29tXHJcbiAgY29uc3QgW2Rlc2NGcmllbmRzLCBzZXREZXNjRnJpZW5kc10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIGZyaWVuZHNcclxuXHJcbiAgY29uc3QgTWVudU9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlRGVzY0ZsYWcgPSAoKSA9PiB7XHJcbiAgICAgIHByb3BzLnNldERlc2NGbGFnKCFwcm9wcy5kZXNjRmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudUJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5zZXRXaGVyZXRvKHByb3BzLnRhcmdldFdoZXJldG8pO319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5vcHRpb25UZXh0fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVGbGFnXCIgY2xhc3NOYW1lPXtgbWVudVRvZ2dsZURlc2NCdXR0b24gJHtwcm9wcy5kZXNjRmxhZyA/ICdZJyA6ICdOJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogXCJTaG93IGluZm9cIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kID0gPGRpdiBjbGFzc05hbWU9XCJtZW51T3B0aW9uRGVzY0RpdlwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwibWVudU9wdGlvbkRlc2NEaXZcIj5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiY29tbW9uSGVhZGVyRm9udEZhbWlseVwiPldvcmQgSW5mbyBpcyBhIHV0aWxpdHkgdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHdvcmRzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlUHJpc29uQnJlYWsgPSA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVPcHRpb25EZXNjRGl2XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5Qcmlzb24gQnJlYWsgaXMgYSB0d28gcGxheWVyIGNyb3Nzd29yZCBzdHlsZSBnYW1lLjwvaDI+PC9saT5cclxuICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgIDxsaT5Qcmlzb25lcnMgYWx3YXlzIHBsYXkgZmlyc3QuPC9saT5cclxuICAgICAgPGxpPlRoZSBmaXJzdCB3b3JkIHBsYXllZCBtdXN0IHRvdWNoIHRoZSBjZW50cmUgc3F1YXJlLjwvbGk+XHJcbiAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgPGxpPldoZW4gYSA8c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiPiZuYnNwOz8mbmJzcDs8L3NwYW4+IGlzIHBsYXllZCBpdCByZXByZXNlbnRzIGFueSBsZXR0ZXIgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGFzIHRoZSBzYW1lIGxldHRlciB0aHJvdWdob3V0IHRoZSBnYW1lLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHMgdVwiPlE8L3NwYW4+IHRpbGUgY2FuIHJlcHJlc2VudCBcIlFcIiBvciBcIlFVXCIsIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgaW4gYm90aCBkaXJlY3Rpb25zLCBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXQgdGhlIHNhbWUgZGVzaWduYXRpb24gdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYWxsIHRoZSBzcGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHBiU3F1YXJlRXNjYXBlSGF0Y2hcIj5ydW5fY2lyY2xlPC9zcGFuPiBzcXVhcmVzIGFyZSB1c2VkLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGJvdGggcGxheWVycyBwYXNzLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVGcnlZb3VyQnJhaW4gPSA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVPcHRpb25EZXNjRGl2XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5GcnkgWW91ciBCcmFpbiBpcyBhIHdvcmQgZ2FtZSB0aGF0IGNhbiBiZSBjb250ZXN0ZWQgYnkgdHdvIHRvIHNpeCBwbGF5ZXJzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycy4gUGxheWVycyB0YWtlIHR1cm5zLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgcmV1c2UgYSB3b3JkIGZyb20gdGhlIHNhbWUgcm91bmQuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgbWVyZWx5IGFkZCBhbiBTIHRvIGEgdmFsaWQgd29yZCBmcm9tIHRoZSBzYW1lIHJvdW5kLCB1bmxlc3MgdGhhdCB3b3JkIGVuZHMgaW4gUy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBhIHBsYXllciBmYWlscyB0byBtYWtlIGEgdmFsaWQgd29yZCBvbiB0aGVpciB0dXJuLCB0aGUgb3RoZXIgcGxheWVycyB0YWtlIHBhcnQgaW4gdGhlIGZyZWUtZm9yLWFsbC48L2xpPlxyXG4gICAgICA8bGk+SW4gdGhlIGZyZWUtZm9yLWFsbCwgdGhlIGdvYWwgaXMgdG8gc3VibWl0IHRoZSBzaG9ydGVzdCBhbnN3ZXIgeW91IGNhbi4gQWxsIHBsYXllcnMgd2l0aCB0aGUgc2hvcnRlc3Qgb2YgdGhlIGFuc3dlcnMgZ2V0IHBvaW50cy48L2xpPlxyXG4gICAgICA8bGk+VGhlIHBvaW50cyBnaXZlbiBlcXVhbHMgdGhlIG51bWJlciBvZiBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wgdGhlIGxhc3QgdGltZSBzb21lb25lIGdhdmUgYSB2YWxpZCBhbnN3ZXIgZm9yIHRoYXQgcm91bmQuPC9saT5cclxuICAgICAgPGxpPlJvdW5kcyBjb250aW51ZSB1bnRpbCBzb21lb25lIHJlYWNoZXMgdGhlIHRhcmdldCBudW1iZXIgb2YgcG9pbnRzIGZvciB0aGUgZ2FtZS48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IEFja25vd2xlZGdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVEZXNjRmxhZyA9ICgpID0+IHtcclxuICAgICAgcHJvcHMuc2V0RGVzY0ZsYWcoIXByb3BzLmRlc2NGbGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7cHJvcHMuYWNrVGV4dH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbWVudVRvZ2dsZURlc2NCdXR0b24gJHtwcm9wcy5kZXNjRmxhZyA/ICdZJyA6ICdOJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogXCJTaG93IGluZm9cIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBEZXNjcmliZUVuYWJsZTJrID0gPGRpdiBjbGFzc05hbWU9XCJtZW51T3B0aW9uRGVzY0RpdlwiPlxyXG4gICAgPHA+VGhpcyBzaXRlIHVzZXMgdGhlIEVuaGFuY2VkIE5vcnRoIEFtZXJpY2FuIEJlbmNobWFyayBMRWV4aWNvbiwgbWlsbGVuaWFsIGVkaXRpb24sIGEgcHVibGljIGRvbWFpbiB3b3JkIGxpc3QgdGhhdCBJIGdyYXRlZnVsbHkgYWNrbm93bGVkZ2UuPC9wPlxyXG4gIDwvZGl2PlxyXG5cclxuICBjb25zdCBEZXNjcmliZUV4dGVuZHNDbGFzcyA9IDxkaXYgY2xhc3NOYW1lPVwibWVudU9wdGlvbkRlc2NEaXZcIj5cclxuICAgIDxwPlRoaXMgc2l0ZSB1c2VzIEZyZWUgSlNPTiBzdG9yYWdlIG1hZGUgYXZhaWxhYmxlIGJ5IEN5cmlsIEJvaXMgZnJvbSBGcmFuY2UuIDxhIGhyZWY9J2h0dHBzOi8vZXh0ZW5kc2NsYXNzLmNvbS9jb250YWN0Jz5DbGljayBoZXJlIGZvciBtb3JlIGluZm88L2E+LiBUaGFua3MgQ3lyaWwhPC9wPlxyXG4gIDwvZGl2PlxyXG5cclxuICBjb25zdCBEZXNjcmliZUZyaWVuZHMgPSA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVPcHRpb25EZXNjRGl2XCI+XHJcbiAgICA8cD5EYW5pZWxsZSwgRW1lc2UsIENlc2FyLCBMZW5ub24sIEJldiwgTm9haCwgUmFjaCwgU2FyYWgsIFJvZCwgU29ueWEsIE5vbGFuLCBTaHlyYWksIEFnbmVzLCAuLi48L3A+XHJcbiAgICA8cD5UaGFua3MgZm9yIHRlY2huaWNhbCBoZWxwLCBmZWVkYmFjaywgc3VnZ2VzdGlvbnMsIG9yIHNpbXBseSBoYXZpbmcgZnVuIGhlcmUuIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGhlYXJ0XCI+ZmF2b3JpdGU8L2k+PC9wPlxyXG4gIDwvZGl2PlxyXG5cclxucmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RpbGVUUi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lciAtIEZ1biB3aXRoIHdvcmRzXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRpbGUgUnVubmVyXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmV3IHdvcmQgZ2FtZXMgYW5kIGEgd29yZCBsb29rdXAgZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvdGlsZVRSLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjQwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiVGlsZSBSdW5uZXIgLSBGdW4gd2l0aCB3b3Jkc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL3RpbGVUUi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBmZXcgd29yZCBnYW1lcyBhIGFuZCBhIHdvcmQgbG9va3VwIGZlYXR1cmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tXCIgLz5cclxuICAgICAgICA8bWVhdCBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lclwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVIZWFkZXJEaXZcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPk1lbnUgT3B0aW9uczwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1lbnVPcHRUYWJsZVwiPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NQYn0gc2V0RGVzY0ZsYWc9e3NldERlc2NQYn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0ncGInIG9wdGlvblRleHQ9J1ByaXNvbiBCcmVhaycvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY0Z5Yn0gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J2Z5Yicgb3B0aW9uVGV4dD0nRnJ5IFlvdXIgQnJhaW4nLz5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1lbnVPcHRUYWJsZVwiPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAge2Rlc2NXbSAmJiBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kfVxyXG4gICAgICB7ZGVzY1dpICYmIERlc2NyaWJlV29yZEluZm99XHJcbiAgICAgIHtkZXNjUGIgJiYgRGVzY3JpYmVQcmlzb25CcmVha31cclxuICAgICAge2Rlc2NGeWIgJiYgRGVzY3JpYmVGcnlZb3VyQnJhaW59XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlNwZWNpYWwgVGhhbmtzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWVudUFja1RhYmxlXCI+XHJcbiAgICAgICAgICA8QWNrbm93bGVkZ2UgYWNrVGV4dD0nRU5BQkxFMksnIGRlc2NGbGFnPXtkZXNjRW5hYmxlMmt9IHNldERlc2NGbGFnPXtzZXREZXNjRW5hYmxlMmt9Lz5cclxuICAgICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdleHRlbmRzY2xhc3MuY29tJyBkZXNjRmxhZz17ZGVzY0V4dGVuZHNDbGFzc30gc2V0RGVzY0ZsYWc9e3NldERlc2NFeHRlbmRzQ2xhc3N9Lz5cclxuICAgICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdGcmllbmRzJyBkZXNjRmxhZz17ZGVzY0ZyaWVuZHN9IHNldERlc2NGbGFnPXtzZXREZXNjRnJpZW5kc30vPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAge2Rlc2NFbmFibGUyayAmJiBEZXNjcmliZUVuYWJsZTJrfVxyXG4gICAgICAgIHtkZXNjRXh0ZW5kc0NsYXNzICYmIERlc2NyaWJlRXh0ZW5kc0NsYXNzfVxyXG4gICAgICAgIHtkZXNjRnJpZW5kcyAmJiBEZXNjcmliZUZyaWVuZHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==