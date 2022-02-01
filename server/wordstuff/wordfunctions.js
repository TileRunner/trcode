const alphabet = 'abcdefghijklmnopqrstuvwxyz';

/* Private methods */
function pickRandomWord(wordArray, removeFromArray=false) {
    let rand = Math.floor(Math.random() * wordArray.length);
    let randomword = wordArray[rand];
    if (removeFromArray) {
        wordArray.splice(rand,1);
    }
    return randomword;
}

function getSwapWords(word, wordssamelength) {
  let swaps = [];
  let wlc = word.toLowerCase(); // The lexicon is stored as lower case
  for (var i = 0; i < wlc.length; i++) {
    let swap = '';
    for (var j = 0; j < 26; j++) {
      if (wlc[i] !== alphabet[j]) {
        let testword = [...wlc];
        testword[i] = alphabet[j];
        let checkword = testword.join('')
        if (swaps.indexOf(checkword) < 0 && wordssamelength.indexOf(checkword) > -1) {
          swaps.push(checkword);
        }
      }
    }
  }
  return swaps;
}

function getDropWords(word, wordsonelesslength) {
  let drops = [];
  let wlc = word.toLowerCase(); // The lexicon is stored as lower case
  for (var i = 0; i < wlc.length; i++) {
    let testword = wlc.split('').filter((el,index) => {return index !== i;});
    let checkword = testword.join('');
    if (wordsonelesslength.indexOf(checkword) > -1) {
      drops.push(checkword);
    }
  }
  return drops;
}

function getInsertWords(word, wordsonelonger) {
  let inserts = [];
  let wlc = word.toLowerCase(); // The lexicon is stored as lower case
  for (var i = 0; i <= wlc.length; i++) {
    for (var j = 0; j < 26; j++) {
      let testword = wlc.split('');
      testword.splice(i, 0, alphabet[j]);
      let checkword = testword.join('');
      if (wordsonelonger.indexOf(checkword) > -1) {
        inserts.push(checkword);
      }
    }
  }
  return inserts;
}  

/**
 * Determine how many swaps between two words of equal length.
 * @param {string} word1 A word
 * @param {string} word2 Another word of the same length
 * @returns The number of positions at which the letter is different between the two words, -1 if unequal length words.
 */
function countSwaps(word1="", word2="") {
  let result = 0;
  let letters1 = Array.from(word1.toLowerCase());
  let letters2 = Array.from(word2.toLowerCase());
  if (letters1.length === letters2.length) {
      for (let i = 0; i < letters1.length; i++) {
          const l1 = letters1[i];
          if (letters1[i] !== letters2[i]) {
              result++;
          }
      }
  } else {
      result = -1;
  }
  return result;
}

/**
* Determine whether two words are anagrams.
* @param {string} word1 A word
* @param {string} word2 Another word
* @returns Whether the two words are anagrams, case insensitive.
*/
function areAnagrams(word1="", word2="") {
  return Array.from(word1).sort().join('').toLowerCase() === Array.from(word2).sort().join('').toLowerCase();
}

function isAnInsert(fromWord="", toWord="") {
  if (fromWord.length + 1 !== toWord.length) {
    return false; // An insert goes to a word with one more letter
  }
  let fw = fromWord.toLowerCase();
  let tw = toWord.toLowerCase();
  for (let i = 0; i < tw.length; i++) {
    let checkword = Array.from(tw);
    checkword.splice(i,1);
    if (checkword.every((value, index) => value === fw[index])) {
      return true;
    }
  }
  return false;
}

/* Public methods to be exported */

function getAnagrams(word, wordssamelength) {
  let wlc = word.toLowerCase();
  let anagrams = wordssamelength.filter((w) => {return areAnagrams(wlc, w);});
}
/**
 * Determine the words that can be reached by swapping one letter in the provided word.
 * @param {string} word The word that you want to know the swaps for (words that you swap one letter to get to)
 * @param {string[]} wordssamelength All words of the same length as word
 * @returns A string array of swap letters. Each element has the swaps letters for that corresponding index.
 * @example "frog" returns "gp,l,aiu,emw" due to grog and prog, flog, frag and frig and frug, froe and from and frow.
 * @description The word can be passed in using upper or lower or mixed case letters. The return uses lower case.
 */
