import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import * as userActions from '../actions/users';
import Navigation from './Header/Navigation';
import Burger from './Header/BurgerMenu';
// import LabeledCheckbox from './common/LabeledCheckbox';
import {
    AuthBackground,
    AuthForm,
    Input,
    // LabeledCheckboxWrp,
    Header
} from './styles';

const mapStateToProps = state => {
    return {
        isAuth: state.users.isAuth,
        userIsLoading: state.users.userIsLoading
    };
}; 

const mapDispatchToProps = dispatch => ({
    signIn: data => dispatch(userActions.signUserIn(data))
});


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            //remember: false,
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
        this.cleanForm();
    };

    cleanForm = () => {
        this.setState({
            username: '',
            password: '',
            //remember: ''
        });
    };

    inputChangeHandle = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // checkboxChangeHandle = e => {
    //     this.setState({ remember: e.target.checked ? 'checked' : '' })
    // }


    render() {
        const { isAuth } = this.props;
        console.log('auth--', isAuth);
        console.log('token', window.token);
        
        
        return (

            <React.Fragment>
                { isAuth &&
                    <Redirect to="/" push />
                }
    
                <AuthBackground>
                    <Navigation />
                    <Burger />
    
                    <AuthForm onSubmit={this.handleSubmit}>
                        <Header>Please sign in</Header>
        
                        <Input 
                            type="text"
                            id="inputName"
                            name="username"
                            value={this.state.username}
                            onChange={this.inputChangeHandle}
                            placeholder="Name"
                            required
                            autoFocus />
        
                        <Input 
                            input type="password"
                            id="inputPassword"
                            name="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandle}
                            placeholder="Password"
                            required/>
        
                        {/* <LabeledCheckboxWrp>
                            <LabeledCheckbox 
                                onChange={this.checkboxChangeHandle}
                                value="remember-me"
                                name="remember"
                                checked={this.state.remember}
                                text="Remember me"/>
                        </LabeledCheckboxWrp> */}
                        
                        <button className="btn btn-lg btn-block" type="submit">Sign In</button>
                    </AuthForm>
                </AuthBackground>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);