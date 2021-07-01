var fs = require('fs');
var path = require('path');
const allwordsunsplit = readWordList();
const allwords = allwordsunsplit.replace(/[\r\n]+/gm, "|").split('|');

/*
   I tried having this function as a const, but was getting an error about using something before being initialized.
   I searched online and saw something about using function instead and it did the trick
*/
function readWordList() {
  let data = '';
  try
  {
    var wpath = path.join(__dirname, "../../../../../server/ENABLE2K_word_list.txt");
    data = fs.readFileSync(wpath).toString();
    console.log(`Read word list ok`);
  }
  catch (e)
  {
    console.log(`Error reading word list ${e}`);
  }
  return data;
}

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development') {
    res.statusCode = 405
    res.send('Not allowed')
  } else {
    try {
      if (allwords.length > 0) {
        if (req.query.regex) {
          let regexmatches = []
          try {
            let regex = new RegExp("\\b" + req.query.regex + "\\b",'g')
            let regexresult = allwordsunsplit.match(regex) || []
            regexmatches = [...regexmatches, ...regexresult]
          } catch(e) {
            regexmatches = [`Regex internal error ${e}`]
          }
          let count = regexmatches.length;
          if (regexmatches.length > 50) {
            regexmatches = regexmatches.slice(0,50)
          }
          res.send({regexmatches: [...regexmatches], count: count})
        } else if (req.query.word) {
          let word = req.query.word.toLowerCase()
          let wlen = word.length
          let wordssamelength = allwords.filter(function (e) {
            return e.length === wlen;
          });
          let sublength = wlen - 1
          let wordsonelesslength = allwords.filter(function (e) {
            return e.length === sublength;
          });
          let nextlength = word.length + 1
          let wordsonelonger = allwords.filter(function (e) {
            return e.length === nextlength;
          });
          try {
            let valid = getValid(word, wordssamelength)
            let anagrams = getAnagrams(word, wordssamelength)
            let swaps = getSwaps(word, wordssamelength)
            let drops = getDrops(word, wordsonelesslength)
            let inserts = getInserts(word, wordsonelonger)
            res.send({valid, anagrams, swaps, drops, inserts})
          } catch(e) {
            res.statusCode = 500
            res.send(`Word internal error ${e}`)
          }
        } else if (req.query.alphagram) {
          let alphagramarray = req.query.alphagram.toLowerCase().split('')
          alphagramarray.sort()
          let alphagram = alphagramarray.join('')
          let wlen = alphagram.length
          let wordssamelength = allwords.filter(function (e) {
            return e.length === wlen;
          });
          let anagrams = getAnagrams(alphagram, wordssamelength)
          // getAnagrams does return the word that is the first parameter
          if (wordssamelength.indexOf(alphagram) >-1 ) {
            anagrams = [alphagram, ...anagrams]
          }
          res.send({alphagram: alphagram, anagrams: anagrams})
        } else if (req.query.random) {
          let wlen = parseInt(req.query.random)
          let wordssamelength = allwords.filter(function (e) {
            return e.length === wlen;
          });
          let rand = Math.floor(Math.random() * wordssamelength.length)
          res.send(wordssamelength[rand])
        } else {
          res.statusCode = 405
          res.send('Bad param')
        }
      } else {
        res.statusCode = 500
        res.send(`Internal error, no words in word list. Sorry!`)
      }
    } catch (e) {
      res.statusCode = 500
      res.send(`General internal error ${e}`)
    }
  }
}

function getValid(word, wordssamelength) {
  return wordssamelength.indexOf(word) > -1 ? 'Y' : 'N'
}
function getAnagrams(word, wordssamelength) {
  let anagrams = []
  let alphagramarray = word.split('')
  alphagramarray.sort()
  let alphagram = alphagramarray.join()
  let checkword = ''
  for (checkword of wordssamelength) {
    if (checkword !== word) {
      let newalphagram = checkword.split('')
      newalphagram.sort()
      let calphagram = newalphagram.join()
      if (alphagram === calphagram) {
        anagrams = [...anagrams, checkword]
      }
    }
  }
  return anagrams
}
function getSwaps(word, wordssamelength) {
  let swaps = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < word.length; i++) {
    let swap = ''
    for (var j = 0; j < 26; j++) {
      if (word[i] !== alphabet[j]) {
        let testword = [...word]
        testword[i] = alphabet[j]
        let checkword = testword.join('')
        if (wordssamelength.indexOf(checkword) > -1) {
          swap = swap + alphabet[j]
        }
      }
    }
    swaps = [...swaps, swap]
  }
  return swaps
}
function getDrops(word, wordsonelesslength) {
  let drops = []
  for (var i = 0; i < word.length; i++) {
    let testword = word.split('').filter((el,index) => {return index !== i;})
    let checkword = testword.join('')
    let drop = wordsonelesslength.indexOf(checkword) > -1 ? 'Y' : 'N'
    drops = [...drops, drop]
  }
  return drops
}
function getInserts(word, wordsonelonger) {
  let inserts = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i <= word.length; i++) {
    let insert = ''
    for (var j = 0; j < 26; j++) {
      let testword = word.split('')
      testword.splice(i, 0, alphabet[j])
      let checkword = testword.join('')
      if (wordsonelonger.indexOf(checkword) > -1) {
        insert = insert + alphabet[j]
      }
  }
    inserts = [...inserts, insert]
  }
  return inserts
}