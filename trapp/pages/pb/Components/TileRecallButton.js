import React from "react";

export const TileRecallButton = (props) => {
  return (
    <button className="pbRecallTiles" onClick={props.onClick}>
      Recall Tiles
    </button>
  );
};
