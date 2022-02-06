import { useState } from "react";
import { countSwaps, areAnagrams, isDrop, isWordValid } from '../../lib/wordfunctions';

const Transmogrify = ({setWhereto}) => {
    const [numMoves, setNumMoves] = useState(4);
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const numMovesArray = [2,3,4,5,6,7,8,9];
    const [puzzle, setPuzzle] = useState({});
    const [nextWord, setNextWord] = useState('');
    const [words, setWords] = useState([]); // Users words
    const [solved, setSolved] = useState(false);
    const callForPuzzle = async() => {
        let data = {};
        try {
            let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
            const response = await fetch(url);
            data = await response.json();                
        } catch (error) {
            data.notes = ["Problem with the server. Sorry about that."];
            console.log(error);
        }
        setPuzzle(data);
        setWords([]);
        setNextWord('');
        setSolved(false);
    }
    const acceptNextWord = async(e) => {
        e.preventDefault();
        let prevWord = words.length === 0 ? puzzle.startWord : words[words.length - 1];
        let newWord = nextWord.trim();
        if (validMove(newWord, prevWord)) {
            if (!await isWordValid(newWord)) {
                alert(`${newWord} is not a valid word`);
            } else {
                let lastWord = puzzle.targetWord;
                let newWords = [...words];
                newWords.push(newWord);
                setWords(newWords);
                setNextWord('');    
                if (validMove(newWord, lastWord)) {
                    setSolved(true);
                }
            }
        } else {
            alert('Only anagrams, drops, swaps and inserts allowed.');
        }
    }
    const validMove = (prevWord="", newWord="") => {
        if (prevWord.toLowerCase() === newWord.toLowerCase()) {
            return false;
        }
        return (areAnagrams(prevWord, newWord)
            || countSwaps(prevWord, newWord) === 1
            || isDrop(prevWord, newWord)
            || isDrop(newWord, prevWord)
        );
    }
    const GameStartSection = <div className="tm_numMovesDiv">
        <h3>Number Of Moves</h3>
        {numMovesArray.map((n) => (
            <button className={`tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`}
                key={`chooseNumMoves${n}`}
                onClick={() => { setNumMoves(n); } }
            >{n}
            </button>
        ))}
        <div className="tm_startPuzzleDiv">
            <button key="startPuzzle" className="trButton" onClick={() => { callForPuzzle(); } }>
                Start Puzzle
            </button>
        </div>
    </div>;
    const PuzzleSection = <div className="tm_puzzleDiv">
        <table>
            <tbody>
                <tr>
                    <td>Start Word:</td>
                    <td>{puzzle.startWord}</td>
                </tr>
                <tr>
                    <td>Target Word:</td>
                    <td>{puzzle.targetWord}</td>
                </tr>
                <tr>
                    <td>Minimum Moves:</td>
                    <td>{puzzle.numMoves}</td>
                </tr>
            </tbody>
        </table>
    </div>;
    const SolutionSection = <div className="tm_solutionDiv">
        <table>
            <tbody>
                <tr><td>{puzzle.startWord}</td></tr>
                {words.map((w,i) => (
                    <tr key={`userWord${i}`}><td>{w}</td></tr>
                ))}
                {!solved && <tr><td>...</td></tr>}
                <tr><td>{puzzle.targetWord}</td></tr>
            </tbody>
        </table>
        {solved ?
            <p className="trEmphasis">Congratulations! Solved in {words.length + 1} moves.</p>
        :
            <form>
                Next Word:
                <input value={nextWord}
                    onChange={(e) => {setNextWord(e.target.value);}}
                    onKeyPress={(e) => {e.keyCode === 13 && acceptNextWord;}}
                    ></input>
                <button type="submit" onClick={acceptNextWord}>GO</button>
            </form>
        }
    </div>
    return (
        <div className="trBackground">
            <div className="trTitle">
                Transmogrify
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <table>
                <tbody>
                    <tr><td>{GameStartSection}</td></tr>
                    {puzzle && puzzle.startWord && <tr><td>{PuzzleSection}</td></tr>}
                    {puzzle && puzzle.startWord && <tr><td>{SolutionSection}</td></tr>}
                </tbody>
            </table>
            <div>
                {puzzle && puzzle.notes && puzzle.notes.length > 0 &&
                <div className="trDanger">
                    {puzzle.notes.map((n,i) => (
                        <p key={`note${i}`}>{n}</p>
                    ))}
                </div>
                }
            </div>
        </div>
    );
}

export default Transmogrify;