import React from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
const NavHeader = function(props){
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-fixed-top">
                <div className="container-fluid navbar-expand-sm header col-xs-12">
                    <div className="navbar-header col-xs-2">
                        <span className="col-xs-4 brand-logo">
                            <img src={'src/assets/images/logo.png'} alt="logo"/>
                        </span>                          
                        <span className="col-xs-6">
                            <Link className="navbar-brand brand-name" to="/">
                                Artchid
                            </Link> 
                        </span>
                    </div>
                    <div className="col-xs-2">
                        <ul className="nav navbar-nav">
                            <li>An Orchid For Artists</li>
                        </ul>
                    </div>
                    <div className="col-xs-5 searchBox">
                        <label className="searchBox--label">
                            Learn an instrument
                        </label>
                        <div className="inner-addon right-addon">
                        <Ionicon icon="ios-search" className="searchBox--icon"/>
                            <input
                                type="text" 
                                placeholder="Search Instruments"
                                className="searchBox--input"
                            />
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <div className="nav navbar-nav col-xs-6">
                            <Link to="/signup" className="btn io artchid-btn" >
                                    Sign Up
                            </Link>
                        </div>
                        <div className="nav navbar-nav col-xs-6">
                            <Link to="/signup" className="btn io artchid-btn" >
                                    Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavHeader;

