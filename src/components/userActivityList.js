import React from 'react';

import UserActivity from './userActivity';

const UserActivityList = ()=>{
    return(
        <div className="col-xs-5" style={{backgroundColor: '#f4f8fb'}}>
            <UserActivity />
            <UserActivity />
        </div>
    )
}

export default UserActivityList;