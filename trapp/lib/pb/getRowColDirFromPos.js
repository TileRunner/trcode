import { DIR_RIGHT, DIR_DOWN, BOARD_COL_HEADERS } from "./prisonBreakConstants";

export function getRowColDirFromPos(str) {
    var patt1 = /[A-Z][0-9][0-9]/;
    var patt2 = /[A-Z][0-9]/;
    var patt3 = /[0-9][0-9][A-Z]/;
    var patt4 = /[0-9][A-Z]/;
    if (patt1.test(str)) {
        let row = Number(str.substr(1,2)) - 1;
        let col = BOARD_COL_HEADERS.indexOf(str[0]);
        let dir = DIR_DOWN;
        return {row, col, dir};
    }
    if (patt2.test(str)) {
        let row2 = Number(str[1]) - 1;
        let col2 = BOARD_COL_HEADERS.indexOf(str[0]);
        let dir2 = DIR_DOWN;
        return {row2, col2, dir2};
    }
    if (patt3.test(str)) {
        let row3 = Number(str.substr(0,2)) - 1;
        let col3 = BOARD_COL_HEADERS.indexOf(str[2]);
        let dir3 = DIR_RIGHT;
        return {row3, col3, dir3};
    }
    if (patt4.test(str)) {
        let row4 = Number(str[0]) - 1;
        let col4 = BOARD_COL_HEADERS.indexOf(str[1]);
        let dir4 = DIR_RIGHT;
        return {row4, col4, dir4};
    }
}