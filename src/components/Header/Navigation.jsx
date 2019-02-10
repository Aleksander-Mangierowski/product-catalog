import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({isAuth, signOut}) => {
    return (
        <Nav role="navigation">
            <MainMenu>
                <li><Link to="/">Home</Link></li>

                {isAuth ? 
                    <li><a href="/" onClick={signOut}>LogOut</a></li>
                    :
                    <React.Fragment>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </React.Fragment>
                }
            </MainMenu>
        </Nav>
    );
}


const Nav = styled.nav`
    margin-left: auto;
`;

const MainMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    padding-bottom: 15px;
    margin: 0;
    li {
        font-size: 1.5rem;
        & + li {
            margin-left: 20px;
        }
    }
    a {
        white-space: nowrap;
        color: #444;
        &:hover {
            color: #2980b9;
        }
    }
`;