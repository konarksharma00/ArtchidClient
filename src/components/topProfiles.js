import React from 'react';
// import logo from '../assets/images/artchidLogo.png';

const TopProfiles = function(props){
    return(
        <div className="col-md-3 col-xs-12 listItem">
            <div className="col-xs-12">
                <div className="col-xs-6 no-padding">
                    <span className="col-xs-12 topProfile-name">
                        The Konark
                    </span>
                    <img src={'src/assets/images/artchidLogo.png'} className="img-responsive topProfile-image col-xs-12" />
                    <span>
                        <span className="col-xs-6 no-padding">M</span>
                        <span className="col-xs-6 no-padding" style={{textAlign: 'right'}} >26</span>
                    </span>
                    <span className="col-xs-12" style={{textAlign: 'center'}}>Guitarist</span>
                </div>
                <div className="col-xs-6 no-padding topProfile-details">
                    <span className="col-xs-12">Songs: 50</span>
                    <span className="col-xs-12">Originals: 25</span>
                    <span className="col-xs-12">Genre: Hard Rock</span>
                    <span className="col-xs-12">Fans: 5</span>               
                </div>
            </div>
        </div>
    )
}

export default TopProfiles;