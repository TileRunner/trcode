import { useState } from 'react';

const GetWMOptions = ({setGameOptions}) => {
    const lenAllowedArray = [2,3,4,5,6,7,8,9];
    const [mode, setMode] = useState('easy');
    const [lenMin, setLenMin] = useState(5);
    const [lenMax, setLenMax] = useState(8);
    const [showHeader, setShowHeader] = useState(true); // whether to show "Word Mastermin" and link in clipboard capture
    const [cliprule, setCliprule] = useState('round');
    const [validOnly, setValidOnly] = useState(true); // whether guesses must be valid words
    const [theme, setTheme] = useState(2); // Array index for themes
    const themes = [
        {c:"😎",i:"🤨",w:"😒"},
        {c:"🟩",i:"🟨",w:"⬜"},
        {c:"✅",i:"🔁",w:"❌"}
    ];
    const handleStartPuzzle = () => {
        let newGameOptions = {set: true, mode: mode, validOnly: validOnly, cliprule: cliprule, ciw: themes[theme]};
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
        <div className={showHeader ? "trCheckbox On" : "trCheckbox"}
            onClick={() => {setShowHeader(!showHeader);}}
        >
            <label>Title and link in clipboard</label>
        </div>
        <div>
            <h4 className="AlignCenter" data-toggle="tooltip" title="Set clipboard feature to capture the guesses for just the round, just the set, or all sets.">Clipboard Capture</h4>
            <button className={cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('round');}}/>
            <span className="trOptionsRadioLabel">Round</span>
            <button className={cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('set');}}/>
            <span className="trOptionsRadioLabel">Set</span>
            <button className={cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setCliprule('all');}}/>
            <span className="trOptionsRadioLabel">All</span>
            <h4 className="AlignCenter">Emoji Theme</h4>
            <button className={theme === 0 ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setTheme(0);}}/>
            <span className="trOptionsRadioLabel">{themes[0].c}{themes[0].i}{themes[0].w}</span>
            <br/>
            <button className={theme === 1 ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setTheme(1);}}/>
            <span className="trOptionsRadioLabel">{themes[1].c}{themes[1].i}{themes[1].w}</span>
            <br/>
            <button className={theme === 2 ? 'trOptionsRadioOn' : 'trOptionsRadioOff'} onClick={() => {setTheme(2);}}/>
            <span className="trOptionsRadioLabel">{themes[2].c}{themes[2].i}{themes[2].w}</span>
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