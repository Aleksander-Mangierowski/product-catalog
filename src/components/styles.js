import styled from 'styled-components';



export const colors = {
    headerBg: '#ccc',
    mainText: '#444',
    blueAnchor: '#2980b9',
};


export const AuthBackground = styled.div `
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f5f5f5;
`;

export const AuthForm = styled.form`
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin-bottom: 1rem;
`;

export const Header = styled.h1 `
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
`;

export const LabeledCheckboxWrp = styled.div `
    margin-bottom: 1rem;
`;


export const ProductsWrp = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-bottom: 25px;
`;


export const CardWrp = styled.div `
    position: relative;
    height: 100%;
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.2);
    &:hover {
        .card-img {
            img {
                transform: scale(1.1);
            }
        }
    }
    a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .card-img {
        height: 230px;
        overflow: hidden;
        pointer-events: none;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: .3s ease;
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        height: calc(100% - 230px);
        font-size: 1.2rem;
        padding: 15px;
    }

    .card-title,
    .card-date,
    .card-footer {
        flex: 0 0 auto;
    }

    .card-title {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .card-date {
        font-style: italic;
        margin-bottom: 5px;
    }

    .card-description {
        flex: 1 0 auto;
        line-height: 1.5em;
        margin-bottom: 15px;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        i {
            color: #2980b9;
            margin-left: 5px;
        }
        .comments i {
            vertical-align: middle;
        }
    }
`;