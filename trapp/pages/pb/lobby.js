import React, { useState, useEffect } from "react";
import Link from "next/link";
import Chat from '../pb/chatSection';
import * as c from '../../lib/pbcommon';

const buttonClassName = 'w3-button w3-border w3-blue w3-hover-black w3-round';
const availableActionNone = 0;
const availableActionStart = 1;
const availableActionJoin = 2;
const availableActionReconnect = 3;

const Lobby = ({client, setIsrejoin, wsmessage, gameid, setGameid, nickname, setNickname, setParticipant
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
      let sendergameid = messageData.gameid;
      let sendernickname = messageData.nickname;
      let wt = messageData.whoseturn;
      let rs = messageData.racksize;
      if (sendergameid && sendergameid.length > 0 && rs && wt && wt.length > 0) {
        let anyUpdates = false;
        let senderPG = messageData.sender;
        let newGamelist = [...gamelist];
        let gi = getGamelistIndex(sendergameid);
        let newPlayingP = senderPG === c.PARTY_TYPE_PRISONERS ? true : gi > -1 ? gamelist[gi].playingP : false;
        let newPlayingG = senderPG === c.PARTY_TYPE_GUARDS ? true : gi > -1 ? gamelist[gi].playingG : false;
        let newRacksize = rs;

        let newgamestatus = "Unknown";
        if (wt === c.WHOSE_TURN_GAMEOVER) {
          newgamestatus = "Game over";
        } else if (wt === c.WHOSE_TURN_PRISONERS) {
          newgamestatus = "Prisoners turn";
        } else if (wt === c.WHOSE_TURN_GUARDS) {
          newgamestatus = "Guards turn";
        }

        let newgamedata = {
          gameid: sendergameid,
          nicknameP: senderPG === c.PARTY_TYPE_PRISONERS ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
          nicknameG: senderPG === c.PARTY_TYPE_GUARDS ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
          gamestatus: newgamestatus,
          playingP: newPlayingP,
          playingG: newPlayingG,
          racksize: newRacksize
        }
        if (gi < 0) { // Game not in list yet, put it in the list
          anyUpdates = true;
          newGamelist = [...newGamelist, newgamedata];
        }
        else { // Game is in the list, check for needed updates
          let oldgamedata = gamelist[gi];
          if (oldgamedata.nicknameP !== newgamedata.nicknameP ||
              oldgamedata.nicknameG !== newgamedata.nicknameG ||
              oldgamedata.gamestatus !== newgamedata.gamestatus ||
              oldgamedata.playingP !== newgamedata.playingP ||
              oldgamedata.playingG !== newgamedata.playingG ||
              oldgamedata.racksize !== newgamedata.racksize
            ) {
              anyUpdates = true;
              newGamelist[gi] = newgamedata;
            }
        }
        if (anyUpdates) {
          setGamelist(newGamelist);
        }
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
    function isPlayingP(gid) {
      let gi = getGamelistIndex(gid);
      return gi < 0 ? false : gamelist[gi].playingP;
    }
    function availableActionP(gd) {
      if (nickname.length === 0 || gd.gamestatus === "Game over") { return availableActionNone; }
      if (!gd.playingP) { return availableActionStart; }
      if (gd.nicknameP === nickname) { return availableActionReconnect; }
      return availableActionNone;
    }
    function availableActionG(gd) {
      if (nickname.length === 0 || gd.gamestatus === "Game over") { return availableActionNone; }
      if (!gd.playingG) { return availableActionJoin; }
      if (gd.nicknameG === nickname) { return availableActionReconnect; }
      return availableActionNone;
    }
    function selectRackSize(newRacksize) {
      setRacksize(newRacksize);
    }
    return (
      <div>
        <div className="w3-container w3-teal w3-bar">
          <h1 className="w3-bar-item w3-centre myHeadingFont">Prison Break Lobby</h1>
          <div className="w3-bar-item w3-right">
            <Link href={"../../"}>
              <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
            </Link>
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
                          if (isPlayingP(gameid)) {
                            window.alert("Prisoners already playing that game");
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
                  <h3 className="myCommonFont">If you lost connection, find and click the "Reconnect" button for your game id.</h3>
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
                      </tr>
                    </thead>
                    <tbody>
                      {gamelist.map((value, index) => (
                        <tr key={`OtherGame${index}`} className="myCommonFont w3-hover-green">
                          <td className="w3-border-right"><b>{value.gameid}</b></td>
                          {availableActionP(value) === availableActionNone ?
                            <td id={`PrisonersNoAction${index}`} className="w3-border-right">No action available</td>
                          : availableActionP(value) === availableActionReconnect ?
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
                            :
                            <td id={`PrisonersStart${index}`} className="w3-border-right">
                              <button className={buttonClassName}
                                onClick={function () {
                                  setGameid(value.gameid);
                                  setParticipant(c.PARTY_TYPE_PRISONERS);
                                } }
                              >
                                Start Game
                              </button>
                            </td>
                          }
                          {availableActionG(value) === availableActionNone ?
                            <td id={`GuardsNoAction${index}`} className="w3-border-right">No action available</td>
                          : availableActionG(value) === availableActionReconnect ?
                            <td id={`GuardsRejoin${index}`} className="w3-border-right">
                              <button className={buttonClassName}
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
                            :
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
                          }
                          <td id={`RackSize${index}`} className="w3-center w3-border-right">
                            {value.racksize}
                          </td>
                          <td id={`GameStatus${index}`}>
                            {value.gamestatus}
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
  
const scrollToBottom = (elementid) => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
}

export default Lobby;  