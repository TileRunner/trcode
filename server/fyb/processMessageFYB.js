const { findLobbyClient, findLobbyClients, findGameClients, findPlayerClient} = require('../clients/clientFunctions');
const { pickInitialTiles, pickNextTile} = require('./functions/pickLetters');
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
    // if (pm.func !== "interval") {
    //     let foundGame = findGame(pm.gameid);
    //     if (foundGame) {
    //         console.log(`FYB BEFORE func=${pm.func} ${JSON.stringify(foundGame)}`);
    //     }   
    // }
    let needchatremove = false;
    let needchatupdate = false;
    if (pm.func === "announce") {
        processFybAnnounce(wss, pm);
    } else if (pm.func === "create") {
        processFybCreateGame(wss, pm);
    } else if (pm.func === "join") {
        processFybJoinGame(wss, pm);
        needchatupdate = true; // need chat update
    } else if (pm.func === "rejoin") {
        processFybRejoinGame(wss, pm);
        needchatupdate = true; // need chat update
    } else if (pm.func === "move") {
        needchatremove = processFybMove(wss, pm);
    } else if (pm.func === "drop") {
        needchatremove = processFybDrop(wss, pm);
    } else if (pm.func === "interval") {
        processFybInterval(wss, pm);
    } else if (pm.func === "replay") {
        processFybReplay(wss, pm);
    }
    // if (pm.func !== "interval") {
    //     let foundGame = findGame(pm.gameid);
    //     if (foundGame) {
    //         console.log(`FYB AFTER func=${pm.func} ${JSON.stringify(foundGame)}`);
    //     }   
    // }
    return {needchatremove: needchatremove, needchatupdate: needchatupdate};
}

const processFybAnnounce = (wss, pm) => {
    if (games.length > 0) {
        let callingClient = findLobbyClient(wss, pm.thisisme);
        if (callingClient) {
            let gamesJson = {
                type: clientType,
                func: 'GAME_LIST',
                gamelist: games
            };
            let gamesMessage = JSON.stringify(gamesJson);
            // console.log(`Announce sending games to ${callingClient.thisisme}`);
            callingClient.send(gamesMessage);
        }
    }
}

