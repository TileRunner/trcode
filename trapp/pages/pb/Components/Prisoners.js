import React from "react";
import { FinishTurnButton } from "./FinishTurnButton";
import { RackTile } from "./RackTile";
import { TileRecallButton } from "./TileRecallButton";


export const Prisoners = (props) => {
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

  const renderFreedPrisoners = (count) => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => (
      <span key={value + String(index)}>
        <img
          src="/breakfree.png"
          alt="I'm free! I'm free!"
          width="100"
          height="100" />
      </span>
    ));
  };

  return (
    <div>
      <p>PRISONERS</p>
      <p className="pbTilerack">
        {props.ptiles.map((t, ti) => renderTile(
          props.whoseturn === "P" && props.selection === ti
            ? "pbTileOnRackSelectedP"
            : "pbTileOnRackP",
          ti,
          props.prisonersOrGuards === "P" ? t : "*"
        )
        )}
      </p>
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : <></>}
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : <></>}
      <p>
        Rescues made: {props.rescues}
        <br></br>
        {renderFreedPrisoners(props.rescues)}
      </p>
    </div>
  );
};
