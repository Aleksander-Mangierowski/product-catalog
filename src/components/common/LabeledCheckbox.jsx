import React from 'react';
import styled from 'styled-components';



export default props => {
    const {text, ...inputProps} = props;

    return (
        <Label>
            <input id="input" type="checkbox" {...inputProps} />

            {text}
        </Label>
    );
};


const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`;