const updateLobbyClients = (wss) => {
    let clientList = findLobbyClients(wss, clientType);
    if (clientList) {
        let gamesJson = {
            type: clientType,
            func: 'GAME_LIST',
            gamelist: games
        };
        let gamesMessage = JSON.stringify(gamesJson);
        clientList.forEach((client) => {
            // console.log(`UpdateLobbyClients sending gamelist to ${client.nickname}`);
            client.send(gamesMessage);
        })
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
            // console.log(`CreateGame sending gameidtaken to ${callingClient.nickname}`);
            callingClient.send(takenMessage);
        } else {
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
            let game = {
                gameindex: 0, // first game
                whoseturn: [], // nobody's turn until all players arrive
                round: 0, // first round
                movesPrevRound: [],
                movesThisRound: [],
                freeforallMoves: [],
                freeforall: false, // not in free-for-all round
                syncstamp: pm.timestamp,
                gameid: pm.gameid,
                numPlayers: Number(pm.numPlayers), // For some reason, when I go past the default of 2 players in the lobby it was treating pm.numPlayers as a string.
                goal: Number(pm.goal),
                players: [{
                    nickname: pm.nickname,
                    points: 0,
                    wins: 0,
                    dropped: false
                }]
            };
            games.push(game);
            sendGameData([callingClient], game, `Game created, waiting for others to join. ${wordlist.length} words available.`);
            updateLobbyClients(wss);
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
            // console.log(`JoinGame sending gameidunknown to ${callingClient.nickname}`);
            callingClient.send(gameUnknownMessage);
        } else if (foundGame.numPlayers === foundGame.players.length) {
            let gameFullJson = {
                type: clientType,
                func: 'gamefull',
                gameid: pm.gameid
            };
            let gameFullMessage = JSON.stringify(gameFullJson);
            // console.log(`JoinGame sending gamefull to ${callingClient.nickname}`);
            callingClient.send(gameFullMessage);
        } else {
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
            let newPlayer = {
                nickname: pm.nickname,
                points: 0,
                wins: 0,
                dropped: false
            };
            foundGame.players.push(newPlayer);
            let snat;
            if (foundGame.numPlayers === foundGame.players.length) {
                let tilespicked = pickInitialTiles();
                let firstnickname = foundGame.players[0].nickname;
                foundGame.fryLetters = tilespicked.picked;
                foundGame.tiles = tilespicked.tiles;
                foundGame.whoseturn.push(firstnickname);
                foundGame.whostarted = firstnickname;
                foundGame.round = 1;
                foundGame.movesThisRound = [];
                foundGame.numPossibleAnswers = countPossibleAnswers(tilespicked.picked, []);
                snat = `Round ${foundGame.round} : ${foundGame.whostarted} to play.`;
            } else {
                snat = `${pm.nickname} just joined the game. Waiting for others to join.`;
            }
            foundGame.syncstamp = pm.datestamp;
            let gameClients = findGameClients(wss, clientType, pm.gameid);
            sendGameData(gameClients, foundGame, snat);
            updateLobbyClients(wss);
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
                // Cannot rejoin as someone who is already in the game with a connection
                if (wss.clients.filter(c => {return c.clientType === clientType && c.gameid === pm.gameid && c.nickname === pm.nickname;}).length > 0) {
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
            // Sometimes client submits a word and does not get the reply and they can submit again!
            // Ignore resubmit but send game data again.
            foundGame.freeforallMoves.forEach((m) => {
                if (m.nickname === pm.nickname) {
                    sendGameToCaller(wss, pm, false);
                    return false;
                }
            });
            foundGame.freeforallMoves.push({nickname: pm.nickname, valid: isvalid, word: pm.word, pass: pm.pass});
            let whoseturnindex = foundGame.whoseturn.indexOf(pm.nickname);
            foundGame.whoseturn.splice(whoseturnindex, 1);
            if (foundGame.whoseturn.length === 0) { // All have moved
                snat = handleLastFreeForAllMove(foundGame);
            } else {
                snat = `${pm.nickname} played. Free-for-all round still in progress. ${foundGame.whoseturn.length} yet to play.`;
            }
        } else { // In regular round
            // Sometimes client submits a word and does not get the reply and they can submit again!
            // Ignore resubmit but send game data again.
            if (foundGame.round > pm.clientRound || foundGame.movesThisRound.length > pm.clientMovesLength) {
                sendGameToCaller(wss, pm, false);
                return false;
            }
            // Clear previous results once a word is sent in this round
            foundGame.freeforallMoves = [];
            foundGame.movesPrevRound = [];
            // Add the move to the list of moves for this round
            foundGame.movesThisRound.push({nickname: pm.nickname, word: pm.word, valid: isvalid, pass: pm.pass});
            if (isvalid) { // Valid word, pick next tile
                let tilePicked = pickNextTile(foundGame.tiles, foundGame.fryLetters);
                foundGame.tiles = [...tilePicked.newTiles];
                foundGame.fryLetters = [...tilePicked.newFryLetters];
                foundGame.numPossibleAnswers = countPossibleAnswers(foundGame.fryLetters, foundGame.movesThisRound);
                let nextplayer = findNextPlayer(foundGame.players, pm.nickname);
                foundGame.whoseturn[0] = nextplayer.nickname;
                snat = `Round ${foundGame.round} : ${foundGame.whoseturn[0]} to play.`;
            } else { // Invalid word, go to free-for-all
                foundGame.freeforall = true;
                foundGame.freeforallMoves = [];
                // Players turn if not dropped and not the player who failed
                foundGame.whoseturn = [];
                for (let index = 0; index < foundGame.players.length; index++) {
                    const player = foundGame.players[index];
                    if (!player.dropped && player.nickname !== pm.nickname) {
                        foundGame.whoseturn.push(player.nickname);
                    }
                }
                if (pm.pass) {
                    snat = `${pm.nickname} passed. Free-for-all round in progress.`;
                } else {
                    snat = `${pm.nickname} got their ${pm.word} fried. Free-for-all round in progress.`;
                }
            }
        }
        foundGame.syncstamp = pm.datestamp;
        let gameClients = findGameClients(wss, clientType, pm.gameid);
        sendGameData(gameClients, foundGame, snat);
        if (foundGame.gameOver) { // game over
            removeGame(foundGame.gameid);
            updateLobbyClients(wss);
            return true;
        }
    }
    return false;
}

