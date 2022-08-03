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
            fybchat.msgs.push({name: name, msg: msg, time: Date.now()});
            return index;
        }
    }
    return -1;
}

function ServeFybChatMessage(res, req) {
    AllowAllCallers(res);
    let chatNumber = parseInt(req.query.number);
    let chatindex = AddChat(chatNumber, req.query.name, req.query.msg);
    if (chatindex < 0) {
        res.json({error: 'Chat not found'});
    } else {
        res.json(fybchats[chatindex]);
    }
}

function ServeFybCreateGame(res, req) {
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
        creator: req.query.name,
        players: [{ name: req.query.name }],
        letters: [],
        moves: [],
        started: false,
        finished: false
    };
    if (newfybgame.type === GAME_TYPE_CLASSIC) {
        newfybgame.nextstarter = 0;
    }
    fybgames.push(newfybgame);
    AddAdminChat(chatNumber, `Game created by ${req.query.name}`);
    res.json(newfybgame);
}

function ServeFybGetChat(res, req) {
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

function ServeFybJoinGame(res, req) {
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
                if (player.name === req.query.name) {
                    found2 = true;
                }
            }
            if (!found2) {
                fybgame.players.push({"name": req.query.name});
            }
            AddAdminChat(fybgame.chatNumber, `${req.query.name} ${found2 ? 'rejoined' : 'joined'}`);
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServeFybListGames(res, req) {
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
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            let newmove = {name: req.query.name, type: req.query.type.toUpperCase().trim()};
            if (newmove.type !== MOVE_TYPE_PASS) {
                newmove.word = req.query.word;
            }
            fybgame.moves.push(newmove);
            if (fybgame.type === GAME_TYPE_SURVIVAL) {
                let numalive = 0;
                let tomove = 0;
                fybgame.players.forEach(player => {
                    if (player.name === newmove.name) {
                        if (player.tomove) { // In case they submit same play again before it is processed
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
                if (tomove === 0) {
                    if (numalive < 2) {
                        fybgame.finished = true;
                    } else {
                        fybgame.round++;
                        fybgame.players.forEach(player => {
                            if (player.alive) {
                                player.tomove = true;
                            }
                        });
                    }
                }
            }
            if (fybgame.type === GAME_TYPE_CLASSIC) {
                // Lots to do here ... free for all round, sending move twice, points ...
            }
            AddAdminChat(fybgame.chatNumber, `Move by ${req.query.name}: ${newmove.type}`);
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServeFybPlayAgain(res, req) {
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            fybgame.letters = [];
            fybgame.moves = [];
            fybgame.started = false;
            fybgame.finished = false;
            AddAdminChat(fybgame.chatNumber, 'Play again');
            res.json(fybgame);
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServerFybStartGame(res, req, letters) {
    AllowAllCallers(res);
    let gameNumber = parseInt(req.query.number);
    let found = false;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            fybgame.round = 1;
            fybgame.letters = letters;
            fybgame.moves = [];
            fybgame.started = true;
            fybgame.finished = false;
            fybgame.players.forEach(player => {
                if (fybgame.type === GAME_TYPE_SURVIVAL) {
                    player.alive = true;
                    player.tomove = true;
                }
                if (fybgame.type === GAME_TYPE_CLASSIC) {
                    player.points = 0;
                }
            });
            if (fybgame.type === GAME_TYPE_CLASSIC) {
                fybgame.whosemoveindex = fybgame.nextstarter;
                fybgame.whosemovename = fybgame.players[fybgame.whosemoveindex].name;
                fybgame.nextstarter = (fybgame.nextstarter + 1) % fybgame.players.length;
            }
            AddAdminChat(fybgame.chatNumber, 'Start game');
            res.json(fybgame);
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
    ServeFybJoinGame,
    ServeFybListGames,
    ServeFybMakeMove,
    ServeFybPlayAgain,
    ServerFybStartGame
};