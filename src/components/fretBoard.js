import React from 'react';
import Fertboard from '../assets/images/fretboard.png';

const FretBoard = function () {
    return (
        <div className="col-xs-12">
            <span className="col-xs-12 brand-logo">
                <img src={Fertboard} alt="logo" />
            </span>
            <div className="col-xs-12 introHeader">
                Who will win
            </div>
            <div className="col-xs-12">
                <div className="col-xs-6">
                    Shann
                </div>
                <div className="col-xs-6">
                    Sonu Nigam
                </div>
            </div>
        </div>
    )
}

export default FretBoard;