import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setParticipant, wsmessage, nickname, gameid, numPlayers}) => {
    const [snat, setSnat] = useState('');
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);
      },[wsmessage])
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === 'fyb') {
            if (messageData.func === 'gamecreated') {
                setSnat('Game created. Waiting for players to arrive.');
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    return (
        <div>
            <div className="w3-teal w3-cell-row">
                <div className="w3-container w3-cell w3-cell-middle ws-padding w3-mobile">
                    <h1 className="myHeadingFont">Fry Your Brain</h1>
                </div>
                <div className="w3-container w3-cell w3-mobile">
                    <h4 className="myCommonFont">Game id: {gameid}</h4>
                    <h4 className="myCommonFont">Nickname: {nickname}</h4>
                    <h4 className="myCommonFont">{numPlayers} player game</h4>
                </div>
            </div>
            <h1>Game under construction</h1>
            <button onClick={() => setParticipant(c.PARTY_TYPE_UNDETERMINED)}>
                Return to lobby
            </button>
            <p>Snat={snat}</p>
        </div>
    );
}

export default Game;