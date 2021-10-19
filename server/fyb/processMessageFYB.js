const { findLobbyClient, findLobbyClients, findGameClients, findPlayerClient } = require('../clients/clientFunctions');
const clientType = 'fyb';
var games = []; // Array of games in progress
var wordlist = [];
function fybInitialize(allwords) { // The server calls this when the server starts
    wordlist = allwords;
}
function findGame(gameid) {
    let foundGame;
    games.forEach((game) => {
        if (game.gameid === gameid) {
            foundGame = game;
        }
    });
    return foundGame;
}
function removeGame(gameid) {
    let j = -1;
    for (let i = 0; i < games.length; i++) {
        if (games[i].gameid === gameid) {
            j = i;
        }       
    }
    if (j > -1) {
        games.splice(j,1);
    }
}
function processMessageFYB (wss, pm) {
    if (pm.func === "announce") {
        processFybGetGameList(wss, pm);
    } else if (pm.func === "create") {
        processFybCreateGame(wss, pm);
    } else if (pm.func === "join") {
        processFybJoinGame(wss, pm);
    } else if (pm.func === "rejoin") {
        processFybRejoinGame(wss, pm);
    } else if (pm.func === "move") {
        processFybMove(wss, pm);
    } else if (pm.func === "interval") {
        processFybInterval(wss, pm);
    } else if (pm.func === "replay") {
        processFybReplay(wss, pm);
    }
}

const processFybGetGameList = (wss, pm) => {
    if (games.length > 0) {
        let callingClient = findLobbyClient(wss, pm.thisisme);
        if (callingClient) {
            let gamelist = 'Game list:';
            games.forEach((game, index) => {
                gamelist = `${gamelist} ${game.players[0].nickname} created game ${game.gameid}`;
                if (game.players.length === game.numPlayers) gamelist = gamelist + ' (full)';
                if (index + 1 < games.length) gamelist = gamelist + ', ';
            });
            let gamesJson = {
                type: clientType,
                func: 'gamelist',
                gamelist: gamelist
            };
            let gamesMessage = JSON.stringify(gamesJson);
            callingClient.send(gamesMessage);
        }
    }
}

const processFybCreateGame = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findLobbyClient(wss, pm.thisisme);
    if (callingClient) {
        if (foundGame) {
            let takenJson = {
                type: clientType,
                func: 'gameidtaken',
                gameid: pm.gameid
            };
            let takenMessage = JSON.stringify(takenJson);
            callingClient.send(takenMessage);
        } else {
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
            let game = {
                gameindex: 0, // first game
                gamestarter: 0, // player going first in first round
                whoseturn: -1, // nobody's turn until all players arrive
                round: 0, // first round
                freeforall: false, // not in free-for-all round
                syncstamp: pm.timestamp,
                gameid: pm.gameid,
                numPlayers: Number(pm.numPlayers), // For some reason, when I go past the default of 2 players in the lobby it was treating pm.numPlayers as a string.
                goal: Number(pm.goal),
                players: [{
                    index: 0,
                    nickname: pm.nickname,
                    points: 0
                }]
            };
            games.push(game);
            sendGameData([callingClient], game, `Game created, waiting for others to join. ${wordlist.length} words available.`);
            let lobbyClients = findLobbyClients(wss, clientType);
            if (lobbyClients) {
                let gameCreateJson = {
                    type: clientType,
                    func: 'GAME_CREATED',
                    gameid: pm.gameid,
                    nickname: pm.nickname
                };
                let gameCreateMessage = JSON.stringify(gameCreateJson);
                lobbyClients.forEach((lobbyClient) => {
                    lobbyClient.send(gameCreateMessage);
                })
            }
        }
    }
}

