import { Console } from 'console';

var fs = require('fs');
var path = require('path');

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    res.statusCode = 405
    res.send('Not allowed')
  } else {
    try {
      var wpath = path.join('C:\\Users\\justc\\OneDrive\\Documents\\NWL2020', 'nwl2020.txt')
      fs.readFile(wpath, 'utf8', (err, data) => {
        if (req.query.regex) {
          let regexmatches = []
          try {
            let regex = new RegExp("\\b" + req.query.regex + "\\b",'g')
            let regexresult = data.match(regex) || []
            regexmatches = [...regexmatches, ...regexresult]
          } catch(e) {
            regexmatches = [`Regex internal error ${e}`]
          }
          res.send([...regexmatches])
        } else {
          if (req.query.word) {
            let allwords = data.split('\n')
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
          } else {
            res.statusCode = 405
            res.send('Bad param')
          }
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.send(`General internal error ${e}`)
    }
  }
}

/*
// Return a random word of requested length
app.get('/api/random/:length', async (req, res) => {
    try {
        fs.readFile('words.json', 'utf8', (err, data) => {
            let words = JSON.parse(data)
            try {
                res.send(words[`len${req.params.length}`][Math.floor(Math.random() * words[`len${req.params.length}`].length)])
            } catch (e) {
                res.send(`error ${e}`)
            }
            })
    } catch (e) {
        res.send(`error ${e}`)
    }
    
})

// Return info about a word
app.get('/api/info/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let words = JSON.parse(data)
      let wlen = word.length
      let wordssamelength = wlen > 1 && wlen < 16 ? words[`len${req.params.word.length}`] : []
      let sublength = wlen - 1
      let wordsonelesslength = sublength > 1 && sublength < 16 ? words[`len${sublength}`] : []
      let nextlength = word.length + 1
      let wordsonelonger = nextlength > 1 && nextlength < 16 ? words[`len${nextlength}`] : []
      try {
        let valid = getValid(word, wordssamelength)
        let anagrams = getAnagrams(word, wordssamelength)
        let swaps = getSwaps(word, wordssamelength)
        let drops = getDrops(word, wordsonelesslength)
        let inserts = getInserts(word, wordsonelonger)
        res.send({valid, anagrams, swaps, drops, inserts})
      } catch(e) {
        res.send(`error ${e}`)
      }
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})


// Return whether a word is valid, Y or N
app.get('/api/valid/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let words = JSON.parse(data)
      let wlen = word.length
      let wordssamelength = wlen > 1 && wlen < 16 ? words[`len${req.params.word.length}`] : []
      try {
        let valid = getValid(word, wordssamelength)
        res.send(valid)
      } catch(e) {
        res.send(`error ${e}`)
      }
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})
// Return anagrams for a word, the word provided is not returned
app.get('/api/anagrams/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let alphagram = word.split('')
      alphagram.sort()
      jalphagram = alphagram.join()
      let words = JSON.parse(data)
      let wlen = word.length
      let wordssamelength = wlen > 1 && wlen < 16 ? words[`len${req.params.word.length}`] : []
      let anagrams = getAnagrams(word, wordssamelength)
      res.send(anagrams);
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})
// Return positional array of swaps letters for a word, the word provided is not returned
// Example: HIRING returns ["AFTW","","DK","","",""]
app.get('/api/swaps/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let words = JSON.parse(data)
      let wlen = word.length
      let wordssamelength = wlen > 1 && wlen < 16 ? words[`len${req.params.word.length}`] : []
      let swaps = getSwaps(word, wordssamelength)
      res.send(swaps);
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})
// Return positional array of drop flags for a word to indicate which letters can be dropped
// Example: PINING can drop the N (for PIING) and returns ["N","N","Y","N","N","N"]
app.get('/api/drops/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let words = JSON.parse(data)
      let sublength = req.params.word.length - 1
      let wordsonelesslength =  sublength > 1 && sublength < 16 ? words[`len${sublength}`] : []
      let drops = getDrops(word, wordsonelesslength)
      res.send(drops);
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})
// Return positional array of insert letters for a word
// Example: CAT returns ["S","HO","NRS"] because of SCAT then CHAT COAT then CANT CART CAST
app.get('/api/inserts/:word', async (req, res) => {
  try {
    fs.readFile('words.json', 'utf8', (err, data) => {
      let word = req.params.word.toUpperCase()
      let words = JSON.parse(data)
      let nextlength = word.length + 1
      let wordsonelonger = nextlength > 1 && nextlength < 16 ? words[`len${nextlength}`] : []
      let inserts = getInserts(word, wordsonelonger)
      res.send(inserts);
    })
  } catch (e) {
    res.send(`error ${e}`)
  }
})
*/
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