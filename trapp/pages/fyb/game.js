import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setWhereto, client, thisisme, wsmessage, nickname, gameid}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({goal:99, whoseturn:-1, players:[{index: 0, nickname: 'Loading...'}]});
    const [word, setWord] = useState(''); // my word to submit
    const [syncstamp, setSyncstamp] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            if (gamedata.whoseturn > -1 && gamedata.players.length > 0) {
                client.send({
                    type: c.CLIENT_TYPE_FYB,
                    func: 'interval',
                    syncstamp: syncstamp,
                    thisisme: thisisme,
                    nickname: nickname,
                    gameid: gamedata.gameid
                });
            }
        }, c.PING_INTERVAL); // this many milliseconds between above code block executions
        return () => clearInterval(interval);
    });
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);
    },[wsmessage])
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                setSnat(messageData.snat);
                setGamedata(messageData.game);
                setSyncstamp(messageData.game.syncstamp);
            } else if (messageData.func = c.S2C_FUNC_GAMECREATED) {
                // Nothing to do, this is really for the lobby dwellers
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    const handleKeyDown = (event) => {
        if (!meToEnterWord()) {
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
            return;
        }
    }

    const meToEnterWord = () => {
        if (gamedata.whoseturn < 0) { // Game has not started or has ended
            return false;
        } else if (gamedata.freeforall) { // In free-for-all round
            if (gamedata.excludedPlayer === nickname) {
                return false;
            }
            for (let i = 0; i < gamedata.freeforallMoves.length; i++) {
                if (gamedata.freeforallMoves[i].nickname === nickname) {
                    return false;
                }
            }
            return true;
        } else {
            return (nickname === gamedata.players[gamedata.whoseturn].nickname);
        }
    }
    return (
        <div className="container fybGame">
            <div className="fybHeaderDiv">
                <span className="h2">Fry Your Brain</span>
                <button className="fybHomeButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <div className="fybHeaderDiv">
                <span className="h4">Game id: {gameid}</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2" className="fybGameSectionHeader">First to {gamedata.goal} wins!</td>
                    </tr>
                    {gamedata.players.map((pl) => (
                        <tr key={`Player${pl.index}`}>
                            <td className="fybGamePlayer">{pl.nickname}</td>
                            <td className="fybGameScore">
                                {pl.points < 10 ? <span>&nbsp;</span> : ''}{pl.points}
                                {pl.points >= gamedata.goal && <span className="fybWinner">Winner!</span>}
                            </td>
                        </tr>
                    ))}
                    {gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 &&
                        <tr>
                            <td className="fybGameSectionHeader" colSpan="2">Previous round:</td>
                        </tr>
                    }
                    {gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 &&
                        showMoveList('movesPrevRound', gamedata.movesPrevRound)
                    }
                    {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                        <tr>
                            <td className="fybGameSectionHeader" colSpan="2">This round:</td>
                        </tr>
                    }
                    {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                        showMoveList('movesThisRound', gamedata.movesThisRound)
                    }
                    {!gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 &&
                        <tr>
                            <td className="fybGameSectionHeader" colSpan="2">Free-for-all:</td>
                        </tr>
                    }
                    {!gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 &&
                        showMoveList('ffaMoves', gamedata.freeforallMoves)
                    }
                </tbody>
            </table>
            {gamedata.whoseturn > -1 &&
            <div>
                <div className="fybGameFryLettersLabel">Fry Letters:
                    <button className="fybGameShuffleButton" onClick={() => {
                        let shuffleSize = gamedata.fryLetters.length;
                        let beforeShuffle = [...gamedata.fryLetters];
                        let afterShuffle = [];
                        while (afterShuffle.length < shuffleSize) {
                            let rand = Math.floor(Math.random() * beforeShuffle.length);
                            afterShuffle.push(beforeShuffle[rand]);
                            beforeShuffle.splice(rand, 1);
                        };
                        let newGamedata = JSON.parse(JSON.stringify(gamedata));
                        newGamedata.fryLetters = [...afterShuffle];
                        setGamedata(newGamedata);
                    }}>
                        <i className="material-icons fybGameShuffleButtonIcon">cached</i>
                    </button>
                    <button className="fybGameShuffleButton" onClick={() => {
                        let sortwork = [...gamedata.fryLetters];
                        sortwork.sort();
                        let newGamedata = JSON.parse(JSON.stringify(gamedata));
                        newGamedata.fryLetters = [...sortwork];
                        setGamedata(newGamedata);
                    }}>
                        <i className="material-icons fybGameShuffleButtonIcon">sort_by_alpha</i>
                    </button>
                </div>
                <div className="fryLetterDiv">
                    {gamedata.fryLetters.map((fl,i) => (
                        <span key={`FryLetter${i}`} className="fryLetter">{fl}</span>
                    ))}
                </div>
            </div>}
            {meToEnterWord() &&
                getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname)
            }
            <div>
            {gamedata.gameOver && <div className="fybGameOver">
                <span className="fybGameSectionHeader">Game Over</span>
                <button
                    className="fybGameWordSubmitButton"
                    onClick={() => {sendReplayRequest(client, thisisme, gamedata, nickname)}}
                >
                    PLAY AGAIN
                </button>
            </div>}
            <p className="fybSnat">{snat}</p>
            </div>
        </div>
    );
}

