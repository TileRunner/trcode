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
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
              lineNumber: 132,
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
            lineNumber: 152,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
            lineNumber: 160,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
          lineNumber: 165,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
          lineNumber: 202,
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
            lineNumber: 211,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpc1dvcmRWYWxpZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJnZXRDaGVmc1BpY2siLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwiZml4ZWR3b3JkIiwidHJpbSIsImkiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1lbnQiLCJlIiwidGFy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RUFBRSxNQUFNO0FBQUNXLHdCQUFVO0FBQUcsYUFEakM7QUFBQTtBQUFBLGFBQWlDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5RHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQzlCLEVBeUhLdEMsT0FBTyxpQkFBSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2SEgsQ0EvTkQ7O0dBQU1kLGdCOztLQUFBQSxnQjtBQWlPTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDAyOGIzYzViODIwZjZmODNiYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGcnlZb3VyQnJhaW5Tb2xvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgW3BpY2tlZExldHRlcnMsIHNldFBpY2tlZExldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBBbGwgcHJlLXBpY2tlZCBmcnkgbGV0dGVycyBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW2ZyeUxldHRlcnMsIHNldEZyeUxldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBGcnkgbGV0dGVycyBzaG93biBhdCBjdXJyZW50IHN0YWdlIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTsgLy8gVXNlZCBmb3IgbGV0dGluZyB0aGUgdXNlciBtb3ZlIGZyeSBsZXR0ZXJzIGFyb3VuZFxyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgnUHJhY3RpY2Ugc2Vzc2lvbi4nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBwaWNrQWxsRnJ5TGV0dGVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/cHJlcGlja2ZyeT10cnVlJmd1YXJhbnRlZT02YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBsZXQgcGlja2VkID0gZGF0YS5mcnlMZXR0ZXJzLmpvaW4oJycpO1xyXG4gICAgICAgIGxldCBuZXdQaWNrID0gQXJyYXkuZnJvbShwaWNrZWQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgc2V0UGlja2VkTGV0dGVycyhuZXdQaWNrKTtcclxuICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld1BpY2suc2xpY2UoMCwzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9leGlzdHM9JHt3b3JkLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpkYXRhLmV4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDaGVmc1BpY2soKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3RvcGZyeT10cnVlJmxldHRlcnM9JHtmcnlMZXR0ZXJzLmpvaW4oJycpfSZjb3VudD0xYDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpkYXRhLmFuc3dlcnMgJiYgamRhdGEuYW5zd2Vycy5sZW5ndGggPiAwID8gamRhdGEuYW5zd2Vyc1swXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBsYXllcldvcmQgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgICAgIC8vVE9ETzogU2VlIGlmIHlvdSBjYW4gdXNlIGEgcm91dGluZSBzaGFyZWQgYnkgc2VydmVyIGFuZCBmcm9udCBlbmRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZml4ZWR3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IG5lZWQgdGhlIGxldHRlciAke2ZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQoKTtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOmZhbHNlLCB3b3JkOiB3b3JkLCB2YWxpZDogdmFsaWR9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGFzcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6dHJ1ZX07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpIHtcclxuICAgICAgICBsZXQgY2hlZnNQaWNrID0gYXdhaXQgZ2V0Q2hlZnNQaWNrKCk7XHJcbiAgICAgICAgbW92ZS5mcnlMZXR0ZXJzID0gZnJ5TGV0dGVycztcclxuICAgICAgICBtb3ZlLmNoZWZzUGljayA9IGNoZWZzUGljaztcclxuICAgICAgICBsZXQgbmV3bW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICAgIG5ld21vdmVzLnB1c2gobW92ZSk7XHJcbiAgICAgICAgd2hpbGUgKG5ld21vdmVzLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgIG5ld21vdmVzLnNwbGljZSgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNb3ZlcyhuZXdtb3Zlcyk7XHJcbiAgICAgICAgaWYgKGZyeUxldHRlcnMubGVuZ3RoID09PSBwaWNrZWRMZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhd2FpdCBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0V2FybmluZygnTmV3IGZyeSBsZXR0ZXJzIHBpY2tlZC4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGcnlMZXR0ZXJzID0gcGlja2VkTGV0dGVycy5zbGljZSgwLCBmcnlMZXR0ZXJzLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld0ZyeUxldHRlcnMpO1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEZyeSBZb3VyIEJyYWluIFNvbG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vdmVzLmxlbmd0aCA+PSAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GcnkgTGV0dGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheSBNYWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN1bHQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoZWZzIFBpY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZXMubWFwKChtLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Bzb2xvbW92ZSR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uZnJ5TGV0dGVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge20ucGFzcyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBBU1M8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiA8PnttLndvcmR9PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIG0ud29yZC5sZW5ndGggPT09IG0uY2hlZnNQaWNrLmxlbmd0aCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U2hvcnRlc3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiBtLndvcmQubGVuZ3RoID4gbS5jaGVmc1BpY2sgJiYgPD5WYWxpZDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgIW0udmFsaWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QaG9uZXk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmNoZWZzUGlja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge2ZyeUxldHRlcnMubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBmcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKGFmdGVyU2h1ZmZsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNvcnR3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BTb2xvRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKFsuLi5zaGlmdGVkTGV0dGVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc2hpZnRlZExldHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcnlZb3VyQnJhaW5Tb2xvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9