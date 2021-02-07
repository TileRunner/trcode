import React from 'react';
import Link from 'next/link';

const escapehatches = ["0-0", "0-7", "0-14", "7-0", "7-14", "14-0", "14-7", "14-14"] // coords of escape hatches
const initialtiles = ['A','A','A','A','A','A','A','A','A'
,'B','B','C','C','D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E'
,'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J','K','L','L','L','L'
,'M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q'
,'R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U','V','V'
,'W','W','X','Y','Y','Z','?','?'] // initial tile pool

export default function PrisonBreak() {
    return(
        <Game />
    )
}

function Square(props) { // squareusedby, ri, ci, c, onClick
    // need squareusedby to pick css className corresponding to who played the tile on the square
    // need ri, ci to display alternating characters on unused squares
    // need c to represent which tile is on the square, if any
    // need onClick to handle square click at a higher level
    const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards"
    const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare" : "pbSquare2"
    const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "⎔" : "✦"
    return (
        <div>
            <td>
                <button className={tdclass} onClick={props.onClick}>
                    {tdvalue}
                </button>
            </td>
        </div>
    )
}

class Board extends React.Component {
    renderSquare(ri, ci, c, squareusedby) {
        return (
            <div key={`Square${ri}-${ci}`}>
                <Square c={c} ci={ci} ri={ri} squareusedby={squareusedby} onClick={() => this.props.onClick(ri, ci)} />
            </div>
        );
    }
    renderRow(ri) {
        return (
            <tr key={`BoardRow${ri}`} className="row pbRow">
                {this.props.squares[ri].map((c,ci) => (
                    this.renderSquare(ri, ci, c, (this.props.usedby[ri])[ci])
                ))}
            </tr>
        );
    }
    render() {
        return (
            <table className="pbBoard">
                <tbody>
                    {this.props.squares.map((r,ri) => (
                        this.renderRow(ri)
                    ))}
                </tbody>
            </table>
        )

    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        let tiles = [...initialtiles]
        let ptiles = []
        let gtiles = []
        while (ptiles.length < 7) {
            let rand = Math.floor(Math.random() * tiles.length)
            ptiles.push(tiles[rand])
            tiles.splice(rand,1)   
            rand = Math.floor(Math.random() * tiles.length)
            gtiles.push(tiles[rand])
            tiles.splice(rand,1)   
        }
        ptiles.sort()
        gtiles.sort()
        this.state = {
            squares: Array(15).fill(Array(15).fill('.')), // squares on the game board
            usedby: Array(15).fill(Array(15).fill('')),  // who put a tile on a square
            tiles: tiles,
            selection: -1, // which tile from the tile rack in play is selected
            ptiles: ptiles, // prisoners tiles
            gtiles: gtiles, // guards tiles
            whoseturn: 'P', // prisoners play first
            currentcoords: [], // coords of play currently being made to support tile recall and play validation
            rescues: 0 // number of prisoners rescued
        };
    }

    handleBoardSquareClick(ri, ci) {
        console.log("click on " + ri + ", " + ci)
        let selection = this.state.selection
        let squares = this.state.squares
        let squarevalue = (squares[ri])[ci]
        let whoseturn = this.state.whoseturn
        let ptiles = this.state.ptiles
        let gtiles = this.state.gtiles
        let usedby = this.state.usedby
        let currentcoords = this.state.currentcoords
        let coord = String(ri) + "-" + String(ci);
        let cci = currentcoords.indexOf(coord)
        if (selection > -1 && squarevalue === ".") { // tile is selected from rack and clicked square is not used yet
            let newRow = [...squares[ri]]
            newRow[ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection]
            squares[ri] = [...newRow]
            whoseturn === 'P' ? ptiles.splice(selection, 1) : gtiles.splice(selection,1)
            let newUsedbyRow = [...usedby[ri]]
            newUsedbyRow[ci] = whoseturn
            usedby[ri] = [...newUsedbyRow]
            selection = -1
            this.setState({
                squares: squares,
                usedby: usedby,
                ptiles: ptiles,
                gtiles: gtiles,
                selection: selection,
                currentcoords: [...currentcoords, coord]
            });
        } else if (squarevalue !== "." && cci > -1) { // clicked square has a tile on it from the current move in progress
            // Assuming some good will from the users to click a tile they played
            if ((whoseturn === 'P' && ptiles.length < 7) || (whoseturn === 'G' && gtiles.length < 7)) {
                whoseturn === 'P' ? ptiles.push(squarevalue) : gtiles.push(squarevalue)
                let newRow = [...squares[ri]]
                newRow[ci] = "."
                squares[ri] = [...newRow]
                let newUsedbyRow = [...usedby[ri]]
                newUsedbyRow[ci] = ""
                usedby[ri] = [...newUsedbyRow]
                selection = whoseturn === 'P' ? ptiles.length - 1 : gtiles.length - 1
                currentcoords.splice(cci,1)
                this.setState({
                    squares: squares,
                    usedby: usedby,
                    ptiles: ptiles,
                    gtiles: gtiles,
                    selection: selection,
                    currentcoords: currentcoords
                });
            }
        }
    }

    handlePrisonerTileClick(tileindex) { // the index of ptiles
        if (this.state.whoseturn === 'P') {
            this.setState({
                selection: tileindex
            });
        }
        else {
            alert('It is not your turn')
        }
    }

    handleGuardTileClick(tileindex) { // the index of gtiles
        if (this.state.whoseturn === 'G') {
            this.setState({
                selection: tileindex
            });
        }
        else {
            alert('It is not your turn')
        }
    }

