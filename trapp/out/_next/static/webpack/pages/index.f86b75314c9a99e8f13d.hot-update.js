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

  async function isWordValid() {
    let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.exists;
  }

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
    //TODO: See if you can use a routine shared by server and front end

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

    let valid = await isWordValid();
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
          lineNumber: 106,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
              lineNumber: 113,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
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
            lineNumber: 151,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
            lineNumber: 159,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
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
          lineNumber: 164,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
          lineNumber: 201,
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
            lineNumber: 210,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "yn7DA+fTEdohdLT7Tcf6NAcX1U8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpc1dvcmRWYWxpZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJnZXRDaGVmc1BpY2siLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwiZml4ZWR3b3JkIiwidHJpbSIsImkiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1lbnQiLCJlIiwidGFy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O0FBQUEsaUJBeEhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTRISCxDQTlORDs7R0FBTWQsZ0I7O0tBQUFBLGdCO0FBZ09OLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODZiNzUzMTRjOWE5OWU4ZjEzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZyeVlvdXJCcmFpblNvbG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBbcGlja2VkTGV0dGVycywgc2V0UGlja2VkTGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEFsbCBwcmUtcGlja2VkIGZyeSBsZXR0ZXJzIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbZnJ5TGV0dGVycywgc2V0RnJ5TGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEZyeSBsZXR0ZXJzIHNob3duIGF0IGN1cnJlbnQgc3RhZ2UgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpOyAvLyBVc2VkIGZvciBsZXR0aW5nIHRoZSB1c2VyIG1vdmUgZnJ5IGxldHRlcnMgYXJvdW5kXHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCdQcmFjdGljZSBzZXNzaW9uLicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHBpY2tBbGxGcnlMZXR0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9wcmVwaWNrZnJ5PXRydWUmZ3VhcmFudGVlPTZgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBwaWNrZWQgPSBkYXRhLmZyeUxldHRlcnMuam9pbignJyk7XHJcbiAgICAgICAgbGV0IG5ld1BpY2sgPSBBcnJheS5mcm9tKHBpY2tlZC50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICBzZXRQaWNrZWRMZXR0ZXJzKG5ld1BpY2spO1xyXG4gICAgICAgIHNldEZyeUxldHRlcnMobmV3UGljay5zbGljZSgwLDMpKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaXNXb3JkVmFsaWQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP2V4aXN0cz0ke3dvcmQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENoZWZzUGljaygpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dG9wZnJ5PXRydWUmbGV0dGVycz0ke2ZyeUxldHRlcnMuam9pbignJyl9JmNvdW50PTFgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuYW5zd2VycyAmJiBqZGF0YS5hbnN3ZXJzLmxlbmd0aCA+IDAgPyBqZGF0YS5hbnN3ZXJzWzBdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGxheWVyV29yZCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXhlZHdvcmQgPSB3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXkgaGF2ZSBhbGwgdGhlIGZyeSBsZXR0ZXJzXHJcbiAgICAgICAgLy9UT0RPOiBTZWUgaWYgeW91IGNhbiB1c2UgYSByb3V0aW5lIHNoYXJlZCBieSBzZXJ2ZXIgYW5kIGZyb250IGVuZFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGV0dGVyQ291bnRSZXF1aXJlZCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IGZyeUxldHRlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7ZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsaWQgPSBhd2FpdCBpc1dvcmRWYWxpZCgpO1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6ZmFsc2UsIHdvcmQ6IHdvcmQsIHZhbGlkOiB2YWxpZH07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQYXNzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczp0cnVlfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSkge1xyXG4gICAgICAgIGxldCBjaGVmc1BpY2sgPSBhd2FpdCBnZXRDaGVmc1BpY2soKTtcclxuICAgICAgICBtb3ZlLmZyeUxldHRlcnMgPSBmcnlMZXR0ZXJzO1xyXG4gICAgICAgIG1vdmUuY2hlZnNQaWNrID0gY2hlZnNQaWNrO1xyXG4gICAgICAgIGxldCBuZXdtb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICAgICAgbmV3bW92ZXMucHVzaChtb3ZlKTtcclxuICAgICAgICB3aGlsZSAobmV3bW92ZXMubGVuZ3RoID4gMTUpIHtcclxuICAgICAgICAgICAgbmV3bW92ZXMuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1vdmVzKG5ld21vdmVzKTtcclxuICAgICAgICBpZiAoZnJ5TGV0dGVycy5sZW5ndGggPT09IHBpY2tlZExldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKCdOZXcgZnJ5IGxldHRlcnMgcGlja2VkLicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZyeUxldHRlcnMgPSBwaWNrZWRMZXR0ZXJzLnNsaWNlKDAsIGZyeUxldHRlcnMubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgIHNldEZyeUxldHRlcnMobmV3RnJ5TGV0dGVycyk7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW4gU29sb1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bW92ZXMubGVuZ3RoID49IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCIgYm9yZGVyPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZyeSBMZXR0ZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5IE1hZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3VsdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hlZnMgUGljazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3Zlcy5tYXAoKG0saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHNvbG9tb3ZlJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5mcnlMZXR0ZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5wYXNzICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UEFTUzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIDw+e20ud29yZH08Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIG0udmFsaWQgJiYgPD5WYWxpZDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgIW0udmFsaWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QaG9uZXk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmNoZWZzUGlja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge2ZyeUxldHRlcnMubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBmcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKGFmdGVyU2h1ZmZsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNvcnR3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BTb2xvRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKFsuLi5zaGlmdGVkTGV0dGVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc2hpZnRlZExldHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcnlZb3VyQnJhaW5Tb2xvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9