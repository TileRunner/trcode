import { useState, useEffect } from "react";
import ClubList from "./club";
import ClubNightList from "./clubNight";
import ClubGameList from "./clubGame";
import ClubPlayerList from "./clubPlayer";

const ScrabbleClub = ({setWhereto}) => {
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/clubdata/' : 'https://tilerunner.herokuapp.com/clubdata/';
    const [showing, setShowing] = useState('Loading');
    const [clubs, setClubs] = useState([]);
    const [players, setPlayers] = useState([]);
    const [clubNights, setClubNights] = useState([]);
    const [clubGames, setClubGames] = useState([]);
    const [clubNightsClubId, setClubNightsClubId] = useState(-1);
    const [clubNightsClubName, setClubNightsClubName] = useState('No club selected');
    const [clubGamesClubNightId, setClubGamesClubNightId] = useState(-1);
    const [clubGamesClubNightDate, setClubGamesClubNightDate] = useState('No club night selected');
    const [clubGamesClubId, setClubGamesClubId] = useState(-1);
    const [clubGamesClubName, setClubGamesClubName] = useState('No club selected');
    const getClubs = () => {
        fetch(baseurl + 'clublist').then(res => res.text()).then(text => {
            let jdata = JSON.parse(text);
            jdata.sort((a,b) => a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
            setClubs(jdata);
        });
    };
    const getPlayers = () => {
        fetch(baseurl + 'playerlist').then(res => res.text()).then(text => {
            let jdata = JSON.parse(text);
            jdata.sort((a,b) => a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
            setPlayers(jdata);
        });
    };
    const getClubNights = (clubid) => {
        if (clubNightsClubId !== clubid) {
            for (let index = 0; index < clubs.length; index++) {
                const club = clubs[index];
                if (club.Id === clubid) {
                    fetch(`${baseurl}clubnightlist/?clubid=${clubid}`).then(res => res.text()).then(text => {
                        let jdata = JSON.parse(text);
                        jdata.sort((a,b) => a.Date > b.Date ? -1 : 1);
                        setClubNights(jdata);
                        setClubNightsClubName(club.Name);
                        setClubNightsClubId(club.Id);
                    });           
                }
            }   
        }
        setShowing('ClubNights');
    };
    const getClubGamesByClubId = (clubid) => {
        if (clubGamesClubId !== clubid) {
            for (let index = 0; index < clubs.length; index++) {
                const club = clubs[index];
                if (club.Id === clubid) {
                    fetch(`${baseurl}clubgamelist/?clubid=${clubid}`).then(res => res.text()).then(text => {
                        let jdata = JSON.parse(text);
                        // Add player names
                        for (let index2 = 0; index2 < jdata.length; index2++) {
                            const game = jdata[index2];
                            for (let index3 = 0; index3 < players.length; index3++) {
                                const player = players[index3];
                                if (game.PlayerId === player.Id) {
                                    game.PlayerName = player.Name;
                                }
                                if (game.OpponentId === player.Id) {
                                    game.OpponentName = player.Name;
                                }
                            }
                        }
                        setClubGames(jdata);
                        setClubGamesClubName(club.Name);
                        setClubGamesClubId(club.Id);
                    });
                }
            }
        }
        setShowing('ClubPlayers');
    };
    const getClubGamesByClubNightId = (clubnightid) => {
        if (clubGamesClubNightId !== clubnightid) {
            for (let index = 0; index < clubNights.length; index++) {
                const clubnight = clubNights[index];
                if (clubnight.Id === clubnightid) {
                    fetch(`${baseurl}clubgamelist/?clubnightid=${clubnightid}`).then(res => res.text()).then(text => {
                        let jdata = JSON.parse(text);
                        jdata.sort((a,b) => a.Round - b.Round);
                        // Add player names
                        for (let index2 = 0; index2 < jdata.length; index2++) {
                            const game = jdata[index2];
                            for (let index3 = 0; index3 < players.length; index3++) {
                                const player = players[index3];
                                if (game.PlayerId === player.Id) {
                                    game.PlayerName = player.Name;
                                }
                                if (game.OpponentId === player.Id) {
                                    game.OpponentName = player.Name;
                                }
                            }
                        }
                        setClubGames(jdata);
                        setClubGamesClubNightDate(clubnight.Date);
                        setClubGamesClubNightId(clubnight.Id);
                    });
                }
            }
        }
        setShowing('ClubNightGames');
    };
    useEffect(() => {
        getClubs();
        getPlayers();
        setShowing('Clubs');
    },[]);
    return (<div className="trBackground">
        <div className="trTitle">
            Scrabble Club Data - {showing}
            <button className="trButton" onClick={() => {setWhereto('menu');}}>
              <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
            </button>
        </div>
        <div className="container-fluid">
                <div className="row">
                    {showing !== 'Loading' && <div className="col-4">
                        <ClubList clubs={clubs} getClubNights={getClubNights} getClubGames={getClubGamesByClubId}></ClubList>
                    </div>}
                    {(showing === 'ClubNights' || showing === 'ClubNightGames') && <div className="col-4">
                        <ClubNightList clubNights={clubNights} clubName={clubNightsClubName} getClubGames={getClubGamesByClubNightId}></ClubNightList>
                    </div>}
                    {showing === 'ClubNightGames' && <div className="col-4">
                        <ClubGameList clubGames={clubGames} clubDate={clubGamesClubNightDate}></ClubGameList>
                    </div>}
                    {showing === 'ClubPlayers' && <div className="col-4">
                        <ClubPlayerList clubGames={clubGames} clubName={clubGamesClubName}></ClubPlayerList>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default ScrabbleClub;
