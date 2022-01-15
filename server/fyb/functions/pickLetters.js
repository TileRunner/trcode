function pickInitialTiles() {
    let tiles = [
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

module.exports = {pickInitialTiles, pickNextTile};
