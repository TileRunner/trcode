self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/morpho/morpho.js":
/*!********************************!*\
  !*** ./pages/morpho/morpho.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\morpho\\morpho.js",
    _s = $RefreshSig$();





const Morpho = ({
  setWhereto
}) => {
  _s();

  const {
    0: starting,
    1: setStarting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: numRows,
    1: setNumRows
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);
  const {
    0: numCols,
    1: setNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const {
    0: nextNumCols,
    1: setNextNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const baseurl =  true ? 'http://localhost:5000' : 0;
  const cssPresetLetter = "morphoCellStatic";
  const cssNoLetter = "morphoCellNoLetter";
  const cssSelectedCell = " morphoCellSelected";
  const cssLarva = "morphoCellLarva";
  const cssCocoon = "morphoCellCocoon";
  const cssButterfly = "morphoCellButterfly";
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: checking,
    1: setChecking
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Set when checking solution to prevent further alterations

  const {
    0: filledin,
    1: setFilledin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showSolution,
    1: setShowSolution
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: puzzleSolved,
    1: setPuzzleSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: firstWord,
    1: setFirstWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: lastWord,
    1: setLastWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: board,
    1: setBoard
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    row: 1,
    col: 0
  }); // Natural place to start entering letters

  const callForPuzzle = async wordLength => {
    let data = {};

    try {
      let url = `${baseurl}/ENABLE2K?morpho=true&len=${wordLength}`;
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      data.notes = "Problem with the server. Sorry about that.";
      console.log(error);
    }

    return data;
  };

  const setInitialBoard = async wordLength => {
    // Initial board of given size
    let numberOfRows = wordLength + 1;
    let numberOfCols = wordLength;
    setStarting(false);
    setLoading(true);
    setChecking(false);
    setShowSolution(false);
    setFilledin(false);
    setPuzzleSolved(false);
    setNumCols(wordLength);
    setNumRows(wordLength + 1);
    let rowArray = [];
    const data = await callForPuzzle(wordLength);

    if (!data.notes || data.notes.length === 0) {
      // Ok result
      for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const rowWord = data.puzzle[rowIndex].toUpperCase();

        if (rowIndex === 0) {
          setFirstWord(rowWord);
        } else if (rowIndex === numberOfRows - 1) {
          setLastWord(rowWord);
        }

        const rowLetters = [...Array.from(rowWord)];
        let rowFilledIn = rowIndex === 0 || rowIndex === numberOfRows - 1;
        let colArray = [];

        for (let colIndex = 0; colIndex < numberOfCols; colIndex++) {
          let cell = {
            letter: '?',
            solution: rowLetters[colIndex],
            className: '?'
          };

          if (rowIndex === 0 || rowIndex === numberOfRows - 1) {
            cell.letter = rowLetters[colIndex];
            cell.className = cssPresetLetter;
          } else {
            cell.letter = '?';
            cell.className = cssNoLetter;
          }

          colArray.push(cell);
        }

        rowArray.push({
          filledin: rowFilledIn,
          colArray: colArray
        });
      }

      setBoard(rowArray);
      setSelected({
        row: 1,
        col: 0
      });
      setLoading(false);
    } else {
      alert(`Problem generating puzzle: ${data.notes}\nBest to click Home then rechoose Morpho.`);
    }
  };

  const handleSelection = (rowIndex, colIndex) => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    if (colIndex < 0 || colIndex >= numCols) {
      return;
    }

    if (rowIndex === numRows - 1 && selected.row > 0 && selected.row < numRows - 1) {
      // If they click on a bottom row tile then copy it up and copy down the rest of the row
      let newBoard = JSON.parse(JSON.stringify(board));

      for (let ci = 0; ci < numCols; ci++) {
        if (ci === colIndex) {
          // This is the column they clicked on
          newBoard[selected.row].colArray[ci].letter = newBoard[numRows - 1].colArray[ci].letter;
        } else {
          newBoard[selected.row].colArray[ci].letter = newBoard[selected.row - 1].colArray[ci].letter;
        }

        newBoard[selected.row].colArray[ci].className = cssCocoon;
      }

      newBoard[selected.row].filledin = true;
      let newSelected = {
        row: selected.row + 1,
        col: 0
      };

      if (newSelected.row >= numRows - 1) {
        newSelected.row = 1;
      }

      setSelected(newSelected);
      setBoard(newBoard);

      if (newBoard.filter(r => {
        return !r.filledin;
      }).length === 0) {
        // All letters are filled in
        setFilledin(true);
      }

      return;
    }

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    setSelected({
      row: rowIndex,
      col: colIndex
    });
  };

  const handleKeyDown = event => {
    if (event.key === "F12") {
      return;
    }

    event.preventDefault();

    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    handleInputLetter(event.key);
  };

  const copyDownLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[rowIndex - 1].colArray[colIndex].letter);
  };

  const copyUpLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[numRows - 1].colArray[colIndex].letter);
  };

  const handleInputLetter = letter => {
    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    if (filledin && letter === "Enter") {
      checkSolution();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    let moveDirection = "r"; // Default

    if (letter === "Backspace") {
      letter = "?";
      moveDirection = "l";
    }

    if (letter === "Delete") {
      letter = "?";
      moveDirection = "";
    }

    if (letter === "ArrowUp") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "u";
    }

    if (letter === "ArrowDown") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "d";
    }

    if (letter === "ArrowLeft") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "l";
    }

    if (letter === "ArrowRight") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "r";
    }

    if (letter.match(lettertest)) {
      letter = letter.toUpperCase();
    } else {
      return;
    }

    if (letter === "") {
      return;
    }

    let rowArray = JSON.parse(JSON.stringify(board));
    rowArray[rowIndex].colArray[colIndex].letter = letter;
    rowArray[rowIndex].filledin = rowArray[rowIndex].colArray.filter(cell => {
      return cell.letter === "?";
    }).length === 0;

    for (let ci = 0; ci < numCols; ci++) {
      if (rowArray[rowIndex].colArray[ci].letter === "?") {
        rowArray[rowIndex].colArray[ci].className = cssNoLetter;
      } else {
        rowArray[rowIndex].colArray[ci].className = rowArray[rowIndex].filledin ? cssCocoon : cssLarva;
      }
    }

    if (moveDirection === "u") {
      moveUp();
    }

    if (moveDirection === "d") {
      moveDown();
    }

    if (moveDirection === "r") {
      moveRight();
    }

    if (moveDirection === "l") {
      moveLeft();
    }

    if (rowArray.filter(r => {
      return !r.filledin;
    }).length === 0) {
      // All letters are filled in
      setFilledin(true);
    }

    setBoard(rowArray);
  };

  const moveUp = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = numRows - 2;
      newSelected.col = colIndex - 1 > -1 ? colIndex - 1 : numCols - 1;
    }

    setSelected(newSelected);
  };

  const moveDown = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = 1;
      newSelected.col = colIndex + 1 < numCols ? colIndex + 1 : 0;
    }

    setSelected(newSelected);
  };

  const moveRight = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: 1,
      col: 0
    };

    if (colIndex + 1 < numCols) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex + 1;
    } else if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = 0;
    }

    setSelected(newSelected);
  };

  const moveLeft = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: numRows - 2,
      col: numCols - 1
    };

    if (colIndex - 1 > -1) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex - 1;
    } else if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = numCols - 1;
    }

    setSelected(newSelected);
  };

  const toggleShowSolution = () => {
    setShowSolution(!showSolution);
  };

  const checkSolution = async () => {
    setChecking(true);
    let result = true;

    for (let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
      let prevWord = "";
      let currWord = "";

      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        prevWord = prevWord + board[rowIndex - 1].colArray[colIndex].letter;
        currWord = currWord + board[rowIndex].colArray[colIndex].letter;
      }

      if ((0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.countSwaps)(prevWord, currWord) !== 1) {
        alert(`${prevWord} to ${currWord} is not a valid move`);
        result = false;
      }

      if (result && rowIndex !== numRows - 1 && !(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(currWord))) {
        alert(`${currWord} is not valid`);
        result = false;
      }
    }

    setChecking(false);
    setPuzzleSolved(result);
  };

  const promptForPuzzleGeneration = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genMobile", true, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 13
      }, undefined), nextNumCols < 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genBrowser", true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 13
      }, undefined), nextNumCols < 8 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 332,
    columnNumber: 39
  }, undefined);

  const renderThePuzzle = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: puzzleSolved ? `morphoSolvedDiv l${numCols}` : "morphoDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      onKeyDown: e => {
        handleKeyDown(e);
      },
      tabIndex: -1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: board.map((boardRow, rowIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: boardRow.colArray.map((cell, colIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            onClick: () => {
              handleSelection(rowIndex, colIndex);
            },
            className: `col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`,
            children: showSolution ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.solution
            }, `BoardCellS.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, `BoardCellL.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 33
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 25
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 17
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 72
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "morphoKeyboard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyrow4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyDownLetter();
              },
              className: "morphoCopydownKey",
              children: "COPY DOWN"
            }, "keyCopydown", false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyUpLetter();
              },
              className: "morphoCopyupKey",
              children: "COPY UP"
            }, "keyCopyup", false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 21
          }, undefined), !puzzleSolved && filledin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyrow4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              onClick: () => {
                checkSolution();
              },
              children: "SUBMIT YOUR SOLUTION"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 51
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Click a letter on the bottom row to use it as the swap on the selected row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 56
      }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "trEmphasis",
          children: "Success!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 21
        }, undefined), promptForPuzzleGeneration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          toggleShowSolution();
        },
        children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }, undefined)]
  }, "showboard", true, {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 29
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Morpho", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 446,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 13
    }, undefined), starting ? promptForPuzzleGeneration : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, "pleasewait", false, {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 17
    }, undefined) : renderThePuzzle]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 442,
    columnNumber: 9
  }, undefined);
};

_s(Morpho, "q0iOQhHu7IuqBIn9jbwsM6P+eMs=");

_c = Morpho;
/* harmony default export */ __webpack_exports__["default"] = (Morpho);

