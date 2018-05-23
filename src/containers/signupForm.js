import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactDom, { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Popup from 'react-popup';

import { signup } from '../actions';
import { userAuthSelector } from '.././selectors'

class SignupForm extends Component {
    //rendering form elements 
    renderField(field) {
        return (
            <div className="form-group">
                <label>
                    {field.label}
                </label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ""}
            </div>
        )
    }

    // componentWillUpdate(nextProps, nextState) {
    //     if (nextProps.isSignupSuccesfull) {
    //         this.props.history.push('/profile')
    //     } else {
    //          // need to return error component here, just above the submit button
    //          console.log('signup failed/ artchid server is not up**** hence faking signin')
    //          this.props.history.push('/profile')
    //     };
    // }
    
    // sign up submissional fuction
    onSubmit(values) {
        this.props.signup(values, (res)=>{
            console.log(res)
            this.props.history.push('/profile')
        })
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div className="col-xs-12 pull-xs-right no-padding">
                <Popup />
                <div className="col-xs-12 header" style={{ textAlign: "center" }}>
                    <h3>Welcome to the family</h3>
                </div>
                <div className="col-xs-12" style={{ padding: "15px" }}>
                    <div className="col-xs-6" style={{ borderRight: "1px dotted #b1b5b9" }}>
                        <label className="col-xs-12" style={{ textAlign: "center" }}>Signup With</label>
                        <button className="btn btn-primary facebook-btn facebook-btn-image  artchid-btn">Facebook</button>
                        <button className="btn btn-primary twitter-btn twitter-btn-image  artchid-btn">Twitter</button>
                        <button className="btn btn-primary google-btn google-btn-image  artchid-btn">Google</button>
                    </div>
                    <div className="col-xs-6">
                        <form
                            onSubmit={handleSubmit(this.onSubmit.bind(this))}
                        >
                            <Field
                                name="name"
                                label="Name"
                                type="text"
                                component={this.renderField}
                            ></Field>
                            <Field
                                name="email"
                                label="Email"
                                type="email"
                                component={this.renderField}
                            ></Field>
                            <Field
                                name="password"
                                label="Password"
                                type="password"
                                component={this.renderField}
                            >
                            </Field>
                            <button type="submit"
                                className="btn btn-primary artchid-btn"
                                disabled={pristine || submitting}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-xs-12 auth-footer">
                    Already a user <Link to="/">Log In</Link>
                </div>
            </div>
        )
    }

}
function validate(values) {
    const errors = {}
    if (!values.name || (values.name ? values.name.length <= 3 : false)) {
        errors.name = "Name is not valid"
    }
    if (!values.email || (values.email ? values.email.length <= 3 : false)) {
        errors.email = "Email is not valid"
    }
    if (!values.password || (values.password ? values.password.length <= 3 : false)) {
        errors.password = "Password is not valid"
    }

    return errors
};

// we will extract token from here as well later
function mapStateToProps({userAuthReducer}) {
    // const {status , data} = userAuthSelector(state)
    // return { isSignupSuccesfull: status }
    return { isSignupSuccesfull: (userAuthReducer.response ? true : false) }
}

export default reduxForm({
    validate,
    form: 'SignupForm'
})(withRouter(connect(mapStateToProps, { signup })(SignupForm)));