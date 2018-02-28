import React, {Component} from 'react';
import _ from 'lodash';

import NavHeader from '../containers/navHeader';
import SiteFooter from '../components/footer';
import Shell from '../components/shell';
import UserUtils from '../components/usersUtils';
import TopProfiles from '../components/topProfiles';
import TopVideos from '../components/topVideos';
import Sidebar from '../components/sidebar/sidebar';
import BandManager from '../components/bandManager';

// component would only be called once, need to set the api first

class Welcome extends Component {
    constructor() {
        super();
      }
    render(){
        return (
            <div>
                <NavHeader />
                <div className="col-xs-8 no-padding">
                    <Shell>
                        <UserUtils/>
                        <UserUtils/>
                    </Shell>
                    <Shell>
                        <BandManager/>
                    </Shell>
                    <Shell>
                        <TopProfiles/>
                        <TopProfiles/>
                        <TopProfiles/>
                    </Shell>
                    <Shell>
                        <TopVideos/>
                        <TopVideos/>
                        <TopVideos/>
                    </Shell>
                </div>
                <div className="col-xs-4">
                    <Shell>
                        <Sidebar />
                    </Shell>   
                </div>
                <SiteFooter />
            </div>
        );
    }
}

export default Welcome;