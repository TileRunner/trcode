const _ = require('cors');
const express = require("express");
const { Server } = require("ws");
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 5000;
const {
  ServeFybChatMessage,
  ServeFybCreateGame,
  ServeFybGetChat,
  ServeFybGetGame,
  ServeFybJoinGame,
  ServeFybListGames,
  ServeFybMakeMove,
  ServeFybPlayAgain,
  ServerFybStartGame
} = require('./fyb/serveFYB');
const { fybPrepickTiles, wordHasFryLetters} = require('./fyb/functions');
const clientTypePrisonBreak = 'pb';
const { pbInitialize, processMessagePB } = require('./pb/processMessagePB');
const { getAnagrams
  , getSwaps
  , getDrops
  , getInserts
  , createMorphoPuzzle
  , createTransmogrifyPuzzle
  , getTransmogrifyValidNextWords} = require('./wordstuff/wordfunctions');
const allwordsunsplit = readWordList();
const allwords = allwordsunsplit.replace(/[\r\n]+/gm, "|").split('|');
// 2 letters words at [2] .... 8 letter words at [8].
const wordsByLength = [
  [],[] // No zero or one letter words
  , allwords.filter(w => {return w.length === 2;})
  , allwords.filter(w => {return w.length === 3;})
  , allwords.filter(w => {return w.length === 4;})
  , allwords.filter(w => {return w.length === 5;})
  , allwords.filter(w => {return w.length === 6;})
  , allwords.filter(w => {return w.length === 7;})
  , allwords.filter(w => {return w.length === 8;})
  ];
const alphagramsByLength = [
  {},{} // No zero or one letter words
  , makeAlphagramList(wordsByLength[2])
  , makeAlphagramList(wordsByLength[3])
  , makeAlphagramList(wordsByLength[4])
  , makeAlphagramList(wordsByLength[5])
  , makeAlphagramList(wordsByLength[6])
  , makeAlphagramList(wordsByLength[7])
  , makeAlphagramList(wordsByLength[8])
  ];
const anagramsByLength = [
  {},{} // No zero or one letter words
  , makeAnagramList(wordsByLength[2])
  , makeAnagramList(wordsByLength[3])
  , makeAnagramList(wordsByLength[4])
  , makeAnagramList(wordsByLength[5])
  , makeAnagramList(wordsByLength[6])
  , makeAnagramList(wordsByLength[7])
  , makeAnagramList(wordsByLength[8])
]
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

function makeAnagramList(wordlist) {
  let anagrams = Object.assign({}, ...wordlist.map(w => ({[w]: true})));
  return anagrams;
}

function makeAlphagramList(wordlist) {
  let alphagrams = {};
  wordlist.forEach(word => {
    let a = Array.from(word);
    a.sort();
    let alphagram = a.join('');
    let anagrams = [];
    if (alphagrams[alphagram]) {
      anagrams = alphagrams[alphagram].anagrams;
    }
    anagrams.push(word);
    alphagrams = Object.assign(alphagrams, {[alphagram]: {anagrams: anagrams}});
  });
  return alphagrams;
}

