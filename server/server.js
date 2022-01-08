const _ = require('cors');
const express = require("express");
const { Server } = require("ws");
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // For reading environment variables
const allowedCaller = (process.env.NODE_ENV === 'production' ? 'https://tilerunner.herokuapp.com' : 'http://localhost:3000')
const clientTypeFryYourBrain = 'fyb';
const clientTypePrisonBreak = 'pb';
const { pbInitialize, processMessagePB } = require('./pb/processMessagePB');
const { fybInitialize, processMessageFYB } = require('./fyb/processMessageFYB');
const allwordsunsplit = readWordList();
const allwords = allwordsunsplit.replace(/[\r\n]+/gm, "|").split('|');
const clubdata = readclubdata();
const chats = [];
const logmsgs = ['Server start'];

function readclubdata() {
  let scdata = {};
  try {
    var wpath = path.join(__dirname, "ScrabbleClubData.js");
    data = fs.readFileSync(wpath).toString();
    scdata = JSON.parse(data);
  }
  catch (e) {
    console.log(`Error reading club data ${e}`);
    scdata.clubList = [];
    scdata.clubFinancialEntryList = [];
    scdata.clubMemberList = [];
    scdata.clubNightList = [];
    scdata.clubPlayerStatsList = [];
    scdata.clubGameList = [];
    scdata.clubWinsCertList = [];
    scdata.playerList = [];
  }
  return scdata;
}

function readWordList() {
    let data = '';
    try
    {
      var wpath = path.join(__dirname, "ENABLE2K_word_list.txt");
      data = fs.readFileSync(wpath).toString();
    }
    catch (e)
    {
      console.log(`Error reading word list ${e}`);
    }
    return data;
}
function getValid(word, wordssamelength) {
    return wordssamelength.indexOf(word) > -1 ? 'Y' : 'N'
}
function getAnagrams(word, wordssamelength) {
    let anagrams = []
    let alphagramarray = word.split('')
    alphagramarray.sort()
    let alphagram = alphagramarray.join()
    let checkword = ''
    for (checkword of wordssamelength) {
      if (checkword !== word) {
        let newalphagram = checkword.split('')
        newalphagram.sort()
        let calphagram = newalphagram.join()
        if (alphagram === calphagram) {
          anagrams = [...anagrams, checkword]
        }
      }
    }
    return anagrams
}
  
