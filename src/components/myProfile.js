import React from 'react';

const MyProfile = function(props){
    return(
        <div className="col-md-3 col-xs-12 listItem">
            <div className="col-xs-12">
                <img src={'src/assets/images/youtube.png'} className="img-responsive col-xs-12" />
                <span className="col-xs-12 insType">Song of the dragon</span>
                <span className="col-xs-12 insType">Raghav Sachar</span>
            </div>
        </div>
    )
}

export default MyProfile;