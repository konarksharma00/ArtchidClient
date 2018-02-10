import React from 'react';
import SidebarFeed from './sidebarFeed';

const Sidebar = function(props){
    return(
        <div className="col-xs-12 header no-padding">
            <div className="col-xs-12 no-padding sidebar-header">
                <div className="col-xs-4">
                    <b>Stories</b>
                </div>
                <div className="col-xs-4">
                    <b>Blogs</b>
                </div>
                <div className="col-xs-4">
                    <b>News</b>
                </div>
            </div>
            <SidebarFeed/>
        </div>
    )
}

export default Sidebar;