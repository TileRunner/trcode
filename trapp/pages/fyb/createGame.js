import React, { useState } from "react";
import * as c from '../../lib/fyb/constants';

const CreateGame = ({
    client
    , thisisme
    , nickname
    , gameid
    , setGameid
    }) => {

    const [numPlayers, setNumPlayers] = useState(2); // How many players, default 2
    const [goal, setGoal] = useState(11); // How many points needed to win, default 11

    return (
        <div>
            <div className="trSubtitle">
                Create Game
            </div>
            <table className="trTable">
                <tbody>
                <tr>
                    <td><label>Game ID:</label></td>
                    <td><input
                        type="text"
                        name="gameid"
                        value={gameid}
                        onChange={(e) => {
                            setGameid(e.target.value);
                        } } /></td>
                </tr>
                <tr>
                    <td><label># Players:</label></td>
                    <td><input
                        type="number"
                        name="numPlayers"
                        value={numPlayers}
                        onChange={(e) => { setNumPlayers(e.target.value); } } 
                        /></td>
                </tr>
                <tr>
                    <td><label>Pts to win:</label></td>
                    <td><input
                        type="number"
                        name="goal"
                        value={goal}
                        onChange={(e) => { setGoal(e.target.value); } } 
                        /></td>
                </tr>
                </tbody>
            </table>
            {gameid && numPlayers > 1 && numPlayers < 7 && goal > 2 && goal < 22 &&
                <button
                    className="trButton"
                    id="requestCreateGame"
                    type="submit"
                    onClick={() => {
                        let trimmed = gameid.trim();
                        setGameid(trimmed);
                        sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname);
                        }}>
                    SUBMIT
                </button>
            }
            {!gameid &&
                <div className="trWarning">Game ID is required</div>
            }
            {!(numPlayers > 1 && numPlayers < 7) &&
                <div className="trWarning"># Players is 2-6</div>
            }
            {!(goal > 2 && goal < 22) &&
                <div className="trWarning">Pts to win is 3-21</div>
            }
        </div>
    );
}

function sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'create',
        thisisme: thisisme,
        gameid: gameid,
        numPlayers: numPlayers,
        goal: goal,
        nickname: nickname,
        timestamp: Date.now()
    });
}

export default CreateGame;