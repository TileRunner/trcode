import Square from './square';
import * as c from '../../lib/pbconstants';

// Here I used default squares=[] so the npm run build always has squares defined
const Board = ({ onClick, squares=[], usedby, rcd, racksize }) => {
    const renderSquare = (ri, ci, letter, squareusedby) => {
      return (
        <td key={`Square${ri}-${ci}`} className="pbSquareOuter">
          <Square
            letter={letter}
            ci={ci}
            ri={ri}
            squareusedby={squareusedby}
            rcd={rcd}
            onClick={() => onClick(ri, ci)}
            racksize={racksize}
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
          {squares[ri].map((letter, ci) => renderSquare(ri, ci, letter, usedby[ri][ci]))}
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
            {squares && squares.map((_$,i) => (
              <td className="pbBoardColumnHeader" key={`TopColumnHeader${i}`}>
                {c.BOARD_COL_HEADERS[i]}
              </td>
            ))}
            <td className="pbBoardHeaderTopRight">&nbsp;</td>
          </tr>
          {squares.map((r, ri) => renderRow(ri))}
          <tr className="pbBoardColumnHeaderRow" id="BoardHeaderBottom">
            <td className="pbBoardHeaderBottomLeft">&nbsp;</td>
            {squares.map((_$,i) => (
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
  
export default Board;  