import Square from '../pb/square';
const boardColumnHeaders = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
const boardRowHeaders = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

// Here I used default squares=[] so the npm run build always has squares defined
const Board = ({ onClick, squares=[], usedby, rcd, racksize }) => {
    const renderSquare = (ri, ci, c, squareusedby) => {
      return (
        <td key={`Square${ri}-${ci}`} className="pbSquareOuter">
          <Square
            c={c}
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
            {boardRowHeaders[ri]}
          </td>
          {squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))}
          <td className="pbBoardRowHeader" id="BoardHeaderRight">
            {boardRowHeaders[ri]}
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
                {boardColumnHeaders[i]}
              </td>
            ))}
            <td className="pbBoardHeaderTopRight">&nbsp;</td>
          </tr>
          {squares.map((r, ri) => renderRow(ri))}
          <tr className="pbBoardColumnHeaderRow" id="BoardHeaderBottom">
            <td className="pbBoardHeaderBottomLeft">&nbsp;</td>
            {squares.map((_$,i) => (
              <td className="pbBoardColumnHeader" key={`BottomColumnHeader${i}`}>
                {boardColumnHeaders[i]}
              </td>
            ))}
            <td className="pbBoardHeaderBottomRight">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
export default Board;  