import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({isAuth, signOut}) => {
    return (
        <Nav role="navigation">
            <ul className="main-menu">
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
        </Nav>
    );
}


const Nav = styled.nav`
    margin-left: auto;
`;