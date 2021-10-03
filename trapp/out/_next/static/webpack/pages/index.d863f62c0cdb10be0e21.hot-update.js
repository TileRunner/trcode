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
// import Link from 'next/link'







function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('menu'); // const [coderMsg, setCoderMsg] = useState('Loading');
  // const [coderMsg2, setCoderMsg2] = useState('Loading');
  // const getCoderMsg = async () => {
  //   let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/evtest' : 'https://tilerunner.herokuapp.com/evtest'
  //   const res = await fetch(url);
  //   const jres = await res.json();
  //   setCoderMsg(`${jres.evtest}`);
  //   setCoderMsg2(`${jres.lextest}`);
  // }
  // useEffect(() => {
  //   getCoderMsg();
  // },[])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Home, "X4zKO771MBoQLHMaoj5H2Dl1VSk=");

_c = Home;

const Menu = props => {
  _s2();

  const menuButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-round-xxlarge w3-margin';
  const hideButtonClassName = 'w3-button w3-black w3-border w3-animate-left w3-margin';
  const showButtonClassName = 'w3-button w3-hover-black mymaterialicon w3-animate-right w3-round-xxlarge w3-margin';
  const menuOptDescCard = 'w3-green w3-animate-right';
  const ackTextClassName = 'w3-padding';
  const ackDescCard = 'w3-animate-right';
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

  const {
    0: descEnable2k,
    1: setDescEnable2k
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe ENABLE2K

  const {
    0: descExtendsClass,
    1: setDescExtendsClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe extendsclass.com

  const MenuOption = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: menuButtonClassName,
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: props.descFlag ? hideButtonClassName : showButtonClassName,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "CommenHeaderFontFamily",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Fry Your Brain is a word game that can be contested by two to six players."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 32
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: ackTextClassName,
        children: [props.ackText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: props.descFlag ? hideButtonClassName : showButtonClassName,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: ackDescCard,
    children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 28
  }, undefined);

  const DescribeExtendsClass = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: ackDescCard,
    children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://extendsclass.com/contact",
      children: "Click here for more info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 80
    }, undefined), ". Thanks Cyril!"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 32
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-responsive",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descPb,
          setDescFlag: setDescPb,
          setWhereto: props.setWhereto,
          targetWhereto: "pb",
          optionText: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-responsive",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-panel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Acknowledgements:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
        ackText: "ENABLE2K",
        descFlag: descEnable2k,
        setDescFlag: setDescEnable2k
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, undefined), descEnable2k && DescribeEnable2k, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
        ackText: "extendsclass.com",
        descFlag: descExtendsClass,
        setDescFlag: setDescExtendsClass
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined), descExtendsClass && DescribeExtendsClass]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "7XUK7JKcAfUmBuw7DrF6aCk5t7M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJtZW51QnV0dG9uQ2xhc3NOYW1lIiwiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51T3B0RGVzY0NhcmQiLCJhY2tUZXh0Q2xhc3NOYW1lIiwiYWNrRGVzY0NhcmQiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NFbmFibGUyayIsInNldERlc2NFbmFibGUyayIsImRlc2NFeHRlbmRzQ2xhc3MiLCJzZXREZXNjRXh0ZW5kc0NsYXNzIiwiTWVudU9wdGlvbiIsInRvZ2dsZURlc2NGbGFnIiwic2V0RGVzY0ZsYWciLCJkZXNjRmxhZyIsInRhcmdldFdoZXJldG8iLCJvcHRpb25UZXh0IiwiRGVzY3JpYmVXb3JkTWFzdGVybWluZCIsIkRlc2NyaWJlV29yZEluZm8iLCJEZXNjcmliZVByaXNvbkJyZWFrIiwiRGVzY3JpYmVGcnlZb3VyQnJhaW4iLCJBY2tub3dsZWRnZSIsImFja1RleHQiLCJEZXNjcmliZUVuYWJsZTJrIiwiRGVzY3JpYmVFeHRlbmRzQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLE1BQUQsQ0FBdEMsQ0FENkIsQ0FFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNC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QU1qQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4NjNmNjJjMGNkYjEwYmUwZTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0Jyb3dzZXJWaWV3LCBNb2JpbGVPbmx5Vmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFJlYWN0LCB7IF91c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV29yZE1hc3Rlcm1pbmQgZnJvbSAnLi93bS9tYXN0ZXJtaW5kJztcclxuaW1wb3J0IFdvcmRJbmZvIGZyb20gJy4vd2kvd29yZGluZm8nO1xyXG5pbXBvcnQgUHJpc29uQnJlYWsgZnJvbSAnLi9wYi9wcmlzb25icmVhayc7XHJcbmltcG9ydCBGcnlZb3VyQnJhaW4gZnJvbSAnLi9meWIvZnJ5eW91cmJyYWluJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3doZXJldG8sIHNldFdoZXJldG9dID0gdXNlU3RhdGUoJ21lbnUnKTtcclxuICAvLyBjb25zdCBbY29kZXJNc2csIHNldENvZGVyTXNnXSA9IHVzZVN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgLy8gY29uc3QgW2NvZGVyTXNnMiwgc2V0Q29kZXJNc2cyXSA9IHVzZVN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgLy8gY29uc3QgZ2V0Q29kZXJNc2cgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2V2dGVzdCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vZXZ0ZXN0J1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAvLyAgIGNvbnN0IGpyZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vICAgc2V0Q29kZXJNc2coYCR7anJlcy5ldnRlc3R9YCk7XHJcbiAgLy8gICBzZXRDb2Rlck1zZzIoYCR7anJlcy5sZXh0ZXN0fWApO1xyXG4gIC8vIH1cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZ2V0Q29kZXJNc2coKTtcclxuICAvLyB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3doZXJldG8gPT09ICdtZW51JyAmJiA8TWVudSBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L01lbnU+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dtJyAmJiA8V29yZE1hc3Rlcm1pbmQgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkTWFzdGVybWluZD59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnd2knICYmIDxXb3JkSW5mbyBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1dvcmRJbmZvPn1cclxuICAgICAge3doZXJldG8gPT09ICdwYicgJiYgPFByaXNvbkJyZWFrIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvUHJpc29uQnJlYWs+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ2Z5YicgJiYgPEZyeVlvdXJCcmFpbiBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L0ZyeVlvdXJCcmFpbj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBtZW51QnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ncmVlbiB3My1ob3Zlci1ibGFjayB3My1ib3JkZXIgdzMtcm91bmQteHhsYXJnZSB3My1tYXJnaW4nO1xyXG4gIGNvbnN0IGhpZGVCdXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWJsYWNrIHczLWJvcmRlciB3My1hbmltYXRlLWxlZnQgdzMtbWFyZ2luJztcclxuICBjb25zdCBzaG93QnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ob3Zlci1ibGFjayBteW1hdGVyaWFsaWNvbiB3My1hbmltYXRlLXJpZ2h0IHczLXJvdW5kLXh4bGFyZ2UgdzMtbWFyZ2luJztcclxuICBjb25zdCBtZW51T3B0RGVzY0NhcmQgPSAndzMtZ3JlZW4gdzMtYW5pbWF0ZS1yaWdodCc7XHJcbiAgY29uc3QgYWNrVGV4dENsYXNzTmFtZSA9ICd3My1wYWRkaW5nJztcclxuICBjb25zdCBhY2tEZXNjQ2FyZCA9ICd3My1hbmltYXRlLXJpZ2h0JztcclxuICBcclxuICBjb25zdCBbZGVzY1dtLCBzZXREZXNjV21dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIG1hc3Rlcm1pbmRcclxuICBjb25zdCBbZGVzY1dpLCBzZXREZXNjV2ldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIGluZm9cclxuICBjb25zdCBbZGVzY1BiLCBzZXREZXNjUGJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBwcmlzb24gYnJlYWtcclxuICBjb25zdCBbZGVzY0Z5Yiwgc2V0RGVzY0Z5Yl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIGZyeSB5b3VyIGJyYWluXHJcblxyXG4gIGNvbnN0IFtkZXNjRW5hYmxlMmssIHNldERlc2NFbmFibGUya10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIEVOQUJMRTJLXHJcbiAgY29uc3QgW2Rlc2NFeHRlbmRzQ2xhc3MsIHNldERlc2NFeHRlbmRzQ2xhc3NdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBleHRlbmRzY2xhc3MuY29tXHJcblxyXG4gIGNvbnN0IE1lbnVPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bWVudUJ1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8ocHJvcHMudGFyZ2V0V2hlcmV0byk7fX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLm9wdGlvblRleHR9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZUZsYWdcIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NGbGFnID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NGbGFnKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjRmxhZyA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkTWFzdGVybWluZCA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkSW5mbyA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+V29yZCBJbmZvIGlzIGEgdXRpbGl0eSB0byBnZXQgaW5mb3JtYXRpb24gb24gd29yZHMuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+QW5hZ3JhbXMgLSB3b3JkcyB0aGF0IHVzZSB0aGUgZXhhY3Qgc2FtZSBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgIDxsaT5JbnNlcnRzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBpbnNlcnRpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Ecm9wcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgZHJvcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Td2FwcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgc3dhcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVQcmlzb25CcmVhayA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+UHJpc29uIEJyZWFrIGlzIGEgdHdvIHBsYXllciBjcm9zc3dvcmQgc3R5bGUgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgcGxheSB0d28gZ2FtZXMsIG9uZSBhcyB0aGUgUHJpc29uZXJzIGFuZCBvbmUgYXMgdGhlIEd1YXJkcy4gV2hvZXZlciBmcmVlcyB0aGUgbW9zdCBwcmlzb25lcnMgd2lucy48L2xpPlxyXG4gICAgICA8bGk+UHJpc29uZXJzIGFsd2F5cyBwbGF5IGZpcnN0LjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICA8bGk+VG8gZnJlZSBhIHByaXNvbmVyLCB0aGUgUHJpc29uZXJzIG11c3QgcGxheSBhIHRpbGUgb24gb25lIG9mIHRoZSBzcGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHBiU3F1YXJlRXNjYXBlSGF0Y2hcIj5ydW5fY2lyY2xlPC9zcGFuPiBzcXVhcmVzLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGEgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIj4mbmJzcDs/Jm5ic3A7PC9zcGFuPiBpcyBwbGF5ZWQgaXQgcmVwcmVzZW50cyBhbnkgbGV0dGVyIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhcyB0aGUgc2FtZSBsZXR0ZXIgdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYSBwbGF5ZXIgZW1wdGllcyB0aGVpciByYWNrLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGFsbCB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcyBhcmUgdXNlZC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJ5WW91ckJyYWluID0gPGRpdiBjbGFzc05hbWU9e21lbnVPcHREZXNjQ2FyZH0+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwidzMtdWwgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5GcnkgWW91ciBCcmFpbiBpcyBhIHdvcmQgZ2FtZSB0aGF0IGNhbiBiZSBjb250ZXN0ZWQgYnkgdHdvIHRvIHNpeCBwbGF5ZXJzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycy4gUGxheWVycyB0YWtlIHR1cm5zLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPldoZW4gYSBwbGF5ZXIgZmFpbHMgdG8gbWFrZSBhIHZhbGlkIHdvcmQgb24gdGhlaXIgdHVybiwgdGhlIG90aGVyIHBsYXllcnMgdGFrZSBwYXJ0IGluIHRoZSBmcmVlLWZvci1hbGwuPC9saT5cclxuICAgICAgPGxpPkluIHRoZSBmcmVlLWZvci1hbGwsIHRoZSBnb2FsIGlzIHRvIHN1Ym1pdCB0aGUgc2hvcnRlc3QgYW5zd2VyIHlvdSBjYW4uIEFsbCBwbGF5ZXJzIHdpdGggdGhlIHNob3J0ZXN0IG9mIHRoZSBhbnN3ZXJzIGdldCBwb2ludHMuPC9saT5cclxuICAgICAgPGxpPlRoZSBwb2ludHMgZ2l2ZW4gZXF1YWxzIHRoZSBudW1iZXIgb2YgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sIHRoZSBsYXN0IHRpbWUgc29tZW9uZSBnYXZlIGEgdmFsaWQgYW5zd2VyIGZvciB0aGF0IHJvdW5kLjwvbGk+XHJcbiAgICAgIDxsaT5Sb3VuZHMgY29udGludWUgdW50aWwgc29tZW9uZSByZWFjaGVzIHRoZSB0YXJnZXQgbnVtYmVyIG9mIHBvaW50cyBmb3IgdGhlIGdhbWUuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBBY2tub3dsZWRnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlRGVzY0ZsYWcgPSAoKSA9PiB7XHJcbiAgICAgIHByb3BzLnNldERlc2NGbGFnKCFwcm9wcy5kZXNjRmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Fja1RleHRDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuYWNrVGV4dH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwcm9wcy5kZXNjRmxhZyA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRW5hYmxlMmsgPSA8ZGl2IGNsYXNzTmFtZT17YWNrRGVzY0NhcmR9PlxyXG4gICAgVGhpcyBzaXRlIHVzZXMgdGhlIEVuaGFuY2VkIE5vcnRoIEFtZXJpY2FuIEJlbmNobWFyayBMRWV4aWNvbiwgbWlsbGVuaWFsIGVkaXRpb24sIGEgcHVibGljIGRvbWFpbiB3b3JkIGxpc3QgdGhhdCBJIGdyYXRlZnVsbHkgYWNrbm93bGVkZ2UuXHJcbiAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRXh0ZW5kc0NsYXNzID0gPGRpdiBjbGFzc05hbWU9e2Fja0Rlc2NDYXJkfT5cclxuICAgIFRoaXMgc2l0ZSB1c2VzIEZyZWUgSlNPTiBzdG9yYWdlIG1hZGUgYXZhaWxhYmxlIGJ5IEN5cmlsIEJvaXMgZnJvbSBGcmFuY2UuIDxhIGhyZWY9J2h0dHBzOi8vZXh0ZW5kc2NsYXNzLmNvbS9jb250YWN0Jz5DbGljayBoZXJlIGZvciBtb3JlIGluZm88L2E+LiBUaGFua3MgQ3lyaWwhXHJcbiAgPC9kaXY+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5UaWxlIFJ1bm5lcjwvaDE+XHJcbiAgICAgICAgey8qIDxoMj57cHJvcHMuY29kZXJNc2d9PC9oMj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInczLXRhYmxlIHczLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXbX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXbX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd20nIG9wdGlvblRleHQ9J1dvcmQgTWFzdGVybWluZCcvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dpfSBzZXREZXNjRmxhZz17c2V0RGVzY1dpfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3aScgb3B0aW9uVGV4dD0nV29yZCBJbmZvJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjUGJ9IHNldERlc2NGbGFnPXtzZXREZXNjUGJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3BiJyBvcHRpb25UZXh0PSdQcmlzb24gQnJlYWsnLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZSB3My1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV219IHNldERlc2NGbGFnPXtzZXREZXNjV219IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dtJyBvcHRpb25UZXh0PSdXb3JkIE1hc3Rlcm1pbmQnLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXaX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXaX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd2knIG9wdGlvblRleHQ9J1dvcmQgSW5mbycvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY0Z5Yn0gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J2Z5Yicgb3B0aW9uVGV4dD0nRnJ5IFlvdXIgQnJhaW4nLz5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICB7ZGVzY1dtICYmIERlc2NyaWJlV29yZE1hc3Rlcm1pbmR9XHJcbiAgICAgIHtkZXNjV2kgJiYgRGVzY3JpYmVXb3JkSW5mb31cclxuICAgICAge2Rlc2NQYiAmJiBEZXNjcmliZVByaXNvbkJyZWFrfVxyXG4gICAgICB7ZGVzY0Z5YiAmJiBEZXNjcmliZUZyeVlvdXJCcmFpbn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1wYW5lbFwiPlxyXG4gICAgICAgIDxoMT5BY2tub3dsZWRnZW1lbnRzOjwvaDE+XHJcbiAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0VOQUJMRTJLJyBkZXNjRmxhZz17ZGVzY0VuYWJsZTJrfSBzZXREZXNjRmxhZz17c2V0RGVzY0VuYWJsZTJrfS8+XHJcbiAgICAgICAge2Rlc2NFbmFibGUyayAmJiBEZXNjcmliZUVuYWJsZTJrfVxyXG4gICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdleHRlbmRzY2xhc3MuY29tJyBkZXNjRmxhZz17ZGVzY0V4dGVuZHNDbGFzc30gc2V0RGVzY0ZsYWc9e3NldERlc2NFeHRlbmRzQ2xhc3N9Lz5cclxuICAgICAgICB7ZGVzY0V4dGVuZHNDbGFzcyAmJiBEZXNjcmliZUV4dGVuZHNDbGFzc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9