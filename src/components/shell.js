import React from 'react';

const Shell = function ({ children }) {
    return (
        <div className="col-xs-12 shell no-padding">
            {children}
        </div>
    )
}

export default Shell;