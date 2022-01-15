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
    alert(url);
    const response = await fetch(url + word.toLowerCase());
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
    setMoves(newmoves);

    if (fryLetters.length === pickedLetters.length) {
      await pickAllFryLetters();
    } else {
      let newFryLetters = pickedLetters.slice(0, fryLetters.length + 1);
      setFryLetters(newFryLetters);
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
          lineNumber: 79,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
              lineNumber: 86,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined), m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "PASS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 44
            }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 45
            }, undefined), !m.pass && m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Valid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 56
            }, undefined), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "Phoney"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 57
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
            lineNumber: 120,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
            lineNumber: 128,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
          lineNumber: 133,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 170,
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
            lineNumber: 179,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 39
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "K9hlfUbgHrcBE3ZqV0gyWVuX0cs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInVzZUVmZmVjdCIsInBpY2tBbGxGcnlMZXR0ZXJzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGlja2VkIiwiam9pbiIsIm5ld1BpY2siLCJBcnJheSIsImZyb20iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaXNXb3JkVmFsaWQiLCJ0b0xvd2VyQ2FzZSIsImpkYXRhIiwiZXhpc3RzIiwiZ2V0Q2hlZnNQaWNrIiwiYWxlcnQiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJpIiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiaW5kZXgiLCJlbGVtZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGdC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RDlDO0FBRUksY0FBSSxFQUFDLE1BRlQ7QUFHSSxlQUFLLEVBQUU1QixJQUhYO0FBSUksa0JBQVEsRUFBRzRELENBQUQsSUFBTztBQUNiM0QsbUJBQU8sQ0FBQzJELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDSDtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFTSTtBQUFBLHFCQUNLOUQsSUFBSSxDQUFDa0IsV0FBTCxHQUFtQjZDLElBQW5CLEdBQTBCQyxLQUExQixDQUFnQyxhQUFoQyxrQkFDRztBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFDSSxtQkFBTyxFQUFFLE1BQU07QUFBQ2hDLDhCQUFnQjtBQUFHLGFBRHZDO0FBQUE7QUFBQSxhQUFpQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSLGVBT0k7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQ0ksbUJBQU8sRUFBRSxNQUFNO0FBQUNLLHdCQUFVO0FBQUcsYUFEakM7QUFBQTtBQUFBLGFBQWlDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5RHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBdUhILENBOUxEOztHQUFNN0MsZ0I7O0tBQUFBLGdCO0FBZ01OLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NzY4MjFhZDdmNTk3ZTg0YTM5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZyeVlvdXJCcmFpblNvbG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBbcGlja2VkTGV0dGVycywgc2V0UGlja2VkTGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEFsbCBwcmUtcGlja2VkIGZyeSBsZXR0ZXJzIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbZnJ5TGV0dGVycywgc2V0RnJ5TGV0dGVyc10gPSB1c2VTdGF0ZShbXSk7IC8vIEZyeSBsZXR0ZXJzIHNob3duIGF0IGN1cnJlbnQgc3RhZ2UgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpOyAvLyBVc2VkIGZvciBsZXR0aW5nIHRoZSB1c2VyIG1vdmUgZnJ5IGxldHRlcnMgYXJvdW5kXHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBwaWNrQWxsRnJ5TGV0dGVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/cHJlcGlja2ZyeT10cnVlJmd1YXJhbnRlZT02YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBsZXQgcGlja2VkID0gZGF0YS5mcnlMZXR0ZXJzLmpvaW4oJycpO1xyXG4gICAgICAgIGxldCBuZXdQaWNrID0gQXJyYXkuZnJvbShwaWNrZWQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgc2V0UGlja2VkTGV0dGVycyhuZXdQaWNrKTtcclxuICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld1BpY2suc2xpY2UoMCwzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9leGlzdHM9JHt3b3JkLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpkYXRhLmV4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDaGVmc1BpY2soKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3RvcGZyeT10cnVlJmxldHRlcnM9JHtmcnlMZXR0ZXJzLmpvaW4oJycpfSZjb3VudD0xYDtcclxuICAgICAgICBhbGVydCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgd29yZC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuYW5zd2VycyAmJiBqZGF0YS5hbnN3ZXJzLmxlbmd0aCA+IDAgPyBqZGF0YS5hbnN3ZXJzWzBdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGxheWVyV29yZCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCB2YWxpZCA9IGF3YWl0IGlzV29yZFZhbGlkKCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczpmYWxzZSwgd29yZDogd29yZCwgdmFsaWQ6IHZhbGlkfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBhc3MgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOnRydWV9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKSB7XHJcbiAgICAgICAgbGV0IGNoZWZzUGljayA9IGF3YWl0IGdldENoZWZzUGljaygpO1xyXG4gICAgICAgIG1vdmUuZnJ5TGV0dGVycyA9IGZyeUxldHRlcnM7XHJcbiAgICAgICAgbW92ZS5jaGVmc1BpY2sgPSBjaGVmc1BpY2s7XHJcbiAgICAgICAgbGV0IG5ld21vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgICAgICBuZXdtb3Zlcy5wdXNoKG1vdmUpO1xyXG4gICAgICAgIHNldE1vdmVzKG5ld21vdmVzKTtcclxuICAgICAgICBpZiAoZnJ5TGV0dGVycy5sZW5ndGggPT09IHBpY2tlZExldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZyeUxldHRlcnMgPSBwaWNrZWRMZXR0ZXJzLnNsaWNlKDAsIGZyeUxldHRlcnMubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgIHNldEZyeUxldHRlcnMobmV3RnJ5TGV0dGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpbiBTb2xvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3Zlcy5sZW5ndGggPj0gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RnJ5IExldHRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXkgTWFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzdWx0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaGVmcyBQaWNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmVzLm1hcCgobSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgc29sb21vdmUke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmZyeUxldHRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5wYXNzICYmIDx0ZCBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBBU1M8L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiA8dGQ+e20ud29yZH08L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIDx0ZD5WYWxpZDwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmICFtLnZhbGlkICYmIDx0ZCBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBob25leTwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5jaGVmc1BpY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtmcnlMZXR0ZXJzLmxlbmd0aCA+IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhhZnRlclNodWZmbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29ydHdvcmsgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnR3b3JrLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzb3J0d29yayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5zb3J0X2J5X2FscGhhPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUxldHRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcnlMZXR0ZXJzLm1hcCgoZmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgU29sb0ZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCIgOiBcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhbLi4uc2hpZnRlZExldHRlcnNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNoaWZ0ZWRMZXR0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3MoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcnlZb3VyQnJhaW5Tb2xvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9