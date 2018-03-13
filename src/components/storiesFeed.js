import React from 'react';
// import logo from '../assets/images/artchidLogo.png';

const StoriesFeed = function(props){
    return(
        <div className="col-xs-9 animatedNews">
            <div className="col-xs-4">
                <span className="col-xs-12"><b>**A guitarist play's with both hands</b></span> 
            </div>  
            <div className="col-xs-4"> 
                <span className="col-xs-12"><b>**A street painter painting highway</b></span>
            </div> 
            <div className="col-xs-4"> 
                <span className="col-xs-12"><b>**A singer with four octave range</b></span>
            </div>          
        </div>
    )
}

export default StoriesFeed;