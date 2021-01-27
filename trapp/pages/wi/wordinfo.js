import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    return (
        <React.Fragment>
        <div class="container">
            <div class="row">
                <h1>Word Info</h1>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div className="form-group">
                        <label>Word: </label>
                        <input className="letterInput"
                            name="word"
                            value={word}
                            onChange={(e) => {
                                // const newword = e.target.value.toUpperCase().replace( /\W/g , '');
                                // let buildneword = ''
                                // newword.split('').map((l) => {
                                //     if (l.toLowerCase() !== l.toUpperCase()) {
                                //         buildneword = buildneword + l
                                //     }
                                // })
                                // setWord(buildneword)
                                setWord(e.target.value)
                            }}
                        />
                        <button id="acceptWord"
                            onClick={function() {
                                setWords([word, ...words]);
                                setWord('');
                            }}
                        >
                            "Get Info"
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    {words.map((w) => (
                        w === '' ? <></> :
                        <Showinfo key={w} word={w} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"/>
                    ))}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-1">
                    <Link href={'../../'}>
                        <a className="wmlink">Home</a>
                    </Link>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
}