function getSwaps(word, wordssamelength) {
    let swaps = [];
    let wlc = word.toLowerCase(); // The lexicon is stored as lower case
    for (var i = 0; i < wlc.length; i++) {
      let swap = '';
      for (var j = 0; j < 26; j++) {
        if (wlc[i] !== alphabet[j]) {
          let testword = [...wlc];
          testword[i] = alphabet[j];
          let checkword = testword.join('')
          if (wordssamelength.indexOf(checkword) > -1) {
            swap = swap + alphabet[j];
          }
        }
      }
      swaps.push(swap); // Add the string of swap letters for index i.
    }
    return swaps;
}

function getDrops(word, wordsonelesslength) {
    let drops = [];
    let wlc = word.toLowerCase(); // The lexicon is stored as lower case
    for (var i = 0; i < wlc.length; i++) {
      let testword = wlc.split('').filter((el,index) => {return index !== i;});
      let checkword = testword.join('');
      let drop = wordsonelesslength.indexOf(checkword) > -1 ? 'Y' : 'N';
      drops = [...drops, drop];
    }
    return drops;
}

function getInserts(word, wordsonelonger) {
    let inserts = [];
    let wlc = word.toLowerCase(); // The lexicon is stored as lower case
    for (var i = 0; i <= wlc.length; i++) {
      let insert = '';
      for (var j = 0; j < 26; j++) {
        let testword = wlc.split('');
        testword.splice(i, 0, alphabet[j]);
        let checkword = testword.join('');
        if (wordsonelonger.indexOf(checkword) > -1) {
          insert = insert + alphabet[j];
        }
    }
      inserts = [...inserts, insert];
    }
    return inserts;
}  

/**
 * Create a morpho puzzle. The rules of the puzzle are to go from the first word to the last by swapping one letter at a time.
 * Each interim word must be a valid word.
 * @param {string[]} allwords A word list (lexicon)
 * @param {int} numRows How many rows to generate
 * @param {int} numCols How many columns to generate (word length)
 * @returns A json object. 'fail' is the reason for failing, if any. 'puzzle' is the generated puzzle with a possible solution filled in.
 */
function createMorphoPuzzle (allwords=[], numRows=3, numCols=3) {
    let fail = '';
    let wordssamelength = allwords.filter(function (e) {
      return e.length === numCols;
    });
    let protector = 0;
    let protectorMax = 200000;
    let puzzle = Array(numRows);
    let candidatesByRow = Array(numRows);
    let rowIndex = 0;
    candidatesByRow[rowIndex] = [...wordssamelength];
    // Avoid words ending in S for shorter puzzles to make the puzzles more interesting / challenging.
    // Allow it for longer puzzles so it finds a puzzle sooner.
    if (numCols < 6) {
      candidatesByRow[0] = candidatesByRow[0].filter(w => {return w[numCols-1] !== 's';});
    }
    while (rowIndex > -1 && rowIndex < numRows && protector < protectorMax) {
      protector++;
      if (candidatesByRow[rowIndex].length === 0) { // Ran out of candidates for this row index
        rowIndex--; // try again from the previous row
      } else {
        // let rand = Math.floor(Math.random() * candidatesByRow[rowIndex].length);
        // let newRow = candidatesByRow[rowIndex][rand];
        // candidatesByRow[rowIndex].splice(rand,1);
        let newRow = pickRandomWord(candidatesByRow[rowIndex], true);
        puzzle[rowIndex] = newRow;
        rowIndex++; // Ends the loop if all rows were filled
        if (rowIndex < numRows) {
          // Prep candidates for next row
          candidatesByRow[rowIndex] = wordssamelength.filter((w) => {return validNextMorph(puzzle[0], rowIndex, puzzle[rowIndex-1], w);});
        }
      }
    }
    if (protector === protectorMax) {
      fail = 'Program quit to protect against infinite looping.';
    } else if (rowIndex < 0) {
      fail = `Cannot seem to make a puzzle ${numRows} rows by ${numCols} columns.`;
    } else {
      console.log(`Morpho puzzle from ${puzzle[0]} to ${puzzle[numRows-1]} in ${numRows - 1} moves.`);
    }
    return {puzzle: puzzle, fail: fail};
  }
  
  /**
   * Determine whether the current word is a valid moved from the previous word when generating a Morpho puzzle
   * @param {string} startWord The first word in the puzzle
   * @param {number} requiredDiffLetterCount How many letters must be different between startWord and currentWord
   * @param {string} previousWord The previous word in the puzzle
   * @param {string} currentWord The current word in the puzzle
   * @returns Whether the current word is a valid move from the previous word
   */

