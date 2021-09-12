//import { json } from "express";
import React, { useState, useEffect } from "react";
//import * as c from '../../lib/fyb/constants';

const Game = ({setWhereto, setParticipant, wsmessage, nickname, gameid, numPlayers}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({players:[{index: 0, nickname: 'Loading...'}], events:[]});
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);
      },[wsmessage])
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === 'fyb') {
            if (messageData.func === 'gamecreated') {
                console.log(messageData.game);
                setSnat('Game created. Waiting for players to arrive.');
                setGamedata(messageData.game);
            } else if (messageData.func === 'gamejoined') {
                setSnat(`${messageData.nickname} just joined the game.`);
                setGamedata(messageData.game);
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    return (
        <div>
            <div className="w3-teal w3-cell-row">
                <div className="w3-container w3-cell w3-cell-middle w3-padding w3-mobile">
                    <h1 className="myHeadingFont">Fry Your Brain</h1>
                </div>
                <div className="w3-container w3-cell w3-mobile">
                    <h4 className="myCommonFont">Game id: {gameid}</h4>
                    <h4 className="myCommonFont">Nickname: {nickname}</h4>
                    <h4 className="myCommonFont">{numPlayers} player game</h4>
                </div>
                <div className="w3-container w3-cell w3-padding w3-mobile">
                    <button className="w3-button" onClick={() => {setWhereto('menu');}}>
                        <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                    </button>
                </div>
            </div>
            <h1>Game under construction</h1>
            <p>{snat}</p>
            <p>Players:</p>
            {gamedata.players.map((pl) => (
                <p key={`Player{pl.index}`}>{pl.nickname}</p>
            ))}
        </div>
    );
}

export default Game;