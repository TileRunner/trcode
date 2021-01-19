import React, { useState } from 'react';

export default function handler(req, res)  {
    return (
        <Wordinfo />
        );
}

function Wordinfo() {
    const [word, setWord] = useState('PREFECT');
    const [points, setPoints] = useState([3,1,1,4,1,3,1]);
    const [inserts, setInserts] = useState(['','','1:A','','','','','1:S']);
    const [swaps, setSwaps] = useState(['','','','1:L','','','','']); //extra element for showing last balloon string
    const [anagrams, setAnagrams] = useState('PERFECT');
    const [drops, setDrops] = useState([1,0,0,0,0,0,0]);
    return (
        <html>
        <head>
        <title>Word Info</title>
        </head>
        <body className="wibody">
        <h1>Word Info</h1>
        <table>
        <tr>
            <td>
            <table>
                <tr>
                    {inserts.map(i => (
                        <>
                            {i === '' ?
                                <td></td>
                                :
                                <td class="insertCount" data-toggle="tooltip" title={i.split(':')[1]}>{i.split(':')[0]}
                                </td>
                            }
                            <td></td>
                        </>
                    ))}
                </tr>
                <tr>
                    {swaps.map((s, index) => (
                        <>
                            {inserts[index] === '' ?
                                <td></td>
                                :
                                <td class="balloonstring">⇣</td>
                            }
                            {s === '' ?
                                <td></td>
                                :
                                <td class="swapCount" data-toggle="tooltip" title={s.split(':')[1]}>{s.split(':')[0]}
                                </td>
                            }
                        </>
                    ))}
                </tr>
                <tr>
                <td></td>
                {word.split("").map((l, index) => (
                    <>
                    <td className="letter">{l}</td>
                    <td className="facevalue"><sub>{letterValue(l)}</sub></td>
                    </>
                ))}
                <td>
                    <table>
                    <tr>
                        <td class="anagramCount" data-toggle="tooltip" title={anagrams}>{anagrams.split(',').length}</td>
                    </tr>
                    </table>
                </td>
                </tr>
                <tr>
                    {drops.map(d => (
                        <>
                        <td></td>
                        {d === 1 ?
                            <td class="dropIndicator">&bull;</td>
                            :
                            <td></td>
                        }
                        </>
                    ))}
                </tr>
            </table>
            </td>
        </tr>
        </table>
        </body>
        </html>        
    );

    function letterValue(letter) {
        switch(letter) {
            case 'D':
                return(2);
            case 'G':
                return(2);
            case 'B':
                return(3);
            case 'C':
                return(3);
            case 'M':
                return(3);
            case 'P':
                return(3);
            case 'F':
                return(4);
            case 'H':
                return(4);
            case 'V':
                return(4);
            case 'W':
                return(4);
            case 'Y':
                return(4);
            case 'K':
                return(5);
            case 'J':
                return(8);
            case 'X':
                return(8);
            case 'Q':
                return(10);
            case 'Z':
                return(10);
        }
        return(1);
    }
}

