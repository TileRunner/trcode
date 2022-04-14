import { DIR_RIGHT, DIR_DOWN, BOARD_COL_HEADERS, DIR_NONE } from "./prisonBreakConstants";

export function getRowColDirFromPos(str) {
    var row = -1;
    var col = -1;
    var dir = DIR_NONE;
    var patt1 = /[A-Z][0-9][0-9]/;
    var patt2 = /[A-Z][0-9]/;
    var patt3 = /[0-9][0-9][A-Z]/;
    var patt4 = /[0-9][A-Z]/;
    if (patt1.test(str)) {
        row = Number(str.substr(1,2)) - 1;
        col = BOARD_COL_HEADERS.indexOf(str[0]);
        dir = DIR_DOWN;
        return {row, col, dir};
    }
    if (patt2.test(str)) {
        row = Number(str[1]) - 1;
        col = BOARD_COL_HEADERS.indexOf(str[0]);
        dir = DIR_DOWN;
        return {row, col, dir};
    }
    if (patt3.test(str)) {
        row = Number(str.substr(0,2)) - 1;
        col = BOARD_COL_HEADERS.indexOf(str[2]);
        dir = DIR_RIGHT;
        return {row, col, dir};
    }
    if (patt4.test(str)) {
        row = Number(str[0]) - 1;
        col = BOARD_COL_HEADERS.indexOf(str[1]);
        dir = DIR_RIGHT;
        return {row, col, dir};
    }
    return {row, col, dir};
}