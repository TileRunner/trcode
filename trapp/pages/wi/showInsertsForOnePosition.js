import React, { useState } from "react";
import PropTypes from "prop-types";

const ShowInsertsForOnePosition = ({
    insertLetters=''
    }) => {

    const [flag, setFlag] = useState(true); // true=show count, false=show letters

    return (
        insertLetters === '' ?
            <td></td>
        : flag ?
            <td className="insertCount"
                data-toggle="tooltip"
                title={insertLetters}
                onClick={() => {setFlag(!flag);}}
            >
                {insertLetters.length}
            </td>
        :
            <td className="insertCount"
                data-toggle="tooltip"
                title={insertLetters.length}
                onClick={() => {setFlag(!flag);}}
            >
                {insertLetters}
            </td>
    )};

ShowInsertsForOnePosition.propTypes = {
    insertLetters: PropTypes.string.isRequired
};

export default ShowInsertsForOnePosition;
