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
    const response = await fetch(url + word.toLowerCase());
    const jdata = await response.json();
    alert(jdata.answers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInVzZUVmZmVjdCIsInBpY2tBbGxGcnlMZXR0ZXJzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGlja2VkIiwiam9pbiIsIm5ld1BpY2siLCJBcnJheSIsImZyb20iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaXNXb3JkVmFsaWQiLCJ0b0xvd2VyQ2FzZSIsImpkYXRhIiwiZXhpc3RzIiwiZ2V0Q2hlZnNQaWNrIiwiYWxlcnQiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJpIiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiaW5kZXgiLCJlbGVtZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGdC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QVUsRUFBQyxPQUQ5QztBQUVJLGNBQUksRUFBQyxNQUZUO0FBR0ksZUFBSyxFQUFFNUIsSUFIWDtBQUlJLGtCQUFRLEVBQUc0RCxDQUFELElBQU87QUFDYjNELG1CQUFPLENBQUMyRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBU0k7QUFBQSxxQkFDSzlELElBQUksQ0FBQ2tCLFdBQUwsR0FBbUI2QyxJQUFuQixHQUEwQkMsS0FBMUIsQ0FBZ0MsYUFBaEMsa0JBQ0c7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQ0ksbUJBQU8sRUFBRSxNQUFNO0FBQUNoQyw4QkFBZ0I7QUFBRyxhQUR2QztBQUFBO0FBQUEsYUFBaUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGUixlQU9JO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUNJLG1CQUFPLEVBQUUsTUFBTTtBQUFDSyx3QkFBVTtBQUFHLGFBRGpDO0FBQUE7QUFBQSxhQUFpQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOURzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0I5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVISCxDQTlMRDs7R0FBTTdDLGdCOztLQUFBQSxnQjtBQWdNTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjIxZWQzY2UyYWQzM2RmZGQzYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGcnlZb3VyQnJhaW5Tb2xvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgW3BpY2tlZExldHRlcnMsIHNldFBpY2tlZExldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBBbGwgcHJlLXBpY2tlZCBmcnkgbGV0dGVycyBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW2ZyeUxldHRlcnMsIHNldEZyeUxldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBGcnkgbGV0dGVycyBzaG93biBhdCBjdXJyZW50IHN0YWdlIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTsgLy8gVXNlZCBmb3IgbGV0dGluZyB0aGUgdXNlciBtb3ZlIGZyeSBsZXR0ZXJzIGFyb3VuZFxyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgcGlja0FsbEZyeUxldHRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3ByZXBpY2tmcnk9dHJ1ZSZndWFyYW50ZWU9NmA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IHBpY2tlZCA9IGRhdGEuZnJ5TGV0dGVycy5qb2luKCcnKTtcclxuICAgICAgICBsZXQgbmV3UGljayA9IEFycmF5LmZyb20ocGlja2VkLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgIHNldFBpY2tlZExldHRlcnMobmV3UGljayk7XHJcbiAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdQaWNrLnNsaWNlKDAsMykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpc1dvcmRWYWxpZCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hlZnNQaWNrKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90b3Bmcnk9dHJ1ZSZsZXR0ZXJzPSR7ZnJ5TGV0dGVycy5qb2luKCcnKX0mY291bnQ9MWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB3b3JkLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGFsZXJ0KGpkYXRhLmFuc3dlcnMpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5hbnN3ZXJzICYmIGpkYXRhLmFuc3dlcnMubGVuZ3RoID4gMCA/IGpkYXRhLmFuc3dlcnNbMF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQbGF5ZXJXb3JkID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQoKTtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOmZhbHNlLCB3b3JkOiB3b3JkLCB2YWxpZDogdmFsaWR9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGFzcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6dHJ1ZX07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpIHtcclxuICAgICAgICBsZXQgY2hlZnNQaWNrID0gYXdhaXQgZ2V0Q2hlZnNQaWNrKCk7XHJcbiAgICAgICAgbW92ZS5mcnlMZXR0ZXJzID0gZnJ5TGV0dGVycztcclxuICAgICAgICBtb3ZlLmNoZWZzUGljayA9IGNoZWZzUGljaztcclxuICAgICAgICBsZXQgbmV3bW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICAgIG5ld21vdmVzLnB1c2gobW92ZSk7XHJcbiAgICAgICAgc2V0TW92ZXMobmV3bW92ZXMpO1xyXG4gICAgICAgIGlmIChmcnlMZXR0ZXJzLmxlbmd0aCA9PT0gcGlja2VkTGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYXdhaXQgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmV3RnJ5TGV0dGVycyA9IHBpY2tlZExldHRlcnMuc2xpY2UoMCwgZnJ5TGV0dGVycy5sZW5ndGggKyAxKTtcclxuICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdGcnlMZXR0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEZyeSBZb3VyIEJyYWluIFNvbG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vdmVzLmxlbmd0aCA+PSAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GcnkgTGV0dGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheSBNYWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN1bHQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoZWZzIFBpY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZXMubWFwKChtLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Bzb2xvbW92ZSR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uZnJ5TGV0dGVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnBhc3MgJiYgPHRkIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UEFTUzwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIDx0ZD57bS53b3JkfTwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIG0udmFsaWQgJiYgPHRkPlZhbGlkPC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgIW0udmFsaWQgJiYgPHRkIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UGhvbmV5PC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmNoZWZzUGlja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge2ZyeUxldHRlcnMubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBmcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKGFmdGVyU2h1ZmZsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNvcnR3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BTb2xvRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKFsuLi5zaGlmdGVkTGV0dGVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc2hpZnRlZExldHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyeVlvdXJCcmFpblNvbG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=