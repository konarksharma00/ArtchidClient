import React from 'react';

const UserFeed = function(props){
    return( 
            <div className="col-xs-4 feedView">
                <div className="col-xs-12 introHeader">
                    About Me
                </div>
                <div className ="col-xs-12 introSection" >
                    <span>Idea of Fun :: <label> Making melodies</label></span>
                    <span>Art Forms Known :: <label> Music Composition, Guitar</label></span>
                    <span>Best At :: <label> Guitar</label></span>
                    <span>Highlights :: <label> This site</label></span>
                    <span>From :: <label> pathankot, punjab</label></span>
                    <span> Current Residence :: <label>Earth</label></span>
                </div>
                <div className="col-xs-12 introHeader">
                    My Arsenal
                </div>
                <div className ="col-xs-12 introSection">
                    <span>Electric Guitar :: <label> Epiphone lespaul</label></span>
                    <span>Acoustic Guitar ::<label> Jim 584E</label></span>
                    <span>Amplifier ::<label> Fender Mustang 40 W</label></span>
                    <span>Looper ::<label> Ditto </label></span>
                    <span>Footswitch ::<label> Fender 2 button</label></span>
                    <span> See Full Arsenal</span>
                </div>
                <div>
                </div>
            </div>
    )
}
export default UserFeed;