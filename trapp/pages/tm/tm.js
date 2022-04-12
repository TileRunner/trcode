import React from "react";
import PropTypes from "prop-types";

const Transmogrify = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Transmogrify
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            Transmogrify has moved to here: <a href='https://tilerunner.github.io/transmogrify/'>link</a>
        </div>
    );
}

Transmogrify.propTypes = {
    setWhereto: PropTypes.func.isRequired
};

export default Transmogrify;