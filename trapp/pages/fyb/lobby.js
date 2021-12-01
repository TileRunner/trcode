import React, { useState, useEffect } from "react";
//import Link from "next/link";
import * as c from '../../lib/fyb/constants';
import CreateGame from "./createGame";

const Lobby = ({setWhereto, client, thisisme, setParticipant, wsmessage, nickname, setNickname, gameid, setGameid}) => {
    const [snat, setSnat] = useState('Welcome!');
    const [gamelist, setGamelist] = useState([]);
    const [gotNickname, setGotNickname] = useState(false);
    const [mainAction, setMainAction] = useState('');
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processLobbyMessage(msg);
    },[wsmessage]);
    function processLobbyMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_GAMELIST) {
                setGamelist(messageData.gamelist);
            } else if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                /*
                If server sends me a game then it has decided I am a player but I have not marked myself as a player yet
                If I had marked mysefl as a player then fryyourbrain.cs would have called <Game> not <Lobby>
                I do not mark myself as a player when sending create/join/rejoin in case there is a blip in the server
                */
                if (messageData.thisisme === thisisme) { // Make sure this game is for me
                    setGameid(messageData.game.gameid);
                    setSnat(messageData.snat);
                    setParticipant(c.PARTY_TYPE_PLAYER);
                } else {
                    setSnat(`Why am I getting game data from ${messageData.nickname} for game ${messageData.gameid}?`);
                }
            } else if (messageData.func === 'gameidtaken') {
                setSnat('That game ID is already taken');
            } else if (messageData.func === 'gameidunknown') {
                setSnat('That game ID is not being used');
            } else if (messageData.func === 'gamefull') {
                setSnat('That game is full');
            } else if (messageData.func === 'notinthatgame') {
                setSnat('You are not in that game');
            } else if (messageData.func === 'otherclientfound') {
                setSnat('That nickname is already in that game');
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    return (
        <div className="fybLobby" id="fybLobby">
            <div className="fybHeaderDiv">
                <span className="h2">Fry Your Brain</span>
                <button className="fybHomeButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <p>{snat}</p>
            {!gotNickname && getNickname(nickname, setNickname, setGotNickname)}
            {gotNickname && displayGamelist(gamelist, client, thisisme, nickname)}
            {gotNickname && !mainAction && getMainAction(setMainAction)}
            {gotNickname && mainAction === 'C' &&
                <CreateGame
                    client={client}
                    thisisme={thisisme}
                    nickname={nickname}
                    gameid={gameid}
                    setGameid={setGameid}
                />}
            <div className="fivepxdivider">&nbsp;</div>
        </div>
    );
}

function displayGamelist(gamelist, client, thisisme, nickname) {
    return <div className="fybGamelist">
        <p>Game List:</p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ppl</th>
                    <th>Pts</th>
                    <th>By</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {gamelist.map((game,index) => (
                    <tr>
                        <td>{game.gameid}</td>
                        <td>{game.players.length}/{game.numPlayers}</td>
                        <td>{game.goal}</td>
                        <td>{game.players[0].nickname}</td>
                        <td>
                            {
                                game.players.length < game.numPlayers ?
                                    <button
                                        key={`joinButton${index}`}
                                        type="submit"
                                        onClick={() => {
                                            sendJoinGameRequest(client, thisisme, game.gameid, nickname);
                                            }}>
                                        JOIN
                                    </button>
                                : isPlayerInArray(game.players, nickname) ?
                                    <button
                                        key={`rejoinButton${index}`}
                                        type="submit"
                                        onClick={() => {
                                            sendRejoinGameRequest(client, thisisme, game.gameid, nickname);
                                            }}>
                                            REJOIN
                                    </button>
                                : 'In progress'
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

function getNickname(nickname, setNickname, setGotNickname) {
    return <div>
        <div>
            <label>Nickname:</label>
            <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => {
                    setNickname(e.target.value);
                } } />
        </div>
        {nickname && <div>
            <button
                className="fybLobbyButton"
                type="submit"
                onClick={() => {
                    let trimmed = nickname.trim();
                    setNickname(trimmed);
                    setGotNickname(true);
                }}>
                SUBMIT
            </button>
        </div>}
    </div>;
}

function getMainAction(setMainAction) {
    return <div>
        <button
            className="fybLobbyButton"
            type="submit"
            id="chooseCreateGame"
            onClick={() => {
                setMainAction('C');
            }}>
            CREATE A GAME
        </button>
    </div>;
}

function sendJoinGameRequest(client, thisisme, gameid, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'join',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function sendRejoinGameRequest(client, thisisme, gameid, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'rejoin',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function isPlayerInArray(players, nickname) {
    let found = false;
    for (let i = 0; i < players.length; i++) {
        if (players[i].nickname === nickname) {
            found = true;
        }
    }
    return found;
}

export default Lobby;  
