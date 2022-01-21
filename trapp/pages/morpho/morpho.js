import { useState, useEffect } from 'react';

const Morpho = ({setWhereto}) => {
    const numRows = 6;
    const numCols = 5;
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const cssPresetLetter = "morphoCellStatic";
    const cssNoLetter = "morphoCellNoLetter";
    const cssSelectedCell = " morphoCellSelected";
    const cssLarva = "morphoCellLarva";
    const cssCocoon = "morphoCellCocoon";
    const cssButterfly = "morphoCellButterfly";
    const [loading, setLoading] = useState(true);
    const [checking, setChecking] = useState(false); // Set when checking solution to prevent further alterations
    const [filledin, setFilledin] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [puzzleSolved, setPuzzleSolved] = useState(false);
    const [firstWord, setFirstWord] = useState('');
    const [lastWord, setLastWord] = useState('');
    const [board, setBoard] = useState([]);
    const [selected, setSelected] = useState({row:1, col:0}); // Natural place to start entering letters
    useEffect(() => {
        setInitialBoard();
    },[]);
    const setInitialBoard = async() => { // Initial board of given size
        setLoading(true);
        setChecking(false);
        setShowSolution(false);
        setFilledin(false);
        setPuzzleSolved(false);
        let rowArray = [];
        let url = `${baseurl}/ENABLE2K?morpho=true&len=${numCols}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!data.notes || data.notes.length === 0) { // Ok result
            for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
                const rowWord = data.puzzle[rowIndex].toUpperCase();
                if (rowIndex === 0) {
                    setFirstWord(rowWord);
                } else if (rowIndex === numRows - 1) {
                    setLastWord(rowWord);
                }
                const rowLetters = [...Array.from(rowWord)];
                let rowFilledIn = rowIndex === 0 || rowIndex === numRows - 1;
                let colArray = [];
                for (let colIndex = 0; colIndex < numCols; colIndex++) {
                    let cell = {letter:'?',solution:rowLetters[colIndex],className:'?'};
                    if (rowIndex === 0 || rowIndex === numRows - 1) {
                        cell.letter = rowLetters[colIndex];
                        cell.className = cssPresetLetter;
                    } else {
                        cell.letter = '?';
                        cell.className = cssNoLetter;
                    }
                    colArray.push(cell);
                }
                rowArray.push({filledin:rowFilledIn, colArray:colArray});
            }
        }
        setBoard(rowArray);
        setSelected({row:1,col:0});
        setLoading(false);
    }

    const handleSelection = (rowIndex, colIndex) => {
        if (rowIndex < 1 || rowIndex >= numRows - 1) {
            return;
        }
        if (colIndex < 0 || rowIndex >= numCols) {
            return;
        }
        setSelected({row:rowIndex,col:colIndex});
    }

    const handleKeyDown = (event) => {
        if (event.key === "F12") {return;}
        event.preventDefault();
        if (checking) {
            return; // No modes while checking solution
        }
        if (puzzleSolved) {
            return; // Puzzle already solved
        }
        handleInputLetter(event.key);
    }

    const handleInputLetter = (letter) => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        if (rowIndex < 1 || rowIndex >= numRows - 1) {
            return;
        }
        if (colIndex < 0 || rowIndex >= numCols) {
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
        rowArray[rowIndex].filledin = (rowArray[rowIndex].colArray.filter((cell) => {return cell.letter === "?";}).length === 0);
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
        if (rowArray.filter(r => {return !r.filledin;}).length === 0) {
            // All letters are filled in
            setFilledin(true);
        }
        setBoard(rowArray);
    }

    const moveUp = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:rowIndex,col:colIndex};
        if (rowIndex - 1 > 0) {
            newSelected.row = rowIndex - 1;
            newSelected.col = colIndex;
        } else {
            newSelected.row = numRows - 2;
            newSelected.col = colIndex - 1 > -1 ? colIndex - 1 : numCols - 1;
        }
        setSelected(newSelected);
    }

    const moveDown = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:rowIndex,col:colIndex};
        if (rowIndex + 1 < numRows - 1) {
            newSelected.row = rowIndex + 1;
            newSelected.col = colIndex;
        } else {
            newSelected.row = 1;
            newSelected.col = colIndex + 1 < numCols ? colIndex + 1 : 0;
        }
        setSelected(newSelected);
    }

    const moveRight = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:1,col:0};
        if (colIndex + 1 < numCols) {
            newSelected.row = rowIndex;
            newSelected.col = colIndex + 1;
        } else if (rowIndex + 1 < numRows - 1) {
            newSelected.row = rowIndex + 1;
            newSelected.col = 0;
        }
        setSelected(newSelected);
    }

    const moveLeft = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:numRows-2,col:numCols-1};
        if (colIndex - 1 > -1) {
            newSelected.row = rowIndex;
            newSelected.col = colIndex - 1;
        } else if (rowIndex - 1 > 0) {
            newSelected.row = rowIndex - 1;
            newSelected.col = numCols - 1;
        }
        setSelected(newSelected);
    }

    const toggleShowSolution = () => {
        setShowSolution(!showSolution);
    }

    const checkSolution = async() => {
        setChecking(true);
        let result = true;
        let startWord = "";
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
            startWord = startWord + board[0].colArray[colIndex].letter;
        }
        for(let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
            let prevWord = "";
            let currWord = "";
            for (let colIndex = 0; colIndex < numCols; colIndex++) {
                prevWord = prevWord + board[rowIndex-1].colArray[colIndex].letter;
                currWord = currWord + board[rowIndex].colArray[colIndex].letter;
            }
            if (!validNextMorph(startWord, rowIndex, prevWord, currWord)) {
                alert(`${prevWord} to ${currWord} is not a valid move`);
                result = false;
            }
            if (result && rowIndex !== numRows -1 && ! await isWordValid(currWord)) {
                alert(`${currWord} is not valid`);
                result = false;
            }
        }
        setChecking(false);
        setPuzzleSolved(result);
        if (result) {
            alert("Success!");
        }
    }

    const validNextMorph = (startWord, requiredDiffLetterCount, previousWord, currentWord) => {
        // Start word is row index 0
        // Word at row index 1 must have 1 letter swap
        // Word at row index 2 must have 2 letter swaps relative to the start word, and 1 relative to previous word
        // Word at row index 3 must have 3 letter swaps relative to the start word, and 1 relative to previous word
        // Etc. So pass row index to requiredDiffLetterCount.
        let startLetters = Array.from(startWord);
        let previousLetters = Array.from(previousWord);
        let currentLetters = Array.from(currentWord);
        let diffFromStartCount = 0;
        let diffFromPreviousCount = 0;
        for (let i = 0; i < currentLetters.length; i++) {
          if (currentLetters[i] !== startLetters[i]) {
            diffFromStartCount++;
          }
          if (currentLetters[i] !== previousLetters[i]) {
            diffFromPreviousCount++;
          }
        }
        return (diffFromStartCount === requiredDiffLetterCount && diffFromPreviousCount === 1);
      }

    async function isWordValid(word) {
        let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
        const response = await fetch(url);
        const jdata = await response.json();
        return jdata.exists;
    }

    return (
        <div className="trBackground" onKeyDown={(e) => {handleKeyDown(e);}} tabindex={-1}>
            <div className="trTitle">
                Morpho
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            {loading && <div className="trEmphasis">Creating puzzle, please be patient...</div>}
            {!loading && <div className={puzzleSolved ? "morphoSolvedDiv" : "morphoDiv"}>
                <table>
                {board.map((boardRow, rowIndex) => (
                    <tr key={`BoardRow.${rowIndex}`}>
                        {boardRow.colArray.map((cell, colIndex) => (
                            <td key={`BoardCell.${rowIndex}.${colIndex}`}
                            onClick={() => {handleSelection(rowIndex,colIndex);}}
                            className={`col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`}>
                                {showSolution ?
                                    <span>{cell.solution}</span>
                                :
                                    <span>{cell.letter}</span>
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                </table>
                <div className="trParagraph">
                    {!loading && !checking && !puzzleSolved && <div>
                        <span>Next Letter:</span>
                        <input type="text" name="getnextletter" value=""
                            onChange={(e) => {handleInputLetter(e.target.value);}}
                        />
                        <p>Change one letter at a time to get from {firstWord} to {lastWord}.</p>
                        <p>Each interim word must be a valid word.</p>
                    </div>}
                    <button className="trButton" onClick={() => {toggleShowSolution();}}>
                        {`${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`}
                    </button>
                    {!puzzleSolved && filledin && <div>
                        <button className="trButton" onClick={() => {checkSolution();}}>
                            SUBMIT YOUR SOLUTION
                        </button>
                    </div>}
                    {puzzleSolved && <div>
                        <button className="trButton" onClick={() => {setInitialBoard();}}>
                            GENERATE ANOTHER PUZZLE
                        </button>
                    </div>}
                </div>
            </div>}
        </div>
    )
}

export default Morpho;