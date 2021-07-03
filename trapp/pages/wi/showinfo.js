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
            setInfo(jdata)
            setLoaded(true)
        }
        apiCall()
    },[])

    return (
        <div className="wibody">
            {loaded ?
                // <table>
                // <tr>
                //     <td>
                    <table><tbody>
                        {displayWordRow()}
                        {props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps)}
                        {props.showAnagrams === "Y" && info.anagrams.length > 0 && displayAnagramsRow(info.anagrams)}
                        {props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops)}
                        {props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts)}
                        <tr className="divider"><td colSpan={props.word.length + props.word.length + 3}>&nbsp;</td></tr>
                    </tbody></table>
                //     </td>
                // </tr>
                // </table>
            :
                <p>Loading ...</p>
            }
        </div>
    );

    function displayInsertsRow(inserts) {
        return(
            <tr key={`inserts.${props.word}`}>
                <td>{`Inserts: ${inserts}`}</td>
            </tr>
        )
    }
    function displaySwapsRow(swaps) {
        return(
            <tr key={`swaps.${props.word}`}>
                <td>{`Swaps: ${swaps}`}</td>
            </tr>
        )
    }

    function displayWordRow() {
        return(
            <tr className="displayWordRow" key={`word.${props.word}`}>
            <td>
            {props.word?.split("").map((l, index) => (
                <>
                <span className={info.valid ? "letter" : "letterInvalidWord"}>{l}</span>
                <span className="facevalue"><sub>{letterValue(l)}</sub></span>
                </>
            ))}
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
            <tr key={`drops.${props.word}`}>
                <td>{`Drops: ${drops}`}</td>
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