    pickPrisonersTiles() {
        let ptiles = [...this.state.ptiles]
        let tiles = [...this.state.tiles]
        while (ptiles.length < 7 && tiles.length > 0) {
            let rand = Math.floor(Math.random() * tiles.length)
            ptiles.push(tiles[rand])
            tiles.splice(rand,1)   
        }
        ptiles.sort()
        this.setState({
            ptiles: ptiles,
            tiles: tiles
        })
    }
    pickGuardsTiles() {
        let gtiles = [...this.state.gtiles]
        let tiles = [...this.state.tiles]
        while (gtiles.length < 7 && tiles.length > 0) {
            let rand = Math.floor(Math.random() * tiles.length)
            gtiles.push(tiles[rand])
            tiles.splice(rand,1)   
        }
        gtiles.sort()
        this.setState({
            gtiles: gtiles,
            tiles: tiles
        })
    }

    endPrisonersTurn() {
        console.log("winning coords " + escapehatches.toString())
        console.log("current coords " + this.state.currentcoords.toString())
        let rescues = this.state.rescues
        for (var i = 0; i < this.state.currentcoords.length; i++) {
            if (escapehatches.indexOf(this.state.currentcoords[i]) > -1) {
                rescues++
            }
        }
        this.setState({
            whoseturn: 'G',
            selection: -1,
            currentcoords: [],
            rescues: rescues
        })
        this.pickPrisonersTiles()
    }
    endGuardsTurn() {
        this.setState({
            whoseturn: 'P',
            selection: -1,
            currentcoords: []
        })
        this.pickGuardsTiles()
    }

    render() {
        return (
            <div class="container-fluid prisonbreak">
                <div class="row">
                    <div class="col-11 pbtitle">
                        Prison Break
                    </div>
                    <div class="col-1 pbhomelink" data-toggle="tooltip" title="Home">
                        <Link href={'../../'}>
                            <a>🏠</a>
                        </Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 pbPrisoners">
                        <Prisoners
                            ptiles={this.state.ptiles}
                            whoseturn={this.state.whoseturn}
                            selection={this.state.selection}
                            onClick={(ti) => this.handlePrisonerTileClick(ti)}
                            onClickFinishTurn={() => this.endPrisonersTurn()}
                            rescues={this.state.rescues}
                        />
                    </div>
                    <div class="col-6" align="center">
                        <Board
                            squares={this.state.squares}
                            usedby={this.state.usedby}
                            onClick={(ri, ci) => this.handleBoardSquareClick(ri, ci)}
                            />
                    </div>
                    <div class="col-2 pbGuards">
                        <Guards
                            gtiles={this.state.gtiles}
                            whoseturn={this.state.whoseturn}
                            selection={this.state.selection}
                            onClick={(ti) => this.handleGuardTileClick(ti)}
                            onClickFinishTurn={() => this.endGuardsTurn()}
                        />
                    </div>
                    <div class="col-2">
                        <Tiles tiles={this.state.tiles}/>
                    </div>
                </div>
            </div>
        );    
    }
}

function Tiles(props) {
    // there is a better way ^^^
    return (
        <div className="pbTilepool">
            <h3>TILE POOL</h3>
            {props.tiles.map((t,ti) => (
                <span key={`tile${ti}`}>
                    {ti > 0 && t !== props.tiles[ti-1] ? <div className="pbTilepoolDivider"></div> : <></>}
                    <span className="pbTilepoolTile">{t}</span>
                </span>
            ))}
        </div>
    )
}

function RackTile(props) {
    return (
        <td className={props.tileclass} onClick={props.onClick}>
            {props.tilevalue}
        </td>
    )    
}

function FinishTurnButton(props) {
    return (
        <button onClick={props.onClick}>
            Finish Turn
        </button>
    )
}

class Prisoners extends React.Component {
    renderTile(tileclass, tileindex, tilevalue) {
        return (
            <RackTile key={tileclass + String(tileindex)} tileclass={tileclass} tilevalue={tilevalue} onClick={() => this.props.onClick(tileindex)}/>
        );
    }

    renderFinishTurn() {
        return (
            <FinishTurnButton onClick={() => this.props.onClickFinishTurn()}/>
        );
    }

    renderFreedPrisoners(count) {
        let dumb = Array(count).fill('nonsense')
        return (
            dumb.map((value,index) => (
                <span key={value + String(index)}>
                    <img
                        src="/breakfree.png"
                        alt="I'm free! I'm free!"
                        width="100"
                        height="100"
                        />
                </span>
            ))
        )
    }
    render() {
        return (
            <div>
                <p>PRISONERS</p>
                <p className="pbTilerack">
                    {this.props.ptiles.map((t,ti) => (
                        this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t)
                    ))}
                </p>
                {this.props.whoseturn === 'P' ?
                    this.renderFinishTurn()
                    :
                    <></>
                }
                <p>
                    Rescues made: {this.props.rescues}
                    <br></br>
                    {this.renderFreedPrisoners(this.props.rescues)}
                </p>
            </div>
        )
    }
}
class Guards extends React.Component {
    renderTile(tileclass, tileindex, tilevalue) {
        return (
            <RackTile key={tileclass + String(tileindex)} tileclass={tileclass} tilevalue={tilevalue} onClick={() => this.props.onClick(tileindex)}/>
        );
    }

    renderFinishTurn() {
        return (
            <FinishTurnButton onClick={() => this.props.onClickFinishTurn()}/>
        );
    }

    render() {
        return (
            <div>
                <p>GUARDS</p>
                <p className="pbTilerack">
                    {this.props.gtiles.map((t,ti) => (
                        this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t)
                    ))}
                </p>
                {this.props.whoseturn === 'G' ?
                    this.renderFinishTurn()
                    :
                    <></>
                }
            </div>
        )
    }
}