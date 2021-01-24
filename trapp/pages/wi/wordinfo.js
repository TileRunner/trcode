import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    const [word, setWord] = useState('')
    const [words, setWords] = useState([])
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
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    setWords([word, ...words]);
                                    setWord('');
                                } else if (e.key.toLowerCase() !== e.key.toUpperCase()) {
                                    setWord(word + e.key.toUpperCase())
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    {words.map((w) => (
                        w === '' ? <></> :
                        <Showinfo key={w} word={w} showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N"/>
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

