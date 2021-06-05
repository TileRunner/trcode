import { useEffect, useState } from 'react'

export default function Showinfo( props ) {
    const [info, setInfo] = useState([])
    const [loaded, setLoaded] = useState(false)
    // console.log("NODE_ENV=" + process.env.NODE_ENV)
    useEffect(()=>{
        const apiCall = async ()=>{
            let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
             'http://localhost:3000/api/words?word=' 
             :
             'https://words-scrabble.herokuapp.com/api/info/'
            // let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word)
            let response = await fetch(url + props.word)
            let data = await response.text()
            // console.log("data=" + data)
            let jdata = JSON.parse(data)
            setInfo(jdata)
            setLoaded(true)
        }
        apiCall()
    },[])

    return (
        <html>
        <body className="wibody">
            {loaded ?
                <table>
                <tr>
                    <td>
                    <table>
                        {props.showInserts === "Y" ? displayInsertsRow(info.inserts) : <></>}
                        {props.showSwaps === "Y" ? displaySwapsRow() : <></>}
                        {displayWordRow()}
                        {props.showDrops === "Y" ? displayDropsRow(info.drops) : <></> }
                        <tr className="divider"><td colSpan={props.word.length + props.word.length + 3}>&nbsp;</td></tr>
                    </table>
                    </td>
                </tr>
                </table>
            :
                <p>Loading ...</p>
            }
        </body>
        </html>        
    );

    function displayInsertsRow(inserts) {
        return(
            <tr key={props.word}>
            {inserts.map(i => (
                <>
                    {i === '' ?
                        <td></td>
                        :
                        <td className="insertCount" data-toggle="tooltip" title={i}>{i.length}
                        </td>
                    }
                    <td></td>
                </>
            ))}
            </tr>
        )
    }
    function displaySwapsRow() {
        const swaps2 = [...info.swaps, '']
        return(
            <tr key={props.word}>
            {swaps2?.map((s, index) => (
                <>
                    {props.showInserts === 'N' || info.inserts[index] === '' ?
                        <td className="insertCountSpacer"></td>
                    :
                        <td className="balloonstring">➻</td>
                    }
                    {s === '' ?
                        <td></td>
                        :
                        <td className="swapCount" data-toggle="tooltip" title={s}>{s.length}
                        </td>
                    }
                </>
            ))}
            </tr>
        )
    }

    function displayWordRow() {
        const key1 = props.word;
        const key2 = props.word + '2';
        return(
            <tr className="displayWordRow">
            <td className="insertCountSpacer"></td>
            {props.word?.split("").map((l, index) => (
                <>
                <td className={info.valid === "Y" ? "letter" : "letterInvalidWord"}>{l}</td>
                <td className="facevalue"><sub>{letterValue(l)}</sub></td>
                </>
            ))}
            <td key={key1}>
            {props.showAnagrams === "Y" ?
                <span key={info.anagrams}>
                {info.anagrams.length === 0 ?
                <></>
                :
                <span className="anagramCount" data-toggle="tooltip" title={info.anagrams}>{info.anagrams.length}</span>
                }
                </span>
        :
            <>
            </>
            }
            </td>
            <td key={key2}>
                {info.valid === 'Y' ?
                    <span className="wordIsValid">Valid word</span>
                :
                    <span className="wordIsNotValid">Not a recognized word</span>
                }
            </td>
            </tr>
        )
    }

    function displayDropsRow(drops) {
        return(
            <tr key={props.word} className="dropRow">
            {drops.map(d => (
                <>
                <td></td>
                {d === "Y" ?
                    <td className="dropIndicator" data-toggle="tooltip" title="You can drop this letter">&bull;</td>
                    :
                    <td></td>
                }
                </>
            ))}
        </tr>
        )
    }

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

