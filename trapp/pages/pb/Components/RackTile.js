import React from "react";

export const RackTile = (props) => {
  return (
    <span className={props.tileclass} onClick={props.onClick}>
      {props.tilevalue}
    </span>
  );
};