const validNextMorph = (startWord="", requiredDiffLetterCount=0, previousWord="", currentWord="") => {
    // Start word is row index 0
    // Word at row index 1 must have 1 letter swap
    // Word at row index 2 must have 2 letter swaps relative to the start word, and 1 relative to previous word
    // Word at row index 3 must have 3 letter swaps relative to the start word, and 1 relative to previous word
    // Etc. So pass row index to requiredDiffLetterCount.
  
    // Avoid words ending in S for shorter puzzles to make the puzzles more interesting / challenging.
    // Allow it for longer puzzles so it finds a puzzle sooner.
    if (currentWord.length < 6 && currentWord[currentWord.length-1] === "s") {
      return false;
    }
    let diffFromStartCount = countSwaps(startWord, currentWord);
    let diffFromPreviousCount = countSwaps(previousWord, currentWord);
    return (diffFromStartCount === requiredDiffLetterCount && diffFromPreviousCount === 1);
  }

/**
 * Create a Transmogrify puzzle. The rules are as follows:
 * The computer picks the start word and target word.
 * The solver changes one thing at a time to get from the start word to the target word.
 * Valid changes are: swap a letter, drop a letter, insert a letter, or anagram the word.
 * @param {string[[]]} wordsByLength An array of word lists where the index is the word length up to 8.
 * @param {string[[]]} alphagramsByLength An array of alphagrams lists with anagrams where the index is the word length up to 8.
 * @param {int} minMoves The minimum numbers of moves required to solve the puzzle.
 * @returns {} A json object. 'fail' is the fail reason, if any. 'startWord' is the start word and 'targetWord' is the target word.
 * @description The puzzle will restrict itself to a range of word lengths.
 */
function createTransmogrifyPuzzle(wordsByLength=[[]], alphagramsByLength=[[]], minMoves=2) {
  let fail = '';
  let numRows = minMoves + 1;
  let protector = 0;
  let protectorMax = 200;
  let puzzle = Array(numRows).fill([]);
  let minWordLength = 4;
  let maxWordLength = 6;
  let untriedFirstWords = wordsByLength[5]; // Always start with a 5. Use ".concat(wordsByLength[6])" etc to add more.
  let madePuzzle = false;
  let startWord = '';
  let targetWord = '';
  while (!madePuzzle && !fail) {
    protector++;
    if (untriedFirstWords.length === 0) {
      fail = `Cannot seem to make a transmogrify puzzle with ${numRows} rows.`;
    } else if (protector >= protectorMax) {
      fail = 'Infinite loop protection. No puzzle made.';
    } else {
      startWord = pickRandomWord(untriedFirstWords, true);
      puzzle[0] = [startWord];
      let used = [startWord];
      for(let rowIndex=1; rowIndex<numRows; rowIndex++) {
        puzzle[rowIndex] = [];
        // Loop through words at previous row index
        for (let i = 0; i < puzzle[rowIndex-1].length; i++) {
          const pw = puzzle[rowIndex-1][i]; // A word from the previous row
          let swaps = getSwapWords(pw, wordsByLength[pw.length]);
          let drops = pw.length - 1 < minWordLength ? [] : getDropWords(pw, wordsByLength[pw.length-1]);
          let inserts = pw.length + 1 > maxWordLength ? [] : getInsertWords(pw, wordsByLength[pw.length+1]);
          let letters = Array.from(pw);
          letters.sort();
          let alphagram = letters.join('');
          let ai = alphagramsByLength[pw.length].alphagrams.indexOf(alphagram);
          let anagrams = ai < 0 ? [] : alphagramsByLength[pw.length].anagrams[ai];
          let candidates = swaps.concat(drops).concat(inserts).concat(anagrams);
          candidates.forEach(cw => {
            if (!used.includes(cw)) {
              used.push(cw);
              puzzle[rowIndex].push(cw);
            }
          });
        }
      }
      if (puzzle[numRows-1].length > 0) {
        madePuzzle = true;
        targetWord = pickRandomWord(puzzle[numRows-1], false);
        console.log(`Transmogrify puzzle from ${startWord} to ${targetWord} in ${minMoves} moves.`);
      }
    }
  }
  return {startWord: startWord, targetWord: targetWord, fail: fail};
}

module.exports = {getAnagrams, getSwaps, getDrops, getInserts, createMorphoPuzzle, createTransmogrifyPuzzle};