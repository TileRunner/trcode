import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-11 wititle">
                    Word Info
                </div>
                <div class="col-1 wihomelink" data-toggle="tooltip" title="Home">
                    <Link href={'../../'}>
                        <a>🏠</a>
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div className="form-inline">
                        <label>Word:&nbsp;</label>
                        <input
                            className="letterInput"
                            name="word"
                            value={word}
                            onChange={(e) => {
                                setWord(e.target.value)
                            }}
                        />
                        <label>&nbsp;</label>
                        <button id="acceptWord"
                            onClick={function() {
                                setWords([word, ...words]);
                                setWord('');
                            }}
                        >
                            Get Word Info
                        </button>
                        <label>&nbsp;</label>
                        <button id="acceptAlphagram"
                            onClick={function() {
                                let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
                                'http://localhost:3000/api/words?alphagram=' 
                                :
                                'https://words-scrabble.herokuapp.com/api/info/'
                                fetch(url + word).then(res => res.text()).then(text => {
                                    console.log("alphagram response data=" + text + ". NODE_ENV here is " + process.env.NODE_ENV)
                                    let jdata = JSON.parse(text)
                                    let newwords = []
                                    jdata.anagrams.map((w) => {
                                        newwords =[...newwords, w]
                                    })
                                    if (!(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
                                        if (jdata.valid === 'Y') {
                                            newwords = [word.toUpperCase(), ...newwords]
                                        }
                                    }
                                    newwords.sort()
                                    setWord('');
                                    setWords([...newwords, ...words])
                                })
                            }}
                        >
                            Get Anagrams
                        </button>
                        {(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
                            <>
                                <label>&nbsp;</label>
                                <button id="acceptRegex"
                                    onClick={function() {
                                        let url = 'http://localhost:3000/api/words?regex='
                                        fetch(url + word).then(res => res.text()).then(text => {
                                            console.log("regex response data=" + text)
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
                                    Get Regex Info
                                </button>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div class="col-sm-4"></div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    {words.map((w) => (
                        w === '' ? <></> :
                        <Showinfo key={w} word={w} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"/>
                    ))}
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
        );
}

