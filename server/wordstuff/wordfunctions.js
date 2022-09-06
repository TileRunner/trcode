const alphabet = 'abcdefghijklmnopqrstuvwxyz';

/* Private methods */

/**
 * Get the alphagram for the given letters (word).
 * @param {string} letters The letters (word) that you want the alphagram for
 * @returns The alphagram for the given letters (word) in the same case that letters were passed as.
 */
function getAlphagram(letters="") {
  return Array.from(letters).sort().join('');
}

/**
* Determine whether two words are anagrams, case insensitive.
* @param {string} word1 A word
* @param {string} word2 Another word
* @returns Whether the two words are anagrams. False if the same word.
*/
function areAnagrams(word1="", word2="") {
  let w1 = word1.toLowerCase();
  let w2 = word2.toLowerCase();
  if (w1 === w2) {
      return false;
  }
  let a1 = getAlphagram(w1);
  let a2 = getAlphagram(w2);
  return a1 === a2;
}

/* Public methods to be exported */

function getAnagrams(word, wordssamelength) {
  let wlc = word.toLowerCase();
  let anagrams = wordssamelength.filter((w) => {return areAnagrams(wlc, w);});
  return anagrams;
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


module.exports = {getAnagrams, getSwaps, getDrops, getInserts};