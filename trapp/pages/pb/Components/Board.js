import React from "react";
import { Square } from "./Square";

export const Board = ({ onClick, squares, usedby }) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return (
      <td key={`Square${ri}-${ci}`}>
        <Square
          c={c}
          ci={ci}
          ri={ri}
          squareusedby={squareusedby}
          onClick={() => onClick(ri, ci)} />
      </td>
    );
  };
  const renderRow = (ri) => {
    return (
      <tr key={`BoardRow${ri}`} className="row pbRow">
        {squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))}
      </tr>
    );
  };

  return (
    <table className="pbBoard">
      <tbody>{squares.map((r, ri) => renderRow(ri))}</tbody>
    </table>
  );
};
