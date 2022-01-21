const fulltileset = [
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
    "Z"    
];

function pickInitialTiles() {
    let tiles = [...fulltileset];
    let picked = [];
    while (picked.length < 3) {
        let rand = Math.floor(Math.random() * tiles.length);
        picked.push(tiles[rand]);
        tiles.splice(rand, 1);
    }
    return({picked: picked, tiles: tiles});
}

function pickNextTile(tiles, fryLetters) {
    let rand = Math.floor(Math.random() * tiles.length);
    let picked = tiles[rand];
    let newFryLetters = [...fryLetters];
    newFryLetters.push(picked);
    let newTiles = [...tiles];
    newTiles.splice(rand, 1);
    return({newTiles: newTiles, newFryLetters: newFryLetters});
}

function fybPrepickTiles(words=[], guarantee=6) {
    // Pick all fry letters at once.
    // Param: words is the list of valid words
    // Param: guarantee is the minimum number of fry letters (see disclaimer below)
    // Technique: Pick a random word of at least length 'guarantee' then pick randomly from that.
    //            Then keep picking another tile at random until no answers are possible.
    // Disclaimer: The rules about not adding/removing S or reusing a word are not considered,
    //             so classic fyb play may not be able to get to the full array of fry letters
    //             returned. To mitigate, the caller can pass a bigger value for guarantee.
    let candidates = words.filter(w => {return w.length >= guarantee;});
    let rand = Math.floor(Math.random() * candidates.length);
    let tiles = Array.from(candidates[rand]);
    let fryLetters = [];
    while (tiles.length > 0) {
        let picked = pickNextTile(tiles, fryLetters);
        tiles = [...picked.newTiles];
        fryLetters = [...picked.newFryLetters];
    }
    tiles = [...fulltileset];
    for (let i = 0; i < fryLetters.length; i++) {
        const letter = fryLetters[i];
        let j = -1;
        for (let k = 0; k < tiles.length; k++) {
            const tile = tiles[k];
            if (tile === letter) {
                j = k;
            }
        }
        tiles.splice(j,1);
    }
    let loop = true;
    while (loop) {
        let picked = pickNextTile(tiles, fryLetters);
        if (words.filter((checkword) => {return wordHasFryLetters(picked.newFryLetters, checkword);}).length > 0) {
            tiles = [...picked.newTiles];
            fryLetters = [...picked.newFryLetters];
        } else {
            loop = false;
        }   
    }
    return fryLetters;
}

//TODO Make this a common function. Take this version since it handles upper or lower case for fry letter array.
function wordHasFryLetters(fryLetterArray, checkword) {
    let word = checkword.toUpperCase();
    for (let i = 0; i < fryLetterArray.length; i++) {
        let letterCountRequired = 0;
        let actualLetterCount = 0;
        for (let j = 0; j < fryLetterArray.length; j++) {
            if (fryLetterArray[i] === fryLetterArray[j]) {
                letterCountRequired = letterCountRequired + 1;
            }
        }
        for (let j = 0; j < word.length; j++) {
            if (fryLetterArray[i].toUpperCase() === word[j]) {
                actualLetterCount = actualLetterCount + 1;
            }
        }
        if (actualLetterCount < letterCountRequired) {
            return false;
        }
    }
    return true;
}


module.exports = {pickInitialTiles, pickNextTile, fybPrepickTiles};