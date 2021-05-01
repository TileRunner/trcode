import * as c from '../../lib/pbconstants';

const Square = ({usedby, type, letter, ri, ci, rcd, onClick}) => {
    // need ri and ci and rcd to display selected direction arrow when appropriate
    // need onClick to handle square click at a higher level
    const tdclass =
      usedby !== c.USED_BY_NONE ? "pbSquareInner PlayerTile" // Player has a tile on the square
        : rcd[0] === ri && rcd[1] === ci && rcd[2] === c.DIR_RIGHT ? "pbSquareInner RightArrow" // Show right arrow
        : rcd[0] === ri && rcd[1] === ci && rcd[2] === c.DIR_DOWN ? "pbSquareInner DownArrow" // Show down arrow
        : "pbSquareInner " + type; // See pbconstants.js for values
    const tdvalue =
      usedby !== c.USED_BY_NONE ? letter // Show played tile
        : tdclass.indexOf("RightArrow") > -1 ? "➡" // Show right arrow
        : tdclass.indexOf("DownArrow") > -1 ? "⬇" // Show down arrow
        : tdclass.indexOf("CenterSquare") > -1 ? <i className="material-icons">stars</i> // Show centre square star
        : tdclass.indexOf("EscapeHatch") > -1 ? <i className="material-icons">{c.PARTY_ICON_PRISONERS}</i> // Show prisoners icon on escape hatches
        : "." /* If I put empty string or &nbsp; then it affects the display oddly  */
    return (
      usedby === c.USED_BY_NONE ?
        <button className={tdclass} onClick={onClick}>
          {tdvalue}
        </button>
      :
        <button className={tdclass} onClick={onClick}>
          <div className={`pbSquareTileText ${usedby + (c === "Q" ? " u" : "")}`}>{tdvalue}</div>
        </button>
    );
};
  
export default Square;