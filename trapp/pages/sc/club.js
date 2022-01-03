import { useState } from "react";

const ClubList = ({clubs=[], getClubNights}) => {
    const [snat, setSnat] = useState('No club selection made.');

    return (<div className="trBackground">
        <div className="trSubtitle">
            Club List
        </div>
        {snat && <div className="trEmphasis">{snat}</div>}
        <table className="trTable" border="1">
            <thead>
                <tr>
                    <th>Club Name</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {clubs.map(club => (
                    <tr key={`club${club.Id}`}>
                        <td>{club.Name}</td>
                        <td>{club.Location}</td>
                        <td>
                            <button className="trButton"
                                onClick={function() {
                                    getClubNights(club.Id);
                                    setSnat(`Selected ${club.Name} club nights.`);
                                    } }>
                                CLUB NIGHTS
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default ClubList;
