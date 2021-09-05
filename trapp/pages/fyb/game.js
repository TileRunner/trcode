import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setParticipant, wsmessage}) => {
    const [snat, setSnat] = useState('');
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);
      },[wsmessage])
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        setSnat(message);
        console.log(`messageData.type = ${messageData.type}`);
    }

    return (
        <>
        <h1>Game under construction</h1>
        <button onClick={() => setParticipant(c.PARTY_TYPE_UNDETERMINED)}>
            Return to lobby
        </button>
        <p>Snat={snat}</p>
        </>
    );
}

export default Game;