function getSwaps(word, wordssamelength) {
    let swaps = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < word.length; i++) {
      let swap = ''
      for (var j = 0; j < 26; j++) {
        if (word[i] !== alphabet[j]) {
          let testword = [...word]
          testword[i] = alphabet[j]
          let checkword = testword.join('')
          if (wordssamelength.indexOf(checkword) > -1) {
            swap = swap + alphabet[j]
          }
        }
      }
      swaps = [...swaps, swap]
    }
    return swaps
}
function getDrops(word, wordsonelesslength) {
    let drops = []
    for (var i = 0; i < word.length; i++) {
      let testword = word.split('').filter((el,index) => {return index !== i;})
      let checkword = testword.join('')
      let drop = wordsonelesslength.indexOf(checkword) > -1 ? 'Y' : 'N'
      drops = [...drops, drop]
    }
    return drops
}
function getInserts(word, wordsonelonger) {
    let inserts = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i <= word.length; i++) {
      let insert = ''
      for (var j = 0; j < 26; j++) {
        let testword = word.split('')
        testword.splice(i, 0, alphabet[j])
        let checkword = testword.join('')
        if (wordsonelonger.indexOf(checkword) > -1) {
          insert = insert + alphabet[j]
        }
    }
      inserts = [...inserts, insert]
    }
    return inserts
}  
const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .get("/evtest", (_req, res) => {
        let evtest = process.env.NEXT_PUBLIC_CODER_MESSAGE; // On developers local computer environment variables and heroku config settings
        res.header("Access-Control-Allow-Origin", allowedCaller);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({test: 'value', evtest: evtest, lextest: `${allwords.length.toString()} words read from ENABLE2K`});
    })
    // Handle request for club list
    .get("/clubdata/clublist", (_req, res) => {
        // Handle who can call this
        res.header("Access-Control-Allow-Origin", allowedCaller);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // Return the club list
        res.json(clubdata.clubList);
        return;
    })
    // Handle request for player list
    .get("/clubdata/playerlist", (_req, res) => {
      // Handle who can call this
      res.header("Access-Control-Allow-Origin", allowedCaller);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      // Return the player list
      res.json(clubdata.playerList);
      return;
    })
    // Handle request for club night list for a club
    .get("/clubdata/clubnightlist", (req, res) => {
      // Handle who can call this
      res.header("Access-Control-Allow-Origin", allowedCaller);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      // Get the club night list for the club
      let clubid = parseInt(req.query.clubid);
      let clubnights = clubdata.clubNightList.filter(function (e) {
        return e.ClubId === clubid;
      });
      // Return the club night list
      res.json(clubnights);
      return;
    })
    // Handle request for club game list for a club night
    .get("/clubdata/clubgamelist", (req, res) => {
      // Handle who can call this
      res.header("Access-Control-Allow-Origin", allowedCaller);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      // Get the club game list for the club night
      let clubnightid = parseInt(req.query.clubnightid);
      let clubgames = clubdata.clubGameList.filter(function (e) {
        return e.ClubNightId === clubnightid;
      });
      // Return the club game list
      res.json(clubgames);
      return;
    })
    .get("/ENABLE2K", (req, res) => {
        // Handle who can call this
        res.header("Access-Control-Allow-Origin", allowedCaller);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // Handle picking random word for Word Mastermind
        if (req.query.random) {
            // The desired word length is passed in 'random'
            let wlen = parseInt(req.query.random);
            let wordssamelength = allwords.filter(function (e) {
              return e.length === wlen;
            });
            let rand = Math.floor(Math.random() * wordssamelength.length);
            let randomword = wordssamelength[rand];
            res.json(randomword);
            return;
        }
        // Handle checking if passed word exists
        if (req.query.exists) {
            // The word to check is passed in 'exists'
            let word = req.query.exists.toLowerCase();
            let exists = {exists:allwords.indexOf(word) > -1};
            res.json(exists);
            return;
        }
        // Handle getting info for passed letters
        if (req.query.letters) {
            // The desired group of letters is passed in 'letters'
            let word = req.query.letters.toLowerCase();
            let wlen = word.length;
            let wordssamelength = allwords.filter(function (e) {
              return e.length === wlen;
            });
            let sublength = wlen - 1;
            let wordsonelesslength = allwords.filter(function (e) {
              return e.length === sublength;
            });
            let nextlength = word.length + 1;
            let wordsonelonger = allwords.filter(function (e) {
              return e.length === nextlength;
            });
            let valid = getValid(word, wordssamelength);
            let anagrams = getAnagrams(word, wordssamelength);
            let swaps = getSwaps(word, wordssamelength);
            let drops = getDrops(word, wordsonelesslength);
            let inserts = getInserts(word, wordsonelonger);
            res.send({valid, anagrams, swaps, drops, inserts});
            return;
        }
        // Handle getting regex matches for passed letters
        if (req.query.regex) {
            let regexmatches = []
            try {
              let regex = new RegExp("\\b" + req.query.regex + "\\b",'g')
              let regexresult = allwordsunsplit.match(regex) || []
              regexmatches = [...regexmatches, ...regexresult]
            } catch(e) {
              regexmatches = [`Regex internal error ${e}`]
            }
            let count = regexmatches.length;
            if (regexmatches.length > 50) {
              regexmatches = regexmatches.slice(0,50)
            }
            res.send({regexmatches: [...regexmatches], count: count})
            return;
        }
        // Handle getting comma separated list of words to validate
        if (req.query.validate) {
            let validwords = [];
            let invalidwords = [];
            let checkwords = req.query.validate.toLowerCase().replace(/\?/g,".").replace("q","qu?").split(",");
            checkwords.forEach((checkword) => {
                let regex = new RegExp("\\b" + checkword + "\\b",'g')
                if (allwordsunsplit.match(regex)) {
                    validwords.push(checkword.replace("qu?","q(u)"));
                } else {
                    invalidwords.push(checkword.replace("qu?","q(u)"));
                } 
            });
            res.send({validwords: validwords, invalidwords: invalidwords});
            return;
        }
        res.status(404).send('What are you asking?');
    })
    .listen(PORT, () => {
        console.log(`Listening on ${PORT} in mode ${process.env.MODE_ENV === "production" ? "production" : "development"}`);
        pbInitialize();
        fybInitialize(allwords);
    });

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    let urlParams = new URLSearchParams(req.url.slice(1)); // Need to remove leading /
    let clientType= urlParams.get('clientType');
    let thisisme = urlParams.get('thisisme');
    ws.thisisme = thisisme;
    ws.clientType = clientType;

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
      try {
        processMessage(message);
      } catch (error) {
        logmsgs.forEach(l => {console.log(l);});
        console.log(error);
      }
    });
});

