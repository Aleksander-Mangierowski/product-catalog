import React, { Component } from 'react';
import styled from 'styled-components';



class AsideSearch extends Component {
    render() {
        return (
            <FormWrp action="#" method="post">
                <input type="text" name="search" required />

                <button type="submit"><i className="fas fa-search"></i></button>
            </FormWrp>
        );
    }
}

export default AsideSearch;

const FormWrp = styled.form`
    display: flex;
    margin: 50px 0;
    input,
    button {
        flex: 0 0 auto;
        box-sizing: border-box;
        font-size: 1.2rem;
        border-radius: 0 5px 5px 0;
        padding: 10px 15px;
    }

    input {
        flex: 1 0 auto;
        width: calc(100% - 60px);
        border-radius: 5px 0 0 5px;
    }
`;