function showMoveList(moveListKey, moveArray) {
    return (
        moveArray.map((move) => (
            <tr key={`${moveListKey}${move.nickname}`}>
                <td className="fybGamePlayer">{move.nickname}</td>
                <td className="fybGameWord">
                {move.pass ?
                    <span className="fybGameWord pass"> passed</span>
                :
                    <span className={`fybGameWord ${move.valid ? 'valid' : 'invalid'}`}>{move.word}</span>
                }
                </td>
            </tr>
        )))
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname) {
    return <div onKeyDownCapture={handleKeyDown}>
        <div className="fybGameEnterWordLabel">Enter Word:</div>
        <input
            type="text" autoComplete="off" spellCheck="false"
            name="word"
            value={word}
            onChange={(e) => {
                setWord(e.target.value);
            } } />
        <div>
            {word.toUpperCase().trim().match("^[a-zA-Z]*$") && 
                <button className="fybGameWordSubmitButton" key="submitWord"
                onClick={() => {submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord)}}>
                    SUBMIT
                </button>
            }

            <button className="fybGameWordPassButton" key="passButton"
            onClick={() => {submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord)}}>
                PASS
            </button>
        </div>
    </div>;
}

function submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord) {
    let fixedword = word.toUpperCase().trim();
    // Check if the word is allowed based on previous words this round
    for (let i = 0; i < gamedata.movesThisRound.length; i++) {
        const pw = gamedata.movesThisRound[i].word;
        if (pw === fixedword) {
            setSnat(`You cannot reuse a previous word from this round (${pw}).`);
            return;
        }
        if (pw + 'S' === fixedword && pw.substring(pw.length-1) !== 'S' && gamedata.movesThisRound[i].valid) {
            setSnat(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
            return;
        }
    }
    // Check if the have all the fry letters
    for (let i = 0; i < gamedata.fryLetters.length; i++) {
        let letterCountRequired = 0;
        let actualLetterCount = 0;
        for (let j = 0; j < gamedata.fryLetters.length; j++) {
            if (gamedata.fryLetters[i] === gamedata.fryLetters[j]) {
                letterCountRequired = letterCountRequired + 1;
            }
        }
        for (let j = 0; j < fixedword.length; j++) {
            if (gamedata.fryLetters[i] === fixedword[j]) {
                actualLetterCount = actualLetterCount + 1;
            }
        }
        if (actualLetterCount < letterCountRequired) {
            setSnat(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
            return;
        }
    }
    // If you get here they have all the required letters. Send the guess to the server.
    setSnat(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: false,
        thisisme: thisisme,
        gameid: gamedata.gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: fixedword
    });
    setWord('');
}

function submitPass(setSnat, client, thisisme, gameid, nickname, setWord) {
    // If you get here they have all the required letters. Send the guess to the server.
    setSnat(`Sending PASS ... shouldn't take long.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: true,
        valid: false,
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: ''
    });
    setWord('');
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'replay',
        thisisme: thisisme,
        game: gamedata,
        nickname: nickname,
        timestamp: Date.now()
    });
}

export default Game;
