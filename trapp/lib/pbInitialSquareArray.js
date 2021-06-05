const USED_BY_NONE = '';
const SQUARE_TYPE_ESCAPE_HATCH = 'EscapeHatch'; // One of the escape hatch squares
const SQUARE_TYPE_CENTRE = 'CenterSquare'; // The centre square
const SQUARE_TYPE_STYLE1 = 'style1'; // The unused non-special squares alternate style
const SQUARE_TYPE_STYLE2 = 'style2'; // The unused non-special squares alternate style
const LETTER_NONE = ''; // No letter

function InitialSquareArray(racksize) { // Initial square array for given rack size
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

module.exports = { InitialSquareArray };