const processFybDrop = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    if (foundGame) {
        // We should find the game that the client just asked to drop from
        let activeplayers = foundGame.players.filter(p => {return !p.dropped;}).length;
        let playerindex = findPlayerIndex(foundGame.players, pm.nickname);
        if (playerindex < 0) {
            console.log(`Could not find fyb player ${pm.nickname} to drop from game ${pm.gameid}`);
            // Something is fishy, update players
            updateGameClients(wss, pm, foundGame);
            return false;
        }
        let dropplayer = foundGame.players[playerindex];
        if (dropplayer.dropped) {
            console.log(`Player dropped already, player ${pm.nickname}, game ${pm.gameid}`);
            // Something is fishy, update players
            updateGameClients(wss, pm, foundGame);
            return false; // They already dropped
        }
        dropplayer.dropped = true;
        activeplayers--;
        if (activeplayers < 2) {
            // Dropping leaves fewer than 2 active players so end the game
            foundGame.syncstamp = pm.datestamp;
            foundGame.whoseturn = [];
            foundGame.fryLetters = [];
            foundGame.gameOver = true;
            foundGame.numPossibleAnswers = 0;
            foundGame.snat = `${activeplayers} player${activeplayers === 1 ? "" : "s"} remain${activeplayers === 1 ? "s" : ""}. Game over!`;
            updateGameClients(wss, pm, foundGame);
            removeGame(foundGame.gameid);
            updateLobbyClients(wss);
            return true; // Need to remove chat
        }
        let snat = `${pm.nickname} dropped, ${activeplayers} player${activeplayers === 1 ? "" : "s"} remain${activeplayers === 1 ? "s" : ""}.`;
        if (foundGame.freeforall) {
            snat = snat + ' Free-for-all round still in progress.';
            // player dropped during free for all
            // remove dropper from whoseturn if there
            let whoseturnindex = -1;
            for (let index = 0; index < foundGame.whoseturn.length; index++) {
                const ffamover = foundGame.whoseturn[index];
                if (ffamover === pm.nickname) {
                    whoseturnindex = index;
                }
            }
            if (whoseturnindex > -1) {
                foundGame.whoseturn.splice(whoseturnindex,1);
            }
            // dropping out when last to move in ffa ends ffa
            if (foundGame.whoseturn.length === 0) { // All have moved
                snat = snat + ' ' + handleLastFreeForAllMove(foundGame);
            }
        } else {
            // Player dropped not during free for all
            if (foundGame.whoseturn[0] === pm.nickname) {
                // It was the turn of the player who dropped so move to next player
                let nextplayer = findNextPlayer(foundGame.players, pm.nickname);
                foundGame.whoseturn[0] = nextplayer.nickname;
                snat = `${pm.nickname} dropped, ${foundGame.whoseturn[0]} to play.`;
            }
        }
        foundGame.snat = snat;
        updateGameClients(wss, pm, foundGame);
    } else {
        console.log(`Unable to find FYB game to drop from, gameid ${pm.gameid}, player ${pm.nickname}, client ${pm.thisisme}`);
    }
    return false;
}

function updateGameClients(wss, pm, foundGame) {
    let gameClients = findGameClients(wss, clientType, pm.gameid);
    let snat = foundGame.snat;
    sendGameData(gameClients, foundGame, snat);
}

function handleLastFreeForAllMove(foundGame) {
    let snat = 'Oops';
    // Find shortest valid player entry
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
    // Find all possible answers
    let possibleAnswers = [];
    wordlist.forEach((checkword) => {
        if (wordHasFryLetters(foundGame.fryLetters, checkword) && wordAllowed(checkword, foundGame.movesThisRound)) {
            possibleAnswers.push(checkword.toUpperCase());
        }
    });
    // Pick top 10 possible answers, shortest length then alphabetical
    if (possibleAnswers.length > 0) {
        possibleAnswers.sort(function (a, b) { return a.length < b.length ? -1 : b.length < a.length ? 1 : a < b ? -1 : 1; });
        if (possibleAnswers.length > 10) {
            possibleAnswers = possibleAnswers.slice(0, 10);
        }
        snat = `Fry cook fried ${foundGame.fryLetters} with ${possibleAnswers.join(", ")}.`;
    } else {
        snat = `Fry cook could not fry ${foundGame.fryLetters}.`;
    }
    // Assign points
    if (anyValidAnswers) {
        for (let i = 0; i < foundGame.freeforallMoves.length; i++) {
            let move = foundGame.freeforallMoves[i];
            if (move.valid && move.word.length === shortestAnswer) {
                move.earned = foundGame.fryLetters.length;
                for (let j = 0; j < foundGame.players.length; j++) {
                    if (foundGame.players[j].nickname === move.nickname) {
                        foundGame.players[j].points = foundGame.players[j].points + foundGame.fryLetters.length;
                    }
                }
            }
        }
    } else {
        // No valid answers
        if (foundGame.fryLetters.length > 3) { // No points if nobody played a valid word on the initial 3 fry letters
            // When nobody gets a valid word in the free-for-all then the last valid play gets points
            let earnedPoints = foundGame.fryLetters.length - 1;
            let lastvalidmoveindex = foundGame.movesThisRound.length - 2; // length - 1 is the fail, length - 2 is previous success
            foundGame.movesThisRound[lastvalidmoveindex].earned = earnedPoints;
            let lastvalidplayer = findPlayerInArray(foundGame.players, foundGame.movesThisRound[lastvalidmoveindex].nickname);
            lastvalidplayer.points = lastvalidplayer.points + earnedPoints;
        }
    }
    // End free for all round
    foundGame.freeforall = false;
    foundGame.movesPrevRound = [...foundGame.movesThisRound];
    foundGame.movesThisRound = [];
    // Credit winners if any, otherwise start next round
    let winners = countWinners(foundGame);
    if (winners > 0) {
        creditWinners(foundGame);
        foundGame.whoseturn = [];
        foundGame.fryLetters = [];
        foundGame.gameOver = true;
        foundGame.numPossibleAnswers = 0;
    } else {
        foundGame.round = foundGame.round + 1;
        let nextplayer = findNextPlayer(foundGame.players, foundGame.whostarted);
        foundGame.whoseturn = [nextplayer.nickname];
        foundGame.whostarted = foundGame.whoseturn[0];
        let tilespicked = pickInitialTiles();
        foundGame.fryLetters = tilespicked.picked;
        foundGame.tiles = tilespicked.tiles;
        foundGame.numPossibleAnswers = countPossibleAnswers(foundGame.fryLetters, foundGame.movesThisRound);
        snat = `${snat} Starting round ${foundGame.round}. ${foundGame.whoseturn[0]} to play.`;
    }
    return snat;
}

