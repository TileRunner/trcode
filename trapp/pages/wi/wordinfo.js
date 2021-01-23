import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    const [word, setWord] = useState('')
    const [words, setWords] = useState([])
    return (
        <React.Fragment>
        <head>
        <title>Word Info</title>
        </head>
        <h1>Word Info</h1>
        <div className="form-group">
            <label>Word: </label>
            <input className="form-control"
                name="word"
                value={word}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        setWords([...words, word]);
                        setWord('');
                    } else if (e.key.toLowerCase() !== e.key.toUpperCase()) {
                        setWord(word + e.key.toUpperCase())
                    }
                }}
            />
        </div>
        {words.map((w) => (
            w === '' ? <></> :
            <Showinfo key={w} word={w} showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N"/>
        ))}
        <p>
            <Link href={'../../'}>
                <a className="wmlink">Home</a>
            </Link>
        </p>
        </React.Fragment>
        );
}

