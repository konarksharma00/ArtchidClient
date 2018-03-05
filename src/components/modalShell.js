import React, { Component } from 'react';
import Modal from 'react-modal';

import SignupForm from '../containers/signupForm';

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

const SignupModal = function(props) {
        return(
            <Modal
            isOpen={!!props.selectedOptions}
            onRequestClose={props.onSignUpClick}
            contentLabel="selected option"
            ariaHideApp={false}
            className="col-xs-7 col-xs-offset-2"
            style={customStyles}
        >
        <SignupForm />
        </Modal>
        )
}

export default SignupModal;