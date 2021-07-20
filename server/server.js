const _ = require('cors');
const express = require("express");
const { Server } = require("ws");
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // For reading environment variables
const allowedCaller = (process.env.NODE_ENV === 'production' ? 'https://tilerunner.herokuapp.com' : 'http://localhost:3000')
const axios = require('axios').default; // For API calls
const dataApiUrl = 'https://json.extendsclass.com/bin'; // This is not a secret
const dataApiKey = process.env.NEXT_PUBLIC_DATAAPIKEY; // This is a secret
var gameApiInfoMap = []; // For mapping gameid to the id assigned by the API that is used, plus next event index

const allwordsunsplit = readWordList();
const allwords = allwordsunsplit.replace(/[\r\n]+/gm, "|").split('|');
function readWordList() {
    let data = '';
    try
    {
      var wpath = path.join(__dirname, "ENABLE2K_word_list.txt");
      data = fs.readFileSync(wpath).toString();
      console.log(`Read word list ok`);
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
        console.log(`Listening on ${PORT}`);
        setupGameApiInfoMap();
    });

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    let urlParams = new URLSearchParams(req.url.slice(1)); // Need to remove leading /
    let clientType= urlParams.get('clientType'); // pb=Prison Break
    let thisisme = urlParams.get('thisisme');
    ws.thisisme = thisisme;
    ws.clientType = clientType;

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
        processMessage(message);
    });
});

const processMessage = (message) => {
    let pm = JSON.parse(message);
    if (pm.type === "pb") {
        processPrisonBreakMessage(pm, message);
    }
    else if (pm.func === "chat") {
        handleChatMessages(pm, message);
    }
}

const processPrisonBreakMessage = (pm, message) => {
    // console.log(`processPrisonBreakMessage: ${pm.func} ${pm.gameid}.${pm.thisisme}`);
    // console.log(message);
    if (pm.func === "announce") {
        processPbAnnounce(pm);
    } else if (pm.func === "requestgamedata") {
        processPbRequestGameData(pm);
    } else if (pm.func === "requestsyncdata") {
        processPbRequestSyncData(pm);
    } else if (pm.func === "allowundo") {
        processPbAllowUndo(pm, message);
    } else if (pm.func === "startgame") {
        processPbStartGame(pm);
    } else if (pm.func === "joingame") {
        processPbJoinGame(pm);
    } else if (pm.func === "rejoingame") {
        processPbRejoinGame(pm);
    } else if (pm.func === "startObserving") {
        processPbStartObservingGame(pm);
    } else if (pm.func === "startExamining") {
        processPbStartExaminingGame(pm);
    } else if (pm.func === "ept" || pm.func === "egt") {
        processPbProvideMove(pm);
    } else if (pm.func === "undoturn") {
        processPbUndoMove(pm);
    } else if (pm.func === "chat") {
        handleChatMessages(pm, message);
    } else {
        console.log(`log: ${message}`);
    }
}

const processPbAnnounce = (pm) => {
    let lobbyClient = findLobbyClient(pm.thisisme);
    if (lobbyClient) {
        updateLobbyClient(lobbyClient);
    }
}

const processPbRequestGameData = (pm) => {
    let gameApiInfo = getGameApiInfo(pm.gameid);
    let requestingClient = findPlayerClient(pm.gameid, pm.thisisme);
    if (requestingClient) { // We should find the client that just asked!
        getGameThenUpdateClients(pm.gameid, [requestingClient]);
    }
}

const processPbRequestSyncData = (pm) => {
    let gameApiInfo = getGameApiInfo(pm.gameid);
    let requestingClient = findPlayerClient(pm.gameid, pm.thisisme);
    if (requestingClient) { // We should find the client that just asked!
        // console.log(`Sending ${gameApiInfo.syncstamp} to ${pm.gameid} ${requestingClient.thisisme}`);
        requestingClient.send(JSON.stringify(
            {
                type: 'pb',
                gameid: pm.gameid,
                func: 'providesyncdata',
                syncstamp: gameApiInfo.syncstamp
            }
        ));
    } else {
        console.log(`Cannot find client that requested syncdata! ${pm.gameid} ${pm.thisisme} ${gameApiInfo.syncstamp}`);
    }
}
const processPbAllowUndo = (pm, message) => {
    let opponentClient = findOpponentClient(pm.gameid, pm.thisisme);
    if (opponentClient) {
        opponentClient.send(message);
    }
}

