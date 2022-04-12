import React from "react";
import PropTypes from "prop-types";
import * as c from '../../lib/pb/prisonBreakConstants';


const PlayerSection = (props) => {
    const playerIcon = props.participant === c.PARTY_TYPE_PRISONERS ? c.PARTY_ICON_PRISONERS : c.PARTY_ICON_GUARDS;
    const playerTitle = props.participant === c.PARTY_TYPE_PRISONERS ? c.PARTY_TITLE_PRISONERS : c.PARTY_TITLE_GUARDS;
  
    return (
      <div className="pbPlayerInnerSection">
        <div className="pbPlayerTitle"><i className="material-icons">{playerIcon}</i>&nbsp;{playerTitle}&nbsp;<i className="material-icons">{playerIcon}</i></div>
        <div className="pbTilerack">
            {/* I have to check props.racktiles so the Build does not fail on 'map' undefined */}
            {props.racktiles && props.racktiles.map((t, ti) =>
                <RackTile
                    key={`RackTile${ti}`}
                    whoseturn={props.whoseturn}
                    participant={props.participant}
                    selection={props.selection}
                    tileindex={ti}
                    tilevalue={t}
                    onClick={() => props.onClick(ti)}
                />
            )}
        </div>
        {props.whoseturn === props.participant ? 
          showActionButtons(props)
        : props.allowRewind &&
          props.moves && // protect against undefined
          props.moves.length > 0 &&
          props.moves[props.moves.length-1].by === props.participant &&
          showActionButtonUndoLastPlay(props)
        }
        {props.moves && props.moves.length > 0 && props.moves[props.moves.length-1].by !== props.participant &&
          showActionButtonAllowUndo(props)
        }
      </div>
    );
  };

PlayerSection.propTypes = {
    participant: PropTypes.string.isRequired,
    racktiles: PropTypes.arrayOf(PropTypes.string),
    whoseturn: PropTypes.string.isRequired,
    selection: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    allowRewind: PropTypes.bool.isRequired,
    moves: PropTypes.arrayOf(PropTypes.any)
};

const RackTile = (props) => {
    const selectedUnselected = props.selection === props.tileindex ? "Selected " : "Unselected ";
    const uNotU = props.tilevalue === "Q" ? "u " : "";
    const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
    const tileindex = props.tileindex;
    return (
        <div
            key={tileindex}
            className={tileclass}
            onClick={(tileindex) => props.onClick(tileindex)}
        >
            <div className="pbTileOnRackText">{props.tilevalue}</div>
        </div>
    );
}

RackTile.propTypes = {
    selection: PropTypes.number.isRequired,
    tileindex: PropTypes.number.isRequired,
    tilevalue: PropTypes.string.isRequired,
    participant: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const FinishTurnButton = (props) => {
    return (
      <button className="pbActionButton" onClick={props.onClick}>
        <span className="pbActionButtonText"><i className="material-icons">check</i>&nbsp;Finish Turn</span>
      </button>
    );
  };

  FinishTurnButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

const TileRecallButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">undo</i>&nbsp;Recall Tiles</span>
        </button>
    );
};

TileRecallButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

const TileExchangeButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">cached</i>&nbsp;Swap Tiles</span>
        </button>
    );
};

TileExchangeButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

const PassPlayButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">not_interested</i>&nbsp;Pass Turn</span>
        </button>
    );
};

PassPlayButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

const AllowUndoLastPlay = (props) => {
    return (
        props.alreadyAllowed ?
            <div className="pbActionButtonSevere">
                <span className="pbActionButtonSevereText"><i className="material-icons">report</i>
                    &nbsp;ENABLED
                    <span className="pbActionButtonSevereText2">&nbsp;Allow undo is now enabled</span>
                </span>
            </div>
        :
            <button className="pbActionButtonSevere" onClick={props.onClick}>
                <span className="pbActionButtonSevereText"><i className="material-icons">report_problem</i>
                    &nbsp;Allow Undo Turn
                    <span className="pbActionButtonSevereText2">Click to let opponent undo</span>
                </span>
            </button>
    );
};

AllowUndoLastPlay.propTypes = {
    alreadyAllowed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const UndoLastPlay = (props) => {
    return (
        <button className="pbActionButtonSevere" onClick={props.onClick}>
            <span className="pbActionButtonSevereText"><i className="material-icons">delete_forever</i>
                &nbsp;Undo My Turn
                <span className="pbActionButtonSevereText2">Opponent has allowed undo</span>
          </span>
        </button>
    );
};
  
UndoLastPlay.propTypes = {
    onClick: PropTypes.func.isRequired
};

function showActionButtons(props) {
    return <div className="pbActionButtonDiv">
        <p>
            <FinishTurnButton onClick={() => props.onClickFinishTurn()} />
        </p>
        <p>
            <TileRecallButton onClick={() => props.onClickTileRecall()} />
        </p>
        <p>
            <TileExchangeButton onClick={() => props.onClickTileExchange()} />
        </p>
        <p>
            <PassPlayButton onClick={() => props.onClickPassPlay()} />
        </p>
    </div>;
}
function showActionButtonAllowUndo(props) {
    return <div className="pbActionButtonDiv">
        <div>
            <AllowUndoLastPlay onClick={() => props.onClickAllowUndo()} alreadyAllowed={props.allowRewind}/>
        </div>
    </div>
}
function showActionButtonUndoLastPlay(props) {
    return <div className="pbActionButtonDiv">
        <p>
            <UndoLastPlay onClick={() => props.onClickUndoLastPlay()} />
        </p>
    </div>
}

export default PlayerSection;