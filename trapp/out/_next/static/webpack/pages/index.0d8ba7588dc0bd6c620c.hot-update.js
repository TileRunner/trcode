webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "../node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$();

 // import styles from '../styles/Home.module.css'




function Home() {
  _s();

  const {
    0: descWm,
    1: setDescWm
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe prison break

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Tile Runner App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "myMenuHeader myHeadingFont",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container myMenuTable",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WMOption, {
        descWm: descWm,
        setDescWm: setDescWm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WIOption, {
        descWi: descWi,
        setDescWi: setDescWi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PBOption, {
          descPb: descPb,
          setDescPb: setDescPb
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Home, "zULIHV+4wxLeaVTiJn81tmPeVL4=");

_c = Home;

const WMOption = props => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/wm/mastermind`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mySubHeadingFont",
              children: ["Word Mastermind", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "material-icons",
                children: "psychology"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "toggleDescribeWm",
          className: props.descWm ? "mybutton" : "mymaterialicon",
          onClick: () => toggleDescWm(),
          children: props.descWm ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 43
          }, undefined)
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
      lineNumber: 39,
      columnNumber: 7
    }, undefined), props.descWm ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col-2 myMenuTd myinfo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "desc",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "bullet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The computer picks a random word."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "You enter guesses until you guess correctly."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The computer tells you how many letters are correct and how many are in the correct position."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "The computer shows you word info for guessed words."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true);
};

_c2 = WMOption;

const WIOption = props => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/wi/wordinfo`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mySubHeadingFont",
              children: ["Word Info", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "material-icons",
                children: "biotech"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "toggleDescribeWi",
          className: props.descWi ? "mybutton" : "mymaterialicon",
          onClick: () => toggleDescWi(),
          children: props.descWi ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), props.descWi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col-2 myMenuTd myinfo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "desc",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "bullet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Anagrams - words that use the exact same letters."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Inserts - words that can be made by inserting a single letter."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Drops - words that can be made by dropping a single letter."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Swaps - words that can be made by swapping a single letter."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true);
};

_c3 = WIOption;

const PBOption = props => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/pb/prisonbreak2`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mySubHeadingFont",
              children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "material-icons",
                children: "run_circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col myMenuTd",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "toggleDescribePb",
          className: props.descPb ? "mybutton" : "mymaterialicon",
          onClick: () => toggleDescPb(),
          children: props.descPb ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, undefined), props.descPb ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-col-2 myMenuTd myinfo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "desc",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "bullet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Prisoners always play first."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The first word played must touch the centre square."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "material-icons pbSquareEscapeHatch",
              children: "run_circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 92
            }, undefined), " squares."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: ["When a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "pbSquareUsedByGuards",
              children: "\xA0?\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 26
            }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: ["The ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "pbSquareUsedByGuards u",
              children: "Q"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 23
            }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The game ends if a player empties their rack."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: ["The game ends if all the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "material-icons pbSquareEscapeHatch",
              children: "run_circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 52
            }, undefined), " squares are used."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The game ends if both players pass."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "Due to licensing restrictions, this game does not validate words against any lexicon."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true);
};

_c4 = PBOption;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "WMOption");
$RefreshReg$(_c3, "WIOption");
$RefreshReg$(_c4, "PBOption");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRlc2NXbSIsInNldERlc2NXbSIsInVzZVN0YXRlIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwiV01PcHRpb24iLCJwcm9wcyIsInRvZ2dsZURlc2NXbSIsIldJT3B0aW9uIiwidG9nZ2xlRGVzY1dpIiwiUEJPcHRpb24iLCJ0b2dnbGVEZXNjUGIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxLQUFELENBQXBDLENBRDZCLENBQ2dCOztBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsS0FBRCxDQUFwQyxDQUY2QixDQUVnQjs7QUFDN0MsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FINkIsQ0FHZ0I7O0FBRTdDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRTtBQUFLLGVBQVMsRUFB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QUE7QUFBQTtBQUFBO0FBQUEseUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEYsZUFRRTtBQUFBLHlFQUFxQztBQUFNLHVCQUFTLEVBQUMsb0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQW1CQyx1SkF2Q0o7QUFBQSxrQkFERjtBQTRDRCxDQWpERDs7TUFBTU8sUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZDhiYTc1ODhkYzBiZDZjNjIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXIgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJteU1lbnVIZWFkZXIgbXlIZWFkaW5nRm9udFwiPk1lbnU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgbXlNZW51VGFibGVcIj5cclxuICAgICAgICA8V01PcHRpb24gZGVzY1dtPXtkZXNjV219IHNldERlc2NXbT17c2V0RGVzY1dtfS8+XHJcbiAgICAgICAgPFdJT3B0aW9uIGRlc2NXaT17ZGVzY1dpfSBzZXREZXNjV2k9e3NldERlc2NXaX0vPlxyXG4gICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgIDxQQk9wdGlvbiBkZXNjUGI9e2Rlc2NQYn0gc2V0RGVzY1BiPXtzZXREZXNjUGJ9Lz5cclxuICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgV01PcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjV20gPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjV20oIXByb3BzLmRlc2NXbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCBteU1lbnVUZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC93bS9tYXN0ZXJtaW5kYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteVN1YkhlYWRpbmdGb250XCI+V29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBzeWNob2xvZ3k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIG15TWVudVRkXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVXbVwiIGNsYXNzTmFtZT17cHJvcHMuZGVzY1dtID8gXCJteWJ1dHRvblwiIDogXCJteW1hdGVyaWFsaWNvblwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjV20oKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmRlc2NXbSA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5kZXNjV20gP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbC0yIG15TWVudVRkIG15aW5mb1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciBwaWNrcyBhIHJhbmRvbSB3b3JkLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHRlbGxzIHlvdSBob3cgbWFueSBsZXR0ZXJzIGFyZSBjb3JyZWN0IGFuZCBob3cgbWFueSBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uPC9saT5cclxuICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHNob3dzIHlvdSB3b3JkIGluZm8gZm9yIGd1ZXNzZWQgd29yZHMuPC9saT5cclxuICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyB1c2VzIGEgJ2NvbW1vbiBFbmdsaXNoIGxleGljb24nIGRldmVsb3BlZCBieSBzb21lIHdvcmQgZ2FtZSBlbnRodXNpYXN0cy48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFdJT3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRGVzY1dpID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0RGVzY1dpKCFwcm9wcy5kZXNjV2kpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgbXlNZW51VGRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2Avd2kvd29yZGluZm9gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15U3ViSGVhZGluZ0ZvbnRcIj5Xb3JkIEluZm9cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YmlvdGVjaDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgbXlNZW51VGRcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVdpXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjV2kgPyBcIm15YnV0dG9uXCIgOiBcIm15bWF0ZXJpYWxpY29uXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NXaSgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY1dpID8gXCJIaWRlIGluZm9cIiA6IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmRlc2NXaSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sLTIgbXlNZW51VGQgbXlpbmZvXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5Xb3JkIEluZm8gaXMgYSB1dGlsaXR5IHRvIGdldCBpbmZvcm1hdGlvbiBvbiB3b3Jkcy48L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidWxsZXRcIj5cclxuICAgICAgICAgICAgICA8bGk+QW5hZ3JhbXMgLSB3b3JkcyB0aGF0IHVzZSB0aGUgZXhhY3Qgc2FtZSBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkluc2VydHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGluc2VydGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5Td2FwcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgc3dhcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkR1ZSB0byBsaWNlbnNpbmcgcmVzdHJpY3Rpb25zLCB0aGlzIHVzZXMgYSAnY29tbW9uIEVuZ2xpc2ggbGV4aWNvbicgZGV2ZWxvcGVkIGJ5IHNvbWUgd29yZCBnYW1lIGVudGh1c2lhc3RzLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgUEJPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjUGIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjUGIoIXByb3BzLmRlc2NQYik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCBteU1lbnVUZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wYi9wcmlzb25icmVhazJgfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15U3ViSGVhZGluZ0ZvbnRcIj5cclxuICAgICAgICAgICAgICAgIFByaXNvbiBCcmVha1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCBteU1lbnVUZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlUGJcIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NQYiA/IFwibXlidXR0b25cIiA6IFwibXltYXRlcmlhbGljb25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1BiKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjUGIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMuZGVzY1BiID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wtMiBteU1lbnVUZCBteWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY1wiPlByaXNvbiBCcmVhayBpcyBhIHR3byBwbGF5ZXIgY3Jvc3N3b3JkIHN0eWxlIGdhbWUuPC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyBnYW1lIGRvZXMgbm90IHZhbGlkYXRlIHdvcmRzIGFnYWluc3QgYW55IGxleGljb24uPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==