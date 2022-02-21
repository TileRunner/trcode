import { useState, useEffect } from "react";

const ClubPlayerList = ({clubGames=[], clubName=''}) => {
    const [playerTotals, setPlayerTotals] = useState([]);
    useEffect(() => {
        let totals = getTotals();
        setPlayerTotals(totals);
    });
    const myTableSize = {
        height: '800px',
        width: 'fit-content'
    };
    const myTableScroll = {
        height: '100%',
        overflowY: 'auto'
    };
    const getTotals = () => {
        let totals = [];
        for (let index = 0; index < clubGames.length; index++) {
            const game = clubGames[index];
            let foundPlayer = false;
            let foundOpponent = false;
            for (let index2 = 0; index2 < totals.length; index2++) {
                const total = totals[index2];
                if (total.Name === game.PlayerName) {
                    foundPlayer = true;
                    total.For = total.For + game.PlayerScore;
                    total.Against = total.Against + game.OpponentScore;
                    if (game.PlayerScore > game.OpponentScore) {
                        total.Wins = total.Wins + 1;
                    }
                    if (game.PlayerScore < game.OpponentScore) {
                        total.Losses = total.Losses + 1;
                    }
                    if (game.PlayerScore === game.OpponentScore) {
                        total.Wins = total.Wins + 0.5;
                        total.Losses = total.Losses + 0.5;
                    }
                }
                if (total.Name === game.OpponentName) {
                    foundOpponent = true;
                    total.Against = total.Against + game.PlayerScore;
                    total.For = total.For + game.OpponentScore;
                    if (game.PlayerScore < game.OpponentScore) {
                        total.Wins = total.Wins + 1;
                    }
                    if (game.PlayerScore > game.OpponentScore) {
                        total.Losses = total.Losses + 1;
                    }
                    if (game.PlayerScore === game.OpponentScore) {
                        total.Wins = total.Wins + 0.5;
                        total.Losses = total.Losses + 0.5;
                    }
                }
            }
            if (!foundPlayer) {
                let total = {
                    Name: game.PlayerName,
                    For: game.PlayerScore,
                    Against: game.OpponentScore,
                    Wins: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5,
                    Losses: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5,
                };
                totals.push(total);
            }
            if (!foundOpponent) {
                let total = {
                    Name: game.OpponentName,
                    For: game.OpponentScore,
                    Against: game.PlayerScore,
                    Wins: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5,
                    Losses: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5,
                };
                totals.push(total);
            }
        }
        totals.sort(function(a,b) {
            if (a.Name > b.Name) {return 1;} // by name
            return -1;});
        return totals;
    }
    return (<div className="trBackground">
        <div className="trSubtitle">
            Club Players: {clubName}
        </div>
        <div style={myTableSize}>
            <div style={myTableScroll}>
                <table className="trTable" border="1">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Wins</th>
                            <th>Spread</th>
                            <th>Losses</th>
                            <th>For</th>
                            <th>Against</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerTotals.map((total, index) => (
                            <tr key={`total.${total.Name}`}>
                                <td className="equispaced textright">{index+1}</td>
                                <td>{total.Name}</td>
                                <td className="textcenter">{total.Wins}</td>
                                <td className="equispaced textright">{total.For - total.Against}</td>
                                <td className="textcenter">{total.Losses}</td>
                                <td className="equispaced textright">{total.For}</td>
                                <td className="equispaced textright">{total.Against}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default ClubPlayerList;