function getValid(word, wordssamelength) {
    return wordssamelength.indexOf(word) > -1 ? 'Y' : 'N'
}

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .get("/fyb/chatmessage", (req, res) => { ServeFybChatMessage(res, req); })
    .get("/fyb/creategame", (req, res) => { ServeFybCreateGame(res, req); })
    .get("/fyb/getchat", (req, res) => { ServeFybGetChat(res, req); })
    .get("/fyb/getgame", (req, res) => { ServeFybGetGame(res, req); })
    .get("/fyb/joingame", (req, res) => { ServeFybJoinGame(res, req); })
    .get("/fyb/listgames", (req, res) => { ServeFybListGames(res, req); })
    .get("/fyb/makemove", (req, res) => { ServeFybMakeMove(res, req); })
    .get("/fyb/playagain", (req, res) => { ServeFybPlayAgain(res, req); })
    .get("/fyb/startgame", (req, res) => { ServerFybStartGame(res, req, fybPrepickTiles(allwords, 6)); })
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
        // Handle request for a morpho puzzle
        if (req.query.morpho) {
          // Handle who can call this
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          let notes = [];
          let jret = {func:'morpho'};
          // Validate parameters
          let numCols = 0;
          let numRows = 0;
          if (!req.query.len) {
            notes.push('Parameter &len is required.');
          } else if (isNaN(req.query.len)) {
            notes.push('Value of &len should be numeric.');
          } else {
            numCols = Number(req.query.len);
            if (numCols > 8) {
              notes.push('Maximum value of &len is 8.');
            } else if (numCols < 2) {
              notes.push('Minimum value of &len is 2.');
            } else {
              numRows = numCols + 1;
              if (numCols === 8) {
                numRows = 8; // The most I ever saw it get was rowIndex 7 after many thousands of iterations
              }
              jret.numRows = numRows;
              jret.numCols = numCols;
            }
          }
          if (notes.length > 0) {
            jret.notes = notes;
            res.send(jret);
            return;
          }
          let morpho = createMorphoPuzzle(anagramsByLength[numCols], numRows, numCols);
          if (morpho.fail) {
            jret.notes = [morpho.fail];
          } else {
            jret.puzzle = morpho.puzzle;
          }
          res.send(jret);
          return;
        }
        // Handle request for a transmogrify puzzle
        if (req.query.transmogrify) {
          // Handle who can call this
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          let notes = [];
          let jret = {func:'transmogrify'};
          // Validate parameters
          if (!req.query.numMoves) {
            notes.push('Parameter &numMoves is required.');
          } else if (isNaN(req.query.numMoves)) {
            notes.push('Value of &numMoves should be numeric.');
          } else {
            let numMoves = Number(req.query.numMoves);
            if (numMoves > 9) {
              notes.push('Maximum value of &numMoves is 9.');
            } else if (numMoves < 2) {
              notes.push('Minimum value of &numMoves is 2.');
            } else {
              jret.numMoves = numMoves;
            }
          }
          if (notes.length > 0) {
            jret.notes = notes;
            res.send(jret);
            return;
          }
          let tm = createTransmogrifyPuzzle(anagramsByLength, alphagramsByLength, jret.numMoves);
          if (tm.fail) {
            jret.notes = [tm.fail];
          } else {
            jret.startWord = tm.startWord;
            jret.targetWord = tm.targetWord;
          }
          res.send(jret);
          return;
        }
        // Handle who can call this
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // Handle request for top answers for fry letters
        if (req.query.topfry) {
          let notes = []; // Error notes
          let jret = {func: 'topfry'}; // Response json
          // Validate parameters
          let letters = /^[A-Za-z]+$/;
          let fryLetters = '';
          if (!req.query.letters || req.query.letters.length < 3 || !req.query.letters.match(letters)) {
            notes.push('&letters must be 3 or more letters.');
          } else {
            fryLetters = req.query.letters.toUpperCase();
            jret.fryLetters = fryLetters;
          }
          let numWanted = 0;
          if (!req.query.count) {
            notes.push('Parameter &count is required.');
          } else if (isNaN(req.query.count)) {
            notes.push('Value of &count should be numeric.');
          } else if (req.query.count > 50) {
            notes.push('Maximum value of &count is 50.');
          } else if (req.query.count < 1) {
            notes.push('Minimum value of &count is 1.');
          } else {
            numWanted = req.query.count;
            jret.numWanted = numWanted;
          }
          let numSeen = 0;
          if (req.query.seen) {
            if (isNaN(req.query.seen)) {
              notes.push('Parameter &seen should be numeric if specified.');
            } else if (req.query.seen < 0) {
              notes.push('Parameter &seen should not be negative.');
            } else {
              numSeen = req.query.seen;
              jret.numSeen = numSeen;
            }
          }
          if (notes.length > 0) {
            jret.notes = notes;
            console.log(`topfry fail notes ${JSON.stringify(jret)}`);
            res.send(jret);
            return;
          }
          let possibleAnswers = allwords.filter(w => {return wordHasFryLetters(fryLetters, w);});
          let numPossibleAnswers = possibleAnswers.length;
          jret.numPossibleAnswers = numPossibleAnswers;
          if (numSeen >= numPossibleAnswers) {
            possibleAnswers = []; // Already seen all answers
          } else {
            possibleAnswers.sort(function (a, b) { return a.length < b.length ? -1 : b.length < a.length ? 1 : a < b ? -1 : 1; });
            if (numSeen > 0) {
              possibleAnswers.splice(0, numSeen); // Remove the ones already seen
            }
          }
          if (possibleAnswers.length > numWanted) {
            possibleAnswers.splice(numWanted); // Take only the number wanted
          }
          jret.answers = possibleAnswers;
          res.send(jret);
          return;
        }
        // Handle request to prepick a set of fyb letters
        if (req.query.prepickfry) {
          let notes = []; // Error notes
          let jret = {func: 'prepickfry'}; // Response json
          // Validate parameters
          let guarantee = 0;
          if (!req.query.guarantee) {
            notes.push('Parameter guarantee is required.');
          } else if (isNaN(req.query.guarantee)) {
            notes.push('Value of guarantee should be numeric.');
          } else if (req.query.guarantee > 15) {
            notes.push('Maximum value of guarantee is 15.');
          } else if (req.query.guarantee < 3) {
            notes.push('Minimum value of guarantee is 3.');
          } else {
            guarantee = req.query.guarantee;
            jret.guarantee = guarantee;
          }
          if (notes.length > 0) {
            jret.notes = notes;
            console.log(`prepickfry fail notes ${JSON.stringify(jret)}`);
            res.send(jret);
            return;
          }
          // Pick the letters
          let fryLetters = fybPrepickTiles(allwords, guarantee);
          jret.fryLetters = fryLetters;
          res.send(jret);
          return;
        }
        // Handle getting info for passed letters
        if (req.query.letters) {
            // The desired group of letters is passed in 'letters'
            let word = req.query.letters.toLowerCase();
            // If they send with tm=true then return valid transmogrify moves
            if (req.query.tm) {
              let tm = getTransmogrifyValidNextWords({}, word, anagramsByLength, alphagramsByLength);
              tm.sort();
              res.send({func: 'tm moves', from: word, to: tm});
              return;
            }
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

