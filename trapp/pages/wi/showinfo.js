import { useEffect, useState } from 'react'

export default function Showinfo( props ) {
    const [info, setInfo] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        const apiCall = async ()=>{
            let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?letters=' : 'https://tilerunner.herokuapp.com/ENABLE2K?letters='
            //  'https://words-scrabble.herokuapp.com/api/info/'
            // let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word)
            let response = await fetch(url + props.word)
            let jdata = await response.json()
            console.log(`swaps=${JSON.stringify(jdata.swaps)}`)
            setInfo(jdata)
            setLoaded(true)
        }
        apiCall()
    },[])

    return (
        <div className="wibody">
            {loaded ?
                <table><tbody>
                    {props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts)}
                    {props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps)}
                    {displayWordRow()}
                    {props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops)}
                    <tr className="divider"><td colSpan={props.word.length + props.word.length + 3}>&nbsp;</td></tr>
                </tbody></table>
            :
                <p>Loading ...</p>
            }
        </div>
    );

    function displayInsertsRow(inserts) {
        return(
            <tr key={`inserts.${props.word}`}>
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
    function displaySwapsRow(swaps) {
        const swaps2 = [...swaps, '']
        return(
            <tr key={`swaps.${props.word}`}>
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
            <tr className="displayWordRow" key={`word.${props.word}`}>
                <td className="insertCountSpacer"></td>
                {props.word?.toUpperCase().split("").map((l, index) => (
                    <>
                        <td className={info.valid ? "letter" : "letterInvalidWord"}>{l}</td>
                        <td className="facevalue"><sub>{letterValue(l)}</sub></td>
                    </>
                ))}
                <td key={key1}>
                {props.showAnagrams === "Y" &&
                    <span key={info.anagrams}>
                    {info.anagrams.length > 0 &&
                        <span className="anagramCount" data-toggle="tooltip" title={info.anagrams}>{info.anagrams.length}</span>
                    }
                    </span>
                }
                </td>
                <td key={key2}>
                    {info.valid ?
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
            <tr key={`drops.${props.word}`} className="dropRow">
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

    function displayAnagramsRow(anagrams) {
        return(
            <tr key={`anagrams.${props.word}`}>
                <td>{`Anagrams: ${anagrams}`}</td>
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

