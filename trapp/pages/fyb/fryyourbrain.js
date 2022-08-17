import React from "react";
import PropTypes from "prop-types";

const FryYourBrain = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Fry Your Brain
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            Fry Your Brain has moved to here: <a href='https://tilerunner.github.io/binary-for-ryu/'>link</a>
        </div>
    );
}

FryYourBrain.propTypes = {
    setWhereto: PropTypes.func.isRequired
};

export default FryYourBrain;