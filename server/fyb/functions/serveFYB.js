const fybgames = [];

function AllowAllCallers(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}
  
function ServeFybList(res, req) {
    AllowAllCallers(res);
    let gamelist = [];
    fybgames.forEach(fybgame => {
        if (fybgame.type === req.query.type) {
            gamelist.push({
                number: fybgame.number,
                createTime: fybgame.createTime,
                creator: fybgame.creator
            });
        }
    });
    res.json(gamelist);
}

function ServeFybCreate(res, req) {
    AllowAllCallers(res);
    let gameNumber = 1;
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number >= gameNumber) {
            gameNumber = fybgame.number + 1;
        }
    }
    let newfybgame = {
        number: gameNumber,
        type: req.query.type,
        createTime: Date.now(),
        creator: req.query.name,
        players: [{ name: req.query.name }],
        chat: []
    };
    fybgames.push(newfybgame);
    res.json(newfybgame);
}

function ServeFybJoin(res, req) {
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
            if (found2) {
                res.json({info: 'Rejoined'});
            } else {
                fybgame.players.push({"name": req.query.name});
                res.json({info: 'Joined'});
            }
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

function ServeFybGet(res, req) {
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

function ServeFybChat(res, req) {
    AllowAllCallers(res);
    let found = false;
    let gameNumber = parseInt(req.query.number);
    for (let index = 0; index < fybgames.length; index++) {
        const fybgame = fybgames[index];
        if (fybgame.number === gameNumber) {
            found = true;
            fybgame.chat.push({
                name: req.query.name,
                time: Date.now(),
                msg: req.query.msg
            });
            res.json({info: 'accepted'});
        }
    }
    if (!found) {
        res.json({error: 'Game not found'});
    }
}

module.exports = { ServeFybChat, ServeFybCreate, ServeFybGet, ServeFybJoin, ServeFybList };