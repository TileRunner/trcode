import React from "react";
import PropTypes from "prop-types";

const ShowUnseenTiles = ({tiles, othertiles}) => { // tiles = tiles in bag, othertiles = tiles on other players rack
    let unseenTiles = [...tiles || [], ...othertiles || []];
    // Sort the tiles then put the blanks at the end
    unseenTiles.sort();
    if (unseenTiles[0] === "?") {
        unseenTiles.splice(0,1)
        unseenTiles.push("?")
    }
    if (unseenTiles[0] === "?") {
        unseenTiles.splice(0,1)
        unseenTiles.push("?")
    }
    return (
      <div className="pbTilepool">
        <div className="pbTilepoolTitle">TILES</div>
        {unseenTiles.map((t, ti) => (
          <span key={`tile${ti}`}>
            {ti > 0 && t !== unseenTiles[ti - 1] ? (
              <span className="pbTilepoolDivider"></span>
            ) : (
              <></>
            )}
            <span className={t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile"}>{t}</span>
          </span>
        ))}
      </div>
    );
  };
  
ShowUnseenTiles.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.string),
  othertiles: PropTypes.arrayOf(PropTypes.string)
};

export default ShowUnseenTiles;  