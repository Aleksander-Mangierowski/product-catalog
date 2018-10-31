import React, { Component } from 'react';
import styled from 'styled-components';


class Footer extends Component {
    render() {
        return (
            <FooterWrp className="footer">
                <div className="container">
                    <div className="footer-info">
                        <a href="" className="aHeaderLogo">
                            <img src="/img/logo.png" alt="headerLogo" className="imgHeaderLogo" />
                        </a>
        
                        <ul className="footer-social-icons">
                            <li>
                                <a href="mailto:mangerovskii@gmail.com" target="_blank">
                                    <i className="fas fa-envelope">
                                        <span className="network-name"> mangerovskii@gmail.com</span>
                                    </i>
                                </a>
                            </li>
                        
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100003713772235" target="_blank">
                                    <i className="fab fa-facebook">
                                        <span className="network-name"> Facebook</span>
                                    </i>
                                </a>
                            </li>
                        
                            <li>
                                <a href="https://github.com/Aleksander-Mangierowski" target="_blank">
                                    <i className="fab fa-github">
                                        <span className="network-name"> GitHub</span>
                                    </i>
                                </a>
                            </li>
                        
                            <li>
                                <a href="https://www.linkedin.com/in/mangierowski-aleksander-392b3475/" target="_blank">
                                    <i className="fab fa-linkedin">
                                        <span className="network-name"> Linkedin</span>
                                    </i>
                                </a>
                            </li>
                        
                            <li>
                                <a href="https://www.freecodecamp.com/aleksander-mangierowski" target="_blank">
                                    <i className="fab fa-free-code-camp">
                                        <span className="network-name"> freeCodeCamp</span>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="created-by">
                        created by
                        <a href="https://codepen.io/Mangierowski/"> Aleksander</a>
                    </div>
                </div>
            </FooterWrp>
        );
    }
}

export default Footer;

const FooterWrp = styled.footer`
    text-align: center;
    background-color: #ccc;
    color: #333;
    font-size: 1rem;
    padding: 30px 0;
    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
`;