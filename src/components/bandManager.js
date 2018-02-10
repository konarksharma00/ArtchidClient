import React from 'react';

const BandManager = function(props){
    return(
        <div className="col-xs-12 bandmanager no-padding">
            <div className="col-xs-3 listItem">
                <div className="col-xs-12">
                    TALENT ZONE
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Add Skill
                    </button>
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Refer Talent
                    </button>
                </div>
            </div>
            <div className="col-xs-3 listItem">
                <div className="col-xs-12">
                    BANDS
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Existing
                    </button>
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Register New
                    </button>
                </div>
            </div>
            <div className="col-xs-3 listItem">
                <div className="col-xs-12">
                    YOUR BAND
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Hire
                    </button>
                </div>
                <div className="col-xs-12">
                    <button type="button" className="artchid-btn">
                        <span className=""></span> Apply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BandManager;