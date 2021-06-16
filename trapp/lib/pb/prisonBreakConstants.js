export const BOARD_COL_HEADERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
export const BOARD_ROW_HEADERS = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
export const SQUARE_UNUSED = ".";
// Types of participant
export const PARTY_TYPE_UNDETERMINED = 'U'; // Not determined yet
export const PARTY_TYPE_PRISONERS = 'P'; // Player representing prisoners
export const PARTY_TYPE_GUARDS = 'G'; // Player representing guards
export const PARTY_TYPE_OBSERVER = 'O'; // Observer
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
// Jokes about prison
export const JOKE_ARRAY = [
    'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I'+ "'m four! I'm four!" + '"',
    'Two peanuts were walking down a back alley. One was a salted.',
    "The psychic dwarf escaped! There's a small medium at large!",
    'What do you call a vegetable who has escaped prison? An escapea!',
    "The prisoners fave punctuation is a period. It marks the end of a sentence!",
    "Prison is only one word, but to robbers it's a whole sentence."
  ];
export const PING_INTERVAL = 20000; // when waiting for opponent ping every this many milliseconds
export const TILEBAG4 = [
    "A",  "A",  "A",
    "B",
    "C",
    "D",
    "E",  "E",  "E",  "E",
    "F",
    "G",
    "H",
    "I",  "I",  "I",
    "J",
    "K",
    "L",
    "M",
    "N",  "N",
    "O",  "O",  "O",
    "P",
    "Q",
    "R",  "R",
    "S",
    "T",  "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "?",  "?",
  ]; // initial tile pool for 4 letter rack mode
  export const TILEBAG5 = [
    "A",  "A",  "A",  "A",  "A",
    "B",
    "C",
    "D",  "D",
    "E",  "E",  "E",  "E",  "E",  "E",
    "F",
    "G",
    "H",
    "I",  "I",  "I",  "I",  "I",
    "J",
    "K",
    "L",  "L",
    "M",
    "N",  "N",  "N",
    "O",  "O",  "O",  "O",
    "P",
    "Q",
    "R",  "R",  "R",
    "S",  "S",
    "T",  "T",  "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "?",  "?",
  ]; // initial tile pool for 5 letter rack mode
  export const TILEBAG6 = [
    "A",  "A",  "A",  "A",  "A",  "A",  "A",
    "B",  "B",
    "C",  "C",
    "D",  "D",  "D",
    "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
    "F",
    "G",  "G",
    "H",  "H",
    "I",  "I",  "I",  "I",  "I",  "I",  "I",
    "J",
    "K",
    "L",  "L",  "L",
    "M",  "M",
    "N",  "N",  "N",  "N",
    "O",  "O",  "O",  "O",  "O",  "O",
    "P",  "P",
    "Q",
    "R",  "R",  "R",  "R",  "R",
    "S",  "S",  "S",
    "T",  "T",  "T",  "T",
    "U",  "U",  "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "?",  "?",
  ]; // initial tile pool for 6 letter rack mode
  export const TILEBAG7 = [
    "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",
    "B",  "B",
    "C",  "C",
    "D",  "D",  "D",  "D",
    "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
    "F",  "F",
    "G",  "G",  "G",
    "H",  "H",
    "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",
    "J",
    "K",
    "L",  "L",  "L",  "L",
    "M",  "M",
    "N",  "N",  "N",  "N",  "N",  "N",
    "O",  "O",  "O",  "O",  "O",  "O",  "O",  "O",
    "P",  "P",
    "Q",
    "R",  "R",  "R",  "R",  "R",  "R",
    "S",  "S",  "S",  "S",
    "T",  "T",  "T",  "T",  "T",  "T",
    "U",  "U",  "U",  "U",
    "V",  "V",
    "W",  "W",
    "X",
    "Y",  "Y",
    "Z",
    "?",  "?",
  ]; // initial tile pool for 7 letter rack mode
// Types of square. These match css class names.
export const SQUARE_TYPE_ESCAPE_HATCH = 'EscapeHatch'; // One of the escape hatch squares
export const SQUARE_TYPE_CENTRE = 'CenterSquare'; // The centre square
export const SQUARE_TYPE_STYLE1 = 'style1'; // The unused non-special squares alternate style
export const SQUARE_TYPE_STYLE2 = 'style2'; // The unused non-special squares alternate style
export const LETTER_NONE = ''; // No letter
