import { USED_BY_NONE, SQUARE_TYPE_ESCAPE_HATCH, SQUARE_TYPE_CENTRE, SQUARE_TYPE_STYLE1, SQUARE_TYPE_STYLE2, LETTER_NONE } from "./prisonBreakConstants";

export function initialSquareArray(racksize) { // Initial square array for given rack size
    let size = (racksize * 2) + 1;
    let sqa = Array(size);
    for (var row = 0; row < size; ++row) {
        let newrow = Array(size);
        for (var col = 0; col < size; ++col) {
            let newcol = {row: row, col: col, type: SQUARE_TYPE_STYLE2, usedby: USED_BY_NONE, letter: LETTER_NONE};
            if ((row === racksize) && (col === racksize)) {
                newcol.type = SQUARE_TYPE_CENTRE;
            } else if ((row % racksize === 0) && (col % racksize === 0)) {
                newcol.type = SQUARE_TYPE_ESCAPE_HATCH;
            } else if (row % 2 === col % 2) {
                newcol.type = SQUARE_TYPE_STYLE1;
            }
            newrow[col] = newcol;
        }
        sqa[row] = [...newrow];
    }
    return sqa;
}
