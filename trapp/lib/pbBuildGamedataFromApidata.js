const { InitialSquareArray } = require("./pbInitialSquareArray");
const COL_HEADERS = "ABCDEFGHIJKLMNO";

function BuildGamedataFromAidata(jApiGameData) {
    // console.log(`BuildGamedataFromAidata ${JSON.stringify(jApiGameData)}`);
    let gd = jApiGameData; // game data (json)
    let lastEventIndex = gd.events.length - 1;
    let lastEventObject = gd.events[lastEventIndex];
    let ptiles = "";
    let gtiles = "";
    let tiles = "";
    let squareArray = InitialSquareArray(gd.racksize);
    let moves = [];
    let rescues = 0;
    for (let index = 0; index < gd.events.length; index++) {
        const ev = gd.events[index];
        if (ev.ptiles) {
            ptiles = ev.ptiles;
        }
        if (ev.gtiles) {
            gtiles = ev.gtiles;
        }
        if (ev.type === "PLAY" || ev.type === "SWAP" || ev.type === "PASS") {
            let move = {
                by: ev.by,
                type: ev.type
            };
            if (ev.type === "PLAY" || ev.type === "SWAP") {
                tiles = ev.tiles;
            }
            if (ev.type === "PLAY") {
                move.mainword = ev.mainword;
                move.extrawords = ev.extrawords.split(",");
                move.pos = ev.pos;
                if (ev.by === "P") {
                    rescues = ev.rescues;
                }
                let rcd = getRowColDir(ev.pos);
                let row = rcd.row;
                let col = rcd.col;
                for (let tileindex = 0; tileindex < ev.mainword.length; tileindex++) {
                    let squareArrayRow = squareArray[row];
                    let squareArrayCell = squareArrayRow[col];
                    if (squareArrayCell.usedby === '') {
                        squareArrayCell.usedby = ev.by;
                        squareArrayCell.letter = ev.mainword[tileindex];
                    }
                    if (rcd.dir === "r") {
                        col++;
                    } else {
                        row++;
                    }
                }
            }
            moves.push(move);
        }
    }
    let msg = {
        gameid: gd.gameid, // the id for the game
        pname: gd.pname, // prisoners nickname
        gname: gd.gname, // guards nickname
        type: "pb", // prisonbreak
        func: "providegamedata", // provide game data
        // no sender
        tiles: tiles.split(""),
        squareArray: squareArray,
        ptiles: ptiles.split(""),
        gtiles: gtiles.split(""),
        whoseturn: lastEventObject.whoseturn,
        moves: moves, // no rewind info
        rescues: rescues,
        racksize: gd.racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
        allowRewind: false
    };
    // console.log(JSON.stringify(msg));
    return msg;
}
function getRowColDir(str) {
    var patt1 = /[A-Z][0-9][0-9]/;
    var patt2 = /[A-Z][0-9]/;
    var patt3 = /[0-9][0-9][A-Z]/;
    var patt4 = /[0-9][A-Z]/;
    if (patt1.test(str)) {
        var row = Number(str.substr(1,2)) - 1;
        var col = COL_HEADERS.indexOf(str[0]);
        var dir = "d";
        return {row, col, dir};
    }
    if (patt2.test(str)) {
        var row = Number(str[1]) - 1;
        var col = COL_HEADERS.indexOf(str[0]);
        var dir = "d";
        return {row, col, dir};
    }
    if (patt3.test(str)) {
        var row = Number(str.substr(0,2)) - 1;
        var col = COL_HEADERS.indexOf(str[2]);
        var dir = "r";
        return {row, col, dir};
    }
    if (patt4.test(str)) {
        var row = Number(str[0]) - 1;
        var col = COL_HEADERS.indexOf(str[1]);
        var dir = "r";
        return {row, col, dir};
    }
}

module.exports = { BuildGamedataFromAidata };