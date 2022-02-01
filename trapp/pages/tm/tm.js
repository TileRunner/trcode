const Transmogrify = ({setWhereto}) => {
    return (
        <div className="trBackground">
            <div className="trTitle">
                Transmogrify
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <p>Under construction</p>
        </div>
    );
}

export default Transmogrify;