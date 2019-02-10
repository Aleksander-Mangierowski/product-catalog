import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as userActions from '../../actions/users';
import Navigation from './Navigation';
import Burger from './BurgerMenu';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        isAuth: state.users.isAuth,
    }
};

const mapDispatchToProps = dispatch => ({
    signOut: data => dispatch(userActions.signUserOut(data))
});

class Header extends Component {
    render() {
        const {isAuth, signOut} = this.props;
        return (
            <HeaderWrp className="header">
                <div className="container">
                    <div className="navbar-wrp">
                        <div className="navbar">
                            <div className="help-btns">
                                <Burger isAuth={isAuth} signOut={signOut} />
        
                                <ul className="social-icons">
                                    <li>
                                        <a href="mailto:mangerovskii@gmail.com" target="_blank">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100003713772235" target="_blank">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="https://github.com/Aleksander-Mangierowski" target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="https://www.linkedin.com/in/aleksander-mangierowski-392b3475/" target="_blank">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
        
                                    <li>
                                        <a href="https://www.freecodecamp.com/aleksander-mangierowski" target="_blank">
                                            <i className="fab fa-free-code-camp"></i>
                                        </a>
                                    </li>
                                </ul>
        
                                <div className="search-icon">
                                    <i className="fas fa-search"></i>
                                </div>
        
                            </div>

                            <Navigation isAuth={isAuth} signOut={signOut} />
                        </div>
        
                        <Link to="/" className="aHeaderLogo">
                            <img src="/img/logo.png" alt="headerLogo" className="imgHeaderLogo" />
                        </Link>
                    </div>
                </div>
            </HeaderWrp>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderWrp = styled.header`
    background-color: #ccc;
    padding: 15px 0 0 0;
`;