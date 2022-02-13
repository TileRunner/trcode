import { useEffect, useState } from 'react';
import ShowInsertsForOnePosition from './showInsertsForOnePosition';
import ShowSwapsForOnePosition from './showSwapsForOnePosition';
import ShowAnagramsForOneWord from './showAnagramsForOneWord';

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
            setInfo(jdata)
            setLoaded(true)
        }
        apiCall()
    },[])

    return (
        loaded ?
            <table>
                <tbody>
                    <tr>
                        <td>
                            <table className="trTable">
                                <tbody>
                                    {props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts)}
                                    {props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps)}
                                    {displayWordRow()}
                                    {props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops)}
                                </tbody>
                            </table>
                        </td>
                        {props.entryIndex > -1 && <td className="closeme">
                            <button className="closemebutton" onClick={() => props.removeEntry(props.entryIndex)}></button>
                        </td>}
                    </tr>
                </tbody>
            </table>
        :
            <div className="trEmphasis">Loading ...</div>
        
    );

    function displayInsertsRow(inserts) {
        return(
            <tr key={`insertsRow.${props.word}`}>
                {inserts.map((i,index) => (
                    <>
                        <ShowInsertsForOnePosition insertLetters={i} key={`insertsBallon.${index}`}>
                        </ShowInsertsForOnePosition>
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
                    <ShowSwapsForOnePosition swapLetters={s} key={`swapsBallon.${index}`}>
                    </ShowSwapsForOnePosition>
                </>
            ))}
            </tr>
        )
    }

    function displayWordRow() {
        const key1 = props.word;
        const key2 = props.word + '2';
        return(
            <tr key={`word.${props.word}`}>
                <td></td>
                {props.word?.toUpperCase().split("").map(l => (
                    <>
                        <td>{l}</td>
                        <td></td>
                    </>
                ))}
                <td key={key1}>
                {props.showAnagrams === "Y" && info.anagrams.length > 0 &&
                    <span key={info.anagrams}>
                        <ShowAnagramsForOneWord anagrams={info.anagrams}></ShowAnagramsForOneWord>
                    </span>
                }
                </td>
                <td key={key2}>
                    {info.valid !== 'Y' &&
                        <span className="trDanger">Invalid word</span>
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

}