const processPbStartGame = (pm) => {
    /*
        STARTING A GAME
        ---------------
        Set the client gameid
        Create the game data
        Post game to API
        Update game info map
        Send updated game list to clients in lobby
    */
    // Set the client gameid and participant
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = pm.sender; // This is will be 'P' since prisoners start the game
        }
    });

    let jStartGame = {
        datestamp: pm.timestamp,
        gameid: pm.gameid,
        racksize: pm.racksize,
        pname: pm.pname,
        events: [{
            index: 0,
            timestamp: pm.timestamp,
            type: "STARTGAME",
            whoseturn: "P",
            ptiles: pm.ptiles.join(""),
            gtiles: pm.gtiles.join(""),
            tiles: pm.tiles.join("")
        }]
    };
    handleStartGame(jStartGame); // Send new game to data API
}

const processPbJoinGame = (pm) => {
    /*
        JOINING A GAME
        --------------
        This is guards joining a game, we now update the gname
        Send the game data to the caller
        Send the gname to the other game clients
    */
    let joinClient = findPlayerClient(pm.gameid, pm.thisisme);
    if (joinClient) {
        joinClient.participant = pm.sender; // This will be 'G' because prisoners start and guards join
        // We should always find the client that sent the message by design
        let gameApiInfo = getGameApiInfo(pm.gameid);
        if (gameApiInfo) {
            // We should always find the game in the info map by design
            if (!gameApiInfo.gname) {
                // It should be the case that we do not have gname yet
                let jProvideGname = {
                    gname: pm.gname
                };
                // We want to update caller client and clients in the lobby (lobby needs gname)
                handleJoinGame(pm.gameid, jProvideGname, joinClient); // Send guards name to data API and update lobby clients, send game to joiner
            } else {
                // We already have the gname so just get the game and send it to the caller. Should never get here though.
                getGameThenUpdateClients(pm.gameid, [joinClient]);
            }
        }
    }
    let clients = findGameClientsExceptMe(pm.gameid, pm.thisisme);
    clients.forEach((client) => {
        let jSendGname = {
            type: "pm",
            func: "providegname",
            gameid: pm.gameid,
            gname: pm.gname
        };
        client.send(JSON.stringify(jSendGname));
    });
}

const processPbRejoinGame = (pm) => {
    /*
        REJOINING A GAME
        --------------
        This is guards or prisoners rejoining a game
    */
    let joinClient = findPlayerClient(pm.gameid, pm.thisisme);
    if (joinClient) {
        joinClient.participant = pm.sender;
        getGameThenUpdateClients(pm.gameid, [joinClient]);
    }
}

const processPbStartObservingGame = (pm) => {
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting observer gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = 'O';
            getGameThenUpdateClients(pm.gameid, [client]);
        }
    });
}

const processPbStartExaminingGame = (pm) => {
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting observer gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = 'E';
            getGameThenUpdateClients(pm.gameid, [client]);
        }
    });
}

const processPbProvideMove = (pm) => {
    let move = pm.move;
    let jProvideMove = {
        type: move.type,
        by: pm.sender,
        timestamp: pm.timestamp,
        whoseturn: pm.whoseturn
    };
    if (move.type === "PLAY" || move.type === "SWAP") {
        jProvideMove.tiles = pm.tiles.join("");
        if (pm.sender === "P") {
            jProvideMove.ptiles = pm.ptiles.join("");
        } else {
            jProvideMove.gtiles = pm.gtiles.join("");
        }
    }
    if (move.type === "PLAY") {
        jProvideMove.pos = move.pos;
        jProvideMove.mainword = move.mainword;
        jProvideMove.extrawords = move.extrawords.join(",");
        jProvideMove.rescues = pm.rescues;
    }
    let otherGameClients = findGameClientsExceptMe(pm.gameid, pm.thisisme);
    handleProvideMove(pm.gameid, jProvideMove, otherGameClients); // Send move to data API, send update to opponent if found
}

