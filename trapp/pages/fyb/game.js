import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';
import { usePrevious } from "../../lib/usePrevious";

const Game = ({ismobile, setWhereto, client, thisisme, wsmessage, nickname, gameid}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({
        goal: 99
        , gameindex: 0
        , round: 0
        , freeforall: false
        , movesThisRound: []
        , movesPrevRound: []
        , whoseturn: -1
        , fryLetters: []
        , players: [{index: 0, nickname: 'Loading...'}]});
    const [word, setWord] = useState(''); // my word to submit
    const [syncstamp, setSyncstamp] = useState('');
    const [selected, setSelected] = useState(-1);
    const prevGamedata = usePrevious(gamedata);

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
    },[wsmessage]);

    useEffect(() => {
        // This sound will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
        if (prevGamedata
            && gamedata.gameindex === prevGamedata.gameindex
            && gamedata.round === prevGamedata.round
            && gamedata.freeforall && !prevGamedata.freeforall) {
            var myaudio = document.createElement('audio');
            // Decide between Oops (phoney played) and Pass (player passed)
            myaudio.src = gamedata.movesThisRound[gamedata.movesThisRound.length-1].pass ? "https://tilerunner.github.io/Pass.m4a" : "https://tilerunner.github.io/Oops.m4a";
            myaudio.play();
        }
      }, [gamedata]); // Play a sound when a rescue is made

    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                /* SERVER SENT GAME DATA
                For a regular update due to player activity, this client needs the update.

                For dropped connections which made this client send a rejoin to update server's
                   info for this client, which makes the server sends game info to this client,
                   this client is already up to date and does not need the update. We do not take
                   the update so as not to upset the fry letter rearrangements this client may have
                   made.
                */
                if (messageData.game.gameindex !== gamedata.gameindex
                    || messageData.game.round !== gamedata.round
                    || messageData.goal !== gamedata.goal
                    || messageData.players.length !== gamedata.players.length
                    || messageData.game.movesThisRound.length !== gamedata.movesThisRound.length
                    )
                {
                    setSnat(messageData.snat);
                    setSelected(-1);
                    setGamedata(messageData.game);
                    setSyncstamp(messageData.game.syncstamp);
                }
            } else if (messageData.func === c.S2C_FUNC_GAMECREATED) {
                // Nothing to do, this is really for the lobby dwellers
            } else {
                // I think this happens when a web socket connection drops and the new one loses the gameid on the server wss.clients
                // So send a rejoin request to get the server back on track
                client.send({
                    type: c.CLIENT_TYPE_FYB,
                    func: 'rejoin',
                    thisisme: thisisme,
                    gameid: gamedata.gameid,
                    nickname: nickname,
                    timestamp: Date.now()
                });
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
        <div className={`container fybGame ${ismobile === "Y" ? "mobile" : "notmobile"}`}>
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
                        <span key={`FryLetter${i}`}
                            className={i === selected ? "fybFryLetter Selected":"fybFryLetter"}
                            onDoubleClick={() => {
                                let moveLetter = gamedata.fryLetters[i];
                                let shiftedLetters = [...gamedata.fryLetters];
                                shiftedLetters.splice(i,1);
                                shiftedLetters.push(moveLetter);
                                let newGamedata = JSON.parse(JSON.stringify(gamedata));
                                newGamedata.fryLetters = [...shiftedLetters];
                                setGamedata(newGamedata);
                                setSelected(-1);
                            }}
                            onClick={() => {
                                if (selected === -1) {
                                    setSelected(i);
                                } else if (i === selected) {
                                    setSelected(-1); // unselect when clicked a second time
                                } else {
                                    // Move selected tile to this position
                                    let shiftedLetters = [];
                                    let moveLetter = gamedata.fryLetters[selected];
                                    for (let index = 0; index < gamedata.fryLetters.length; index++) {
                                        const element = gamedata.fryLetters[index];
                                        if (index === i) {
                                            shiftedLetters.push(moveLetter);
                                        }
                                        if (index !== selected) {
                                            shiftedLetters.push(element);
                                        }
                                    }
                                    let newGamedata = JSON.parse(JSON.stringify(gamedata));
                                    newGamedata.fryLetters = [...shiftedLetters];
                                    setGamedata(newGamedata);
                                    setSelected(-1);
                                }
                            }}
                            >{fl}</span>
                    ))}
                </div>
                <div className="fryAnswerCountDiv">
                    <div className="fryAnswerCount">{gamedata.numPossibleAnswers}</div>
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
                    <span className={`fybGameWord ${move.valid ? 'valid' : 'invalid'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`}>
                        {move.word}
                        {move.earned && <span> ({move.earned} pts)</span>}
                    </span>
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
        clientRound: gamedata.round, // for checking re-submissions
        clientMovesLength: gamedata.movesThisRound.length, // for checking re-submissions
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
