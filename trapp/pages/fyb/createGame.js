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
            <div className="fybHeaderDiv">
                <span className="h2">Create Game</span>
            </div>
            <table>
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
                    className="fybLobbyButton"
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
            <div className="fybInputWarning">
                {!gameid &&
                    <p>Game ID is required</p>
                }
                {!(numPlayers > 1 && numPlayers < 7) &&
                    <p># Players is 2-6</p>
                }
                {!(goal > 2 && goal < 22) &&
                    <p>Pts to win is 3-21</p>
                }
            </div>
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