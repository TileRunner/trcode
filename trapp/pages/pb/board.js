import React from "react";
import PropTypes from "prop-types";
import Square from './square';
import * as c from '../../lib/pb/prisonBreakConstants';

// Here I used default squareArray=[] so the npm run build always has squareArray defined
const Board = ({ onClick, squareArray=[], rcd }) => {
    const renderSquare = (squareArrayCell) => {
      return (
        <td key={`Square${squareArrayCell.row}-${squareArrayCell.col}`} className="pbSquareOuter">
          <Square
            usedby={squareArrayCell.usedby}
            type={squareArrayCell.type}
            letter={squareArrayCell.letter}
            ri={squareArrayCell.row}
            ci={squareArrayCell.col}
            rcd={rcd}
            onClick={() => onClick(squareArrayCell.row, squareArrayCell.col)}
          />
        </td>
      );
    };
    const renderRow = (ri) => {
      return (
        <tr key={`BoardRow${ri}`} className="pbRow">
          <td className="pbBoardRowHeader" id="BoardHeaderLeft">
            {c.BOARD_ROW_HEADERS[ri]}
          </td>
          {squareArray[ri].map((squareArrayCell) => renderSquare(squareArrayCell))}
          <td className="pbBoardRowHeader" id="BoardHeaderRight">
            {c.BOARD_ROW_HEADERS[ri]}
          </td>
        </tr>
      );
    };
  
    return (
      <table className="pbBoard">
        <tbody>
          <tr className="pbBoardColumnHeaderRow">
            <td className="pbBoardHeaderTopLeft">&nbsp;</td>
            {squareArray.map((_$,i) => (
              <td className="pbBoardColumnHeader" key={`TopColumnHeader${i}`}>
                {c.BOARD_COL_HEADERS[i]}
              </td>
            ))}
            <td className="pbBoardHeaderTopRight">&nbsp;</td>
          </tr>
          {squareArray.map((r, ri) => renderRow(ri))}
          <tr className="pbBoardColumnHeaderRow" id="BoardHeaderBottom">
            <td className="pbBoardHeaderBottomLeft">&nbsp;</td>
            {squareArray.map((_$,i) => (
              <td className="pbBoardColumnHeader" key={`BottomColumnHeader${i}`}>
                {c.BOARD_COL_HEADERS[i]}
              </td>
            ))}
            <td className="pbBoardHeaderBottomRight">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squareArray: PropTypes.arrayOf(PropTypes.any),
  rcd: PropTypes.arrayOf(PropTypes.any)
};

export default Board;