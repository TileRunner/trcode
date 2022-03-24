import { useState } from 'react';

const GetWMOptions = ({setGameOptions}) => {
    const lenAllowedArray = [2,3,4,5,6,7,8,9];
    const [mode, setMode] = useState('easy');
    const [lenMin, setLenMin] = useState(5);
    const [lenMax, setLenMax] = useState(8);
    const [cliprule, setCliprule] = useState('round');
    const [validOnly, setValidOnly] = useState(true); // whether guesses must be valid words
    const handleStartPuzzle = () => {
        let newGameOptions = {set: true, mode: mode, validOnly: validOnly, cliprule: cliprule};
        if (lenMin > lenMax) {
            newGameOptions.lenMax = lenMin;
            newGameOptions.lenMin = lenMax;
        } else {
            newGameOptions.lenMin = lenMin;
            newGameOptions.lenMax = lenMax;
        }
        setGameOptions(newGameOptions);
    }
    return ( <div className="trOptionsDiv">
        <div className={validOnly ? "trCheckbox On" : "trCheckbox"}
             data-toggle="tooltip" title="Whether guess must be valid words"
             onClick={() => {setValidOnly(!validOnly);}}
        >
            <label>Guesses must be valid words</label>
        </div>
        <div className={mode === 'easy' ? "trCheckbox On" : "trCheckbox"}
             data-toggle="tooltip" title="Color coding shows which letters are correct or in the wrong place. Otherwise show counts only."
             onClick={() => {setMode(mode === 'easy' ? 'hard' : 'easy');}}
        >
            <label>Color code the guess letters</label>
        </div>
        <div>
            <h3 className="AlignCenter" data-toggle="tooltip" title="Set clipboard feature to capture the guesses for just the round, just the set, or all sets.">Clipboard Capture</h3>
            <button key='buttonclipround' className={cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('round');}}/>
            <span key='labelclipround' className="trOptionsRadioLabel">Round</span>
            <button key='buttonclipset' className={cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('set');}}/>
            <span key='labelclipset' className="trOptionsRadioLabel">Set</span>
            <button key='buttonclipall' className={cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('all');}}/>
            <span key='labelclipall' className="trOptionsRadioLabel">All</span>
        </div>
        <div className="wm_lenDiv">
            <h3>Start Length</h3>
            {lenAllowedArray.map((n) => (
                <button className={n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected'}
                    key={`chooseLenMin${n}`}
                    onClick={() => { setLenMin(n); } }
                >{n}
                </button>
            ))}
            <h3>End Length</h3>
            {lenAllowedArray.map((n) => (
                <button className={n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected'}
                    key={`chooseLenMax${n}`}
                    onClick={() => { setLenMax(n); } }
                >{n}
                </button>
            ))}
        </div>
        <div className="wm_startPuzzleDiv">
            <button key="startPuzzle" className="trButton" onClick={() => { handleStartPuzzle(); } }>
                Start Puzzle
            </button>
        </div>
    </div>);
}

export default GetWMOptions;