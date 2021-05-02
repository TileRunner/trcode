import React, { useState } from "react";

const Chat = ({gameid="", client, nickname, msgs=[], setMsgs, participant=""}) => {
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
            gameid: gameid, // the id for the game
            nickname: nickname, // player nickname
            type: "pb", // prisonbreak
            func: "chat", // send chat message
            sender: participant, // who sent it
            sendmsg: sendmsg // the message typed in the chat
          }
        );
        return;
      }
      // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
      // if (event.key.match(chartest)) {
      //   let newNextmsg = nextmsg + event.key;
      //   setNextmsg(newNextmsg);
      // }
      if (event.key === "Backspace" && nextmsg.length > 0) {
        event.preventDefault();
        let newNextmsg = nextmsg.slice(0,nextmsg.length-1);
        setNextmsg(newNextmsg);
      }
    }
  
    return (
      <div id="ScrollableChat" className="pbChat">
        <table className="pbChatTable">
          <tbody>
            {msgs.map((value, index) => (
              <tr key={`ChatMessage${index}`}>
                <td className="pbChatFrom">{value.from}</td>
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
  
export default Chat;