import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ isAuth, signOut }) => {
    return (
        <Div className="menu-toggle">
            <input type="checkbox" />

            <div className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className="burger-menu" id="menu">
                <li><Link to="/">Home</Link></li>

                {isAuth ?
                    <li><a href="/" onClick={signOut}>LogOut</a></li>
                    :
                    <React.Fragment>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </React.Fragment>
                }
            </ul>
        </Div>
    );
};

const Div = styled.nav`
    text-align: center;
    margin-right: auto;
`;
