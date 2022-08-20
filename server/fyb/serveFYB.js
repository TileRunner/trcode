const { json } = require("express");

const GAME_TYPE_CLASSIC = 'CLASSIC';
const GAME_TYPE_SURVIVAL = 'SURVIVAL';

const MOVE_TYPE_VALID = 'VALID';
const MOVE_TYPE_PHONY = 'PHONY';
const MOVE_TYPE_PASS = 'PASS';

const fybgames = [];
const fybchats = [
    {
        number: 1,
        msgs:[{name: 'ADMIN', msg: 'Lobby chat created for classic mode', time: Date.now()}]
    },
    {
        number: 2,
        msgs:[{name: 'ADMIN', msg: 'Lobby chat created for survival mode', time: Date.now()}]
    }
];
const { wordHasLetters, pickTiles } = require('./functions');

function AllowAllCallers(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

function CreateChat() {
    let chatNumber = 1;
    for (let index = 0; index < fybchats.length; index++) {
        const fybchat = fybchats[index];
        if (fybchat.number >= chatNumber) {
            chatNumber = fybchat.number + 1;
        }
    }
    fybchats.push({number: chatNumber, msgs: []});
    return chatNumber;
}

function AddAdminChat(number, msg) {
    AddChat(number, 'ADMIN', msg);
}

function AddChat(number, name, msg) {
    for (let index = 0; index < fybchats.length; index++) {
        const fybchat = fybchats[index];
        if (fybchat.number === number) {
            // Limit message length
            msg = msg.trim();
            if (msg.length > 100) {
                msg = msg.substring(0,96) + " ...";
            }
            fybchat.msgs.push({name: name, msg: msg, time: Date.now()});
            // Limit amount of data
            if (fybchat.msgs.length > 20) {
                fybchat.msgs.splice(0,1);
            }
            return index;
        }
    }
    return -1;
}

function ServeFybChatMessage(res, req) {
    // console.log(`Chat ${req.query.name} says ${req.query.msg}`);
    AllowAllCallers(res);
    let chatNumber = parseInt(req.query.number);
    let chatindex = AddChat(chatNumber, req.query.name.trim(), req.query.msg.trim());
    if (chatindex < 0) {
        res.json({error: 'Chat not found'});
    } else {
        res.json(fybchats[chatindex]);
    }
}

function ServeFybCreateGame(res, req) {
    // console.log(`Create game by ${req.query.name}`);
    AllowAllCallers(res);
    let gameNumber = 1;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number >= gameNumber) {
            gameNumber = fybgame.number + 1;
        }
    }
    let chatNumber = CreateChat();
    let newfybgame = {
        number: gameNumber,
        chatNumber: chatNumber,
        type: req.query.type.toUpperCase().trim(),
        createTime: Date.now(),
        creator: req.query.name.trim(),
        validOnly: req.query.validOnly,
        players: [{ name: req.query.name.trim() }],
        started: false,
        finished: false
    };
    if (newfybgame.type === GAME_TYPE_CLASSIC) {
        newfybgame.players[0].points = 0;
    }
    fybgames.push(newfybgame);
    AddAdminChat(chatNumber, `Game created by ${req.query.name.trim()}`);
    res.json(newfybgame);
}

function ServeFybGetChat(res, req) {
    // console.log(`Chat request for ${req.query.number}`);
    AllowAllCallers(res);
    let chatNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybchats.length; index++) {
        const fybchat = fybchats[index];
        if (fybchat.number === chatNumber) {
            found = true;
            res.json(fybchat);
        }
    }
    if (!found) {
        res.json({error: 'Chat not found'});
    }
}

