import React from 'react';
import Ionicon from 'react-ionicons';

// we will build a function which should generate 6 userutils

const UserUtils = function(props){
    return(
        <div>
            <div className="col-xs-2">
                <div className="col-xs-12">
                    <Ionicon
                        icon="ios-microphone"
                        rotate={true}
                        color="black"
                    />
                </div>
            </div>
            <div className="col-xs-2">
                <div className="col-xs-12">
                    <Ionicon
                        icon="ios-musical-notes"
                        rotate={true}
                        color="black"
                    />
                </div>
            </div>
            <div className="col-xs-2">
                <div className="col-xs-12">
                    <Ionicon
                        icon="ios-mic-outline"
                        rotate={true}
                        color="black"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserUtils;