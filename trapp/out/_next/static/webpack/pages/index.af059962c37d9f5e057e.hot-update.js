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
  const descriptionCard = 'w3-green w3-animate-right';
  const ackTextClassName = 'w3-blue w3-border w3-padding';
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
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
            lineNumber: 70,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: descriptionCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "CommenHeaderFontFamily",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: descriptionCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: descriptionCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: descriptionCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Fry Your Brain is a word game that can be contested by two to six players."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 32
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: ackTextClassName,
        children: props.ackText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
            lineNumber: 141,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
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
          lineNumber: 160,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descPb,
          setDescFlag: setDescPb,
          setWhereto: props.setWhereto,
          targetWhereto: "pb",
          optionText: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
          lineNumber: 168,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
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
        lineNumber: 167,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-panel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Acknowledgements"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "ENABLE2K",
          descFlag: descEnable2k,
          setDescFlag: setDescEnable2k
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }, undefined), descEnable2k && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "extendsclass.com",
          descFlag: descExtendsClass,
          setDescFlag: setDescExtendsClass
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }, undefined), descExtendsClass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://extendsclass.com/contact",
              children: "Click here for more info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 94
            }, undefined), ". Thanks Cyril!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJtZW51QnV0dG9uQ2xhc3NOYW1lIiwiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJkZXNjcmlwdGlvbkNhcmQiLCJhY2tUZXh0Q2xhc3NOYW1lIiwiZGVzY1dtIiwic2V0RGVzY1dtIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwiZGVzY0Z5YiIsInNldERlc2NGeWIiLCJkZXNjRW5hYmxlMmsiLCJzZXREZXNjRW5hYmxlMmsiLCJkZXNjRXh0ZW5kc0NsYXNzIiwic2V0RGVzY0V4dGVuZHNDbGFzcyIsIk1lbnVPcHRpb24iLCJ0b2dnbGVEZXNjRmxhZyIsInNldERlc2NGbGFnIiwiZGVzY0ZsYWciLCJ0YXJnZXRXaGVyZXRvIiwib3B0aW9uVGV4dCIsIkRlc2NyaWJlV29yZE1hc3Rlcm1pbmQiLCJEZXNjcmliZVdvcmRJbmZvIiwiRGVzY3JpYmVQcmlzb25CcmVhayIsIkRlc2NyaWJlRnJ5WW91ckJyYWluIiwiQWNrbm93bGVkZ2UiLCJhY2tUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxNQUFELENBQXRDLENBRDZCLENBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFBLGVBQ0dGLE9BQU8sS0FBSyxNQUFaLGlCQUFzQiw4REFBQyxJQUFEO0FBQU0sZ0JB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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjA1OTk2MmMzN2Q5ZjVlMDU3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBSZWFjdCwgeyBfdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdvcmRNYXN0ZXJtaW5kIGZyb20gJy4vd20vbWFzdGVybWluZCc7XHJcbmltcG9ydCBXb3JkSW5mbyBmcm9tICcuL3dpL3dvcmRpbmZvJztcclxuaW1wb3J0IFByaXNvbkJyZWFrIGZyb20gJy4vcGIvcHJpc29uYnJlYWsnO1xyXG5pbXBvcnQgRnJ5WW91ckJyYWluIGZyb20gJy4vZnliL2ZyeXlvdXJicmFpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt3aGVyZXRvLCBzZXRXaGVyZXRvXSA9IHVzZVN0YXRlKCdtZW51Jyk7XHJcbiAgLy8gY29uc3QgW2NvZGVyTXNnLCBzZXRDb2Rlck1zZ10gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIC8vIGNvbnN0IFtjb2Rlck1zZzIsIHNldENvZGVyTXNnMl0gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIC8vIGNvbnN0IGdldENvZGVyTXNnID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ldnRlc3QnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2V2dGVzdCdcclxuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgLy8gICBjb25zdCBqcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvLyAgIHNldENvZGVyTXNnKGAke2pyZXMuZXZ0ZXN0fWApO1xyXG4gIC8vICAgc2V0Q29kZXJNc2cyKGAke2pyZXMubGV4dGVzdH1gKTtcclxuICAvLyB9XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGdldENvZGVyTXNnKCk7XHJcbiAgLy8gfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt3aGVyZXRvID09PSAnbWVudScgJiYgPE1lbnUgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9NZW51Pn1cclxuICAgICAge3doZXJldG8gPT09ICd3bScgJiYgPFdvcmRNYXN0ZXJtaW5kIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZE1hc3Rlcm1pbmQ+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dpJyAmJiA8V29yZEluZm8gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkSW5mbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAncGInICYmIDxQcmlzb25CcmVhayBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1ByaXNvbkJyZWFrPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWInICYmIDxGcnlZb3VyQnJhaW4gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9GcnlZb3VyQnJhaW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbWVudUJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtZ3JlZW4gdzMtaG92ZXItYmxhY2sgdzMtYm9yZGVyIHczLXJvdW5kLXh4bGFyZ2UgdzMtbWFyZ2luJztcclxuICBjb25zdCBoaWRlQnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ibGFjayB3My1ib3JkZXIgdzMtYW5pbWF0ZS1sZWZ0IHczLW1hcmdpbic7XHJcbiAgY29uc3Qgc2hvd0J1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtaG92ZXItYmxhY2sgbXltYXRlcmlhbGljb24gdzMtYW5pbWF0ZS1yaWdodCB3My1yb3VuZC14eGxhcmdlIHczLW1hcmdpbic7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25DYXJkID0gJ3czLWdyZWVuIHczLWFuaW1hdGUtcmlnaHQnO1xyXG4gIGNvbnN0IGFja1RleHRDbGFzc05hbWUgPSAndzMtYmx1ZSB3My1ib3JkZXIgdzMtcGFkZGluZyc7XHJcbiAgXHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2Rlc2NGeWIsIHNldERlc2NGeWJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcnkgeW91ciBicmFpblxyXG5cclxuICBjb25zdCBbZGVzY0VuYWJsZTJrLCBzZXREZXNjRW5hYmxlMmtdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBFTkFCTEUyS1xyXG4gIGNvbnN0IFtkZXNjRXh0ZW5kc0NsYXNzLCBzZXREZXNjRXh0ZW5kc0NsYXNzXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZXh0ZW5kc2NsYXNzLmNvbVxyXG5cclxuICBjb25zdCBNZW51T3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVEZXNjRmxhZyA9ICgpID0+IHtcclxuICAgICAgcHJvcHMuc2V0RGVzY0ZsYWcoIXByb3BzLmRlc2NGbGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e21lbnVCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5zZXRXaGVyZXRvKHByb3BzLnRhcmdldFdoZXJldG8pO319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5vcHRpb25UZXh0fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVGbGFnXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjRmxhZyA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlV29yZE1hc3Rlcm1pbmQgPSA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiQ29tbWVuSGVhZGVyRm9udEZhbWlseVwiPldvcmQgTWFzdGVybWluZCBpcyBhIHNpbmdsZSBwbGF5ZXIgY29kZSBjcmFja2luZyBnYW1lLjwvaDI+PC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciBwaWNrcyBhIHJhbmRvbSB3b3JkLjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgZW50ZXIgZ3Vlc3NlcyB1bnRpbCB5b3UgZ3Vlc3MgY29ycmVjdGx5LjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgdGVsbHMgeW91IGhvdyBtYW55IGxldHRlcnMgYXJlIGNvcnJlY3QgYW5kIGhvdyBtYW55IGFyZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHdpbGwgc3RhcnQgd2l0aCBsZW5ndGggMiwgYW5kIGFkZCAxIGVhY2ggcm91bmQgdXAgdG8gbGVuZ3RoIDguIFRoZW4gaXQgc3RhcnRzIGEgbmV3IHNldCBiYWNrIGF0IDIuPC9saT5cclxuICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgc2hvd3MgeW91IHdvcmQgaW5mbyBmb3IgZ3Vlc3NlZCB3b3Jkcy48L2xpPlxyXG4gICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlV29yZEluZm8gPSA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiY29tbW9uSGVhZGVyRm9udEZhbWlseVwiPldvcmQgSW5mbyBpcyBhIHV0aWxpdHkgdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHdvcmRzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlUHJpc29uQnJlYWsgPSA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiY29tbW9uSGVhZGVyRm9udEZhbWlseVwiPlByaXNvbiBCcmVhayBpcyBhIHR3byBwbGF5ZXIgY3Jvc3N3b3JkIHN0eWxlIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+WW91IHBsYXkgdHdvIGdhbWVzLCBvbmUgYXMgdGhlIFByaXNvbmVycyBhbmQgb25lIGFzIHRoZSBHdWFyZHMuIFdob2V2ZXIgZnJlZXMgdGhlIG1vc3QgcHJpc29uZXJzIHdpbnMuPC9saT5cclxuICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGZpcnN0IHdvcmQgcGxheWVkIG11c3QgdG91Y2ggdGhlIGNlbnRyZSBzcXVhcmUuPC9saT5cclxuICAgICAgPGxpPlRvIGZyZWUgYSBwcmlzb25lciwgdGhlIFByaXNvbmVycyBtdXN0IHBsYXkgYSB0aWxlIG9uIG9uZSBvZiB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgPGxpPlRoZSA8c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZVVzZWRCeUd1YXJkcyB1XCI+UTwvc3Bhbj4gdGlsZSBjYW4gcmVwcmVzZW50IFwiUVwiIG9yIFwiUVVcIiwgZG9lcyBub3QgaGF2ZSB0byBiZSB0aGUgc2FtZSBpbiBib3RoIGRpcmVjdGlvbnMsIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhdCB0aGUgc2FtZSBkZXNpZ25hdGlvbiB0aHJvdWdob3V0IHRoZSBnYW1lLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGEgcGxheWVyIGVtcHRpZXMgdGhlaXIgcmFjay48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYm90aCBwbGF5ZXJzIHBhc3MuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBEZXNjcmliZUZyeVlvdXJCcmFpbiA9IDxkaXYgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+RnJ5IFlvdXIgQnJhaW4gaXMgYSB3b3JkIGdhbWUgdGhhdCBjYW4gYmUgY29udGVzdGVkIGJ5IHR3byB0byBzaXggcGxheWVycy48L2gyPjwvbGk+XHJcbiAgICAgIDxsaT5BIHRpbGUgcG9vbCBpcyBwcm92aWRlZCwgc3RhcnRpbmcgd2l0aCAzIGxldHRlcnMuIFBsYXllcnMgdGFrZSB0dXJucy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBpdCBpcyB5b3VyIHR1cm4sIG1ha2UgYSB3b3JkIHRoYXQgaGFzIGFsbCB0aGUgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sLCBwbHVzIGFueSBhbW91bnQgb2YgYWRkaXRpb25hbCBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGEgcGxheWVyIGZhaWxzIHRvIG1ha2UgYSB2YWxpZCB3b3JkIG9uIHRoZWlyIHR1cm4sIHRoZSBvdGhlciBwbGF5ZXJzIHRha2UgcGFydCBpbiB0aGUgZnJlZS1mb3ItYWxsLjwvbGk+XHJcbiAgICAgIDxsaT5JbiB0aGUgZnJlZS1mb3ItYWxsLCB0aGUgZ29hbCBpcyB0byBzdWJtaXQgdGhlIHNob3J0ZXN0IGFuc3dlciB5b3UgY2FuLiBBbGwgcGxheWVycyB3aXRoIHRoZSBzaG9ydGVzdCBvZiB0aGUgYW5zd2VycyBnZXQgcG9pbnRzLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgcG9pbnRzIGdpdmVuIGVxdWFscyB0aGUgbnVtYmVyIG9mIGxldHRlcnMgaW4gdGhlIHRpbGUgcG9vbCB0aGUgbGFzdCB0aW1lIHNvbWVvbmUgZ2F2ZSBhIHZhbGlkIGFuc3dlciBmb3IgdGhhdCByb3VuZC48L2xpPlxyXG4gICAgICA8bGk+Um91bmRzIGNvbnRpbnVlIHVudGlsIHNvbWVvbmUgcmVhY2hlcyB0aGUgdGFyZ2V0IG51bWJlciBvZiBwb2ludHMgZm9yIHRoZSBnYW1lLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgQWNrbm93bGVkZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPXthY2tUZXh0Q2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge3Byb3BzLmFja1RleHR9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVGbGFnXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjRmxhZyA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5UaWxlIFJ1bm5lcjwvaDE+XHJcbiAgICAgICAgey8qIDxoMj57cHJvcHMuY29kZXJNc2d9PC9oMj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInczLXRhYmxlIHczLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXbX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXbX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd20nIG9wdGlvblRleHQ9J1dvcmQgTWFzdGVybWluZCcvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dpfSBzZXREZXNjRmxhZz17c2V0RGVzY1dpfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3aScgb3B0aW9uVGV4dD0nV29yZCBJbmZvJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjUGJ9IHNldERlc2NGbGFnPXtzZXREZXNjUGJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3BiJyBvcHRpb25UZXh0PSdQcmlzb24gQnJlYWsnLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZSB3My1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV219IHNldERlc2NGbGFnPXtzZXREZXNjV219IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dtJyBvcHRpb25UZXh0PSdXb3JkIE1hc3Rlcm1pbmQnLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXaX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXaX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd2knIG9wdGlvblRleHQ9J1dvcmQgSW5mbycvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY0Z5Yn0gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J2Z5Yicgb3B0aW9uVGV4dD0nRnJ5IFlvdXIgQnJhaW4nLz5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICB7ZGVzY1dtICYmIERlc2NyaWJlV29yZE1hc3Rlcm1pbmR9XHJcbiAgICAgIHtkZXNjV2kgJiYgRGVzY3JpYmVXb3JkSW5mb31cclxuICAgICAge2Rlc2NQYiAmJiBEZXNjcmliZVByaXNvbkJyZWFrfVxyXG4gICAgICB7ZGVzY0Z5YiAmJiBEZXNjcmliZUZyeVlvdXJCcmFpbn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1wYW5lbFwiPlxyXG4gICAgICAgIDxoMT5BY2tub3dsZWRnZW1lbnRzPC9oMT5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0VOQUJMRTJLJyBkZXNjRmxhZz17ZGVzY0VuYWJsZTJrfSBzZXREZXNjRmxhZz17c2V0RGVzY0VuYWJsZTJrfS8+XHJcbiAgICAgICAge2Rlc2NFbmFibGUyayAmJlxyXG4gICAgICAgICAgPHRyPjx0ZD5UaGlzIHNpdGUgdXNlcyB0aGUgRW5oYW5jZWQgTm9ydGggQW1lcmljYW4gQmVuY2htYXJrIExFZXhpY29uLCBtaWxsZW5pYWwgZWRpdGlvbiwgYSBwdWJsaWMgZG9tYWluIHdvcmQgbGlzdCB0aGF0IEkgZ3JhdGVmdWxseSBhY2tub3dsZWRnZS48L3RkPjwvdHI+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdleHRlbmRzY2xhc3MuY29tJyBkZXNjRmxhZz17ZGVzY0V4dGVuZHNDbGFzc30gc2V0RGVzY0ZsYWc9e3NldERlc2NFeHRlbmRzQ2xhc3N9Lz5cclxuICAgICAgICB7ZGVzY0V4dGVuZHNDbGFzcyAmJlxyXG4gICAgICAgICAgPHRyPjx0ZD5UaGlzIHNpdGUgdXNlcyBGcmVlIEpTT04gc3RvcmFnZSBtYWRlIGF2YWlsYWJsZSBieSBDeXJpbCBCb2lzIGZyb20gRnJhbmNlLiA8YSBocmVmPSdodHRwczovL2V4dGVuZHNjbGFzcy5jb20vY29udGFjdCc+Q2xpY2sgaGVyZSBmb3IgbW9yZSBpbmZvPC9hPi4gVGhhbmtzIEN5cmlsITwvdGQ+PC90cj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==