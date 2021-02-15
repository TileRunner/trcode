import React from "react";


export const Tiles = (props) => {
  // there is a better way ^^^
  return (
    <div className="pbTilepool">
      <h3>TILE POOL</h3>
      {props.tiles.map((t, ti) => (
        <span key={`tile${ti}`}>
          {ti > 0 && t !== props.tiles[ti - 1] ? (
            <div className="pbTilepoolDivider"></div>
          ) : (
              <></>
            )}
          <span className="pbTilepoolTile">{t}</span>
        </span>
      ))}
    </div>
  );
};
