const WordMastermind = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Word Mastermind
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            Word Mastermind has moved to here: <a href='https://tilerunner.github.io/word-mastermind/'>link</a>
        </div>
    );
}

export default WordMastermind;