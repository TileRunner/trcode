export const BOARD_COL_HEADERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
export const BOARD_ROW_HEADERS = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
export const SQUARE_UNUSED = ".";
// Types of participant
export const PARTY_TYPE_UNDETERMINED = 'U'; // Not determined yet
export const PARTY_TYPE_PRISONERS = 'P'; // Player representing prisoners
export const PARTY_TYPE_GUARDS = 'G'; // Player representing guards
export const PARTY_TYPE_OBSERVER = 'O'; // Observer (not implemented yet)
// Whose turn
export const WHOSE_TURN_PRISONERS = PARTY_TYPE_PRISONERS;
export const WHOSE_TURN_GUARDS = PARTY_TYPE_GUARDS;
export const WHOSE_TURN_GAMEOVER = 'X';
// Participant material-icons name
export const PARTY_ICON_PRISONERS = 'run_circle';
export const PARTY_ICON_GUARDS = 'security';
// Participant title
export const PARTY_TITLE_PRISONERS = 'PRISONERS';
export const PARTY_TITLE_GUARDS = 'GUARDS';
// Types of move
export const MOVE_TYPE_PLAY = 'PLAY';
export const MOVE_TYPE_SWAP = 'SWAP';
export const MOVE_TYPE_PASS = 'PASS';
// Directions (for the arrow on the board to signify word play direction)
export const DIR_RIGHT = 'r';
export const DIR_DOWN = 'd';
export const DIR_NONE = '';
// Used by (for specifying who a square is used by, i.e. has a tile on that square)
export const USED_BY_PRISONERS = PARTY_TYPE_PRISONERS;
export const USED_BY_GUARDS = PARTY_TYPE_GUARDS;
export const USED_BY_NONE = '';