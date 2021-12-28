import React, { useState } from "react";

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

export default ShowInsertsForOnePosition;
