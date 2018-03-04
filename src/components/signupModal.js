import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { signup } from '../actions';

class SignupModal extends Component {

//rendering form elements 
    renderField(field){
        return(
            <div className="form-group">
                <label>
                    {field.label}
                </label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

// sign up submissional fuction
    onSubmit(values){
        this.props.signup(values);
      }

    render(){

        const { handleSubmit } = this.props;

        return(
            <Modal
            isOpen={!!this.props.selectedOptions}
            onRequestClose={this.props.onSignUpClick}
            contentLabel="selected option"
            ariaHideApp={false}
        >

        <div className="col-xs-12">
            <div className="col-xs-6 pull-xs-right">
                <div className="col-xs-12 header">
                    <h3>Welcome to the family</h3>
                </div>
                <div className="col-xs-6">
                    <h5>Login using</h5>
                    <button className="col-xs-8 artchid-btn">{this.props.sampleData}</button>
                    <button className="col-xs-8 artchid-btn">Twitter</button>
                    <button className="col-xs-8 artchid-btn">Google</button>
                </div>
                <div className="col-xs-6">
                    <form
                        onSubmit={handleSubmit(this.onSubmit.bind(this))}
                    >
                        <Field
                            name="name"
                            label="Name"
                            component={this.renderField}
                        ></Field>
                        <Field
                            name="email"
                            label="Email"
                            component={this.renderField}
                        ></Field>
                        <Field
                            name="password"
                            label="Password"
                            component={this.renderField}
                        >
                        </Field>
                        <button type="submit" className="btn btn-primary artchid-btn" >
                            sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>

        </Modal>
        )
    }
}

function validate(values) {
    console.log(values)
    const errors = {}
    if(!values.name){
      errors.title ="Name is required"
    }
    if(!values.email){
      errors.category ="email is required"
    }
    if(!values.password){
      errors.content ="password is required"
    }
  
    return errors
  }

// we will extract token from here as well later
function mapStateToProps({signupData}){
    return { isSignupSuccesfull: !!signupData._id ? true : false }
}  

export default reduxForm({
    validate,
    form:'SignupForm'
})(connect(mapStateToProps, { signup })(SignupModal));