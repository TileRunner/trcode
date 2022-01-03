import React, { useState } from "react";

const ThinChat = ({gameid="", client, nickname, msgs=[], setMsgs, participant=""}) => {
    const [nextmsg, setNextmsg] = useState('');
   
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && nextmsg.length > 0) {
        event.preventDefault();
        let newMsgs = [...msgs, {from: nickname, msg: nextmsg}]
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
            sendmsg: sendmsg // the message typed in the chat
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
  
    return (
      <div id="ScrollableChat" className="thinChat">
        <table>
          <tbody>
            {msgs.map((value, index) => (<>
              <tr key={`ChatMessageFrom${index}`}>
                <td className="thinChatFrom">{value.from}</td>
              </tr>
              <tr key={`ChatMessageMsg${index}`}>
                <td className="thinChatMsg">{value.msg}</td>
              </tr>
              </>))}
            <tr>
              <td colSpan="2">
                {nickname === "" ?
                  <span>Please enter nickname to use chat</span>
                :
                  <textarea className={nextmsg === "" ? "thinChatInputEmpty" : "thinChatInput"}
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
  
export default ThinChat;