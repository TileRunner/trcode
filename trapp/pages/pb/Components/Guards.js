import React from "react";
import { FinishTurnButton } from "./FinishTurnButton";
import { RackTile } from "./RackTile";
import { TileRecallButton } from "./TileRecallButton";


export const Guards = (props) => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return (
      <RackTile
        key={tileclass + String(tileindex)}
        tileclass={tileclass}
        tilevalue={tilevalue}
        onClick={() => props.onClick(tileindex)} />
    );
  };

  const renderFinishTurn = () => {
    return <FinishTurnButton onClick={() => props.onClickFinishTurn()} />;
  };

  const renderRecallTiles = () => {
    return <TileRecallButton onClick={() => props.onClickTileRecall()} />;
  };

  return (
    <div>
      <p>GUARDS</p>
      <p className="pbTilerack">
        {props.gtiles.map((t, ti) => renderTile(
          props.whoseturn === "G" && props.selection === ti
            ? "pbTileOnRackSelectedG"
            : "pbTileOnRackG",
          ti,
          props.prisonersOrGuards === "G" ? t : "*"
        )
        )}
      </p>
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : <></>}
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : <></>}
    </div>
  );
};
