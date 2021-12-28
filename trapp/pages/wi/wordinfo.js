import React, { useState } from 'react';
import Showinfo from './showinfo'

const WordInfo = ({setWhereto}) => {
    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    return (
        <div className="trBackground">
            <div className="trTitle">
                Word Info
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <div className="trParagraph">
                <label>Word:&nbsp;</label>
                <input
                    name="word"
                    value={word}
                    onChange={(e) => {
                        setWord(e.target.value)
                    }}
                />
                <label>&nbsp;</label>
                <button id="acceptWord"
                    className="trButton"
                    onClick={function() {
                        setWords([word, ...words]);
                        setWord('');
                    }}
                >
                    Get Word Info
                </button>
                <label>&nbsp;</label>
                <button id="acceptAlphagram"
                    className="trButton"
                    onClick={function() {
                        let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?letters=' : 'https://tilerunner.herokuapp.com/ENABLE2K?letters='
                        // 'https://words-scrabble.herokuapp.com/api/info/'
                        fetch(url + word).then(res => res.text()).then(text => {
                            // console.log("alphagram response data=" + text + ". NODE_ENV here is " + process.env.NODE_ENV)
                            let jdata = JSON.parse(text)
                            let newwords = []
                            jdata.anagrams.map((w) => {
                                newwords =[...newwords, w]
                            })
                            if (jdata.valid) {
                                newwords.push(word.toUpperCase())
                            }
                            newwords.sort()
                            setWord('');
                            setWords([...newwords, ...words])
                        })
                    }}
                >
                    Get Anagrams
                </button>
                <label>&nbsp;</label>
                <button id="acceptRegex"
                    className="trButton"
                    onClick={function() {
                        let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?regex=' : 'https://tilerunner.herokuapp.com/ENABLE2K?regex='
                        fetch(url + word.toLocaleLowerCase()).then(res => res.text()).then(text => {
                            // console.log("regex response data=" + text)
                            let jdata = JSON.parse(text)
                            setWord('');
                            let newwords = []
                            jdata.regexmatches.map((w) => {
                                newwords =[...newwords, w]
                            })
                            setWords([...newwords, ...words])
                            if (jdata.count > 50) {
                                alert('Too many results, only 50 taken')
                            }
                        })
                    }}
                >
                    Get Regex Matches
                </button>
                <label>&nbsp;</label>
                {process.env.NODE_ENV === 'development' && <button id="validateWords"
                    className="trButton"
                    onClick={function() {
                        let url = 'http://localhost:5000/ENABLE2K?validate='
                        let validate = word.toLowerCase()
                        fetch(url + validate).then(res => res.text()).then(text => {
                            alert("validate response=" + text)
                        })
                    }}
                >
                    Test validate call
                </button>}
            </div>
            {words.map((w,wi) => (
                w === '' ? <></> :
                <Showinfo key={`${words.length - wi}.${w}`} word={w} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"/>
            ))}
        </div>
        );
}

export default WordInfo;