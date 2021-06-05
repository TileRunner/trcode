import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 wititle">
                    Word Info
                    <i className="material-icons">help_outline</i>
                </div>
                <div className="col-1 wihomelink">
                    <Link href={"../../"}>
                        <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
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
                                    // console.log("alphagram response data=" + text + ". NODE_ENV here is " + process.env.NODE_ENV)
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
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    {words.map((w) => (
                        w === '' ? <></> :
                        <Showinfo key={w} word={w} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"/>
                    ))}
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
        );
}

