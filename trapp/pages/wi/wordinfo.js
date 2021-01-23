import React, { useState } from 'react';
import Link from 'next/link'
import Showinfo from './showinfo'

export default function handler(req, res)  {
    return (
        <React.Fragment>
        <head>
        <title>Word Info</title>
        </head>
        <h1>Word Info</h1>
        <Showinfo key="US" word="US" showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N"/>
        <Showinfo key="CAR" word="CAR" showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N"/>
        <Showinfo key="FRAZ" word="FRAZ" showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N"/>
        <p>
            <Link href={'../../'}>
                <a className="wmlink">Home</a>
            </Link>
        </p>
        </React.Fragment>
        );
}

