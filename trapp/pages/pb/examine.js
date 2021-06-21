import React, { useState, useEffect } from "react";
import Link from "next/link";
import Board from '../pb/board';
import ShowUnseenTiles from '../pb/unseenTilesSection';
import ShowMoves from '../pb/movesSection';
import ShowRescues from '../pb/rescuesSection';
import * as c from '../../lib/pb/prisonBreakConstants';
import { buildExamineDataFromApidata } from "../../lib/pb/buildExamineDataFromApidata";

// I am setting up a default skeleton so the build does not try reference properties of undefined objects
const Examine = ({ client, wsmessage, gameid }) => {
    const [snapshotIndex, setSnapshotIndex] = useState(0); // Start at the end of the first snapshot (tiles picked, no moves made)
    const [examineData, setExamineData] = useState({pname: 'tbd', gname: 'tbd', moves: [], snapshots:[{tiles: [], ptiles: [], gtiles: [], rescues: 0, whoseturn: 'P'}]});

    useEffect(() => { // This code executes the first time Examiner is used only
        client.send(
            {
              gameid: gameid, // the id for the game
              type: "pb", // prisonbreak
              sender: c.PARTY_TYPE_EXAMINER,
              func: "startExamining" // this will make server send us the game data
            }
        );
    }, []);
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);      
    },[wsmessage])
  
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
            if (messageData.func === "providegamedata") {
                let ed = buildExamineDataFromApidata(messageData.apidata);
                setExamineData(ed);
            }
        }
    }

    const fastRewind = () => {
      setSnapshotIndex(0);
    }
  
    const nextMove = () => {
      if (snapshotIndex + 1 < examineData.snapshots.length) {
        let nextSnapshotIndex = snapshotIndex + 1;
        setSnapshotIndex(nextSnapshotIndex);
      }
    }
    
    const prevMove = () => {
      if (snapshotIndex - 1 > -1) {
        let prevSnapshotIndex = snapshotIndex - 1;
        setSnapshotIndex(prevSnapshotIndex);
      }
    }

    const fastForward = () => {
      let newSnapshotIndex = examineData.snapshots.length - 1;
      setSnapshotIndex(newSnapshotIndex);
    }
    
    const isPrisonersTurn = () => {
      return (examineData.snapshots[snapshotIndex].whoseturn === c.WHOSE_TURN_PRISONERS);
    }

    const isGuardsTurn = () => {
      return (examineData.snapshots[snapshotIndex].whoseturn === c.WHOSE_TURN_GUARDS);
    }

    return (
      <div className="prisonbreak">
        <div className="w3-display-container w3-teal topBarHeight">
          <div className="w3-display-middle">
            <h1 className="myHeadingFont">Prison Break</h1>
          </div>
          <div className="w3-display-topleft w3-black topBarCorner commonFontFamily">
            Game id: {gameid}
          </div>
          <div className="w3-display-bottomleft w3-orange topBarCorner commonFontFamily">
            Prisoners: { examineData.pname }
          </div>
          <div className="w3-display-topright w3-black topBarCorner commonFontFamily">
            <Link href={"../../"}>
              <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
            </Link>
          </div>
          <div className="w3-display-bottomright w3-orange topBarCorner commonFontFamily">
            Guards: { examineData.gname }
          </div>
        </div>
        <div className="row">
          <div className="col pbTileAndMovesOuter">
              <ShowUnseenTiles
                tiles={examineData.snapshots[snapshotIndex].tiles}
                othertiles={ isPrisonersTurn() ? examineData.snapshots[snapshotIndex].gtiles
                : isGuardsTurn() ? examineData.snapshots[snapshotIndex].ptiles
                : [] }
                />
              <ShowMoves moves={examineData.moves.slice(0,snapshotIndex)}/>
          </div>
          <div className="col pbPlayerOuterSection">
            <div className="pbPlayerInnerSection">
            <div className="pbPlayerTitle"><i className="material-icons">{c.PARTY_ICON_PRISONERS}</i>&nbsp;{c.PARTY_TITLE_PRISONERS}&nbsp;<i className="material-icons">{c.PARTY_ICON_PRISONERS}</i></div>
            <div className="pbTilerack">
              {examineData.snapshots[snapshotIndex].whoseturn === c.PARTY_TYPE_PRISONERS &&
                <button className="w3-black pbTilerackArrow" onClick={nextMove}>
                  <i className="material-icons">arrow_right</i>
                </button>
              }
              {examineData.snapshots[snapshotIndex].ptiles.map((t, ti) =>
                  <ExaminerTileRack
                      key={`ObserverPrisonersRackTile${ti}`}
                      participant={c.PARTY_TYPE_PRISONERS}
                      tilevalue={ isGuardsTurn() ? '*' : t}
                      tileindex={ti}
                  />
              )}
            </div>
            <div className="pbPlayerTitle"><i className="material-icons">{c.PARTY_ICON_GUARDS}</i>&nbsp;{c.PARTY_TITLE_GUARDS}&nbsp;<i className="material-icons">{c.PARTY_ICON_GUARDS}</i></div>
            <div className="pbTilerack">
                {examineData.snapshots[snapshotIndex].whoseturn === c.PARTY_TYPE_GUARDS &&
                  <button className="w3-black pbTilerackArrow" onClick={nextMove}>
                    <i className="material-icons">arrow_right</i>
                  </button>
                }
                {examineData.snapshots[snapshotIndex].gtiles.map((t, ti) =>
                    <ExaminerTileRack
                        key={`ObserverGuardsRackTile${ti}`}
                        participant={c.PARTY_TYPE_GUARDS}
                        tilevalue={isPrisonersTurn() ? '*' : t}
                        tileindex={ti}
                    />
                )}
            </div>
            </div>
          </div>
          <div className="col">
              <div className="row">
                <Board
                  squareArray={examineData.snapshots[snapshotIndex].squareArray}
                  rcd={[-1,-1,c.DIR_NONE]}
                  onClick={() => {}}
                />
              </div>
          </div>
          <div className="col">
            <ShowRescues rescues={examineData.snapshots[snapshotIndex].rescues} />
          </div>
        </div>
        <div className="w3-display-container w3-teal topBarHeight">
          <div className="w3-display-middle commonFontFamily">
            <div>
                <button className="w3-black w3-round" onClick={fastRewind}>
                  <i className="material-icons">fast_rewind</i>
                </button>
                <button className="w3-black w3-round" onClick={prevMove}>
                  <i className="material-icons">arrow_left</i>
                </button>
                <button className="w3-black w3-round" onClick={nextMove}>
                  <i className="material-icons">arrow_right</i>
                </button>
                <button className="w3-black w3-round" onClick={fastForward}>
                  <i className="material-icons">fast_forward</i>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
};

const ExaminerTileRack = (props) => {
  const selectedUnselected = "Unselected ";
  const uNotU = props.tilevalue === "Q" ? "u " : "";
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
  return (
      <div
          key={props.tileindex}
          className={tileclass}
      >
          <div className="pbTileOnRackText">{props.tilevalue}</div>
      </div>
  );
}

export default Examine;