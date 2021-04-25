import React from 'react';

const PlayerSection = (props) => {
    const playerIcon = props.prisonersOrGuards === "P" ? "run_circle" : "security";
    const playerTitle = props.prisonersOrGuards === "P" ? "PRISONERS" : "GUARDS";
  
    return (
      <div className="pbPlayerInnerSection">
        <div className="pbPlayerTitle"><i className="material-icons">{playerIcon}</i>&nbsp;{playerTitle}&nbsp;<i className="material-icons">{playerIcon}</i></div>
        <div className="pbTilerack">
            {/* I have to check props.racktiles so the Build does not fail on 'map' undefined */}
            {props.racktiles && props.racktiles.map((t, ti) =>
                <RackTile
                    key={`RackTile${ti}`}
                    whoseturn={props.whoseturn}
                    prisonersOrGuards={props.prisonersOrGuards}
                    selection={props.selection}
                    tileindex={ti}
                    tilevalue={t}
                    onClick={() => props.onClick(ti)}
                />
            )}
        </div>
        {props.whoseturn === props.prisonersOrGuards ? 
          showActionButtons(props)
        : props.allowRewind &&
          props.moves && // protect against undefined
          props.moves.length > 0 &&
          props.moves[props.moves.length-1].by === props.prisonersOrGuards &&
          showActionButtonUndoLastPlay(props)
        }
        {props.moves && props.moves.length > 0 && props.moves[props.moves.length-1].by !== props.prisonersOrGuards &&
          showActionButtonAllowUndo(props)
        }
      </div>
    );
  };

const RackTile = (props) => {
    const selectedUnselected = props.selection === props.tileindex ? "Selected " : "Unselected ";
    const uNotU = props.tilevalue === "Q" ? "u " : "";
    const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.prisonersOrGuards;
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

const FinishTurnButton = (props) => {
    return (
      <button className="pbActionButton" onClick={props.onClick}>
        <span className="pbActionButtonText"><i className="material-icons">check</i>&nbsp;Finish Turn</span>
      </button>
    );
  };
  
const TileRecallButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">undo</i>&nbsp;Recall Tiles</span>
        </button>
    );
};

const TileExchangeButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">cached</i>&nbsp;Swap Tiles</span>
        </button>
    );
};

const PassPlayButton = (props) => {
    return (
        <button className="pbActionButton" onClick={props.onClick}>
            <span className="pbActionButtonText"><i className="material-icons">not_interested</i>&nbsp;Pass Turn</span>
        </button>
    );
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
        <p>
            <AllowUndoLastPlay onClick={() => props.onClickAllowUndo()} alreadyAllowed={props.allowRewind}/>
        </p>
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