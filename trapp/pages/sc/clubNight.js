import { useState } from "react";

const ClubNightList = ({clubNights=[], clubName='', getClubGames}) => {
    const [snat, setSnat] = useState('No club night selected.');
    const myTableSize = {
        height: '780px',
        width: 'fit-content'
    };
    const myTableScroll = {
        height: '100%',
        overflowY: 'scroll'
    };
    return (<div className="trBackground">
        <div className="trSubtitle">
            Club Nights: {clubName}
        </div>
        {snat && <div className="trEmphasis">{snat}</div>}
        <div style={myTableSize}>
            <div style={myTableScroll}>
                <table className="trTable" border="1">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clubNights.map(clubNight => (
                            <tr key={`night${clubNight.Id}`}>
                                <td>{clubNight.Date}</td>
                                <td>
                                    <button className="trButton"
                                        onClick={function() {
                                            getClubGames(clubNight.Id);
                                            setSnat(`Selected ${clubNight.Date} club games.`);
                                            } }>
                                        CLUB GAMES
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default ClubNightList;
