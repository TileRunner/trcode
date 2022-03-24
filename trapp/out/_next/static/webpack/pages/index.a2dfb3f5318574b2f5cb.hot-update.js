self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/fybSolo.js":
/*!******************************!*\
  !*** ./pages/fyb/fybSolo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\fybSolo.js",
    _s = $RefreshSig$();




const FryYourBrainSolo = ({
  setWhereto
}) => {
  _s();

  const baseurl =  true ? 'http://localhost:5000' : 0;
  const {
    0: pickedLetters,
    1: setPickedLetters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // All pre-picked fry letters as an array

  const {
    0: fryLetters,
    1: setFryLetters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Fry letters shown at current stage as an array

  const {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1); // Used for letting the user move fry letters around

  const {
    0: moves,
    1: setMoves
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: warning,
    1: setWarning
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Practice session.');
  const {
    0: validOnly,
    1: setValidOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // whether guesses must be valid words

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    pickAllFryLetters();
  }, []);

  const pickAllFryLetters = async () => {
    let url = `${baseurl}/ENABLE2K?prepickfry=true&guarantee=6`;
    const response = await fetch(url);
    const data = await response.json();
    let picked = data.fryLetters.join('');
    let newPick = Array.from(picked.toUpperCase());
    setPickedLetters(newPick);
    setFryLetters(newPick.slice(0, 3));
  };

  async function getChefsPick() {
    let url = `${baseurl}/ENABLE2K?topfry=true&letters=${fryLetters.join('')}&count=1`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.answers && jdata.answers.length > 0 ? jdata.answers[0] : '';
  }

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitPlayerWord();
      return;
    }
  };

  const submitPlayerWord = async () => {
    let fixedword = word.toUpperCase().trim(); // Check if they have all the fry letters

    for (let i = 0; i < fryLetters.length; i++) {
      let letterCountRequired = 0;
      let actualLetterCount = 0;

      for (let j = 0; j < fryLetters.length; j++) {
        if (fryLetters[i] === fryLetters[j]) {
          letterCountRequired = letterCountRequired + 1;
        }
      }

      for (let j = 0; j < fixedword.length; j++) {
        if (fryLetters[i] === fixedword[j]) {
          actualLetterCount = actualLetterCount + 1;
        }
      }

      if (actualLetterCount < letterCountRequired) {
        setWarning(`You need the letter ${fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
        return;
      }
    }

    let valid = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isWordValid)(word);

    if (validOnly && !valid) {
      alert(`Sorry, ${fixedword} is not in my word list.`);
      return;
    }

    let move = {
      pass: false,
      word: word,
      valid: valid
    };
    await finishMoveAndMoveOn(move);
  };

  const submitPass = async () => {
    let move = {
      pass: true
    };
    await finishMoveAndMoveOn(move);
  };

  async function finishMoveAndMoveOn(move) {
    let chefsPick = await getChefsPick();
    move.fryLetters = fryLetters;
    move.chefsPick = chefsPick;
    let newmoves = [...moves];
    newmoves.push(move);

    while (newmoves.length > 15) {
      newmoves.splice(0, 1);
    }

    setMoves(newmoves);

    if (fryLetters.length === pickedLetters.length) {
      await pickAllFryLetters();
      setWord('');
      setWarning('New fry letters picked.');
    } else {
      let newFryLetters = pickedLetters.slice(0, fryLetters.length + 1);
      setFryLetters(newFryLetters);
      setWarning('');
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Fry Your Brain Solo", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 104,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trOptionsDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: validOnly ? "checkboxOn" : "checkboxOff",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "data-toggle": "tooltip",
          title: "Whether guess must be valid words",
          onClick: () => {
            setValidOnly(!validOnly);
          }
        }, 'buttonvalidonly', false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["Guesses must be valid words ", validOnly ? 'on' : 'off']
        }, 'labelvalidonly', true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined), moves.length >= 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        border: "1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Fry Letters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 35
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Prepicked fry letters: ", pickedLetters]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, undefined), fryLetters.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Fry Letters:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let shuffleSize = fryLetters.length;
            let beforeShuffle = [...fryLetters];
            let afterShuffle = [];

            while (afterShuffle.length < shuffleSize) {
              let rand = Math.floor(Math.random() * beforeShuffle.length);
              afterShuffle.push(beforeShuffle[rand]);
              beforeShuffle.splice(rand, 1);
            }

            ;
            setFryLetters(afterShuffle);
            setSelected(-1);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let sortwork = [...fryLetters];
            sortwork.sort();
            setFryLetters(sortwork);
            setSelected(-1);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryLetterDiv",
        children: fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: i === selected ? "fybFryLetter Selected" : "fybFryLetter",
          onDoubleClick: () => {
            let moveLetter = fryLetters[i];
            let shiftedLetters = [...fryLetters];
            shiftedLetters.splice(i, 1);
            shiftedLetters.push(moveLetter);
            setFryLetters([...shiftedLetters]);
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
              let moveLetter = fryLetters[selected];

              for (let index = 0; index < fryLetters.length; index++) {
                const element = fryLetters[index];

                if (index === i) {
                  shiftedLetters.push(moveLetter);
                }

                if (index !== selected) {
                  shiftedLetters.push(element);
                }
              }

              setFryLetters(shiftedLetters);
              setSelected(-1);
            }
          },
          children: fl
        }, `SoloFryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Enter word here",
          autoComplete: "off",
          spellCheck: "false",
          name: "word",
          value: word,
          onChange: e => {
            setWord(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "closemebutton",
          onClick: () => {
            setWord('');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPlayerWord();
            },
            children: "SUBMIT"
          }, "submitWord", false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "U2H6lYt+7YJCGpisfOFTwLQqAcw=");

_c = FryYourBrainSolo;
/* harmony default export */ __webpack_exports__["default"] = (FryYourBrainSolo);