function ServeFybGetGame(res, req) {
    // console.log(`Game request for ${req.query.number}`);
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServeFybGetTopAnswers(res, req, allwords) {
    // console.log(`Get top answers for ${req.query.letters}`);
    AllowAllCallers(res);
    let letters = req.query.letters;
    let numWanted = parseInt(req.query.count);
    let possibleAnswers = allwords.filter(w => {return wordHasLetters(letters, w);});
    possibleAnswers.sort(function (a, b) { return a.length < b.length ? -1 : b.length < a.length ? 1 : a < b ? -1 : 1; });
    if (possibleAnswers.length > numWanted) {
      possibleAnswers.splice(numWanted); // Take only the number wanted
    }
    res.json({answers:possibleAnswers});
}

function ServeFybJoinGame(res, req) {
    // console.log(`Join game ${req.query.number} by ${req.query.name}`);
    AllowAllCallers(res);
    let found = false;
    let gameNumber = parseInt(req.query.number);
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            let found2 = false;
            for (let index2 = 0; index2 < fybgame.players.length; index2++) {
                const player = fybgame.players[index2];
                if (player.name === req.query.name.trim()) {
                    found2 = true;
                }
            }
            if (!found2) {
                let newplayer = {name: req.query.name.trim()};
                if (fybgame.type === GAME_TYPE_CLASSIC) {
                    newplayer.points = 0;
                }
                fybgame.players.push(newplayer);
            }
            AddAdminChat(fybgame.chatNumber, `${req.query.name.trim()} ${found2 ? 'rejoined' : 'joined'}`);
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServeFybListGames(res, req) {
    // console.log(`Game list request`);
    AllowAllCallers(res);
    let gamelist = [];
    fybgames.forEach(fybgame => {
        if (fybgame.type === req.query.type) {
            gamelist.push({
                number: fybgame.number,
                createTime: fybgame.createTime,
                creator: fybgame.creator,
                started: fybgame.started,
                finished: fybgame.finished,
                numPlayers: fybgame.players.length
            });
        }
    });
    res.json(gamelist);
}

function ServeFybMakeMove(res, req) {
    // console.log(`Game move for ${req.query.number} by ${req.query.name}`);
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            let newmove = {name: req.query.name.trim(), type: req.query.type.toUpperCase().trim()};
            if (newmove.type !== MOVE_TYPE_PASS) {
                newmove.word = req.query.word;
            }
            if (fybgame.type === GAME_TYPE_SURVIVAL) {
                serveSurvivalMove(fybgame, newmove);
            } else if (fybgame.type === GAME_TYPE_CLASSIC) {
                serveClassicMove(fybgame, newmove);
            }
            //AddAdminChat(fybgame.chatNumber, `Move by ${req.query.name.trim()}: ${newmove.type}`);
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }

    function serveSurvivalMove(fybgame, newmove) {
        let numalive = 0;
        let tomove = 0;
        let found = false;
        fybgame.players.forEach(player => {
            if (player.name === newmove.name) {
                if (player.tomove) { // In case they submit same play again before it is processed
                    found = true;
                    fybgame.rounds[fybgame.round - 1].moves.push(newmove);
                    player.tomove = false;
                    if (newmove.type !== MOVE_TYPE_VALID) {
                        player.alive = false;
                    }
                }
            }
            if (player.alive) {
                numalive++;
            }
            if (player.tomove) {
                tomove++;
            }
        });
        if (found && tomove === 0) {
            if (numalive < 2 || fybgame.round + 3 > fybgame.letters.length) {
                fybgame.finished = true;
            } else {
                fybgame.round++;
                fybgame.rounds.push({ moves: [] });
                fybgame.players.forEach(player => {
                    if (player.alive) {
                        player.tomove = true;
                    }
                });
            }
        }
    }

    function serveClassicMove(fybgame, newmove) {
        let numalive = 0;
        let tomove = 0;
        let found = false;
        fybgame.players.forEach(player => {
            if (player.name === newmove.name) {
                if (player.tomove) { // In case they submit same play again before it is processed
                    found = true;
                    fybgame.rounds[fybgame.round - 1].moves.push(newmove);
                    player.tomove = false;
                    if (newmove.type !== MOVE_TYPE_VALID) {
                        player.alive = false;
                    }
                }
            }
            if (player.alive) {
                numalive++;
            }
            if (player.tomove) {
                tomove++;
            }
        });
        if (found && tomove === 0) { // all free-for-all players moved, or player moved in normal round
            if (fybgame.freeforall) {
                fybgame.finished = true;
                // Figure out points here
                let shortest = 999; // ridiculously high
                let winners = [];
                let moves = fybgame.rounds[fybgame.round - 1].moves;
                moves.forEach(move => {
                    if (move.type === MOVE_TYPE_VALID) {
                        if (move.word.length < shortest) {
                            shortest = move.word.length;
                            winners = [move.name];
                        } else if (move.word.length === shortest) {
                            winners.push(move.name);
                        }
                    }
                });
                if (winners.length > 0) {
                    // At least one winner in free-for-all
                    fybgame.players.forEach(player => {
                        if (player.alive) {
                            winners.forEach(winner => {
                                if (winner === player.name) {
                                    // eg fail round 1, free-for-all round 2 still at 3 letters
                                    player.points += fybgame.round + 1;
                                }
                            })
                        }
                    });
                } else if (fybgame.round > 2) {
                    // No valid answers in free-for-all, we least got to round 3
                    // eg valid in round 1, fail in round 2m free-for-all all fail in round 3
                    // so round 1 player gets 3 points
                    fybgame.players[(fybgame.round - 3 + fybgame.players.length) % fybgame.players.length].points += fybgame.round;
                }
            } else { // move in normal round
                if (newmove.type === MOVE_TYPE_VALID && fybgame.round + 3 > fybgame.letters.length) {
                    // No more letters available for another round, give all players credit
                    fybgame.players.forEach(player => {
                        player.points += fybgame.letters.length;
                    });
                    fybgame.finished = true;
                } else {
                    // Normal advance to next round
                    fybgame.round++;
                    let newround = {moves:[]};
                    if (newmove.type !== MOVE_TYPE_VALID) {
                        fybgame.freeforall = true;
                        newround.letters = fybgame.letters.slice(0,fybgame.round+1);
                        // Players all move in free-for-all except the one that just failed
                        fybgame.players.forEach(player => {
                            if (player.alive) {
                                player.tomove = true;
                            }
                        });
                    } else {
                        newround.letters = fybgame.letters.slice(0,fybgame.round+2);
                        // Next player to move. In round 1, player [0] goes first.
                        let pindex = (fybgame.round - 1) % fybgame.players.length;
                        fybgame.players[pindex].tomove = true;
                    }
                    fybgame.rounds.push(newround);
                }
            }
        }
    }
}

function ServerFybPickLetters(res, allwords) {
    // console.log(`Pick letters ${letters}`);
    AllowAllCallers(res);
    let letters = pickTiles(allwords, 6);
    res.json({letters: letters});
}

function ServeFybPlayAgain(res, req) {
    // console.log(`Game replay for ${req.query.number}`);
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            if (fybgame.started && fybgame.finished) { // in case already set up for replay (probably by other player)
                fybgame.started = false;
                fybgame.finished = false;
                // Shift first player to end for next game
                fybgame.players.push(fybgame.players.splice(0,1)[0]); // pushes first item to end
                AddAdminChat(fybgame.chatNumber, 'Play again');
            }
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServerFybStartGame(res, req, allwords) {
    // console.log(`Game start for ${req.query.number}`);
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            if (fybgame.started) { // Already started (probably by other player)
                res.json(fybgame);
            } else if (fybgame.players.length < 2) {
                res.json({error: 'You need at least two players to start the game'});
            } else {
                let letters = pickTiles(allwords, 6);
                fybgame.round = 1;
                fybgame.rounds = [{moves: []}];
                fybgame.letters = letters;
                fybgame.started = true;
                fybgame.finished = false;
                fybgame.players.forEach(player => {
                    player.alive = true;
                    if (fybgame.type === GAME_TYPE_SURVIVAL) {
                        player.tomove = true;
                    }
                    if (fybgame.type === GAME_TYPE_CLASSIC) {
                        player.tomove = false;
                    }
                });
                if (fybgame.type === GAME_TYPE_CLASSIC) {
                    fybgame.players[0].tomove = true; // Play again code moves first player to end
                    fybgame.freeforall = false;
                    fybgame.rounds[0].letters = fybgame.letters.slice(0,3);
                }
                AddAdminChat(fybgame.chatNumber, 'Start game');
                res.json(fybgame);
            }
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

module.exports = {
    ServeFybChatMessage,
    ServeFybCreateGame,
    ServeFybGetChat,
    ServeFybGetGame,
    ServeFybGetTopAnswers,
    ServeFybJoinGame,
    ServeFybListGames,
    ServeFybMakeMove,
    ServerFybPickLetters,
    ServeFybPlayAgain,
    ServerFybStartGame
};