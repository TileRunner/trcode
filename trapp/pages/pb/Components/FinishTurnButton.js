import React from "react";

export const FinishTurnButton = (props) => {
  return (
    <button className="pbFinishTurn" onClick={props.onClick}>
      Finish Turn
    </button>
  );
};
