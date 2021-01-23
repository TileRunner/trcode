import { useState, useEffect } from 'react'

export default function Showanagrams( props ) {
    const [anagrams, setAnagrams] = useState([])
    useEffect(()=>{
        const apiCall = async ()=>{
            let response = await fetch('https://words-scrabble.herokuapp.com/api/anagrams/' + props.word)
            let data = await response.text()
            let anagramdata = JSON.parse(data)
            setAnagrams(anagramdata)
        }
        apiCall()
    },[])
    return(
        <span key={anagrams}>
            {anagrams.length === 0 ?
            <></>
            :
            <span class="anagramCount" data-toggle="tooltip" title={anagrams}>{anagrams.length}</span>
            }
        </span>
)
}