function countPossibleAnswers(fryLetters, movesThisRound) {
    let count = 0;
    wordlist.forEach((checkword) => {
        if (wordHasFryLetters(fryLetters, checkword) && wordAllowed(checkword, movesThisRound)) {
            count++;
        }
    });
    return count;
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
        if (pw + 's' === checkword && pw.substring(pw.length-1) !== 's' && movesThisRound[i].valid) {
            return false;
        }
    }
    return true;
}

const processFybInterval = (wss, pm) => {
    sendGameToCaller(wss, pm, true);
}

const sendGameToCaller = (wss, pm, checksync) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (foundGame && callingClient) { // Should find both
        if (!checksync || (foundGame.syncstamp !== pm.syncstamp)) { // Out of date
            sendGameData([callingClient], foundGame, foundGame.snat);
        }
    }
}

const processFybReplay = (wss, pm) => {
    rightshiftplayers(pm.game.players);
    let tilespicked = pickInitialTiles();
    let numPossibleAnswers = countPossibleAnswers(tilespicked.picked, []);
    let newGame = {
        gameid: pm.game.gameid,
        numPlayers: pm.game.numPlayers,
        players: [...pm.game.players],
        goal: pm.game.goal,
        syncstamp: pm.datestamp,
        gameindex: pm.game.gameindex + 1, // next game
        whoseturn: [pm.game.players[0].nickname],
        whostarted: pm.game.players[0].nickname,
        round: 1,
        freeforall: false,
        fryLetters: tilespicked.picked,
        tiles: tilespicked.tiles,
        movesThisRound: [],
        movesPrevRound: [],
        freeforallMoves: [],
        numPossibleAnswers: numPossibleAnswers
    };
    newGame.players.forEach(p => {p.points = 0;});
    newGame.snat = `Starting game ${newGame.gameindex + 1}. ${newGame.whoseturn[0]} to play.`;
    games.push(newGame);
    updateGameClients(wss, pm, newGame);
}

function rightshiftplayers(players) {
    if (players.length === 0) {
        return; // Should not happen. Defensive programming.
    }
    let player = players[0];
    players.splice(0,1);
    players.push(player);
    // While first player is dropped, right shift again.
    // Only do this so many times to prevent infinite loop.
    for (let index = 0; index < players.length; index++) {
        const firstplayer = players[0];
        if (firstplayer.dropped) {
            players.splice(0,1);
            players.push(firstplayer);        
        }
    }
}

function findPlayerIndex(players=[], nickname='') {
    let playerindex = -1;
    for (let index = 0; index < players.length; index++) {
        if (players[index].nickname === nickname) {
            playerindex = index;
        }
    }
    return playerindex;

}
function findPlayerInArray(players=[], nickname='') {
    let player;
    let playerindex = findPlayerIndex(players, nickname);
    if (playerindex > -1) {
        player = players[playerindex];
    }
    return player;
}

function findNextPlayer(players, nickname) {
    let nextplayer;
    let playerindex = findPlayerIndex(players, nickname);
    for (let index = playerindex + 1; !nextplayer && index < players.length; index++) {
        const player = players[index];
        if (!player.dropped) {
            nextplayer = player;
        }
    }
    for (let index = 0; !nextplayer && index < playerindex; index++) {
        const player = players[index];
        if (!player.dropped) {
            nextplayer = player;
        }
    }
    if (!nextplayer) {
        console.log(`Could not find next player. Current=${nickname}, All=${JSON.stringify(players)}`);
    }
    return nextplayer;
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

function creditWinners(game) {
    for (let i = 0; i < game.players.length; i++) {
        if (game.players[i].points >= game.goal) {
            game.players[i].wins = game.players[i].wins + 1;
        }
    }
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
        // console.log(`sendGameData sending game to ${client.nickname}`);
        client.send(gameMessage);
    });
}

module.exports = { fybInitialize, processMessageFYB, wordHasFryLetters };