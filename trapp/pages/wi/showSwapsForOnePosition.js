import React, { useState } from "react";
import PropTypes from "prop-types";

const ShowSwapsForOnePosition = ({
    swapLetters=''
    }) => {

    const [flag, setFlag] = useState(true); // true=show count, false=show letters

    return (
        swapLetters === '' ?
            <td></td>
        : flag ?
            <td className="swapCount"
                data-toggle="tooltip"
                title={swapLetters}
                onClick={() => {setFlag(!flag);}}
            >
                {swapLetters.length}
            </td>
        :
            <td className="swapCount"
                data-toggle="tooltip"
                title={swapLetters.length}
                onClick={() => {setFlag(!flag);}}
            >
                {swapLetters}
            </td>
)};

ShowSwapsForOnePosition.propTypes = {
    swapLetters: PropTypes.string.isRequired
};

export default ShowSwapsForOnePosition;
