import { DIR_RIGHT, PARTY_TYPE_PRISONERS, USED_BY_NONE, MOVE_TYPE_PASS, MOVE_TYPE_SWAP, MOVE_TYPE_PLAY } from "./prisonBreakConstants";
import { initialSquareArray } from "./initialSquareArray";
import { getRowColDirFromPos } from "./getRowColDirFromPos";

export function buildGamedataFromApidata(jApiGameData) {
    // console.log(`BuildGamedataFromAidata ${JSON.stringify(jApiGameData)}`);
    let gd = jApiGameData; // game data (json)
    let lastEventIndex = gd.events.length - 1;
    let lastEventObject = gd.events[lastEventIndex];
    let ptiles = "";
    let gtiles = "";
    let tiles = "";
    let squareArray = initialSquareArray(gd.racksize);
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
        if (ev.type === "STARTGAME" || ev.type === MOVE_TYPE_PLAY || ev.type === MOVE_TYPE_SWAP) {
            tiles = ev.tiles;
        }
        if (ev.type === MOVE_TYPE_PLAY || ev.type === MOVE_TYPE_SWAP || ev.type === MOVE_TYPE_PASS) {
            let move = {
                by: ev.by,
                type: ev.type
            };
            if (ev.type === MOVE_TYPE_PLAY) {
                move.mainword = ev.mainword;
                move.extrawords = ev.extrawords.split(",");
                move.pos = ev.pos;
                if (ev.by === PARTY_TYPE_PRISONERS) {
                    rescues = ev.rescues;
                }
                let rcd = getRowColDirFromPos(ev.pos);
                let row = rcd.row;
                let col = rcd.col;
                for (let tileindex = 0; tileindex < ev.mainword.length; tileindex++) {
                    let squareArrayRow = squareArray[row];
                    let squareArrayCell = squareArrayRow[col];
                    if (squareArrayCell.usedby === USED_BY_NONE) {
                        squareArrayCell.usedby = ev.by;
                        squareArrayCell.letter = ev.mainword[tileindex];
                    }
                    if (rcd.dir === DIR_RIGHT) {
                        col++;
                    } else {
                        row++;
                    }
                }
            }
            moves.push(move);
        }
    }
    return {
        pname: gd.pname, // prisoners nickname
        gname: gd.gname, // guards nickname
        syncstamp: lastEventObject.timestamp, // for data sync logic
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
}

