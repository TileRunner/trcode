import { useState } from 'react';

const GetWMOptions = ({setGameOptions}) => {
    const lenAllowedArray = [3,4,5,6,7,8,9];
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
        <div className="wm_cliptable">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h4 className="AlignCenter">
                                Capture
                                <span onClick={() => alert("Set clipboard feature to capture the guesses for just the round, just the set, or all sets.")}>
                                    <i className="material-icons trInfoIcon">info</i>
                                </span>
                            </h4>
                        </th>
                        <th>
                            <h4 className="AlignCenter">Emoji Theme</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className={cliprule === 'round' ? 'trRadio On' : 'trRadio'} onClick={() => {setCliprule('round');}}>
                                <label>Round</label>
                            </span>
                        </td>
                        <td>
                            <div className={theme === 0 ? 'trRadio On' : 'trRadio'} onClick={() => {setTheme(0);}}>
                                <label>{themes[0].c}{themes[0].i}{themes[0].w}</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={cliprule === 'set' ? 'trRadio On' : 'trRadio'} onClick={() => {setCliprule('set');}}>
                                <label>Set</label>
                            </span>
                        </td>
                        <td>
                            <div className={theme === 1 ? 'trRadio On' : 'trRadio'} onClick={() => {setTheme(1);}}>
                                <label>{themes[1].c}{themes[1].i}{themes[1].w}</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={cliprule === 'all' ? 'trRadio On' : 'trRadio'} onClick={() => {setCliprule('all');}}>
                                <label>All</label>
                            </span>
                        </td>
                        <td>
                            <div className={theme === 2 ? 'trRadio On' : 'trRadio'} onClick={() => {setTheme(2);}}>
                                <label>{themes[2].c}{themes[2].i}{themes[2].w}</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="wm_lenDiv">
            <h4>Start Length</h4>
            {lenAllowedArray.map((n) => (
                <button className={n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected'}
                    key={`chooseLenMin${n}`}
                    onClick={() => { setLenMin(n); } }
                >{n}
                </button>
            ))}
            <h4>End Length</h4>
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