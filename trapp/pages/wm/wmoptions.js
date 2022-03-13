import { useState } from 'react';

const GetWMOptions = ({setGameOptions}) => {
    const lenAllowedArray = [2,3,4,5,6,7,8,9];
    const [mode, setMode] = useState('easy');
    const [lenMin, setLenMin] = useState(5);
    const [lenMax, setLenMax] = useState(8);
    const [cliprule, setCliprule] = useState('round');
    const handleStartPuzzle = () => {
        let newGameOptions = {set: true, mode: mode, cliprule: cliprule};
        if (lenMin > lenMax) {
            newGameOptions.lenMax = lenMin;
            newGameOptions.lenMin = lenMax;
        } else {
            newGameOptions.lenMin = lenMin;
            newGameOptions.lenMax = lenMax;
        }
        setGameOptions(newGameOptions);
    }
    return ( <div className="wmGetOptionsDiv">
        <div>
            <h3 className="AlignCenter" data-toggle="tooltip" title="Easy mode shows which letters are correct or in the wrong place. Hard mode shows counts only.">Difficulty</h3>
            <button key='buttonmodeeasy' className={mode === 'easy' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setMode('easy');}}/>
            <span key='labelmodeeasy' className="wmRadioLabel">Easy</span>
            <button key='buttonmodehard' className={mode === 'hard' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setMode('hard');}}/>
            <span key='labelmodehard' className="wmRadioLabel">Hard</span>
        </div>
        <div>
            <h3 className="AlignCenter" data-toggle="tooltip" title="Set clipboard feature to capture the guesses for just the round, just the set, or all sets.">Clipboard Capture</h3>
            <button key='buttonclipround' className={cliprule === 'round' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setCliprule('round');}}/>
            <span key='labelclipround' className="wmRadioLabel">Round</span>
            <button key='buttonclipset' className={cliprule === 'set' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setCliprule('set');}}/>
            <span key='labelclipset' className="wmRadioLabel">Set</span>
            <button key='buttonclipall' className={cliprule === 'all' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setCliprule('all');}}/>
            <span key='labelclipall' className="wmRadioLabel">All</span>
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