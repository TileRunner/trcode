import { useState } from 'react';

const GetWMOptions = ({setGameOptions}) => {
    const lenAllowedArray = [2,3,4,5,6,7,8,9];
    const [mode, setMode] = useState('easy');
    const [lenMin, setLenMin] = useState(5);
    const [lenMax, setLenMax] = useState(8);
    const handleStartPuzzle = () => {
        let newGameOptions = {set: true, mode: mode};
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
        <button key='buttonmodeeasy' className={mode === 'easy' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setMode('easy');}}/>
        <span key='labelmodeeasy' className="wmRadioLabel">Easy</span>
        <button key='buttonmodehard' className={mode === 'hard' ? 'wmRadioOn' : 'wmRadioOff'} onClick={() => {setMode('hard');}}/>
        <span key='labelmodehard' className="wmRadioLabel">Hard</span>
        <div className="wm_lenDiv">
            <h3>Start at length:</h3>
            {lenAllowedArray.map((n) => (
                <button className={n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected'}
                    key={`chooseLenMin${n}`}
                    onClick={() => { setLenMin(n); } }
                >{n}
                </button>
            ))}
            <h3>End at length:</h3>
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