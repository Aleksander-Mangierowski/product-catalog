import React, { Component } from 'react';
import styled from 'styled-components';


class Card extends Component {
    render() {
        return (
            <FormWrp action="#" method="post">
                <label>
                    Login:
                        <input type="text" name="name" required />
                </label>

                <label>
                    Email:
                        <input type="email" name="email" required />
                </label>

                <button type="submit">Subscribe</button>
            </FormWrp>
        );
    }
}

export default Card;

const FormWrp = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin: 50px 0;
    label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        @media (min-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    input,
    button {
        font-size: 1.2rem;
        border-radius: 5px;
        padding: 10px 15px;
        @media (min-width: 768px) {
            margin-top: 5px;
        }
    }
    input {
        width: calc(100% - 60px);
        @media (min-width: 768px) {
            width: 100%;
        }
    }
`;
