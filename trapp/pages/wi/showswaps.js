import { useEffect, useState } from 'react'

export default function Showswaps( props ) {
    const [swaps, setSwaps] = useState()
    useEffect(()=>{
        const apiCall = async ()=>{
            let response = await fetch('https://words-scrabble.herokuapp.com/api/swaps/' + props.word)
            let data = await response.text()
            let swapdata = JSON.parse(data)
            setSwaps(swapdata)
        }
        apiCall()
    },[])
    return(
        <tr key={props.word}>
        {swaps?.map((s, index) => (
            <>
                <td></td>
                {s === '' ?
                    <td></td>
                    :
                    <td class="swapCount" data-toggle="tooltip" title={s}>{s.length}
                    </td>
                }
            </>
        ))}
        </tr>
    )
}