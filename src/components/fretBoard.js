import React from 'react';
import Fertboard from '../assets/images/fretboard.png';

const FretBoard = function () {
    return (
        <div className="col-xs-12 img-fluid">
            <span className="col-xs-12">
                <img src={Fertboard} alt="logo" />
            </span>
        </div>
    )
}

export default FretBoard;