import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import Popup from 'react-popup';
import { connect } from 'react-redux';

import ModalShell from '../components/modalShell';
import { connTest } from '../actions';
import UserAuthButtons from '../components/userAuthButtons';
import UserControl from '../components/userControl';

class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.userAction = this.userAction.bind(this);
        this.state = {
            modalOpen: false,
            isNewUser: false

        };  
    }

    userAction() {
        this.setState((prevState) => {
            return {
                modalOpen: !prevState.modalOpen
            };
        });
    }

    componentWillMount() {
        this.props.connTest();
        const { pathname } = this.props.location; 
        if (pathname==='/signup' || pathname==='/login' || pathname=== '/'){
            this.setState({isNewUser: true})
        }
    }
    render() {
        let userAuthButtons = null;
        this.state.isNewUser ? userAuthButtons = <UserAuthButtons userAction={this.userAction} />  
        : userAuthButtons = <UserControl />;
        return (
            <div>
                <ModalShell
                    selectedOptions={this.state.modalOpen}
                    userAction={this.userAction}
                />
                <nav className="navbar navbar-expand-sm bg-dark">
                    <div className="container-fluid navbar-expand-sm header col-xs-12">
                        <div className="navbar-header col-xs-2">
                            <span className="col-xs-4 brand-logo">
                                <img src={'src/assets/images/logo.png'} alt="logo" />
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
                                {/* <li>{!!this.props.NewConnectionMsg ? this.props.NewConnectionMsg : 'server is down'}</li> */}
                            </ul>
                        </div>
                        <div className="col-xs-5 searchBox">
                            <label className="searchBox--label">
                                Learn an instrument
                            </label>
                            <div className="inner-addon right-addon">
                                <Ionicon icon="ios-search" className="searchBox--icon" />
                                <input
                                    type="text"
                                    placeholder="Search Instruments"
                                    className="searchBox--input"
                                />
                            </div>
                        </div>
                        {userAuthButtons}
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ sampleData }) {
    return { NewConnectionMsg: sampleData.msg }
}

export default withRouter(connect(mapStateToProps, { connTest })(NavHeader));

