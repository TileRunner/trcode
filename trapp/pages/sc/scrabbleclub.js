import React from "react";
import PropTypes from "prop-types";

const ScrabbleClub = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Scrabble Club
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            Scrabble Club has moved to here: <a href='https://tilerunner.github.io/scrabble-club/'>link</a>
        </div>
    );
}

ScrabbleClub.propTypes = {
    setWhereto: PropTypes.func.isRequired
};

export default ScrabbleClub;