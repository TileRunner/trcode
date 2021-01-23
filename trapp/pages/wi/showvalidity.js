import { useState, useEffect } from 'react'

export default function Showvalidity( props ) {
    const [validity, setValidity] = useState(['Checking validity ...'])
    useEffect(()=>{
        const apiCall = async ()=>{
            let response = await fetch('https://words-scrabble.herokuapp.com/api/valid/' + props.word)
            let data = await response.text()
            setValidity([data])
        }
        apiCall()
    },[])
    return(
        <p key={props.word}>
            {validity[0] === 'Y' ?
                <span className="wordIsValid">Valid word</span>
            :
                validity[0] === 'N' ?
                    <span className="wordIsNotValid">Not a recognized word</span>
                :
                    validity[0]
            }
        </p>
    )
}