const processMessage = (message) => {
    let pm = JSON.parse(message);
    logmsgs.push(`${pm.type} ${pm.func} ${pm.gameid} ${pm.nickname} ${pm.thisisme}`);
    if (logmsgs.length > 20) {logmsgs.splice(0,1);}
    let chatactions = {needchatremove: false, needchatupdate: false};
    if (pm.func === "chat") {
        handleChatMessages(pm, message);
    }
    else if (pm.type === clientTypePrisonBreak) {
        processMessagePB(wss, pm, message);
    }
    else if (pm.type = clientTypeFryYourBrain) {
        chatactions = processMessageFYB(wss, pm);
    }
    if (chatactions.needchatremove) {
      removeGameChat(pm);
    } else if (chatactions.needchatupdate) {
      updateGameChatClients(pm);
    }
}

const removeGameChat = (pm) => {
  for (let index = 0; index < chats.length; index++) {
    const chat = chats[index];
    if (chat.clientType === pm.clientType && chat.gameid === pm.gameid) {
      chats.splice(index,1);
      return;
    }
  }
}

const updateGameChatClients = (pm) => {
  for (let index = 0; index < chats.length; index++) {
    const chat = chats[index];
    if (chat.clientType === pm.clientType && chat.gameid === pm.gameid) {
      let jsend = {
        type: pm.clientType,
        gameid: pm.gameid,
        func: 'CHAT_DATA',
        msgs: chat.msgs
      };
      let tsend = JSON.stringify(jsend);
      wss.clients.forEach((client) => {
        if (client.clientType === pm.type && client.gameid === pm.gameid) {
          client.send(tsend);
        }
      });
    }
  }
}

const handleChatMessages = (pm, message) => { // pm=json object, message=string of json
  // For fyb, chat is only within a game. Keep the chat array here so people can see
  // chats from before they entered the game.
  if (pm.clientType === clientTypeFryYourBrain) {
    let chatfound = false;
    let msg = {from: pm.nickname, msg: pm.sendmsg, created: Date.now()};
    for (let index = 0; index < chats.length; index++) {
      const chat = chats[index];
      if (chat.clientType === pm.clientType && chat.gameid === pm.gameid) {
        chatfound = true;
        chat.msgs.push(msg);
      }
    }
    if (!chatfound) {
      const chat = {clientType: pm.clientType, gameid: pm.gameid, msgs: [msg]};
      chats.push(chat);
    }
    // Clean up all chats
    let cutoff = Date.now() - 600000; // this many milliseconds ago
    for (let index = chats.length - 1; index > -1; index--) {
      const chat = chats[index];
      // Only keep messages for so long
      while (chat.msgs.length > 0 && chat.msgs[0].created < cutoff) {
        chat.msgs.splice(0,1);
      }
      // Remove if empty
      if (chat.msgs.length === 0) {
        chats.splice(index,1);
      }
    };
    updateGameChatClients(pm);   
    return;
  }
/* Send the chat message to clients that need it
   Overall rule - only send message to clients with the same client type (e.g. 'pb' for Prison Break)
   Overall rule - do not send message back to sender
   Table below shows when to send

   Sender       Client      Action      Rule/Note
   ------------ ----------  ------      ---------
   lobby        lobby       send        Lobby dwellers have sender/participant=U (undefined) and no gameid
   prisoners    guards      send        Same gameid
   guards       prisoners   send        Same gameid
   observer     observer    send        Same gameid
   examiner     examiner    send        Same gameid
*/
  wss.clients.forEach((client) => {
    if (client.clientType === pm.type) { // Same type of game
      if (client.thisisme === pm.thisisme) { // This is the client that sent the message
        // Don't send the chat back to the caller
      } else if (pm.gameid) { // Sent from within a game, not from lobby
        if (pm.gameid === client.gameid) { // Client is in same game as sender
          if (pm.type !== clientTypePrisonBreak
          || (pm.sender === 'O' && client.participant === 'O') // Observers chat
          || (pm.sender === 'E' && client.participant === 'E') // Examiners chat
          || (pm.sender === 'P' && client.participant === 'G') // Prisoners to Guards
          || (pm.sender === 'G' && client.participant === 'P') // Guards to Prisoners
          ) {
            client.send(message);
          }
        }
      } else { // Sent from lobby, not from within a game
        if (!client.gameid) { // Client is in lobby - send message from lobby
          client.send(message);
        }
      }
    }
  });
}