const processPbUndoMove = (pm) => {
    // We need to update the database then send the api game data to the players and observers in the game
    let gameclients = findGameClients(pm.gameid);
    handleUndoMove(pm.gameid, gameclients);
}

const findLobbyClient = (thisisme) => {
    let lobbyClient;
    wss.clients.forEach((client) => {
        if (client.thisisme === thisisme) {
            lobbyClient = client;
        }
    });
    return lobbyClient;
}

const findGameClients = (gameid) => {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid) {
            gameclients.push(client);
        }
    });
    return gameclients;
}

const findGameClientsExceptMe = (gameid, playerThisisme) => {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid && client.thisisme !== playerThisisme) {
            gameclients.push(client);
        }
    });
    return gameclients;
}

const findOpponentClient = (gameid, playerThisisme) => {
    let foundClient = null;
    let msg = '';
    wss.clients.forEach((client) => {
        msg = msg + client.gameid + '.' + client.thisisme + ', ';
        if (client.gameid === gameid && client.thisisme !== playerThisisme && client.participant !== 'O' && client.participant !== 'E') {
            foundClient = client;
        }
    });
    if (!foundClient) console.log(msg);
    return foundClient;
}

const findPlayerClient = (gameid, playerThisisme) => {
    let foundClient = null;
    wss.clients.forEach((client) => {
        if (client.thisisme === playerThisisme) {
            if (!client.gameid && gameid) {
                // console.log(`Setting gameid to ${gameid} for client ${playerThisisme}`);
                client.gameid = gameid;
            }
            foundClient = client;
        }
    });
    return foundClient;
}

const findLobbyClients = () => {
    let lobbyclients = [];
    wss.clients.forEach((client) => {
        if (!client.gameid) {
            lobbyclients.push(client);
        }
    });
    return lobbyclients;
}

const getGameThenUpdateClients = (gameid, gameclients) => {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    axios({
        method: 'get',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        let msg = buildProvidegamedataMessage(response.data); // For 'get' the response data is the json data
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });        
    })
    .catch(error => {
        logApiError(error);
    });
}

const buildProvidegamedataMessage = (apidata) => {
    return {
        type: "pb",
        func: "providegamedata",
        gameid: apidata.gameid,
        apidata: apidata
    };
}

const logApiError = (error) => {
    if (error.response) {
        console.log(`api error response - ${error.message}`);
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
    } else if (error.request) {
        console.log(`api error request - ${error.message}`);
        // The request was made but no response was received
        // console.log(error.request);
    } else {
        console.log(`api error else - ${error.message}`);
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
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
                    if (pm.type !== 'pb'
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

const setupGameApiInfoMap = () => {
    axios({
        method: 'get',
        url: `${dataApiUrl}s`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        let jresponse = response.data;
        jresponse.forEach(element => {
            setGameData(element);
        });
        // If I put a code statement here, gameApiInfoMap will be empty due to async nature.
    })
    .catch(error => {
        logApiError(error);
    });
}

const setGameData = (dataApiId) => {
    axios({
        method: 'get',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        let gameApiInfoElement = makeGameApiInfoObject(dataApiId, response.data);
        gameApiInfoMap.push(gameApiInfoElement);
    })
    .catch(error => {
        logApiError(error);
    });
}

const makeGameApiInfoObject = (dataApiId, gameData) => {
    let lastEventIndex = gameData.events.length - 1;
    let lastEvent = gameData.events[lastEventIndex];
    let syncstamp = lastEvent.timestamp;
    return {
        dataApiId: dataApiId,
        datestamp: gameData.datestamp,
        syncstamp: syncstamp,
        gameid: gameData.gameid,
        racksize: gameData.racksize,
        pname: gameData.pname,
        gname: gameData.gname,
        nextEventIndex: gameData.events.length,
        whoseturn: lastEvent.whoseturn
    };
}

const handleStartGame = (jStartGame) => {
    axios({
        method: 'post',
        url: dataApiUrl,
        headers: {
            'Api-key': dataApiKey
        },
        data: jStartGame
    })
    .then(function (response) {
        let jresponse = response.data;
        let gameApiInfoObject = makeGameApiInfoObject(jresponse.id, jStartGame);
        gameApiInfoMap.push(gameApiInfoObject);
        updateLobbyClients();
    })
    .catch(error => {
        logApiError(error);
    });
}

const handleJoinGame = (gameid, jProvideGname, joinClient) => { // Update data api and map, update lobby clients, get and send game to joiner
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/merge-patch+json'
        },
        data: jProvideGname
    })
    .then(function (response) {
        updateGameApiInfoObject(response.data); // Map gets gname
        updateLobbyClients(); // Lobby gets summary info for the game list
        getGameThenUpdateClients(gameid, [joinClient]); // The caller joined so they need the entire game data
    })
    .catch(error => {
        logApiError(error);
    });
}

