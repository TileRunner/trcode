import React, { useState } from "react";
import PropTypes from "prop-types";

const ShowAnagramsForOneWord = ({
    anagrams=['You','should','never','see','this']
    }) => {

    const [flag, setFlag] = useState(true); // true=show count, false=show anagrams

    return (
        flag ?
            <span className="anagramCount"
                data-toggle="tooltip"
                title={anagrams}
                onClick={() => {setFlag(!flag);}}
            >
                {anagrams.length}
            </span>
        :
            <span className="anagramCount"
                data-toggle="tooltip"
                title={anagrams.length}
                onClick={() => {setFlag(!flag);}}
            >
                {anagrams.join(",")}
            </span>
)};

ShowAnagramsForOneWord.propTypes = {
    anagrams: PropTypes.arrayOf(PropTypes.string)
};

export default ShowAnagramsForOneWord;