var _c;

$RefreshReg$(_c, "FryYourBrainSolo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidmFsaWRPbmx5Iiwic2V0VmFsaWRPbmx5IiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDaGVmc1BpY2siLCJqZGF0YSIsImFuc3dlcnMiLCJsZW5ndGgiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJmaXhlZHdvcmQiLCJ0cmltIiwiaSIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJ2YWxpZCIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1l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Z0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJkZmIzZjUzMTg1NzRiMmY1Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlzV29yZFZhbGlkIH0gZnJvbSBcIi4uLy4uL2xpYi93b3JkZnVuY3Rpb25zXCI7XHJcblxyXG5jb25zdCBGcnlZb3VyQnJhaW5Tb2xvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgW3BpY2tlZExldHRlcnMsIHNldFBpY2tlZExldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBBbGwgcHJlLXBpY2tlZCBmcnkgbGV0dGVycyBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW2ZyeUxldHRlcnMsIHNldEZyeUxldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBGcnkgbGV0dGVycyBzaG93biBhdCBjdXJyZW50IHN0YWdlIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTsgLy8gVXNlZCBmb3IgbGV0dGluZyB0aGUgdXNlciBtb3ZlIGZyeSBsZXR0ZXJzIGFyb3VuZFxyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgnUHJhY3RpY2Ugc2Vzc2lvbi4nKTtcclxuICAgIGNvbnN0IFt2YWxpZE9ubHksIHNldFZhbGlkT25seV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHdoZXRoZXIgZ3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgcGlja0FsbEZyeUxldHRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3ByZXBpY2tmcnk9dHJ1ZSZndWFyYW50ZWU9NmA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IHBpY2tlZCA9IGRhdGEuZnJ5TGV0dGVycy5qb2luKCcnKTtcclxuICAgICAgICBsZXQgbmV3UGljayA9IEFycmF5LmZyb20ocGlja2VkLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgIHNldFBpY2tlZExldHRlcnMobmV3UGljayk7XHJcbiAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdQaWNrLnNsaWNlKDAsMykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDaGVmc1BpY2soKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3RvcGZyeT10cnVlJmxldHRlcnM9JHtmcnlMZXR0ZXJzLmpvaW4oJycpfSZjb3VudD0xYDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpkYXRhLmFuc3dlcnMgJiYgamRhdGEuYW5zd2Vycy5sZW5ndGggPiAwID8gamRhdGEuYW5zd2Vyc1swXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBsYXllcldvcmQgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGV0dGVyQ291bnRSZXF1aXJlZCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IGZyeUxldHRlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7ZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsaWQgPSBhd2FpdCBpc1dvcmRWYWxpZCh3b3JkKTtcclxuICAgICAgICBpZiAodmFsaWRPbmx5ICYmICF2YWxpZCkge1xyXG4gICAgICAgICAgICBhbGVydChgU29ycnksICR7Zml4ZWR3b3JkfSBpcyBub3QgaW4gbXkgd29yZCBsaXN0LmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6ZmFsc2UsIHdvcmQ6IHdvcmQsIHZhbGlkOiB2YWxpZH07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQYXNzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczp0cnVlfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSkge1xyXG4gICAgICAgIGxldCBjaGVmc1BpY2sgPSBhd2FpdCBnZXRDaGVmc1BpY2soKTtcclxuICAgICAgICBtb3ZlLmZyeUxldHRlcnMgPSBmcnlMZXR0ZXJzO1xyXG4gICAgICAgIG1vdmUuY2hlZnNQaWNrID0gY2hlZnNQaWNrO1xyXG4gICAgICAgIGxldCBuZXdtb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICAgICAgbmV3bW92ZXMucHVzaChtb3ZlKTtcclxuICAgICAgICB3aGlsZSAobmV3bW92ZXMubGVuZ3RoID4gMTUpIHtcclxuICAgICAgICAgICAgbmV3bW92ZXMuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1vdmVzKG5ld21vdmVzKTtcclxuICAgICAgICBpZiAoZnJ5TGV0dGVycy5sZW5ndGggPT09IHBpY2tlZExldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKCdOZXcgZnJ5IGxldHRlcnMgcGlja2VkLicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZyeUxldHRlcnMgPSBwaWNrZWRMZXR0ZXJzLnNsaWNlKDAsIGZyeUxldHRlcnMubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgIHNldEZyeUxldHRlcnMobmV3RnJ5TGV0dGVycyk7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW4gU29sb1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyT3B0aW9uc0RpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZhbGlkT25seSA/IFwiY2hlY2tib3hPblwiIDogXCJjaGVja2JveE9mZlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9udmFsaWRvbmx5J1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0VmFsaWRPbmx5KCF2YWxpZE9ubHkpO319XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PSdsYWJlbHZhbGlkb25seSc+R3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzIHt2YWxpZE9ubHkgPyAnb24nIDogJ29mZid9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vdmVzLmxlbmd0aCA+PSAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GcnkgTGV0dGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheSBNYWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN1bHQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoZWZzIFBpY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZXMubWFwKChtLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Bzb2xvbW92ZSR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uZnJ5TGV0dGVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge20ucGFzcyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBBU1M8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiA8PnttLndvcmR9PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIG0ud29yZC5sZW5ndGggPT09IG0uY2hlZnNQaWNrLmxlbmd0aCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U2hvcnRlc3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiBtLndvcmQubGVuZ3RoID4gbS5jaGVmc1BpY2subGVuZ3RoICYmIDw+VmFsaWQ8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmICFtLnZhbGlkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UGhvbmV5PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5jaGVmc1BpY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXY+UHJlcGlja2VkIGZyeSBsZXR0ZXJzOiB7cGlja2VkTGV0dGVyc308L2Rpdj5cclxuICAgICAgICAgICAge2ZyeUxldHRlcnMubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBmcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKGFmdGVyU2h1ZmZsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNvcnR3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BTb2xvRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKFsuLi5zaGlmdGVkTGV0dGVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc2hpZnRlZExldHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V29yZCgnJyk7fX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3MoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHt3YXJuaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJXYXJuaW5nXCI+e3dhcm5pbmd9PC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJ5WW91ckJyYWluU29sbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==