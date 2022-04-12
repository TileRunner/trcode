import React from "react";
import PropTypes from "prop-types";
import * as c from '../../lib/pb/prisonBreakConstants';

const ShowMoves = ({moves, onmoveclick}) => { // show moves made
    return (
      <div className="pbMoves">
        <div className="pbMovesTitle">MOVES</div>
        <div className="pbMovesScrollable" id="ScrollableMoves">
          {moves && moves.map((m, mi) => (
            <div key={`move${mi}`} className="pbMove" onClick={() => onmoveclick(mi)}>
              <span className="pbMove by">{m.by}</span>
              :
              <span className={`pbMove ${m.type}`}>
                {m.type === c.MOVE_TYPE_PLAY ?
                  <>{m.pos} {m.mainword.replace("Q","Qu")}
                    {m.extrawords?.map((w, wi) => (
                      <span key={`extraword${wi}`}>
                        ,&nbsp;
                        {w.replace("Q","Qu")}
                      </span>
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
  
ShowMoves.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.any),
  onmoveclick: PropTypes.func.isRequired
};

export default ShowMoves;  