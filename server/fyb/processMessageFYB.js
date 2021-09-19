const { findLobbyClient, findLobbyClients, findGameClientsExceptMe, findGameClients, findPlayerClient } = require('../clients/clientFunctions');
const clientType = 'fyb';
var games = []; // Array of games in progress
function fybInitialize() { // The server calls this when the server starts

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
function sendErrorMessage(client, errorText) {
    let errorJson = {
        type: clientType,
        func: 'error',
        text: errorText
    };
    let errorMessage = JSON.stringify(errorJson);
    client.send(errorMessage);
}
function processMessageFYB (wss, pm, message) {
    if (pm.func === "announce") {
        processFybAnnounce(wss, pm);
    } else if (pm.func === "create") {
        processFybCreateGame(wss, pm);
    } else if (pm.func === "join") {
        processFybJoinGame(wss, pm);
    } else if (pm.func === "move") {
        processFybMove(wss, pm);
    } else if (pm.func === "interval") {
        processFybInterval(wss, pm);
    }
}

const processFybAnnounce = (wss, pm) => {
    let lobbyClient = findLobbyClient(wss, pm.thisisme);
    if (lobbyClient) {
        updateFybLobbyClient(lobbyClient);
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
                syncstamp: pm.timestamp,
                gameid: pm.gameid,
                numPlayers: pm.numPlayers,
                whoseturn: -1,
                round: 0,
                freeforall: false,
                players: [{
                    index: 0,
                    nickname: pm.nickname,
                    points: 0
                }]
            };
            games.push(game);
            sendGameData([callingClient], game, 'Game created, waiting for others to join.');
            let lobbyClients = findLobbyClients(wss, clientType);
            sendGameData(lobbyClients, game, `${pm.nickname} created game ${pm.gameid}`);
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

const processFybMove = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    if (foundGame) { // I mean, it should!
        let snat = 'oops';
        if (foundGame.freeforall) { // In free for all round
            foundGame.playersWhoMoved.push({nickname: pm.nickname, valid: pm.valid, word: pm.word});
            if (foundGame.playersWhoMoved.length === foundGame.numPlayers - 1) { // All have moved
                let anyValidAnswers = false;
                let shortestAnswer = 0;
                for (let i = 0; i < foundGame.playersWhoMoved.length; i++) {
                    let move = foundGame.playersWhoMoved[i];
                    if (move.valid) {
                        anyValidAnswers = true;
                        if (shortestAnswer === 0 || move.word.length < shortestAnswer) {
                            shortestAnswer = move.word.length;
                        }
                    }
                }
                if (anyValidAnswers) {
                    for (let i = 0; i < foundGame.playersWhoMoved.length; i++) {
                        let move = foundGame.playersWhoMoved[i];
                        if (move.valid && move.word.length === shortestAnswer) {
                            for (let j = 0; j < foundGame.players.length; j++) {
                                if (foundGame.players[j].nickname === move.nickname) {
                                    foundGame.players[j].points = foundGame.players[j].points + foundGame.fryLetters.length;
                                }
                            }
                        }
                    }
                } else {
                    let winner = foundGame.whoseturn === 0 ? foundGame.numPlayers - 1 : foundGame.whoseturn - 1;
                    foundGame.players[winner].points = foundGame.players[winner].points + foundGame.fryLetters.length - 1;
                }
                foundGame.round = foundGame.round + 1;
                if (foundGame.whostarted + 1 === foundGame.numPlayers) {
                    foundGame.whoseturn = 0;
                } else {
                    foundGame.whoseturn = foundGame.whostarted + 1;
                }
                foundGame.whostarted = foundGame.whoseturn;
                foundGame.freeforall = false;
                let tilespicked = pickInitialTiles();
                foundGame.fryLetters = tilespicked.picked;
                foundGame.tiles = tilespicked.tiles;
                foundGame.movesThisRound = [];
                snat = `Free for all round complete. Starting round ${foundGame.round}. ${foundGame.players[foundGame.whoseturn].nickname} to play.`;
            } else {
                snat = `Free for all round in progress.`;
            }
        } else { // In regular round
            // Clear previous free for all results once a word is sent in this round
            foundGame.playersWhoMoved = [];
            // Add the move to the list of moves for this round
            foundGame.movesThisRound.push({nickname: pm.nickname, word: pm.word, valid: pm.valid});
            if (pm.valid) { // Valid word, pick next tile
                let tilePicked = pickNextTile(foundGame.tiles, foundGame.fryLetters);
                foundGame.tiles = [...tilePicked.newTiles];
                foundGame.fryLetters = [...tilePicked.newFryLetters];
                if (foundGame.whoseturn + 1 === foundGame.numPlayers) {
                    foundGame.whoseturn = 0;
                } else {
                    foundGame.whoseturn = foundGame.whoseturn + 1;
                }
                snat = `Round ${foundGame.round} : ${foundGame.players[foundGame.whoseturn].nickname} to play.`;
            } else { // Invalid word, go to free for all
                foundGame.freeforall = true;
                foundGame.excludedPlayer = pm.nickname;
                foundGame.playersWhoMoved = [];
                snat = `${foundGame.players[foundGame.whoseturn].nickname} got their ${pm.word} fried. Free for all round in progress.`;
            }
        }
        foundGame.syncstamp = pm.datestamp;
        let gameClients = findGameClients(wss, clientType, pm.gameid);
        sendGameData(gameClients, foundGame, snat);
    }
}

const processFybInterval = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (foundGame && callingClient) { // Should find both
        if (foundGame.syncstamp !== pm.syncstamp) { // Out of date
            console.log(`Sent interval driven update to ${pm.nickname}`);
            sendGameData([callingClient], foundGame, foundGame.snat);
        // } else { // For testing the interval
        //     sendGameData([callingClient], foundGame, `Game data was up to date at interval.`);
        }
    }
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

const updateFybLobbyClient = (client) => {
    client.send(JSON.stringify({info:`Announcing client ${client.thisisme}`}));
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