const processFybJoinGame = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findLobbyClient(wss, pm.thisisme);
    if (callingClient) {
        if (!foundGame) {
            let gameUnknownJson = {
                type: clientType,
                func: 'gameidunknown',
                gameid: pm.gameid
            };
            let gameUnknownMessage = JSON.stringify(gameUnknownJson);
            callingClient.send(gameUnknownMessage);
        } else if (foundGame.numPlayers === foundGame.players.length) {
            let gameFullJson = {
                type: clientType,
                func: 'gamefull',
                gameid: pm.gameid
            };
            let gameFullMessage = JSON.stringify(gameFullJson);
            callingClient.send(gameFullMessage);
        } else {
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
            let playerIndex = foundGame.players.length;
            let newPlayer = {
                index: playerIndex,
                nickname: pm.nickname,
                points: 0
            };
            foundGame.players.push(newPlayer);
            let snat;
            if (foundGame.numPlayers === foundGame.players.length) {
                let tilespicked = pickInitialTiles();
                foundGame.fryLetters = tilespicked.picked;
                foundGame.tiles = tilespicked.tiles;
                foundGame.whoseturn = 0;
                foundGame.whostarted = 0;
                foundGame.round = 1;
                foundGame.movesThisRound = [];
                snat = `Round ${foundGame.round} : ${foundGame.players[foundGame.whoseturn].nickname} to play.`;
            } else {
                snat = `${pm.nickname} just joined the game. Waiting for others to join.`;
            }
            foundGame.syncstamp = pm.datestamp;
            let gameClients = findGameClients(wss, clientType, pm.gameid);
            sendGameData(gameClients, foundGame, snat);
        }
    }
}

const processFybRejoinGame = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findLobbyClient(wss, pm.thisisme);
    if (callingClient) {
        if (!foundGame) {
            let gameUnknownJson = {
                type: clientType,
                func: 'gameidunknown',
                gameid: pm.gameid
            };
            let gameUnknownMessage = JSON.stringify(gameUnknownJson);
            callingClient.send(gameUnknownMessage);
        } else {
            let foundPlayer = findPlayerInArray(foundGame.players, pm.nickname);
            if (!foundPlayer) {
                let notInThatGameJson = {
                    type: clientType,
                    func: 'notinthatgame',
                    gameid: pm.gameid
                };
                let notInThatGameMessage = JSON.stringify(notInThatGameJson);
                callingClient.send(notInThatGameMessage);
            } else {
                let otherClient;
                for (let i = 0; i < wss.clients.length; i++) {
                    const checkClient = wss.clients[i];
                    if (checkClient.clientType === clientType && checkClient.gameid === pm.gameid && checkClient.nickname === pm.nickname) {
                        otherClient = checkClient;
                    }
                }
                if (otherClient) {
                    let otherClientJson = {
                        type: clientType,
                        func: 'otherclientfound',
                        gameid: pm.gameid
                    };
                    let otherClientMessage = JSON.stringify(otherClientJson);
                    callingClient.send(otherClientMessage);
                } else {
                    callingClient.gameid = pm.gameid;
                    callingClient.nickname = pm.nickname;   
                    let snat = `You rejoined the game.`;
                    sendGameData([callingClient], foundGame, snat);   
                }
            }
        }
    }
}

