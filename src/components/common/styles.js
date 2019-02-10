import styled from 'styled-components';

export const Col = styled.div`
    padding: 0 15px;
`;

export const Button = styled.button`
    position: relative;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 0;
    outline: 0;
    padding: 10px 15px;
    color: #fff;
    background-color: #2980b9;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    }
    &::after {
        content: "";
        background: rgba(255, 255, 255, 0.5);
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-top: 400%;
        padding-left: 350%;
        margin-left: -20px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.4s;
    }
    &:active::after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
    }
`;

export const AuthButton = styled(Button)`
    display: block;
    width: 100%;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
`;