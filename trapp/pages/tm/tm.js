import { useState } from "react";

const Transmogrify = ({setWhereto}) => {
    const [numMoves, setNumMoves] = useState(4);
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const numMovesArray = [2,3,4,5,6,7,8,9];
    const [puzzle, setPuzzle] = useState({});
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
    }
    return (
        <div className="trBackground">
            <div className="trTitle">
                Transmogrify
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <p>Under construction</p>
            <div>
                <div className="numMovesDiv">
                    <h3>Number Of Moves</h3>
                    {numMovesArray.map((n) => (
                        <button className={`${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`}
                            key={`chooseNumMoves${n}`}
                            onClick={() => {setNumMoves(n);}}
                            >{n}
                        </button>
                    ))}
                    <div className="startPuzzleDiv">
                        <button key="startPuzzle" className="trButton" onClick={() => {callForPuzzle();}}>
                            Start Puzzle
                        </button>
                    </div>
                </div>
                {puzzle && puzzle.startWord &&
                <div className="puzzleDiv">
                    <span>Start Word:</span><span>{puzzle.startWord}</span>
                    <span>Target Word:</span><span>{puzzle.targetWord}</span>
                    <span>Minimum Moves:</span><span>{puzzle.numMoves}</span>
                    <p>Valid moves:</p>
                    <ul>
                        <li>Swap a letter</li>
                        <li>Drop a letter</li>
                        <li>Insert a letter</li>
                        <li>Anagram the word</li>
                    </ul>
                </div>}
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