var _c;

$RefreshReg$(_c, "Morpho");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwic3RhcnRpbmciLCJzZXRTdGFydGluZyIsInVzZVN0YXRlIiwibnVtUm93cyIsInNldE51bVJvd3MiLCJudW1Db2xzIiwic2V0TnVtQ29scyIsIm5leHROdW1Db2xzIiwic2V0TmV4dE51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tpbmciLCJzZXRDaGVja2luZyIsImZpbGxlZGluIiwic2V0RmlsbGVkaW4iLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJwdXp6bGVTb2x2ZWQiLCJzZXRQdXp6bGVTb2x2ZWQiLCJmaXJzdFdvcmQiLCJzZXRGaXJzdFdvcmQiLCJsYXN0V29yZCIsInNldExhc3RXb3JkIiwiYm9hcmQiLCJzZXRCb2FyZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyb3ciLCJjb2wiLCJjYWxsRm9yUHV6emxlIiwid29yZExlbmd0aCIsImRhdGEiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwibm90ZXMiLCJjb25zb2xlIiwibG9nIiwic2V0SW5pdGlhbEJvYXJkIiwibnVtYmVyT2ZSb3dzIiwibnVtYmVyT2ZDb2xzIiwicm93QXJyYXkiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3Rpb24iLCJuZXdCb2FyZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNpIiwibmV3U2VsZWN0ZWQiLCJmaWx0ZXIiLCJyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNvcHlEb3duTGV0dGVyIiwiY29weVVwTGV0dGVyIiwiY2hlY2tTb2x1dGlvbiIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJpc1dvcmRWYWxpZCIsInByb21wdEZvclB1enpsZUdlbmVyYXRpb24iLCJyZW5kZXJUaGVQdXp6bGUiLCJlIiwibWFwIiwiYm9hcmRSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTU8sT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLFdBQVcs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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmYzI1OWUxOWYwZjlkYzFlZTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3IH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgTW9ycGhvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXJ0aW5nLCBzZXRTdGFydGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtudW1Sb3dzLCBzZXROdW1Sb3dzXSA9IHVzZVN0YXRlKDYpO1xyXG4gICAgY29uc3QgW251bUNvbHMsIHNldE51bUNvbHNdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbmV4dE51bUNvbHMsIHNldE5leHROdW1Db2xzXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xhcnZhID0gXCJtb3JwaG9DZWxsTGFydmFcIjtcclxuICAgIGNvbnN0IGNzc0NvY29vbiA9IFwibW9ycGhvQ2VsbENvY29vblwiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsQnV0dGVyZmx5XCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuXHJcbiAgICBjb25zdCBjYWxsRm9yUHV6emxlID0gYXN5bmMod29yZExlbmd0aCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke3dvcmRMZW5ndGh9YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gXCJQcm9ibGVtIHdpdGggdGhlIHNlcnZlci4gU29ycnkgYWJvdXQgdGhhdC5cIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKHdvcmRMZW5ndGgpID0+IHsgLy8gSW5pdGlhbCBib2FyZCBvZiBnaXZlbiBzaXplXHJcbiAgICAgICAgbGV0IG51bWJlck9mUm93cyA9IHdvcmRMZW5ndGggKyAxO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkNvbHMgPSB3b3JkTGVuZ3RoO1xyXG4gICAgICAgIHNldFN0YXJ0aW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE51bUNvbHMod29yZExlbmd0aCk7XHJcbiAgICAgICAgc2V0TnVtUm93cyh3b3JkTGVuZ3RoKzEpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsRm9yUHV6emxlKHdvcmRMZW5ndGgpO1xyXG4gICAgICAgIGlmICghZGF0YS5ub3RlcyB8fCBkYXRhLm5vdGVzLmxlbmd0aCA9PT0gMCkgeyAvLyBPayByZXN1bHRcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IG51bWJlck9mUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtYmVyT2ZSb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1iZXJPZlJvd3MgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtYmVyT2ZDb2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bWJlck9mUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChgUHJvYmxlbSBnZW5lcmF0aW5nIHB1enpsZTogJHtkYXRhLm5vdGVzfVxcbkJlc3QgdG8gY2xpY2sgSG9tZSB0aGVuIHJlY2hvb3NlIE1vcnBoby5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCBjb2xJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSAmJiBzZWxlY3RlZC5yb3cgPiAwICYmIHNlbGVjdGVkLnJvdyA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZXkgY2xpY2sgb24gYSBib3R0b20gcm93IHRpbGUgdGhlbiBjb3B5IGl0IHVwIGFuZCBjb3B5IGRvd24gdGhlIHJlc3Qgb2YgdGhlIHJvd1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9hcmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2kgPT09IGNvbEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgY29sdW1uIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uY29sQXJyYXlbY2ldLmxldHRlciA9IG5ld0JvYXJkW251bVJvd3MtMV0uY29sQXJyYXlbY2ldLmxldHRlcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5jb2xBcnJheVtjaV0ubGV0dGVyID0gbmV3Qm9hcmRbc2VsZWN0ZWQucm93IC0gMV0uY29sQXJyYXlbY2ldLmxldHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc0NvY29vbjsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmZpbGxlZGluID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzogc2VsZWN0ZWQucm93ICsgMSwgY29sOiAwfTtcclxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGVkLnJvdyA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgaWYgKG5ld0JvYXJkLmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29weURvd25MZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY29weVVwTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoYm9hcmRbbnVtUm93cy0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGxlZGluICYmIGxldHRlciA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrU29sdXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBcInJcIjsgLy8gRGVmYXVsdFxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJ1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NDb2Nvb24gOiBjc3NMYXJ2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcclxuICAgICAgICAgICAgbW92ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBtb3ZlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImxcIikge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93QXJyYXkuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVVcCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IG51bVJvd3MgLSAyO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDEgPiAtMSA/IGNvbEluZGV4IC0gMSA6IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZURvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxIDwgbnVtQ29scyA/IGNvbEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCArIDEgPCBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudFN3YXBzKHByZXZXb3JkLCBjdXJyV29yZCkgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ByZXZXb3JkfSB0byAke2N1cnJXb3JkfSBpcyBub3QgYSB2YWxpZCBtb3ZlYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJvd0luZGV4ICE9PSBudW1Sb3dzIC0xICYmICEgYXdhaXQgaXNXb3JkVmFsaWQoY3VycldvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtjdXJyV29yZH0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvbXB0Rm9yUHV6emxlR2VuZXJhdGlvbiA9IDxkaXY+XHJcbiAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImdlbk1vYmlsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SW5pdGlhbEJvYXJkKG5leHROdW1Db2xzKTtcclxuICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgR0VORVJBVEUge25leHROdW1Db2xzfSBMRVRURVIgUFVaWkxFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPCA1ICYmIDxidXR0b24ga2V5PVwibG9uZ2VyUHV6emxlTW9iaWxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzICsgMSk7XHJcbiAgICAgICAgICAgIH0gfT4rPC9idXR0b24+fVxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPiAzICYmIDxidXR0b24ga2V5PVwic2hvcnRlclB1enpsZU1vYmlsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyAtIDEpO1xyXG4gICAgICAgICAgICB9IH0+LTwvYnV0dG9uPn1cclxuICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJnZW5Ccm93c2VyXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbml0aWFsQm9hcmQobmV4dE51bUNvbHMpO1xyXG4gICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICBHRU5FUkFURSB7bmV4dE51bUNvbHN9IExFVFRFUiBQVVpaTEVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtuZXh0TnVtQ29scyA8IDggJiYgPGJ1dHRvbiBrZXk9XCJsb25nZXJQdXp6bGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMgKyAxKTtcclxuICAgICAgICAgICAgfSB9Pis8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIHtuZXh0TnVtQ29scyA+IDMgJiYgPGJ1dHRvbiBrZXk9XCJzaG9ydGVyUHV6emxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzIC0gMSk7XHJcbiAgICAgICAgICAgIH0gfT4tPC9idXR0b24+fVxyXG4gICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L2Rpdj47XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGhlUHV6emxlID0gPGRpdiBrZXk9XCJzaG93Ym9hcmRcIiBjbGFzc05hbWU9e3B1enpsZVNvbHZlZCA/IGBtb3JwaG9Tb2x2ZWREaXYgbCR7bnVtQ29sc31gIDogXCJtb3JwaG9EaXZcIn0+XHJcbiAgICAgICAgPHRhYmxlIG9uS2V5RG93bj17KGUpID0+IHsgaGFuZGxlS2V5RG93bihlKTsgfSB9IHRhYkluZGV4PXstMX0+PHRib2R5PlxyXG4gICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBoYW5kbGVTZWxlY3Rpb24ocm93SW5kZXgsIGNvbEluZGV4KTsgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wgbW9ycGhvQ2VsbCAke3Nob3dTb2x1dGlvbiA/IGNzc1ByZXNldExldHRlciA6IHB1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IGNlbGwuY2xhc3NOYW1lICsgKHJvd0luZGV4ID09PSBzZWxlY3RlZC5yb3cgJiYgY29sSW5kZXggPT09IHNlbGVjdGVkLmNvbCA/IGNzc1NlbGVjdGVkQ2VsbCA6IFwiXCIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgQm9hcmRDZWxsUy4ke3Jvd0luZGV4fS4ke2NvbEluZGV4fWB9PntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgQm9hcmRDZWxsTC4ke3Jvd0luZGV4fS4ke2NvbEluZGV4fWB9PntjZWxsLmxldHRlcn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT48L3RhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmICFjaGVja2luZyAmJiAhcHV6emxlU29sdmVkICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5RPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5V1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlc8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlFXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdFJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5SPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVVcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5VPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5SVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlPXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdPJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVBcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5QPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3cyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlTXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdTJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleURcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5EPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlHXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdHJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5SlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPko8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlLXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdLJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUxcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5MPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3czXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlYXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdYJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5DPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlY8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlCXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdCJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU5cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5OPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3c0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q29weWRvd25cIiBvbkNsaWNrPXsoKSA9PiB7IGNvcHlEb3duTGV0dGVyKCk7IH0gfSBjbGFzc05hbWU9XCJtb3JwaG9Db3B5ZG93bktleVwiPkNPUFkgRE9XTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNvcHl1cFwiIG9uQ2xpY2s9eygpID0+IHsgY29weVVwTGV0dGVyKCk7IH0gfSBjbGFzc05hbWU9XCJtb3JwaG9Db3B5dXBLZXlcIj5DT1BZIFVQPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwdXp6bGVTb2x2ZWQgJiYgZmlsbGVkaW4gJiYgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3c0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNoZWNrU29sdXRpb24oKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS5cclxuICAgICAgICAgICAgICAgICAgICBFYWNoIGludGVyaW0gd29yZCBtdXN0IGJlIGEgdmFsaWQgd29yZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DT1BZIERPV04gY29waWVzIGEgbGV0dGVyIGRvd24gZnJvbSB0aGUgcm93IGFib3ZlLlxyXG4gICAgICAgICAgICAgICAgICAgIENPUFkgVVAgY29waWVzIGEgbGV0dGVyIHVwIGZyb20gdGhlIGJvdHRvbSByb3cuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2xpY2sgYSBsZXR0ZXIgb24gdGhlIGJvdHRvbSByb3cgdG8gdXNlIGl0IGFzIHRoZSBzd2FwIG9uIHRoZSBzZWxlY3RlZCByb3cuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtwdXp6bGVTb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlN1Y2Nlc3MhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvbXB0Rm9yUHV6emxlR2VuZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlU2hvd1NvbHV0aW9uKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9ycGhvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGFydGluZyA/XHJcbiAgICAgICAgICAgICAgICBwcm9tcHRGb3JQdXp6bGVHZW5lcmF0aW9uXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInBsZWFzZXdhaXRcIiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+Q3JlYXRpbmcgcHV6emxlLCBwbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUaGVQdXp6bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==