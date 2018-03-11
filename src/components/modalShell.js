import React, { Component } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

import SignupForm from '../containers/signupForm';
import LoginForm from '../containers/loginForm';

// custom styles for modal, can be moved in dedicated file later
const customStyles = {
    content: {
        position: 'absolute',
        top: '15%',
        bottom: '20%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '0'
      },

  };

const ModalShell = function(props) {
    const { match, location, history } = props
    console.log(props.history.location.pathname)
    
    function userAction(){
        if (props.history.location.pathname==='/signup'){
            return <SignupForm />
        } else {
            return <LoginForm />
        }
    }
        return(
            <Modal
            isOpen={!!props.selectedOptions}
            onRequestClose={props.userAction}
            contentLabel="selected option"
            ariaHideApp={false}
            className="col-xs-7 col-xs-offset-2"
            style={customStyles}
        >
        {userAction()}
        </Modal>
        )
}

export default withRouter(ModalShell);