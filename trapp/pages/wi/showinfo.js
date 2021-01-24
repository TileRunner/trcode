import Showswaps from './showswaps'
import Showanagrams from './showanagrams'
import Showvalidity from './showvalidity'

export default function Showinfo( props ) {
    // These need to be obtained from api when available
    let inserts = ['','','1:A','','','','','1:S'];
    let drops = [1,0,0,0,0,0,0];

    return (
        <html>
        <body className="wibody">
        <table>
        <tr>
            <td>
            <table>
                {props.showInserts === "Y" ? displayInsertsRow(inserts) : <></>}
                {props.showSwaps === "Y" ? <Showswaps key={props.word} word={props.word}/> : <></>}
                {displayWordRow(props.word)}
                {props.showDrops === "Y" ? displayDropsRow(drops) : <></> }
                <tr className="divider"><td>&nbsp;</td></tr>
            </table>
            </td>
        </tr>
        </table>
        </body>
        </html>        
    );

    function displayInsertsRow(inserts) {
        return(
            <tr>
            {inserts.map(i => (
                <>
                    {i === '' ?
                        <td></td>
                        :
                        <td className="insertCount" data-toggle="tooltip" title={i.split(':')[1]}>{i.split(':')[0]}
                        </td>
                    }
                    <td></td>
                </>
            ))}
            </tr>
        )
    }

    function displayDropsRow(drops) {
        return(
            <tr>
            {drops.map(d => (
                <>
                <td></td>
                {d === 1 ?
                    <td className="dropIndicator">&bull;</td>
                    :
                    <td></td>
                }
                </>
            ))}
        </tr>
        )
    }

    function displayWordRow(word) {
        const key1 = word;
        const key2 = word + '2';
        return(
            <tr className="displayWordRow">
            <td width="5px"></td>
            {word?.split("").map((l, index) => (
                <>
                <td className="letter">{l}</td>
                <td className="facevalue"><sub>{letterValue(l)}</sub></td>
                </>
            ))}
            <td key={key1}>
            {props.showAnagrams === "Y" ?
                <Showanagrams word={word} />
            :
            <>
            </>
            }
            </td>
            <td key={key2}>
                <Showvalidity word={word} />
            </td>
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

