import React, { useState, useEffect } from "react";
import Link from "next/link";
import Chat from '../pb/chatSection';
import * as c from '../../lib/pb/prisonBreakConstants';
import { scrollToBottom } from "../../lib/scrollToBottom";

const buttonClassName = 'w3-button w3-border w3-blue w3-hover-black w3-round';
// There is no availableActionStart because there is a specific Start button in the Prisoners row
const availableActionNone = 0;
const availableActionJoin = 1;
const availableActionReconnect = 2;
const availableActionObserve = 3;
const availableActionExamine = 4;

const Lobby = ({setWhereto, client, setIsrejoin, wsmessage, gameid, setGameid, nickname, setNickname, setParticipant
    , racksize, setRacksize // Option for rack size
    }) => {
    const [gamelist, setGamelist] = useState([]) // Game info by game id
    const [chatmsgs, setChatmsgs] = useState([]);
  
    useEffect(() => {
      let msg = wsmessage;
      if (msg !== '') processLobbyMessage(msg);
    },[wsmessage])
    useEffect(() => {
      scrollToBottom("ScrollableChat");
    },[chatmsgs])
  
    function processLobbyMessage(message) {
      let messageData = JSON.parse(message);
      if (messageData.type === "pb" && messageData.func === "chat" && !messageData.gameid && messageData.nickname !== nickname) {
        let newChatmsgs = [...chatmsgs, {from: messageData.nickname, msg: messageData.sendmsg}];
        setChatmsgs(newChatmsgs);
        return;
      }
      if (messageData.type === "pb" && messageData.func === "gamelist") {
        // Accept the game list from the server
        let newGamelist = [];
        messageData.gamelist.forEach(element => {
          let newGameObject = {
            gameid: element.gameid,
            pname: element.pname,
            gname: element.gname,
            gamestatus: element.whoseturn === c.WHOSE_TURN_GAMEOVER ? "Game over" : "Unfinished",
            racksize: element.racksize
          };
          newGamelist.push(newGameObject);
        });
        setGamelist([...newGamelist]);
        return;
      }
    }
    function getGamelistIndex(gid) {
      for (var i = 0; i < gamelist.length; ++i) {
        if (gamelist[i].gameid === gid) {
          return i;
        }
      }
      return -1;
    }
    function gameAlreadyStarted(gid) {
      let gi = getGamelistIndex(gid);
      return gi > -1;
    }
    function availableActionP(gd) {
      if (nickname.length === 0) { return availableActionNone; } // No particpation without nickname
      if (gd.pname === nickname) { return availableActionReconnect; } // Allow reconnect if nickname matches
      if (gd.gname) { return availableActionObserve; } // If guards have joined allow observe
      return availableActionNone; // Guards have not joined to allow observe, not my game to allow reconnect
    }
    function availableActionG(gd) {
      if (nickname.length === 0) { return availableActionNone; } // No particpation without nickname
      if (gd.gname === nickname) { return availableActionReconnect; } // Allow reconnect if nickname matches
      if (!gd.gname) { return availableActionJoin; } // Allow join if guards have not joined
      if (gd.gamestatus === 'Game over') { return availableActionExamine; } // Allow examine if game over
      return availableActionNone; // The observe option is in the prisoners column
    }
    function selectRackSize(newRacksize) {
      setRacksize(newRacksize);
    }
    return (
      <div>
        <div className="w3-container w3-teal w3-bar">
          <h1 className="w3-bar-item w3-centre myHeadingFont">Prison Break Lobby</h1>
          <div className="w3-bar-item w3-right">
            <button className="w3-button" onClick={() => {setWhereto('menu');}}>
                <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
            </button>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-col s9">
            <div className="w3-container">
              <div className="w3-bar">
                <div className="w3-bar-item">
                  <h3><span className="pbPlayerTitle">All Participants ~</span></h3>
                </div>
                <div className="w3-bar-item">
                  <h3><b>Nickname:</b></h3>
                </div>
                <div className="w3-bar-item">
                  <input className="w3-input w3-border w3-blue myCommonFont" type="text"
                    name="nickname"
                    value={nickname}
                    onChange={(e) => {
                      setNickname(e.target.value);
                    } } />
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-bar">
                  <div className="w3-bar-item">
                    <h3><span className="pbPlayerTitle">Prisoners ~</span></h3>
                  </div>
                  <div className="w3-bar-item">
                    <h3><b>Game ID:</b></h3>
                  </div>
                  <div className="w3-bar-item">
                    <input className="w3-input w3-border w3-blue myCommonFont"
                      type="text"
                      name="gameid"
                      value={gameid}
                      onChange={(e) => {
                        setGameid(e.target.value);
                      } } />
                  </div>
                  <div className="w3-bar-item">
                    <h3><b>Rack Size:</b></h3>
                  </div>
                  <div className="w3-bar-item">
                    <div className="w3-row">
                      <button id="selectracksize4" className={racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
                        onClick={() => selectRackSize(4)}
                        data-toggle="tooltip" title="4 letter racks, 9 x 9 board"
                        autoFocus
                      >
                        4
                      </button>
                      <button id="selectracksize5" className={racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
                        onClick={() => selectRackSize(5)}
                        data-toggle="tooltip" title="5 letter racks, 11 x 11 board"
                      >
                        5
                      </button>
                      <button id="selectracksize6" className={racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
                        onClick={() => selectRackSize(6)}
                        data-toggle="tooltip" title="6 letter racks, 13 x 13 board"
                      >
                        6
                      </button>
                      <button id="selectracksize7" className={racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
                        onClick={() => selectRackSize(7)}
                        data-toggle="tooltip" title="7 letter racks, 15 x 15 board"
                      >
                        7
                      </button>
                    </div>
                    <div className="w3-row">
                      <span className="pbLobbyCellBlockInfo">{racksize} letter racks, {racksize*2+1} x {racksize*2+1} board.</span>
                    </div>
                    </div>
                  <div className="w3-bar-item">
                    <button id="startgame" className={buttonClassName}
                      onClick={function () {
                        if (nickname.length === 0) {
                          window.alert("Please enter nickname before starting a game");
                        } else if (gameid.length > 0) {
                          if (gameAlreadyStarted(gameid)) {
                            window.alert("Game already started with that id");
                          } else {
                            setParticipant(c.PARTY_TYPE_PRISONERS);
                          }
                        } else {
                          window.alert("Please enter Game ID before starting a game");
                        }
                      } }
                    >
                      Start Game
                    </button>
                  </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-bar">
                <div className="w3-bar-item">
                  <h3><span className="pbPlayerTitle">Guards ~</span></h3>
                </div>
                <div className="w3-bar-item">
                  <span className="myCommonFont"><h2>Find and click the "Join Game" button for your game.</h2></span>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-bar">
                <div className="w3-bar-item">
                  <h1><i className="material-icons w3-right">report_problem</i></h1>
                </div>
                <div className="w3-bar-item">
                  <h3 className="myCommonFont">If you lost connection, find and click the "Reconnect" button for your nickname.</h3>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <div className="w3-bar">
                <div className="w3-bar-item">
                  <h3 className="myCommonFont"><b>Game list:</b></h3>
                </div>
                <div className="w3-bar-item">
                  <table className="w3-table-all w3-card-4">
                    <thead>
                      <tr className="w3-blue h4 myCommonFont">
                        <th className="w3-border-right">Game ID</th>
                        <th className="w3-border-right">Prisoners</th>
                        <th className="w3-border-right">Guards</th>
                        <th className="w3-border-right">Rack Size</th>
                        <th>Game Status</th>
                        <th className="w3-border-left">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gamelist.map((value, index) => (
                        <tr key={`OtherGame${index}`} className="myCommonFont w3-grey w3-hover-green">
                          <td className="w3-border-right"><b>{value.gameid}</b></td>
                          {availableActionP(value) === availableActionReconnect ?
                            <td id={`PrisonersRejoin${index}`} className="w3-border-right">
                              <button className="w3-button w3-red w3-round w3-hover-black"
                                onClick={function () {
                                  setIsrejoin(true);
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_PRISONERS);
                                  setRacksize(value.racksize);
                                } }
                              >
                                Reconnect
                              </button>
                            </td>
                          :availableActionP(value) === availableActionObserve ?
                            <td id={`PrisonersObserve${index}`} className="w3-border-right">
                              <button className="w3-button w3-yellow w3-round w3-hover-black"
                                onClick={function () {
                                  setIsrejoin(false);
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_OBSERVER);
                                  setRacksize(value.racksize);
                                } }
                              >
                                Observe
                              </button>
                            </td>
                          :
                            <td id={`PrisonersNoAction${index}`} className="w3-border-right">No action available</td>
                          }
                          {availableActionG(value) === availableActionReconnect ?
                            <td id={`GuardsRejoin${index}`} className="w3-border-right">
                              <button className="w3-button w3-red w3-round w3-hover-black"
                                onClick={function () {
                                  setIsrejoin(true);
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_GUARDS);
                                  setRacksize(value.racksize);
                                } }
                              >
                                Reconnect
                              </button>
                            </td>
                          : availableActionG(value) === availableActionJoin ?
                            <td id={`GuardsJoin${index}`} className="w3-border-right">
                              <button className={buttonClassName}
                                onClick={function () {
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_GUARDS);
                                  setRacksize(value.racksize);
                                } }
                              >
                                Join Game
                              </button>
                            </td>
                          : availableActionG(value) === availableActionExamine ?
                            <td id={`GuardsExamine${index}`} className="w3-border-right">
                              <button className={buttonClassName}
                                onClick={function () {
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_EXAMINER);
                                  setRacksize(value.racksize);
                                } }
                              >
                                Examine Game
                              </button>
                            </td>
                          : 
                            <td id={`GuardsNoAction${index}`} className="w3-border-right">No action available</td>
                          }
                          <td id={`RackSize${index}`} className="w3-center w3-border-right">
                            {value.racksize}
                          </td>
                          <td id={`GameStatus${index}`}>
                            {value.gamestatus}
                          </td>
                          <td id={`DeleteGame${index}`} className="w3-border-left">
                            {(nickname === "TileRunner" || nickname === value.pname || nickname === value.gname) &&
                              <button className="w3-button w3-red w3-border w3-round w3-hover-black"
                                onClick={function() {
                                  client.send(
                                    {
                                      type: "pb",
                                      func: "deletegame",
                                      gameid: value.gameid // Game id
                                    }                         
                                  );
                                }}
                              >
                                Delete Game
                              </button>
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="w3-col s3">
            <Chat client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs}/>
          </div>
        </div>
        <div className="w3-container w3-teal">
          <h1>Have fun!</h1>
        </div>
      </div>
    )
  }
  
export default Lobby;  