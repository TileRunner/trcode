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
        className: validOnly ? "" : "checkbox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: validOnly ? 'checkboxOn' : 'trOptionsCheckboxOff',
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
          lineNumber: 114,
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
              lineNumber: 121,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 35
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Prepicked fry letters: ", pickedLetters]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
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
            lineNumber: 161,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
            lineNumber: 169,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
          lineNumber: 174,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 211,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "closemebutton",
          onClick: () => {
            setWord('');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
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
            lineNumber: 222,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidmFsaWRPbmx5Iiwic2V0VmFsaWRPbmx5IiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDaGVmc1BpY2siLCJqZGF0YSIsImFuc3dlcnMiLCJsZW5ndGgiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJmaXhlZHdvcmQiLCJ0cmltIiwiaSIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJ2YWxpZCIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1l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QTBJSCxDQXpPRDs7R0FBTWQsZ0I7O0tBQUFBLGdCO0FBMk9OLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMDVhZGY3MWY4YmZmYmIzODI2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaXNXb3JkVmFsaWQgfSBmcm9tIFwiLi4vLi4vbGliL3dvcmRmdW5jdGlvbnNcIjtcclxuXHJcbmNvbnN0IEZyeVlvdXJCcmFpblNvbG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBbcGlja2VkTGV0dGVycywgc2V0UGlja2VkTGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEFsbCBwcmUtcGlja2VkIGZyeSBsZXR0ZXJzIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbZnJ5TGV0dGVycywgc2V0RnJ5TGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEZyeSBsZXR0ZXJzIHNob3duIGF0IGN1cnJlbnQgc3RhZ2UgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpOyAvLyBVc2VkIGZvciBsZXR0aW5nIHRoZSB1c2VyIG1vdmUgZnJ5IGxldHRlcnMgYXJvdW5kXHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCdQcmFjdGljZSBzZXNzaW9uLicpO1xyXG4gICAgY29uc3QgW3ZhbGlkT25seSwgc2V0VmFsaWRPbmx5XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gd2hldGhlciBndWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHNcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBwaWNrQWxsRnJ5TGV0dGVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/cHJlcGlja2ZyeT10cnVlJmd1YXJhbnRlZT02YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBsZXQgcGlja2VkID0gZGF0YS5mcnlMZXR0ZXJzLmpvaW4oJycpO1xyXG4gICAgICAgIGxldCBuZXdQaWNrID0gQXJyYXkuZnJvbShwaWNrZWQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgc2V0UGlja2VkTGV0dGVycyhuZXdQaWNrKTtcclxuICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld1BpY2suc2xpY2UoMCwzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENoZWZzUGljaygpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dG9wZnJ5PXRydWUmbGV0dGVycz0ke2ZyeUxldHRlcnMuam9pbignJyl9JmNvdW50PTFgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuYW5zd2VycyAmJiBqZGF0YS5hbnN3ZXJzLmxlbmd0aCA+IDAgPyBqZGF0YS5hbnN3ZXJzWzBdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGxheWVyV29yZCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXhlZHdvcmQgPSB3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXkgaGF2ZSBhbGwgdGhlIGZyeSBsZXR0ZXJzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICAgICAgbGV0IGFjdHVhbExldHRlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlckNvdW50UmVxdWlyZWQgPSBsZXR0ZXJDb3VudFJlcXVpcmVkICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpeGVkd29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtmcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWxpZCA9IGF3YWl0IGlzV29yZFZhbGlkKHdvcmQpO1xyXG4gICAgICAgIGlmICh2YWxpZE9ubHkgJiYgIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBTb3JyeSwgJHtmaXhlZHdvcmR9IGlzIG5vdCBpbiBteSB3b3JkIGxpc3QuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczpmYWxzZSwgd29yZDogd29yZCwgdmFsaWQ6IHZhbGlkfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBhc3MgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOnRydWV9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKSB7XHJcbiAgICAgICAgbGV0IGNoZWZzUGljayA9IGF3YWl0IGdldENoZWZzUGljaygpO1xyXG4gICAgICAgIG1vdmUuZnJ5TGV0dGVycyA9IGZyeUxldHRlcnM7XHJcbiAgICAgICAgbW92ZS5jaGVmc1BpY2sgPSBjaGVmc1BpY2s7XHJcbiAgICAgICAgbGV0IG5ld21vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgICAgICBuZXdtb3Zlcy5wdXNoKG1vdmUpO1xyXG4gICAgICAgIHdoaWxlIChuZXdtb3Zlcy5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICBuZXdtb3Zlcy5zcGxpY2UoMCwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TW92ZXMobmV3bW92ZXMpO1xyXG4gICAgICAgIGlmIChmcnlMZXR0ZXJzLmxlbmd0aCA9PT0gcGlja2VkTGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYXdhaXQgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoJ05ldyBmcnkgbGV0dGVycyBwaWNrZWQuJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmV3RnJ5TGV0dGVycyA9IHBpY2tlZExldHRlcnMuc2xpY2UoMCwgZnJ5TGV0dGVycy5sZW5ndGggKyAxKTtcclxuICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdGcnlMZXR0ZXJzKTtcclxuICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpbiBTb2xvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJPcHRpb25zRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gXCJcIiA6IFwiY2hlY2tib3hcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbnZhbGlkb25seSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbGlkT25seSA/ICdjaGVja2JveE9uJyA6ICd0ck9wdGlvbnNDaGVja2JveE9mZid9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJXaGV0aGVyIGd1ZXNzIG11c3QgYmUgdmFsaWQgd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRWYWxpZE9ubHkoIXZhbGlkT25seSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9J2xhYmVsdmFsaWRvbmx5Jz5HdWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHMge3ZhbGlkT25seSA/ICdvbicgOiAnb2ZmJ308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bW92ZXMubGVuZ3RoID49IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCIgYm9yZGVyPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZyeSBMZXR0ZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5IE1hZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3VsdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hlZnMgUGljazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3Zlcy5tYXAoKG0saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHNvbG9tb3ZlJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5mcnlMZXR0ZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5wYXNzICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UEFTUzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIDw+e20ud29yZH08Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIG0udmFsaWQgJiYgbS53b3JkLmxlbmd0aCA9PT0gbS5jaGVmc1BpY2subGVuZ3RoICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5TaG9ydGVzdCE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIG0ud29yZC5sZW5ndGggPiBtLmNoZWZzUGljay5sZW5ndGggJiYgPD5WYWxpZDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgIW0udmFsaWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QaG9uZXk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmNoZWZzUGlja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdj5QcmVwaWNrZWQgZnJ5IGxldHRlcnM6IHtwaWNrZWRMZXR0ZXJzfTwvZGl2PlxyXG4gICAgICAgICAgICB7ZnJ5TGV0dGVycy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+RnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaHVmZmxlU2l6ZSA9IGZyeUxldHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU2h1ZmZsZSA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU2h1ZmZsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYWZ0ZXJTaHVmZmxlLmxlbmd0aCA8IHNodWZmbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlZm9yZVNodWZmbGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2h1ZmZsZS5wdXNoKGJlZm9yZVNodWZmbGVbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2h1ZmZsZS5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoYWZ0ZXJTaHVmZmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc29ydHdvcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZnJ5TGV0dGVycy5tYXAoKGZsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YFNvbG9GcnlMZXR0ZXIke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gc2VsZWN0ZWQgPyBcImZ5YkZyeUxldHRlciBTZWxlY3RlZFwiIDogXCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoWy4uLnNoaWZ0ZWRMZXR0ZXJzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzaGlmdGVkTGV0dGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdvcmQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VtZWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkKCcnKTt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcnlZb3VyQnJhaW5Tb2xvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9