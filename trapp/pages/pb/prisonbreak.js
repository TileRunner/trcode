import React, { useState } from 'react';
import Link from 'next/link'

export default function handler(req, res)  {
    const [gamedata, setGamedata] = useState([ // array of variables
        Array(15).fill(Array(15).fill('.')), // squares
        Array(15).fill(Array(15).fill('')),  // usedby
        // tiles
        ['A','A','A','A','A','A','A','A','A','B','B','C','C','D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J','K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W','X','Y','Y','Z','?','?'],
        -1, // selection
        [], // ptiles
        [], // gtiles
        'P', // whoseturn
        true // picking
        ]);

    return(
        <Game/>
    )

    function applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking) {
        setGamedata([squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking]);
    }

    function Game() {
        return (
            <div class="container-fluid prisonbreak">
                <div class="row">
                    <div class="col-12">
                        <h1 className="wmtitle Mastermind">Prison Break</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 pbPrisoners">
                        <Prisoners />
                    </div>
                    <div class="col-6" align="center">
                        <Board />
                    </div>
                    <div class="col-2 pbGuards">
                        <Guards />
                    </div>
                    <div class="col-2">
                        <Tiles />
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
        let squares = gamedata[0]
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
        // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
        let squares = gamedata[0]
        let usedby = gamedata[1]
        let tiles = gamedata[2]
        let selection = gamedata[3]
        let ptiles = gamedata[4]
        let gtiles = gamedata[5]
        let whoseturn = gamedata[6]
        let picking = gamedata[7]
        // there is a better way ^^^
        const usedbyrow = usedby[props.ri]
        const usedbyclass = usedbyrow[props.ci] === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards"
        const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare"
        const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "⎔" : "✦"
        return (
            <div>
                <td>
                    <button  className={tdclass}
                    onClick={function() {
                        if (selection > -1 && props.c === ".") { // tile is selected from rack and clicked square is not used yet
                            let newRow = [...squares[props.ri]]
                            newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection]
                            squares[props.ri] = [...newRow]
                            whoseturn === 'P' ? ptiles.splice(selection, 1) : gtiles.splice(selection,1)
                            let newUsedbyRow = [...usedby[props.ri]]
                            newUsedbyRow[props.ci] = whoseturn
                            usedby[props.ri] = [...newUsedbyRow]
                            selection = -1
                            applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
                        } else if (props.c !== ".") { // clicked square has a tile on it, treat as unplaying the tile
                            // Assuming some good will from the users to click a tile they played
                            if ((whoseturn === 'P' && ptiles.length < 7) || (whoseturn === 'G' && gtiles.length < 7)) {
                                whoseturn === 'P' ? ptiles.push(props.c) : gtiles.push(props.c)
                                let newRow = [...squares[props.ri]]
                                newRow[props.ci] = "."
                                squares[props.ri] = [...newRow]
                                let newUsedbyRow = [...usedby[props.ri]]
                                newUsedbyRow[props.ci] = ""
                                usedby[props.ri] = [...newUsedbyRow]
                                selection = -1
                                applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
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
        let tiles = gamedata[2]
        // there is a better way ^^^
        return (
            <div className="pbTilepool">
                {tiles.map((t,ti) => (
                    <span key={`tile${ti}`}>
                        {ti > 0 && tiles[ti] !== tiles[ti-1] ? <div className="pbTilepoolDivider"></div> : <></>}
                        <span className="pbTilepoolTile">{t}</span>
                    </span>
                ))}
            </div>
        )
    }

    function Prisoners() {
        // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
        let squares = gamedata[0]
        let usedby = gamedata[1]
        let tiles = gamedata[2]
        let selection = gamedata[3]
        let ptiles = gamedata[4]
        let gtiles = gamedata[5]
        let whoseturn = gamedata[6]
        let picking = gamedata[7]
        // there is a better way ^^^
        if (picking && whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
            while (ptiles.length < 7 && tiles.length > 0) {
                let rand = Math.floor(Math.random() * tiles.length)
                ptiles.push(tiles[rand])
                tiles.splice(rand,1)   
            }
            picking = false
            applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
        }
        return (
            <div>
                <p>PRISONERS</p>
                <p className="pbTilerack">
                    {ptiles.map((t,ti) => (
                        <span key={`ptile${ti}`}>
                            <button className={whoseturn === 'P' && selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP"}
                                onClick={function() {
                                    if (whoseturn === 'P') {
                                        selection = ti
                                        applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
                                    }
                                    else {
                                        alert('It is not your turn')
                                    }
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
                        whoseturn = 'G'
                        picking = true
                        selection = -1
                        applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
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
        // applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
        let squares = gamedata[0]
        let usedby = gamedata[1]
        let tiles = gamedata[2]
        let selection = gamedata[3]
        let ptiles = gamedata[4]
        let gtiles = gamedata[5]
        let whoseturn = gamedata[6]
        let picking = gamedata[7]
        // there is a better way ^^^
        if (picking && whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
            while (gtiles.length < 7 && tiles.length > 0) {
                let rand = Math.floor(Math.random() * tiles.length)
                gtiles.push(tiles[rand])
                tiles.splice(rand,1)
            }
            picking = false
            applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
        }
        return (
            <div>
                <p>GUARDS</p>
                <p className="pbTilerack">
                    {gtiles.map((t,ti) => (
                        <span key={`gtile${ti}`}>
                            <button className={whoseturn === 'G' && selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG"}
                                onClick={function() {
                                    if (whoseturn === 'G') {
                                        selection = ti
                                        applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
                                    }
                                    else {
                                        alert('It is not your turn')
                                    }
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
                        whoseturn = 'P'
                        picking = true
                        selection = -1
                        applyChanges(squares, usedby, tiles, selection, ptiles, gtiles, whoseturn, picking)
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

