import * as c from '../../lib/pbconstants';

const ShowMoves = ({moves}) => { // show moves made
    return (
      <div className="pbMoves">
        <div className="pbMovesTitle">MOVES</div>
        <div className="pbMovesScrollable" id="ScrollableMoves">
          {moves && moves.map((m, mi) => (
            <div key={`move${mi}`} className="pbMove">
              <span className="pbMove by">{m.by}</span>
              :
              <span className={`pbMove ${m.type}`}>
                {m.type === c.MOVE_TYPE_PLAY ?
                  <>{m.pos} {m.mainword.replace("Q","Qu")}
                    {m.extrawords?.map((w) => (
                      <>
                        ,&nbsp;
                        {w.replace("Q","Qu")}
                      </>
                    ))}
                  </>
                :
                  <></>
                }
              </span>
            </div>
            ))}
        </div>
      </div>
    );
};
  
export default ShowMoves;  