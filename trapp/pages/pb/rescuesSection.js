import React from "react";
import PropTypes from "prop-types";

const ShowRescues = ({rescues}) => {
    return (
      <div className="pbRescuesMade">
        Rescues made: {rescues}
      </div>
    );
};
  
ShowRescues.propTypes = {
  rescues: PropTypes.number.isRequired
};

export default ShowRescues;