import React,{useState,useEffect} from "react";

const DebugInfo = ({setWhereto}) => {
    const [dbinfo, setDbinfo] = useState({status: 'LOADING', fybgames: []});
    // eslint-disable-next-line
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://enigmatic-lake-42795.herokuapp.com';
    async function getDebugInfo() {
        let url = `${baseurl}/debug`;
        const response = await fetch(url);
        const jdata = await response.json();
        setDbinfo({status: jdata.status, fybgames: jdata.fybinfo.games});
    }
    useEffect(() => (
        getDebugInfo()
    ),[]);
    return (
        <div className="trBackground">
            <div className="trTitle">
                Debug Info
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
                </div>
            <div className="trParagraph">
                <button className="trButton" onClick={() => {getDebugInfo();}}>Refresh</button>
            </div>
            <div className="trParagraph">
                Status: {dbinfo.status}
            </div>
            <div className="trParagraph">
                FYB games:
                {dbinfo.fybgames.map((g, i) => (<div key={`fybgame${i}`}>
                <table className="trTable">
                    <thead>
                        <tr>
                            <th>gameindex</th>
                            <th>whoseturn</th>
                            <th>round</th>
                            <th>freeforall</th>
                            <th>syncstamp</th>
                            <th>gameid</th>
                            <th>goal</th>
                            <th>validOnly</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{g.gameindex}</td>
                            <td>{g.whoseturn}</td>
                            <td>{g.round}</td>
                            <td>{g.freeforall ? 'Yes' : 'No'}</td>
                            <td>{g.syncstamp}</td>
                            <td>{g.gameid}</td>
                            <td>{g.goal}</td>
                            <td>{g.validOnly ? 'Yes' : 'No'}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="trParagaph">
                    Players:
                </div>
                <table className="trTable">
                    <thead>
                        <tr>
                            <th>nickname</th>
                            <th>points</th>
                            <th>wins</th>
                            <th>dropped</th>
                        </tr>
                    </thead>
                    {g.players.map((p,j) => (
                        <tr key={`fyb${i}player${j}`}>
                            <td>{p.nickname}</td>
                            <td>{p.points}</td>
                            <td>{p.wins}</td>
                            <td>{p.dropped ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </table>
                </div>))}
            </div>
        </div>
    )
}

export default DebugInfo