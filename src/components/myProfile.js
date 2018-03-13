import React from 'react';

import NavHeader from '../containers/navHeader';
import UserFeed from './userFeed';
import StoriesFeed from './storiesFeed';
import SiteFooter from './footer';
import UserActivityList from './userActivityList';
import CastVote from './castVote';

const MyProfile = function(props){
    return(
        <div className="col-xs-12 no-padding">
             <NavHeader/>
            <div className=" col-xs-12 myProfile">
                <div className="col-xs-9">
                    <div className="col-xs-4 prfImg">
                        <span className="col-xs-12">
                            <div className="profileImgContainer">
                                {<img src={'src/assets/images/profile.png'} className="img-thumbnail col-xs-12" />}
                            </div>
                        </span>
                        <span className="col-xs-12">
                            <span>The God</span>
                            <span className="pull-xs-right">Guitarist</span>                
                        </span>
                    </div>
                    <div className="col-xs-8 cvrImg">
                        <div className="col-xs-12 ">
                            <div className="coverImgContainer">
                                {/* <img src={'src/assets/images/artchidLogo.png'} className="img-responsive col-xs-12" />  */}
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="col-xs-4">
                                Fans
                            </div>
                            <div className="col-xs-4">
                                Songs
                            </div>
                            <div className="col-xs-4">
                                Video
                            </div>
                        </div>
                    </div>
                </div>
                <StoriesFeed />
                <UserFeed />
                <UserActivityList />
                <CastVote/>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default MyProfile;