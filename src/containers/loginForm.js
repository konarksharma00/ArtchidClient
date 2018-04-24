import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactDom, { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions';

class LoginForm extends Component {

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

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps);
    }

    // login submissional fuction
    onSubmit(values){
        this.props.login(values, (e)=>{
            if(this.props.isLoginSuccesfull){
                this.props.history.push('/profile')
            } else {
                // need to return error component here, just above the submit button
                console.log('login failed')
            }
        });
      }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div className="col-xs-12 pull-xs-right no-padding" style={{textAlign:"center"}}>
                <div className="col-xs-12 header">
                    <h3>Rejoin to explore</h3>
                </div>
                <div className="col-xs-12" style={{padding:"15px"}}>
                    <form
                        onSubmit={handleSubmit(this.onSubmit.bind(this))}
                    >
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
                            Log in
                        </button>
                    </form>
                </div>
                <div className="col-xs-12 auth-footer">
                    First time user <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        )
    }
    
}
function validate(values) {
    console.log(values)
    const errors = {}
    if(!values.email || (values.email ? values.email.length <=3 : false)){
      errors.email ="Email is not valid"
    }
    if(!values.password || (values.password ? values.password.length <=3 : false)){
      errors.password ="Password is not valid"
    }
  
    return errors
  };

// we will extract token from here as well later
function mapStateToProps({userAuthReducer}){
    // return { isLoginSuccesfull: userAuthReducer.data == 'succes' ? true : false }
    return { isLoginSuccesfull: (userAuthReducer.response ? true : false) }
}  

export default reduxForm({
    validate,
    form:'LoginForm'
})(withRouter(connect(mapStateToProps, { login })(LoginForm)));

