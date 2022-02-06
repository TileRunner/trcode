const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';

/**
 * Determine how many swaps between two words of equal length, case insensitive.
 * @param {string} word1 A word
 * @param {string} word2 Another word of the same length
 * @returns The number of positions at which the letter is different between the two words, -1 if unequal length words.
 */
export function countSwaps(word1="", word2="") {
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
 * Determine whether two words are anagrams, case insensitive.
 * @param {string} word1 A word
 * @param {string} word2 Another word
 * @returns Whether the two words are anagrams.
 */
export function areAnagrams(word1="", word2="") {
    return Array.from(word1).sort().join('').toLowerCase() === Array.from(word2).sort().join('').toLowerCase();
}

/**
 * Determine where dropping any one letter from the longer word forms the shorter word, case insensitive
 * @param {string} longword The longer word
 * @param {string} shortword The shorter word
 * @returns {bool} Whether you can drop a letter from the longer word to get the shorter word
 */
export function isDrop(longword="", shortword="") {
    if (longword.length !== shortword.length + 1) {
        return false; // Must be 1 fewer letter to be a drop
    }
    let lw = longword.toLowerCase();
    let sw = shortword.toLowerCase();
    for (let i = 0; i < lw.length; i++) {
        let cw = Array.from(lw);
        cw.splice(i,1);
        if (cw.join('') === sw) {
            return true;
        }
    }
    return false;
}

/**
 * Determine whether a word is in the ENABLE2K lexicon, case insensitive
 * @param {string} word A word
 * @returns Whether the word is in the ENABLE2K lexicon
 * @async
 */
export async function isWordValid(word) {
    let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.exists;
}