const processFybMove = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let isvalid = !pm.pass && wordlist.indexOf(pm.word.toLowerCase()) > -1;
    if (foundGame) { // I mean, it should!
        let snat = 'oops';
        if (foundGame.freeforall) { // In free-for-all round
            foundGame.freeforallMoves.push({nickname: pm.nickname, valid: isvalid, word: pm.word, pass: pm.pass});
            if (foundGame.freeforallMoves.length === foundGame.numPlayers - 1) { // All have moved
                let anyValidAnswers = false;
                let shortestAnswer = 0;
                for (let i = 0; i < foundGame.freeforallMoves.length; i++) {
                    let move = foundGame.freeforallMoves[i];
                    if (move.valid) {
                        anyValidAnswers = true;
                        if (shortestAnswer === 0 || move.word.length < shortestAnswer) {
                            shortestAnswer = move.word.length;
                        }
                    }
                }
                // Find a possible answer, shortest length
                let possibleAnswer = '';
                let possibleAnswers = [];
                wordlist.forEach((checkword) => {
                    if (wordHasFryLetters(foundGame.fryLetters, checkword) && wordAllowed(checkword, foundGame.movesThisRound)) {
                        possibleAnswers.push(checkword.toUpperCase());
                    }
                });
                if (possibleAnswers.length > 0) {
                    possibleAnswers.sort(function(a,b){return a.length < b.length ? -1 : b.length < a.length ? 1 : a < b ? -1 : 1});
                    if (possibleAnswers.length > 10) {
                        possibleAnswers = possibleAnswers.slice(0,10);
                    }
                    possibleAnswer = possibleAnswers.join(", ");
                }
                if (possibleAnswer) {
                    snat = `Fry cook fried ${foundGame.fryLetters} with ${possibleAnswer}.`;
                } else {
                    snat = `Fry cook could not fry ${foundGame.fryLetters}.`;
                }
                if (anyValidAnswers) {
                    for (let i = 0; i < foundGame.freeforallMoves.length; i++) {
                        let move = foundGame.freeforallMoves[i];
                        if (move.valid && move.word.length === shortestAnswer) {
                            for (let j = 0; j < foundGame.players.length; j++) {
                                if (foundGame.players[j].nickname === move.nickname) {
                                    foundGame.players[j].points = foundGame.players[j].points + foundGame.fryLetters.length;
                                }
                            }
                        }
                    }
                } else {
                    if (foundGame.fryLetters.length > 3) { // No points if nobody played a valid word on the initial 3 fry letters
                        // When nobody gets a valid word in the free-for-all then the last valid play gets points
                        let winner = foundGame.whoseturn === 0 ? foundGame.numPlayers - 1 : foundGame.whoseturn - 1;
                        foundGame.players[winner].points = foundGame.players[winner].points + foundGame.fryLetters.length - 1;
                    }
                }
                foundGame.freeforall = false;
                let winners = countWinners(foundGame);
                if (winners > 0) {
                    foundGame.whoseturn = -1;
                    foundGame.fryLetters = [];
                    foundGame.gameOver = true;
                } else {
                    foundGame.round = foundGame.round + 1;
                    if (foundGame.whostarted + 1 === foundGame.numPlayers) {
                        foundGame.whoseturn = 0;
                    } else {
                        foundGame.whoseturn = foundGame.whostarted + 1;
                    }
                    foundGame.whostarted = foundGame.whoseturn;
                    let tilespicked = pickInitialTiles();
                    foundGame.fryLetters = tilespicked.picked;
                    foundGame.tiles = tilespicked.tiles;
                    foundGame.movesPrevRound = [...foundGame.movesThisRound];
                    foundGame.movesThisRound = [];
                    snat = `${snat} Starting round ${foundGame.round}. ${foundGame.players[foundGame.whoseturn].nickname} to play.`;
                }
            } else {
                snat = `Free-for-all round in progress.`;
            }
        } else { // In regular round
            // Clear previous results once a word is sent in this round
            foundGame.freeforallMoves = [];
            foundGame.movesPrevRound = [];
            // Add the move to the list of moves for this round
            foundGame.movesThisRound.push({nickname: pm.nickname, word: pm.word, valid: isvalid, pass: pm.pass});
            if (isvalid) { // Valid word, pick next tile
                let tilePicked = pickNextTile(foundGame.tiles, foundGame.fryLetters);
                foundGame.tiles = [...tilePicked.newTiles];
                foundGame.fryLetters = [...tilePicked.newFryLetters];
                if (foundGame.whoseturn + 1 === foundGame.numPlayers) {
                    foundGame.whoseturn = 0;
                } else {
                    foundGame.whoseturn = foundGame.whoseturn + 1;
                }
                snat = `Round ${foundGame.round} : ${foundGame.players[foundGame.whoseturn].nickname} to play.`;
            } else { // Invalid word, go to free-for-all
                foundGame.freeforall = true;
                foundGame.excludedPlayer = pm.nickname;
                foundGame.freeforallMoves = [];
                if (pm.pass) {
                    snat = `${foundGame.players[foundGame.whoseturn].nickname} passed. Free-for-all round in progress.`;
                } else {
                    snat = `${foundGame.players[foundGame.whoseturn].nickname} got their ${pm.word} fried. Free-for-all round in progress.`;
                }
            }
        }
        foundGame.syncstamp = pm.datestamp;
        let gameClients = findGameClients(wss, clientType, pm.gameid);
        sendGameData(gameClients, foundGame, snat);
        if (foundGame.whoseturn === -1) { // game over
            removeGame(foundGame.gameid);
        }
    }
}

function wordHasFryLetters(fryLetters, checkword) {
    let word = checkword.toUpperCase();
    for (let i = 0; i < fryLetters.length; i++) {
        let letterCountRequired = 0;
        let actualLetterCount = 0;
        for (let j = 0; j < fryLetters.length; j++) {
            if (fryLetters[i] === fryLetters[j]) {
                letterCountRequired = letterCountRequired + 1;
            }
        }
        for (let j = 0; j < word.length; j++) {
            if (fryLetters[i] === word[j]) {
                actualLetterCount = actualLetterCount + 1;
            }
        }
        if (actualLetterCount < letterCountRequired) {
            return false;
        }
    }
    return true;
}

