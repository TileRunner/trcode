import React, { useState } from "react";

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

export default ShowSwapsForOnePosition;
