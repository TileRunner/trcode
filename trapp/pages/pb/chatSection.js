import React, { useState } from "react";
import PropTypes from "prop-types";

const Chat = ({gameid="", client, nickname, msgs=[], setMsgs, participant=""}) => {
    const [nextmsg, setNextmsg] = useState('');
   
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && nextmsg.length > 0) {
        event.preventDefault();
        let created = Date.now();
        let newMsgs = [...msgs, {created: created, from: nickname, msg: nextmsg}]
        let sendmsg = nextmsg;
        setMsgs(newMsgs);
        setNextmsg('');
        client.send(
          {
            gameid: gameid, // the id for the game (blank if in lobby)
            nickname: nickname, // player nickname
            type: client.clientType, // type of client
            func: "chat", // send chat message
            sender: participant, // who sent it
            sendmsg: sendmsg, // the message typed in the chat
            created: created // the time the message was created
          }
        );
        return;
      }
      if (event.key === "Backspace" && nextmsg.length > 0) {
        event.preventDefault();
        let newNextmsg = nextmsg.slice(0,nextmsg.length-1);
        setNextmsg(newNextmsg);
      }
    }
    const formatTime = (t) => {
      let d = new Date(t);
      let h = d.getHours();
      let m = d.getMinutes();
      let f = '@'; 
      if (h < 10) { f = f +'0';}
      f = f + h.toString() + ':';
      if (m < 10) { f = f + '0';}
      f = f + m.toString();
      return f;
    }
  
    return (
      <div id="ScrollableChat" className="pbChat">
        <table className="pbChatTable">
          <tbody>
            {msgs.map((value, index) => (
              <tr key={`ChatMessage${index}`}>
                <td className="pbChatFrom">{formatTime(value.created)} {value.from}</td>
                <td className="pbChatMsg">{value.msg}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">
                {nickname === "" ?
                  <span>Please enter nickname to use chat</span>
                :
                  <textarea className={nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput"}
                    name="nextmsgInputArea"
                    value={nextmsg}
                    onChange={(e) => {setNextmsg(e.target.value);}}
                    onKeyDownCapture={handleKeyDown}
                    placeholder="chat..."
                  />
                }
              </td>
            </tr>
          </tbody>
        </table>
     </div>
    )
}
  
Chat.propTypes = {
  gameid: PropTypes.string.isRequired,
  client: PropTypes.any,
  nickname: PropTypes.string.isRequired,
  msgs: PropTypes.arrayOf(PropTypes.string),
  setMsgs: PropTypes.func.isRequired,
  participant: PropTypes.string.isRequired
};

export default Chat;