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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wm_mastermind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wm/mastermind */ "./pages/wm/mastermind.js");
/* harmony import */ var _wi_wordinfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wi/wordinfo */ "./pages/wi/wordinfo.js");
/* harmony import */ var _pb_prisonbreak__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pb/prisonbreak */ "./pages/pb/prisonbreak.js");
/* harmony import */ var _fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fyb/fryyourbrain */ "./pages/fyb/fryyourbrain.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

 // import styles from '../styles/Home.module.css'








const hideButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-animate-left';
const showButtonClassName = 'w3-right mymaterialicon w3-green w3-animate-right';
const menuItemWidthNormal = '390px';
const descriptionCard = 'w3-card-4 w3-green w3-cell w3-animate-right';
function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('menu');
  const {
    0: coderMsg,
    1: setCoderMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('Loading');
  const {
    0: coderMsg2,
    1: setCoderMsg2
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('Loading');

  const getCoderMsg = async () => {
    let url =  true ? 'http://localhost:5000/evtest' : 0;
    const res = await fetch(url);
    const jres = await res.json();
    setCoderMsg(`${jres.evtest}`);
    setCoderMsg2(`${jres.lextest}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getCoderMsg();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto,
      coderMsg: coderMsg,
      coderMsg2: coderMsg2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_8__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(Home, "Z5cWNgHrZP/mr7ree7B5LsJ7H5Q=");

_c = Home;

const Menu = props => {
  _s2();

  const {
    0: descWm,
    1: setDescWm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe prison break

  const {
    0: descFyb,
    1: setDescFyb
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe fry your brain

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: props.coderMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-margin-left",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-bar-block",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WMOption, {
            descWm: descWm,
            setDescWm: setDescWm,
            setWhereto: props.setWhereto
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WIOption, {
            descWi: descWi,
            setDescWi: setDescWi,
            setWhereto: props.setWhereto
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PBOption, {
              descPb: descPb,
              setDescPb: setDescPb,
              setWhereto: props.setWhereto
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FYBOption, {
            descFyb: descFyb,
            setDescFyb: setDescFyb,
            setWhereto: props.setWhereto
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-blue",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "The Enhanced North American Benchmark LEexicon, millenial edition"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "This site uses the ENABLE2K lexicon, a public domain word list that I gratefully acknowledge."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-white",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Free JSON storage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://extendsclass.com/contact",
            children: "Click here for more info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 89
          }, undefined), ". Thanks Cyril!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: props.coderMsg2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "XL5HeeTiWMeXSdzj98Nioa/ZV5o=");

_c2 = Menu;

const WMOption = props => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWm ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w3-button w3-border w3-green",
        onClick: () => {
          props.setWhereto('wm');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mySubHeadingFont",
          children: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descWm ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribeWm",
        className: props.descWm ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWm(),
        children: props.descWm ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), props.descWm ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "CommenHeaderFontFamily",
            children: "Word Mastermind is a single player code cracking game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer picks a random word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "You enter guesses until you guess correctly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer tells you how many letters are correct and how many are in the correct position."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "The computer shows you word info for guessed words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined);
};

_c3 = WMOption;

const WIOption = props => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWi ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w3-button w3-border w3-green",
        onClick: () => {
          props.setWhereto('wi');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mySubHeadingFont",
          children: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descWi ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribeWi",
        className: props.descWi ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWi(),
        children: props.descWi ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, undefined), props.descWi ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "commonHeaderFontFamily",
            children: "Word Info is a utility to get information on words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Anagrams - words that use the exact same letters."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Inserts - words that can be made by inserting a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Drops - words that can be made by dropping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Swaps - words that can be made by swapping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }, undefined);
};

_c4 = WIOption;

const PBOption = props => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descPb ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w3-button w3-border w3-green",
        onClick: () => {
          props.setWhereto('pb');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mySubHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descPb ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribePb",
        className: props.descPb ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescPb(),
        children: props.descPb ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, undefined), props.descPb ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "commonHeaderFontFamily",
            children: "Prison Break is a two player crossword style game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Prisoners always play first."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The first word played must touch the centre square."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 92
          }, undefined), " squares."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareUsedByGuards",
            children: "\xA0?\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 26
          }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareUsedByGuards u",
            children: "Q"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 23
          }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The game ends if a player empties their rack."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 52
          }, undefined), " squares are used."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The game ends if both players pass."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 5
  }, undefined);
};

_c5 = PBOption;

const FYBOption = props => {
  const toggleDescFyb = () => {
    props.setDescFyb(!props.descFyb);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descFyb ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w3-button w3-border w3-green",
        onClick: () => {
          props.setWhereto('fyb');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mySubHeadingFont",
          children: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descPb ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribeFyb",
        className: props.descFyb ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescFyb(),
        children: props.descFyb ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 42
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, undefined), props.descFyb && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "commonHeaderFontFamily",
            children: "Fry Your Brain is a two to six player word game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Under Construction"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "A tile pool is provided, starting with 3 letters, and players take turns."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "When a player fails to make a word on their turn, the other players take part in the free for all."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "In the free for all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Rounds continue until someone reaches the target number of points for the game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 5
  }, undefined);
};

_c6 = FYBOption;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Menu");
$RefreshReg$(_c3, "WMOption");
$RefreshReg$(_c4, "WIOption");
$RefreshReg$(_c5, "PBOption");
$RefreshReg$(_c6, "FYBOption");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51SXRlbVdpZHRoTm9ybWFsIiwiZGVzY3JpcHRpb25DYXJkIiwiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJjb2Rlck1zZyIsInNldENvZGVyTXNnIiwiY29kZXJNc2cyIiwic2V0Q29kZXJNc2cyIiwiZ2V0Q29kZXJNc2ciLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpyZXMiLCJqc29uIiwiZXZ0ZXN0IiwibGV4dGVzdCIsInVzZUVmZmVjdCIsIk1lbnUiLCJwcm9wcyIsImRlc2NXbSIsInNldERlc2NXbSIsImRlc2NXaSIsInNldERlc2NXaSIsImRlc2NQYiIsInNldERlc2NQYiIsImRlc2NGeWIiLCJzZXREZXNjRnliIiwiV01PcHRpb24iLCJ0b2dnbGVEZXNjV20iLCJ3aWR0aCIsIldJT3B0aW9uIiwidG9nZ2xlRGVzY1dpIiwiUEJPcHRpb24iLCJ0b2dnbGVEZXNjUGIiLCJGWUJPcHRpb24iLCJ0b2dnbGVEZXNjRnliIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxtQkFBbUIsR0FBRyw2REFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxtREFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxPQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyw2Q0FBeEI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxNQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxD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QUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0F0Q0Q7O01BQU1tQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxNzM3Mjc0MjVhNDVlZDRjNzZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0Jyb3dzZXJWaWV3LCBNb2JpbGVPbmx5Vmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JkTWFzdGVybWluZCBmcm9tICcuL3dtL21hc3Rlcm1pbmQnO1xyXG5pbXBvcnQgV29yZEluZm8gZnJvbSAnLi93aS93b3JkaW5mbyc7XHJcbmltcG9ydCBQcmlzb25CcmVhayBmcm9tICcuL3BiL3ByaXNvbmJyZWFrJztcclxuaW1wb3J0IEZyeVlvdXJCcmFpbiBmcm9tICcuL2Z5Yi9mcnl5b3VyYnJhaW4nO1xyXG5cclxuY29uc3QgaGlkZUJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtZ3JlZW4gdzMtaG92ZXItYmxhY2sgdzMtYm9yZGVyIHczLWFuaW1hdGUtbGVmdCc7XHJcbmNvbnN0IHNob3dCdXR0b25DbGFzc05hbWUgPSAndzMtcmlnaHQgbXltYXRlcmlhbGljb24gdzMtZ3JlZW4gdzMtYW5pbWF0ZS1yaWdodCc7XHJcbmNvbnN0IG1lbnVJdGVtV2lkdGhOb3JtYWwgPSAnMzkwcHgnO1xyXG5jb25zdCBkZXNjcmlwdGlvbkNhcmQgPSAndzMtY2FyZC00IHczLWdyZWVuIHczLWNlbGwgdzMtYW5pbWF0ZS1yaWdodCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt3aGVyZXRvLCBzZXRXaGVyZXRvXSA9IHVzZVN0YXRlKCdtZW51Jyk7XHJcbiAgY29uc3QgW2NvZGVyTXNnLCBzZXRDb2Rlck1zZ10gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIGNvbnN0IFtjb2Rlck1zZzIsIHNldENvZGVyTXNnMl0gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIGNvbnN0IGdldENvZGVyTXNnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ldnRlc3QnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2V2dGVzdCdcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldENvZGVyTXNnKGAke2pyZXMuZXZ0ZXN0fWApO1xyXG4gICAgc2V0Q29kZXJNc2cyKGAke2pyZXMubGV4dGVzdH1gKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENvZGVyTXNnKCk7XHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt3aGVyZXRvID09PSAnbWVudScgJiYgPE1lbnUgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30gY29kZXJNc2c9e2NvZGVyTXNnfSBjb2Rlck1zZzI9e2NvZGVyTXNnMn0+PC9NZW51Pn1cclxuICAgICAge3doZXJldG8gPT09ICd3bScgJiYgPFdvcmRNYXN0ZXJtaW5kIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZE1hc3Rlcm1pbmQ+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dpJyAmJiA8V29yZEluZm8gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkSW5mbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAncGInICYmIDxQcmlzb25CcmVhayBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1ByaXNvbkJyZWFrPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWInICYmIDxGcnlZb3VyQnJhaW4gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9GcnlZb3VyQnJhaW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2Rlc2NGeWIsIHNldERlc2NGeWJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcnkgeW91ciBicmFpblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXIgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+TWVudTwvaDE+XHJcbiAgICAgICAgPGgyPntwcm9wcy5jb2Rlck1zZ308L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1ibG9ja1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgPFdNT3B0aW9uIGRlc2NXbT17ZGVzY1dtfSBzZXREZXNjV209e3NldERlc2NXbX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICA8V0lPcHRpb24gZGVzY1dpPXtkZXNjV2l9IHNldERlc2NXaT17c2V0RGVzY1dpfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxQQk9wdGlvbiBkZXNjUGI9e2Rlc2NQYn0gc2V0RGVzY1BiPXtzZXREZXNjUGJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8RllCT3B0aW9uIGRlc2NGeWI9e2Rlc2NGeWJ9IHNldERlc2NGeWI9e3NldERlc2NGeWJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmx1ZVwiPlxyXG4gICAgICAgICAgPGgxPlRoZSBFbmhhbmNlZCBOb3J0aCBBbWVyaWNhbiBCZW5jaG1hcmsgTEVleGljb24sIG1pbGxlbmlhbCBlZGl0aW9uPC9oMT5cclxuICAgICAgICAgIDxwPlRoaXMgc2l0ZSB1c2VzIHRoZSBFTkFCTEUySyBsZXhpY29uLCBhIHB1YmxpYyBkb21haW4gd29yZCBsaXN0IHRoYXQgSSBncmF0ZWZ1bGx5IGFja25vd2xlZGdlLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXdoaXRlXCI+XHJcbiAgICAgICAgICA8aDE+RnJlZSBKU09OIHN0b3JhZ2U8L2gxPlxyXG4gICAgICAgICAgPHA+VGhpcyBzaXRlIHVzZXMgRnJlZSBKU09OIHN0b3JhZ2UgbWFkZSBhdmFpbGFibGUgYnkgQ3lyaWwgQm9pcyBmcm9tIEZyYW5jZS4gPGEgaHJlZj0naHR0cHM6Ly9leHRlbmRzY2xhc3MuY29tL2NvbnRhY3QnPkNsaWNrIGhlcmUgZm9yIG1vcmUgaW5mbzwvYT4uIFRoYW5rcyBDeXJpbCE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgICAgPGgyPntwcm9wcy5jb2Rlck1zZzJ9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFdNT3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRGVzY1dtID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0RGVzY1dtKCFwcm9wcy5kZXNjV20pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIiBzdHlsZT17e3dpZHRoOiBwcm9wcy5kZXNjV20gPyAnMTAwJScgOiBtZW51SXRlbVdpZHRoTm9ybWFsfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3My1idXR0b24gdzMtYm9yZGVyIHczLWdyZWVuJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8oJ3dtJyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPldvcmQgTWFzdGVybWluZDwvaDI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjV20gPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVdtXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjV20gPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NXbSgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjV20gPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmRlc2NXbSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidzMtdWwgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cIkNvbW1lbkhlYWRlckZvbnRGYW1pbHlcIj5Xb3JkIE1hc3Rlcm1pbmQgaXMgYSBzaW5nbGUgcGxheWVyIGNvZGUgY3JhY2tpbmcgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgcGlja3MgYSByYW5kb20gd29yZC48L2xpPlxyXG4gICAgICAgICAgICA8bGk+WW91IGVudGVyIGd1ZXNzZXMgdW50aWwgeW91IGd1ZXNzIGNvcnJlY3RseS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHRlbGxzIHlvdSBob3cgbWFueSBsZXR0ZXJzIGFyZSBjb3JyZWN0IGFuZCBob3cgbWFueSBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uPC9saT5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB3aWxsIHN0YXJ0IHdpdGggbGVuZ3RoIDIsIGFuZCBhZGQgMSBlYWNoIHJvdW5kIHVwIHRvIGxlbmd0aCA4LiBUaGVuIGl0IHN0YXJ0cyBhIG5ldyBzZXQgYmFjayBhdCAyLjwvbGk+XHJcbiAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHNob3dzIHlvdSB3b3JkIGluZm8gZm9yIGd1ZXNzZWQgd29yZHMuPC9saT5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFdJT3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRGVzY1dpID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0RGVzY1dpKCFwcm9wcy5kZXNjV2kpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIiBzdHlsZT17e3dpZHRoOiBwcm9wcy5kZXNjV2kgPyAnMTAwJScgOiBtZW51SXRlbVdpZHRoTm9ybWFsfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3My1idXR0b24gdzMtYm9yZGVyIHczLWdyZWVuJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8oJ3dpJyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPldvcmQgSW5mbzwvaDI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjV2kgPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVdpXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjV2kgPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NXaSgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjV2kgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmRlc2NXaSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidzMtdWwgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5Xb3JkIEluZm8gaXMgYSB1dGlsaXR5IHRvIGdldCBpbmZvcm1hdGlvbiBvbiB3b3Jkcy48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BbmFncmFtcyAtIHdvcmRzIHRoYXQgdXNlIHRoZSBleGFjdCBzYW1lIGxldHRlcnMuPC9saT5cclxuICAgICAgICAgICAgPGxpPkluc2VydHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGluc2VydGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgPGxpPkRyb3BzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBkcm9wcGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgPGxpPlN3YXBzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBzd2FwcGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFBCT3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRGVzY1BiID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0RGVzY1BiKCFwcm9wcy5kZXNjUGIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIiBzdHlsZT17e3dpZHRoOiBwcm9wcy5kZXNjUGIgPyAnMTAwJScgOiBtZW51SXRlbVdpZHRoTm9ybWFsfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3My1idXR0b24gdzMtYm9yZGVyIHczLWdyZWVuJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8oJ3BiJyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjUGIgPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVBiXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjUGIgPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NQYigpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjUGIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5kZXNjUGIgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+UHJpc29uIEJyZWFrIGlzIGEgdHdvIHBsYXllciBjcm9zc3dvcmQgc3R5bGUgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZZQk9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZURlc2NGeWIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjRnliKCFwcm9wcy5kZXNjRnliKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCIgc3R5bGU9e3t3aWR0aDogcHJvcHMuZGVzY0Z5YiA/ICcxMDAlJyA6IG1lbnVJdGVtV2lkdGhOb3JtYWx9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3czLWJ1dHRvbiB3My1ib3JkZXIgdzMtZ3JlZW4nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuc2V0V2hlcmV0bygnZnliJyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPkZyeSBZb3VyIEJyYWluPC9oMj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdzMtY2VsbCAke3Byb3BzLmRlc2NQYiA/IFwidzMtY2VsbC1taWRkbGVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlRnliXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjRnliID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRnliKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NGeWIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5kZXNjRnliICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5GcnkgWW91ciBCcmFpbiBpcyBhIHR3byB0byBzaXggcGxheWVyIHdvcmQgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlVuZGVyIENvbnN0cnVjdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycywgYW5kIHBsYXllcnMgdGFrZSB0dXJucy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+V2hlbiBhIHBsYXllciBmYWlscyB0byBtYWtlIGEgd29yZCBvbiB0aGVpciB0dXJuLCB0aGUgb3RoZXIgcGxheWVycyB0YWtlIHBhcnQgaW4gdGhlIGZyZWUgZm9yIGFsbC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5JbiB0aGUgZnJlZSBmb3IgYWxsLCB0aGUgZ29hbCBpcyB0byBzdWJtaXQgdGhlIHNob3J0ZXN0IGFuc3dlciB5b3UgY2FuLiBBbGwgcGxheWVycyB3aXRoIHRoZSBzaG9ydGVzdCBvZiB0aGUgYW5zd2VycyBnZXQgcG9pbnRzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlRoZSBwb2ludHMgZ2l2ZW4gZXF1YWxzIHRoZSBudW1iZXIgb2YgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sIHRoZSBsYXN0IHRpbWUgc29tZW9uZSBnYXZlIGEgdmFsaWQgYW5zd2VyIGZvciB0aGF0IHJvdW5kLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlJvdW5kcyBjb250aW51ZSB1bnRpbCBzb21lb25lIHJlYWNoZXMgdGhlIHRhcmdldCBudW1iZXIgb2YgcG9pbnRzIGZvciB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=