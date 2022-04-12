import React from "react";
import PropTypes from "prop-types";

const Morpho = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Morpho
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            Morpho has moved to here: <a href='https://tilerunner.github.io/morpho/'>link</a>
        </div>
    );
}

Morpho.propTypes = {
    setWhereto: PropTypes.func.isRequired
};

export default Morpho;
