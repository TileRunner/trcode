/**
 * Custom keyboard div
 * @param {int} keyboardVersion A number representing which keyboard to use (user can switch)
 * @param {function} setKeyboardVersion A function to update keyboardVersion value
 * @param {string} inputWord The word being input
 * @param {function} handleInputLetter Routine to handle next input letter
 * @param {function} handleDeleteLetter Routine to handle deleting the last letter
 * @param {div} divUnderKeyboard Div under keyboard. Callers routine can show things like a "submit word" button, or the input word
 * @returns Custom keyboard div
 */
export default function ShowCustomKeyboard({keyboardVersion, setKeyboardVersion, inputWord, handleInputLetter, handleDeleteLetter, divUnderKeyboard}) {
    function nextKeyboard() {
        setKeyboardVersion(keyboardVersion === 3 ? 1 : keyboardVersion + 1);
    }
    return (<div>
        {keyboardVersion === 1 ?
            <div className="customKeyboardV1">
                <div className="switchkb">
                    <button key="switchbkv1" onClick={() => { nextKeyboard(); } }>switch keyboard</button>
                </div>
                <div className="ckv1Row1">
                    <span onClick={() => { handleInputLetter('Q'); } } className="ckv1 Q"></span>
                    <span onClick={() => { handleInputLetter('W'); } } className="ckv1 W"></span>
                    <span onClick={() => { handleInputLetter('E'); } } className="ckv1 E"></span>
                    <span onClick={() => { handleInputLetter('R'); } } className="ckv1 R"></span>
                    <span onClick={() => { handleInputLetter('T'); } } className="ckv1 T"></span>
                    <span onClick={() => { handleInputLetter('Y'); } } className="ckv1 Y"></span>
                    <span onClick={() => { handleInputLetter('U'); } } className="ckv1 U"></span>
                    <span onClick={() => { handleInputLetter('I'); } } className="ckv1 I"></span>
                    <span onClick={() => { handleInputLetter('O'); } } className="ckv1 O"></span>
                    <span onClick={() => { handleInputLetter('P'); } } className="ckv1 P"></span>
                </div>
                <div className="ckv1Row2">
                    <span onClick={() => { handleInputLetter('A'); } } className="ckv1 A"></span>
                    <span onClick={() => { handleInputLetter('S'); } } className="ckv1 S"></span>
                    <span onClick={() => { handleInputLetter('D'); } } className="ckv1 D"></span>
                    <span onClick={() => { handleInputLetter('F'); } } className="ckv1 F"></span>
                    <span onClick={() => { handleInputLetter('G'); } } className="ckv1 G"></span>
                    <span onClick={() => { handleInputLetter('H'); } } className="ckv1 H"></span>
                    <span onClick={() => { handleInputLetter('J'); } } className="ckv1 J"></span>
                    <span onClick={() => { handleInputLetter('K'); } } className="ckv1 K"></span>
                    <span onClick={() => { handleInputLetter('L'); } } className="ckv1 L"></span>
                </div>
                <div className="ckv1Row3">
                    <span onClick={() => { handleInputLetter('Z'); } } className="ckv1 Z"></span>
                    <span onClick={() => { handleInputLetter('X'); } } className="ckv1 X"></span>
                    <span onClick={() => { handleInputLetter('C'); } } className="ckv1 C"></span>
                    <span onClick={() => { handleInputLetter('V'); } } className="ckv1 V"></span>
                    <span onClick={() => { handleInputLetter('B'); } } className="ckv1 B"></span>
                    <span onClick={() => { handleInputLetter('N'); } } className="ckv1 N"></span>
                    <span onClick={() => { handleInputLetter('M'); } } className="ckv1 M"></span>
                    <span onClick={() => { inputWord.length > 0 && handleDeleteLetter(); } } class="ckv1 Backspace"></span>
                </div>
                {divUnderKeyboard}
            </div>
        : keyboardVersion === 2 ?
            <div className="customKeyboardV2 ">
                <div className="switchkb">
                    <button key="switchbkv2" onClick={() => { nextKeyboard(); } }>switch keyboard</button>
                </div>
                <div className="ckv2Row1">
                    <span onClick={() => { handleInputLetter('Q'); } }>Q</span>
                    <span onClick={() => { handleInputLetter('W'); } }>W</span>
                    <span onClick={() => { handleInputLetter('E'); } }>E</span>
                    <span onClick={() => { handleInputLetter('R'); } }>R</span>
                    <span onClick={() => { handleInputLetter('T'); } }>T</span>
                    <span onClick={() => { handleInputLetter('Y'); } }>Y</span>
                    <span onClick={() => { handleInputLetter('U'); } }>U</span>
                    <span onClick={() => { handleInputLetter('I'); } }>I</span>
                    <span onClick={() => { handleInputLetter('O'); } }>O</span>
                    <span onClick={() => { handleInputLetter('P'); } }>P</span>
                </div>
                <div className="ckv2Row2">
                    <span onClick={() => { handleInputLetter('A'); } }>A</span>
                    <span onClick={() => { handleInputLetter('S'); } }>S</span>
                    <span onClick={() => { handleInputLetter('D'); } }>D</span>
                    <span onClick={() => { handleInputLetter('F'); } }>F</span>
                    <span onClick={() => { handleInputLetter('G'); } }>G</span>
                    <span onClick={() => { handleInputLetter('H'); } }>H</span>
                    <span onClick={() => { handleInputLetter('J'); } }>J</span>
                    <span onClick={() => { handleInputLetter('K'); } }>K</span>
                    <span onClick={() => { handleInputLetter('L'); } }>L</span>
                </div>
                <div className="ckv2Row3">
                    <span onClick={() => { handleInputLetter('Z'); } }>Z</span>
                    <span onClick={() => { handleInputLetter('X'); } }>X</span>
                    <span onClick={() => { handleInputLetter('C'); } }>C</span>
                    <span onClick={() => { handleInputLetter('V'); } }>V</span>
                    <span onClick={() => { handleInputLetter('B'); } }>B</span>
                    <span onClick={() => { handleInputLetter('N'); } }>N</span>
                    <span onClick={() => { handleInputLetter('M'); } }>M</span>
                    <span onClick={() => { inputWord.length > 0 && handleDeleteLetter(); } } class="tm_Backspace"></span>
                </div>
                {divUnderKeyboard}
            </div>
            :
            <div className="customKeyboardV3">
                <div className="switchkb">
                    <button key="switchbkv3" onClick={() => { nextKeyboard(); } }>switch keyboard</button>
                </div>
                <div className="ckv3Row1">
                    <span onClick={() => { handleInputLetter('Q'); } } className="ckv3 Q"></span>
                    <span onClick={() => { handleInputLetter('W'); } } className="ckv3 W"></span>
                    <span onClick={() => { handleInputLetter('E'); } } className="ckv3 E"></span>
                    <span onClick={() => { handleInputLetter('R'); } } className="ckv3 R"></span>
                    <span onClick={() => { handleInputLetter('T'); } } className="ckv3 T"></span>
                    <span onClick={() => { handleInputLetter('Y'); } } className="ckv3 Y"></span>
                    <span onClick={() => { handleInputLetter('U'); } } className="ckv3 U"></span>
                    <span onClick={() => { handleInputLetter('I'); } } className="ckv3 I"></span>
                    <span onClick={() => { handleInputLetter('O'); } } className="ckv3 O"></span>
                    <span onClick={() => { handleInputLetter('P'); } } className="ckv3 P"></span>
                </div>
                <div className="ckv3Row2">
                    <span onClick={() => { handleInputLetter('A'); } } className="ckv3 A"></span>
                    <span onClick={() => { handleInputLetter('S'); } } className="ckv3 S"></span>
                    <span onClick={() => { handleInputLetter('D'); } } className="ckv3 D"></span>
                    <span onClick={() => { handleInputLetter('F'); } } className="ckv3 F"></span>
                    <span onClick={() => { handleInputLetter('G'); } } className="ckv3 G"></span>
                    <span onClick={() => { handleInputLetter('H'); } } className="ckv3 H"></span>
                    <span onClick={() => { handleInputLetter('J'); } } className="ckv3 J"></span>
                    <span onClick={() => { handleInputLetter('K'); } } className="ckv3 K"></span>
                    <span onClick={() => { handleInputLetter('L'); } } className="ckv3 L"></span>
                </div>
                <div className="ckv3Row3">
                    <span onClick={() => { handleInputLetter('Z'); } } className="ckv3 Z"></span>
                    <span onClick={() => { handleInputLetter('X'); } } className="ckv3 X"></span>
                    <span onClick={() => { handleInputLetter('C'); } } className="ckv3 C"></span>
                    <span onClick={() => { handleInputLetter('V'); } } className="ckv3 V"></span>
                    <span onClick={() => { handleInputLetter('B'); } } className="ckv3 B"></span>
                    <span onClick={() => { handleInputLetter('N'); } } className="ckv3 N"></span>
                    <span onClick={() => { handleInputLetter('M'); } } className="ckv3 M"></span>
                    <span onClick={() => { inputWord.length > 0 && handleDeleteLetter(); } } class="ckv3 Backspace"></span>
                </div>
                {divUnderKeyboard}
            </div>
        }
    </div>);
}
