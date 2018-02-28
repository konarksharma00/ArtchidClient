import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const SignupModal = (props)=>{
    return(
        <Modal
            isOpen={!!props.selectedOptions}
            onRequestClose={props.onSignUpClick}
            contentLabel="selected option"
            ariaHideApp={false}
        >

        <div className="col-xs-12">
            <div className="col-xs-12 header">
                <h3>Welcome to the family</h3>
            </div>
            <div className="col-xs-6 header pull-xs-right">
                <div className="col-xs-6 header">
                    <h5>Join us using</h5>
                    <button className="col-xs-8 artchid-btn">{props.sampleData}</button>
                    <button className="col-xs-8 artchid-btn">Twitter</button>
                    <button className="col-xs-8 artchid-btn">Google</button>
                </div>
                <div className="col-xs-6 header">
                    labels here
                </div>
            </div>
        </div>

        </Modal>
    )
};

function mapStateToProps(state){
    return {sampleData:'state.posts'}
}

export default connect(mapStateToProps)(SignupModal);