const handleProvideMove = (gameid, jProvideMove, otherGameClients) => {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    let nextEventIndex = gameApiInfo.nextEventIndex;
    let eventpath = `/events/${nextEventIndex}`;
    jProvideMove.index = nextEventIndex;
    let patchjson = {
        "op":"add",
        "path": eventpath,
        "value": jProvideMove
    };
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/json-patch+json'
        },
        data: patchjson
    })
    .then(function (response) {
        updateGameApiInfoObject(response.data);
        if (otherGameClients) {
            // console.log(`Sending update to opponent and observers after move made`);
            let msg = buildProvidegamedataMessage(JSON.parse(response.data.data)); // For 'patch' the response data is "status": 0, "data": -- string of JSON data updated
            let textmsg = JSON.stringify(msg);
            otherGameClients.forEach((client) => {
                client.send(textmsg);
            })
        }
    })
    .catch(error => {
        logApiError(error);
    });
}

const handleUndoMove = (gameid, gameclients) => {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    let removeEventIndex = gameApiInfo.nextEventIndex - 1;
    let eventpath = `/events/${removeEventIndex}`;
    let patchjson = {
        "op":"remove",
        "path": eventpath
    };
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/json-patch+json'
        },
        data: patchjson
    })
    .then(function (response) {
        updateGameApiInfoObject(response.data);
        let msg = buildProvidegamedataMessage(JSON.parse(response.data.data)); // For 'patch' the response data is "status": 0, "data": -- string of JSON data updated
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });
    })
    .catch(error => {
        logApiError(error);
    });
}

const updateLobbyClient = (client) => {
    let msg = getGameListMessageString();
    client.send(msg);
}

const updateLobbyClients = () => {
    let lobbyClients = findLobbyClients();
    let msg = getGameListMessageString();
    lobbyClients.forEach((client) => {
        client.send(msg);
    });
}

const getGameListMessageString = () => {
    gameApiInfoMap.sort((a, b) => a.datestamp < b.datestamp ? 1 : -1); // Youngest on top
    let jgamelist = {
        type: "pb",
        func: "gamelist",
        gamelist: gameApiInfoMap
    };
    return JSON.stringify(jgamelist);
}

const getGameApiInfo = (gameid) => {
    let dataApiId = '';
    let nextEventIndex = 0;
    let syncstamp = '';
    for (let index = 0; index < gameApiInfoMap.length; index++) {
        const element = gameApiInfoMap[index];
        if (element.gameid === gameid) {
            dataApiId = element.dataApiId;
            nextEventIndex = element.nextEventIndex;
            syncstamp = element.syncstamp;
        }
    }
    return ({dataApiId: dataApiId, nextEventIndex: nextEventIndex, syncstamp: syncstamp});
}

const updateGameApiInfoObject = (apiResponseData) => { // Pass the axios response
    let gameData = JSON.parse(apiResponseData.data); // Parse the json string into a json object
    for (let index = 0; index < gameApiInfoMap.length; index++) {
        const element = gameApiInfoMap[index];
        if (element.gameid === gameData.gameid) {
            gameApiInfoMap[index] = makeGameApiInfoObject(element.dataApiId, gameData);
        }
    }
}