import React from 'react';

const SidebarFeed = function(props){
    return(
        <div className="col-xs-12 header no-padding">
            {/* Below div can be seperated and will receive data from apis */}
            {/* there will be only one div under which data would be iterated over depending upon
            which header section user has clicked */}
            <div className="col-xs-12 no-padding sidebar-feed">
                <div className="col-xs-12">
                    <h5>Nostalgia(90's) vs Boredom(Now)</h5>
                    <span className="col-xs-12">
                        <div className="col-xs-4">
                        <img src={'src/assets/images/profile.png'} className="img-responsive topProfile-image col-xs-12" />
                        </div>
                        <div className="col-xs-8">
                            back in a day we had albums new guys, launching....
                        </div>
                    </span>
                </div>
            </div>
            <div className="col-xs-12 no-padding sidebar-feed">
                <div className="col-xs-12">
                    <h5>5 habbits that strenthens your will power.</h5>
                    <span className="col-xs-12">
                        <div className="col-xs-4">
                            <img src={'src/assets/images/profile.png'} className="img-responsive topProfile-image col-xs-12" />
                        </div>
                        <div className="col-xs-8">
                            back in a day we had albums new guys, launching....
                        </div>
                    </span>
                </div>
            </div>
            <div className="col-xs-12 no-padding sidebar-feed">
                <div className="col-xs-12">
                    <h5>Sonu Nigam may win Grammy for this song.</h5>
                    <span className="col-xs-12">
                        <div className="col-xs-4">
                            <img src={'src/assets/images/profile.png'} className="img-responsive topProfile-image col-xs-12" />
                        </div>
                        <div className="col-xs-8">
                            back in a day we had albums new guys, launching....
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SidebarFeed;