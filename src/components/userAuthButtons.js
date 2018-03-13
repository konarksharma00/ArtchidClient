import React from 'react';
import { Link } from 'react-router-dom';
const UserAuthButtons = (props)=>{  
    return (
        <div className="col-xs-3">
            <div className="nav navbar-nav col-xs-6">
                <Link
                    to="/signup"
                    className="btn io artchid-btn"
                    onClick={props.userAction}
                >
                    Sign Up
                </Link>
            </div>
            <div className="nav navbar-nav col-xs-6">
                <Link
                    to="/login"
                    className="btn io artchid-btn"
                    onClick={props.userAction}
                >
                    Login
                </Link>
            </div>
        </div>
    )
}

export default UserAuthButtons;