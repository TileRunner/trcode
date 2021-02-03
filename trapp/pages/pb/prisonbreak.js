import React, { useState } from 'react';
import Link from 'next/link'

export default function handler(req, res)  {
    const [squares, setSquares] = useState(Array(15).fill(Array(15).fill('?')))
    const [tiles, setTiles] = useState(['A','A','A','A','A','A','A','A','A','B','B','C','C','C','D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J','K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W','X','Y','Y','Z','?','?'])
    const [selection, setSelection] = useState(-1)
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
                        <p>PRISONERS</p>
                    </div>
                    <div class="col-6">
                        <Board />
                    </div>
                    <div class="col-2">
                        <Tiles />
                    </div>
                    <div class="col-2">
                        <p>GUARDS</p>
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
                            newRow[props.ci] = tiles[selection]
                            newSquares[props.ri] = [...newRow]
                            let newTiles = [...tiles]
                            newTiles.splice(selection, 1)
                            setSquares(newSquares)
                            setTiles(newTiles)
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
                        <button
                            onClick={function() {
                                setSelection(ti)
                            }}
                        >
                            {t}
                        </button>
                    </span>
                ))}
            </p>
        )
    }
}

