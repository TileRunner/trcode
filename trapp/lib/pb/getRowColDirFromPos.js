import { DIR_RIGHT, DIR_DOWN, BOARD_COL_HEADERS } from "./prisonBreakConstants";

export function getRowColDirFromPos(str) {
    var patt1 = /[A-Z][0-9][0-9]/;
    var patt2 = /[A-Z][0-9]/;
    var patt3 = /[0-9][0-9][A-Z]/;
    var patt4 = /[0-9][A-Z]/;
    if (patt1.test(str)) {
        var row = Number(str.substr(1,2)) - 1;
        var col = BOARD_COL_HEADERS.indexOf(str[0]);
        var dir = DIR_DOWN;
        return {row, col, dir};
    }
    if (patt2.test(str)) {
        var row = Number(str[1]) - 1;
        var col = BOARD_COL_HEADERS.indexOf(str[0]);
        var dir = DIR_DOWN;
        return {row, col, dir};
    }
    if (patt3.test(str)) {
        var row = Number(str.substr(0,2)) - 1;
        var col = BOARD_COL_HEADERS.indexOf(str[2]);
        var dir = DIR_RIGHT;
        return {row, col, dir};
    }
    if (patt4.test(str)) {
        var row = Number(str[0]) - 1;
        var col = BOARD_COL_HEADERS.indexOf(str[1]);
        var dir = DIR_RIGHT;
        return {row, col, dir};
    }
}