const _ = require('cors');
const express = require("express");
const { Server } = require("ws");
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 5000;
const clientTypePrisonBreak = 'pb';
const { pbInitialize, processMessagePB } = require('./pb/processMessagePB');
const { getAnagrams
  , getSwaps
  , getDrops
  , getInserts
  } = require('./wordstuff/wordfunctions');
const allwordsunsplit = readWordList();
const allwords = allwordsunsplit.replace(/[\r\n]+/gm, "|").split('|');
const logmsgs = ['Server start'];

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

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .get("/ENABLE2K", (req, res) => {
        // Handle picking random word for Word Mastermind
        if (req.query.random) {
          // Handle who can call this
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
          // Handle who can call this
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          // The word to check is passed in 'exists'
          let word = req.query.exists.toLowerCase();
          let exists = {exists:allwords.indexOf(word) > -1};
          res.json(exists);
          return;
        }
        // Handle who can call this
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
    });

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    let urlParams = new URLSearchParams(req.url.slice(1)); // Need to remove leading /
    let clientType= urlParams.get('clientType');
    let thisisme = urlParams.get('thisisme');
    ws.thisisme = thisisme;
    ws.clientType = clientType;

    // When I am trying to look at logs from prod, I don't want to see the message below.
    // ws.on("close", () => console.log("Client disconnected"));

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
    if (pm.func === "chat") {
        handleChatMessages(pm, message);
    }
    else if (pm.type === clientTypePrisonBreak) {
        processMessagePB(wss, pm, message);
    }
}

const handleChatMessages = (pm, message) => { // pm=json object, message=string of json
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

