const squareunused = ".";

const Square = ({c, ci, ri, squareusedby, rcd, onClick, racksize}) => {
    // need c to represent which tile is on the square, if any
    // need ri, ci to display alternating backgrounds on unused squares
    // need squareusedby to pick css className corresponding to who played the tile on the square
    // need rcd to display selected direction arrow when appropriate
    // need onClick to handle square click at a higher level
    // need racksize to determine centre and board array edge positions
    const edge = (racksize * 2);
    const middle = racksize;
    const tdclass =
      c !== squareunused
        ? "pbSquareInner PlayerTile"
        : rcd[0] === ri && rcd[1] === ci && rcd[2] === "r"
        ? "pbSquareInner RightArrow"
        : rcd[0] === ri && rcd[1] === ci && rcd[2] === "d"
        ? "pbSquareInner DownArrow"
        : ri === middle && ci === middle
        ? "pbSquareInner CenterSquare"
        : (ri === 0 || ri === middle || ri === edge) &&
          (ci === 0 || ci === middle || ci === edge)
        ? "pbSquareInner EscapeHatch"
        : ri % 2 === ci % 2
        ? "pbSquareInner style1" : "pbSquareInner style2"; // Alternating square styles
    const tdvalue =
      c !== squareunused
        ? c
        : tdclass.indexOf("RightArrow") > -1
        ? "➡"
        : tdclass.indexOf("DownArrow") > -1
        ? "⬇"
        : tdclass.indexOf("CenterSquare") > -1
        ? <i className="material-icons">stars</i>
        : "." /* If I put empty string or &nbsp; then it affects the display oddly  */
    return (
      tdclass.indexOf("EscapeHatch") > -1 ?
        <button className={tdclass} onClick={onClick}>
          <span className="material-icons">run_circle</span>
        </button>
      : c === squareunused ?
        <button className={tdclass} onClick={onClick}>
          {tdvalue}
        </button>
      :
        <button className={tdclass} onClick={onClick}>
          <div className={`pbSquareTileText ${squareusedby + (c === "Q" ? " u" : "")}`}>{tdvalue}</div>
        </button>
    );
};
  
export default Square;