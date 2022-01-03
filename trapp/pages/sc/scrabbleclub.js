import { useState, useEffect } from "react";
import ClubList from "./club";
import ClubNightList from "./clubNight";
import ClubGameList from "./clubGame";

const ScrabbleClub = ({setWhereto}) => {
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/clubdata/' : 'https://tilerunner.herokuapp.com/clubdata/';
    const [clubs, setClubs] = useState([]);
    const [players, setPlayers] = useState([]);
    const [clubNights, setClubNights] = useState([]);
    const [clubGames, setClubGames] = useState([]);
    const [clubNightsClubId, setClubNightsClubId] = useState(-1);
    const [clubNightsClubName, setClubNightsClubName] = useState('No club selected');
    const [clubGamesClubNightId, setClubGamesClubNightId] = useState(-1);
    const [clubGamesClubNightDate, setClubGamesClubNightDate] = useState('No club night selected');
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
                        getClubGames(-1); // Clear previous selection
                    });           
                    return;
                }
            }   
        }
    };
    const getClubGames = (clubnightid) => {
        if (clubGamesClubNightId !== clubnightid) {
            if (clubnightid < 0) {
                setClubGames([]);
                setClubGamesClubNightDate('No club night selected.');
                setClubGamesClubNightId(clubnightid);
                return;
            }
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
                    return;
                }
            }
        }
    };
    useEffect(() => {
        getClubs();
        getPlayers();
    },[]);
    return (<div className="trBackground">
        <div className="trTitle">
            Scrabble Club Data
            <button className="trButton" onClick={() => {setWhereto('menu');}}>
              <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
            </button>
        </div>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <ClubList clubs={clubs} getClubNights={getClubNights}></ClubList>
                    </div>
                    <div className="col-4">
                        <ClubNightList clubNights={clubNights} clubName={clubNightsClubName} getClubGames={getClubGames}></ClubNightList>
                    </div>
                    <div className="col-4">
                        <ClubGameList clubGames={clubGames} clubDate={clubGamesClubNightDate}></ClubGameList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrabbleClub;
