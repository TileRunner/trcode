import React, { useState } from 'react';
import Link from 'next/link'

export default function handler(req, res)  {
    const [squares, setSquares] = useState(Array(15).fill(Array(15).fill('?')))
    const [tiles, setTiles] = useState(['A','A','A','A','A','A','A','A','A','B','B','C','C','C','D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J','K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W','X','Y','Y','Z','?','?'])
    const [selection, setSelection] = useState(-1)
    const [ptiles, setPtiles] = useState([])
    const [gtiles, setGtiles] = useState([])
    const [whoseturn, setWhoseturn] = useState('P')
    const [picking, setPicking] = useState(true)
    return(
        <Game/>
    )

    function Game() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h1 className="wmtitle Mastermind">Prison Break</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <Prisoners />
                    </div>
                    <div class="col-6">
                        <Board />
                    </div>
                    <div class="col-2">
                        <Tiles />
                    </div>
                    <div class="col-2">
                        <Guards />
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        <Link href={'../../'}>
                            <a className="wmlink">Home</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    function Board() {
        return (
            <table className="pbBoard">
                <tbody>
                    {squares.map((r,ri) => (
                        <div key={`BoardRow${ri}`}>
                            <BoardRow r={r} ri={ri} />
                        </div>
                    ))}
                </tbody>
            </table>
        )
    }

    function BoardRow(props) {
        return (
            <tr className="row pbRow">
                {props.r.map((c,ci) => (
                    <div key={`Square${props.ri}-${ci}`}>
                        <Square c={c} ci={ci} ri={props.ri}/>
                    </div>
                ))}
            </tr>
        )
    }

    function Square(props) {
        const tdclass = props.c !== "?" ? "pbSquareUsed" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare"
        const tdvalue = props.c !== "?" ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : "⎔"
        return (
            <div>
                <td>
                    <button  className={tdclass}
                    onClick={function() {
                        if (selection > -1 && props.c === "?") {
                            let newSquares = [...squares]
                            let newRow = [...newSquares[props.ri]]
                            newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection]
                            newSquares[props.ri] = [...newRow]
                            let newTiles = whoseturn === 'P' ? [...ptiles] : [...gtiles]
                            newTiles.splice(selection, 1)
                            setSquares(newSquares)
                            whoseturn === 'P' ? setPtiles(newTiles) : setGtiles(newTiles)
                        } else if (props.c !== "?") {
                            // Assuming some good will from the users to click a tile they played
                            if (whoseturn === 'P' && ptiles.length < 7) {
                                let newPtiles = [...ptiles, props.c]
                                let newSquares = [...squares]
                                let newRow = [...newSquares[props.ri]]
                                newRow[props.ci] = "?"
                                newSquares[props.ri] = [...newRow]
                                setSquares(newSquares)
                                setPtiles(newPtiles)
                            } else if (whoseturn === 'G' && gtiles.length < 7) {
                                let newGtiles = [...gtiles, props.c]
                                let newSquares = [...squares]
                                let newRow = [...newSquares[props.ri]]
                                newRow[props.ci] = "?"
                                newSquares[props.ri] = [...newRow]
                                setSquares(newSquares)
                                setGtiles(newGtiles)
                            }
                        }
                    }}
                    >
                        {tdvalue}
                    </button>
                </td>
            </div>
        )
    }

    function Tiles() {
        return (
            <p className="pbTilepool">
                {tiles.map((t,ti) => (
                    <span key={`tile${ti}`}>
                        {ti > 0 && tiles[ti] !== tiles[ti-1] ? <br></br> : <></>}
                        <button>
                            {t}
                        </button>
                    </span>
                ))}
            </p>
        )
    }

    function Prisoners() {
        if (picking && whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
            let newPtiles = [...ptiles]
            let newTiles = [...tiles]
            while (newPtiles.length < 7 && newTiles.length > 0) {
                let rand = Math.floor(Math.random() * tiles.length)
                newPtiles = [...newPtiles, newTiles[rand]]
                newTiles.splice(rand,1)   
            }
            setPtiles(newPtiles)
            setTiles(newTiles)
            setPicking(false)
        }
        return (
            <div>
                <p>PRISONERS</p>
                <p className="pbTilepool">
                    {ptiles.map((t,ti) => (
                        <span key={`ptile${ti}`}>
                            <button
                                onClick={function() {
                                    whoseturn === 'P' ? setSelection(ti) : alert('It is not your turn')
                                }}
                            >
                                {t}
                            </button>
                        </span>
                    ))}
                </p>
                {whoseturn === 'P' ?
                    <button
                    onClick={function() {
                        setWhoseturn('G')
                        setPicking(true)
                    }}>
                        Finish Turn
                    </button>
                    :
                    <></>
                }
            </div>
        )
    }

    function Guards() {
        if (picking && whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
            let newGtiles = [...gtiles]
            let newTiles = [...tiles]
            while (newGtiles.length < 7 && newTiles.length > 0) {
                let rand = Math.floor(Math.random() * tiles.length)
                newGtiles = [...newGtiles, newTiles[rand]]
                newTiles.splice(rand,1)
            }
            setTiles(newTiles)
            setGtiles(newGtiles)
            setPicking(false)
        }
        return (
            <div>
                <p>GUARDS</p>
                <p className="pbTilepool">
                    {gtiles.map((t,ti) => (
                        <span key={`gtile${ti}`}>
                            <button
                                onClick={function() {
                                    whoseturn === 'G' ? setSelection(ti) : alert('It is not your turn')
                                }}
                            >
                                {t}
                            </button>
                        </span>
                    ))}
                </p>
                {whoseturn === 'G' ?
                    <button
                    onClick={function() {
                        setWhoseturn('P')
                        setPicking(true)
                    }}>
                        Finish Turn
                    </button>
                    :
                    <></>
                }
             </div>
        )
    }
}

