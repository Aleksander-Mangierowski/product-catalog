import React, { Component } from 'react';
import styled from 'styled-components';

class AsideComments extends Component {
    render() {
        return (
            <CommentsWrp>
                <li className="comment">
                    <div className="photo"><img src="/img/user.png" alt="" /></div>
                    <div className="text">
                        <div className="name">Nick Johnson</div>
                        <div className="message">Hello, world!!!</div>
                    </div>
                </li>
                <li className="comment">
                    <div className="photo"><img src="/img/user.png" alt="" /></div>
                    <div className="text">
                        <div className="name">Sara</div>
                        <div className="message">What a wondeful day to code! My favorite SOLID principle is open-closed))</div>
                    </div>
                </li>
                <li className="comment">
                    <div className="photo"><img src="/img/user.png" alt="" /></div>
                    <div className="text">
                        <div className="name">Goran Hook</div>
                        <div className="message">it's time to say goodbye!!!</div>
                    </div>
                </li>
            </CommentsWrp>
        );
    }
}

export default AsideComments;

const CommentsWrp = styled.ul`
    margin: 50px 0;
    .comment {
        display: flex;
        & + .comment {
            margin-top: 15px;
        }
        .photo {
            width: 50px;
            height: 50px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 50px);
            padding: 5px;
            @media (min-width: 768px) {
                width: 185px;
            }
        }
        .name {
            font-size: 1.5rem;
        }
        .message {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.2rem;
        }
    }
`;