function wordAllowed(checkword, movesThisRound) {
    // Check if the word is allowed based on previous words this round
    for (let i = 0; i < movesThisRound.length; i++) {        
        const pw = movesThisRound[i].word.toLowerCase(); // lexicon is in lower case
        if (pw === checkword) {
            return false;
        }
        if (pw + 'S' === checkword && pw.substring(pw.length-1) !== 'S' && movesThisRound[i].valid) {
            return false;
        }
    }
    return true;
}

const processFybInterval = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (foundGame && callingClient) { // Should find both
        if (foundGame.syncstamp !== pm.syncstamp) { // Out of date
            sendGameData([callingClient], foundGame, foundGame.snat);
        }
    }
}

const processFybReplay = (wss, pm) => {
    let starter = pm.game.gamestarter + 1 === pm.game.numPlayers ? 0 : pm.game.gamestarter + 1; // this player goes first this game
    let tilespicked = pickInitialTiles();
    let newGame = {
        gameid: pm.game.gameid,
        numPlayers: pm.game.numPlayers,
        players: [...pm.game.players],
        goal: pm.game.goal,
        syncstamp: pm.datestamp,
        gameindex: pm.game.gameindex + 1, // next game
        gamestarter: starter,
        whoseturn: starter,
        whostarted: starter,
        round: 1,
        freeforall: false,
        fryLetters: tilespicked.picked,
        tiles: tilespicked.tiles,
        movesThisRound: [],
        movesPrevRound: [],
        freeforallMoves: []
    };
    for (let i = 0; i < newGame.players.length; i++) {
        const player = newGame.players[i];
        player.points = 0;
    }
    games.push(newGame);
    let gameClients = findGameClients(wss, clientType, newGame.gameid);
    let snat = `Starting game ${newGame.gameindex + 1}. ${newGame.players[newGame.whoseturn].nickname} to play.`;
    sendGameData(gameClients, newGame, snat);
}

function pickInitialTiles() {
    let tiles = [
        "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",
        "B",  "B",
        "C",  "C",
        "D",  "D",  "D",  "D",
        "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
        "F",  "F",
        "G",  "G",  "G",
        "H",  "H",
        "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",
        "J",
        "K",
        "L",  "L",  "L",  "L",
        "M",  "M",
        "N",  "N",  "N",  "N",  "N",  "N",
        "O",  "O",  "O",  "O",  "O",  "O",  "O",  "O",
        "P",  "P",
        "Q",
        "R",  "R",  "R",  "R",  "R",  "R",
        "S",  "S",  "S",  "S",
        "T",  "T",  "T",  "T",  "T",  "T",
        "U",  "U",  "U",  "U",
        "V",  "V",
        "W",  "W",
        "X",
        "Y",  "Y",
        "Z"    
    ];
    let picked = [];
    while (picked.length < 3) {
        let rand = Math.floor(Math.random() * tiles.length);
        picked.push(tiles[rand]);
        tiles.splice(rand, 1);
    }
    picked.sort();
    return({picked: picked, tiles: tiles});
}

function pickNextTile(tiles, fryLetters) {
    let rand = Math.floor(Math.random() * tiles.length);
    let picked = tiles[rand];
    let newFryLetters = [...fryLetters];
    newFryLetters.push(picked);
    let newTiles = [...tiles];
    tiles.splice(rand, 1);
    return({newTiles: newTiles, newFryLetters: newFryLetters});
}

function findPlayerInArray(players, nickname) {
    let player;
    for (let i = 0; i < players.length; i++) {
        if (players[i].nickname === nickname) {
            player = players[i];
        }
    }
    return player;
}

function countWinners(game) {
    let winners = 0;
    for (let i = 0; i < game.players.length; i++) {
        if (game.players[i].points >= game.goal) {
            winners = winners + 1;
        }
    }
    return winners;
}

const sendGameData = (clients, game, snat) => {
    game.snat = snat;
    clients.forEach((client) => {
        let gameJson = {
            type: clientType,
            func: "GAME_DATA",
            thisisme: client.thisisme,
            snat: snat,
            game: JSON.parse(JSON.stringify(game))
        };
        let gameMessage = JSON.stringify(gameJson);
        client.send(gameMessage);
    });
}

module.exports = { fybInitialize, processMessageFYB };