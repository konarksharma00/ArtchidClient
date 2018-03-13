import React from 'react';
import Ionicon from 'react-ionicons';

import sampleImage from '../assets/images/albumImage.png';
import clapIcon from '../assets/images/clapIcons.png';
import UserImage from '../assets/images/profile.png';

const UserActivity = () => {
    return (
        <div className="col-xs-12" style={{marginBottom: '20px'}}>
            <div className="col-xs-12" style={{ backgroundColor: 'white', padding: 0 }}>
                <div className="col-xs-12 userActivityHeader" style={{ padding: '7px' }}>
                    <div className="col-xs-2 no-padding">
                        <img
                            src={UserImage}
                            className="image-fluid"
                            style={{ width: '70%', borderRadius: '50%' }}
                        />
                    </div>
                    <div className="col-xs-10">
                        <span style={{ display: 'block', lineHeight: 1 }}>Konark Sharma</span>
                        <span style={{ fontSize: '13px' }}>Year of tiger great work</span>
                    </div>
                </div>
                <div className="col-xs-12 introSection" style={{ paddingLeft: 0 }} >
                    <img
                        src={sampleImage}
                        className="image-fluid feedImage"
                    />
                </div>
                <div className="col-xs-12 no-padding">
                    <div
                        className="col-xs-12"
                        style={{ padding: '5px 0 5px 15px', borderBottom: '1px solid #e2e2e8' }}
                    >
                        <div className="col-xs-2" style={{textAlign:'center'}}>
                            <img
                                src={clapIcon}
                                className="image-fluid clapIcon"
                                style={{ width: "20px" }}
                            />
                        </div>
                        <Ionicon
                            icon="md-share"
                            color="black"
                            className="col-xs-2"
                        >
                        </Ionicon>
                        <Ionicon
                            icon="md-clipboard"
                            color="black"
                            className="col-xs-2"
                        >
                        </Ionicon>
                    </div>
                    <div className="col-xs-12 userActivityDetails" >
                        <span>25 Claps</span>
                        <span>5 Comments</span>
                        <span>20 Played</span>
                        <span style={{ float: 'right' }}>Ranking : 1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserActivity;