const squareunused = ".";

const Square = (props) => {
    // squareusedby, ri, ci, c, onClick
    // need squareusedby to pick css className corresponding to who played the tile on the square
    // need ri, ci to display alternating backgrounds on unused squares
    // need c to represent which tile is on the square, if any
    // need onClick to handle square click at a higher level
    // need rcd to display selected direction arrow when appropriate
    // need racksize to determine centre and board array edge positions
    const edge = (props.racksize * 2);
    const middle = props.racksize;
    const tdclass =
      props.c !== squareunused
        ? "pbSquareInner PlayerTile"
        : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r"
        ? "pbSquareInner RightArrow"
        : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d"
        ? "pbSquareInner DownArrow"
        : props.ri === middle && props.ci === middle
        ? "pbSquareInner CenterSquare"
        : (props.ri === 0 || props.ri === middle || props.ri === edge) &&
          (props.ci === 0 || props.ci === middle || props.ci === edge)
        ? "pbSquareInner EscapeHatch"
        : props.ri % 2 === props.ci % 2
        ? "pbSquareInner style1" : "pbSquareInner style2"; // Alternating square styles
    const tdvalue =
      props.c !== squareunused
        ? props.c
        : tdclass.indexOf("RightArrow") > -1
        ? "➡"
        : tdclass.indexOf("DownArrow") > -1
        ? "⬇"
        : tdclass.indexOf("CenterSquare") > -1
        ? <i className="material-icons">stars</i>
        : "." /* If I put empty string or &nbsp; then it affects the display oddly  */
    return (
      tdclass.indexOf("EscapeHatch") > -1 ?
      <button className={tdclass} onClick={props.onClick}>
        <span className="material-icons">run_circle</span>
      </button>
      : props.c === squareunused ?
        <button className={tdclass} onClick={props.onClick}>
          {tdvalue}
        </button>
        :
        <button className={tdclass} onClick={props.onClick}>
          <div className={`pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`}>{tdvalue}</div>
        </button>
    );
};
  
export default Square;