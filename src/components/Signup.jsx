import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as userActions from '../actions/users';
import Navigation from './Header/Navigation';
import Burger from './Header/BurgerMenu';
import {
    AuthBackground,
    AuthForm,
    Input,
    Header
} from './styles';


const mapStateToProps = state => {
    return {
        isAuth: state.users.isAuth,
        userIsLoading: state.users.userIsLoading
    };
}; 

const mapDispatchToProps = dispatch => ({
    signUp: (data) => dispatch(userActions.signUserUp(data))
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            // email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.cleanForm();
    };

    cleanForm = () => {
        this.setState({
            username: '',
            // email: '',
            password: ''
        });
    };

    inputChangeHandle = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { isAuth } = this.props;

        if (isAuth) {
            this.props.history.goBack();
        }
        
        return (
            <React.Fragment>
                {isAuth &&
                    <Redirect to="/" push />
                }
            
                <AuthBackground>
                    <Navigation />
                    <Burger />

                    <AuthForm onSubmit={this.handleSubmit}>
                        <Header>Please sign up</Header>

                        <Input
                            type="text"
                            id="inputName"
                            name="username"
                            value={this.state.username}
                            onChange={this.inputChangeHandle}
                            placeholder="Name"
                            required
                            autoFocus
                        />

                        {/* <Input
                            type="email"
                            id="inputEmail"
                            name="email"
                            value={this.state.email}
                            onChange={this.inputChangeHandle}
                            placeholder="Email address"
                            required
                        /> */}

                        <Input
                            input
                            type="password"
                            name="password"
                            id="inputPassword"
                            value={this.state.password}
                            onChange={this.inputChangeHandle}
                            placeholder="Password"
                            required
                        />

                        <button className="btn btn-lg btn-block" type="submit">Sign Up</button>
                    </AuthForm>
                </AuthBackground>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)