import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../actions';

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

    // sign up submissional fuction
    onSubmit(values) {
        // console.log(values);
        this.props.signup(values);
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div className="col-xs-12 pull-xs-right no-padding">
                <div className="col-xs-12 header">
                    <h3>Welcome to the family</h3>
                </div>
                <div className="col-xs-6" style={{ borderRight: "1px dotted #b1b5b9" }}>
                    <h5>Login using</h5>
                    <button className="col-xs-8 btn btn-primary facebook-btn  artchid-btn">Facebook</button>
                    <button className="btn btn-primary twitter-btn  artchid-btn">Twitter</button>
                    <button className="col-xs-8 btn btn-primary google-btn  artchid-btn">Google</button>
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
                            sign up
                        </button>
                    </form>
                </div>
                <div className="col-xs-12">
                    Already a user <Link to="/">Log In</Link>
                </div>
            </div>
        )
    }
    
}
function validate(values) {
    console.log(values)
    const errors = {}
    if(!values.name || (values.name ? values.name.length <=3 : false)){
      errors.name ="Name is not valid"
    }
    if(!values.email || (values.email ? values.email.length <=3 : false)){
      errors.email ="Email is not valid"
    }
    if(!values.password || (values.password ? values.password.length <=3 : false)){
      errors.password ="Password is not valid"
    }
  
    return errors
  };

// we will extract token from here as well later
function mapStateToProps({signupData}){
    return { isSignupSuccesfull: !!signupData._id ? true : false }
}  

export default reduxForm({
    validate,
    form:'SignupForm'
})(connect(mapStateToProps, { signup })(SignupForm));

