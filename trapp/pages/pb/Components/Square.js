import React from "react";

export const Square = (props) => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating characters on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  const usedbyclass = props.squareusedby === "P"
    ? "pbSquareUsedByPrisoners"
    : "pbSquareUsedByGuards";
  const tdclass = props.c !== "."
    ? usedbyclass
    : props.ri === 7 && props.ci === 7
      ? "pbSquareCenterSquare"
      : (props.ri === 0 || props.ri === 7 || props.ri === 14) &&
        (props.ci === 0 || props.ci === 7 || props.ci === 14)
        ? "pbSquareEscapeHatch"
        : props.ri % 2 === props.ci % 2
          ? "pbSquare"
          : "pbSquare2";
  const tdvalue = props.c !== "."
    ? props.c
    : tdclass === "pbSquareCenterSquare"
      ? "✰"
      : tdclass === "pbSquareEscapeHatch"
        ? "💫"
        : props.ri % 2 === props.ci % 2
          ? "⎔"
          : "✦";
  return (
    <button className={tdclass} onClick={props.onClick}>
      {tdvalue}
    </button>
  );
};
