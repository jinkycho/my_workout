import styled from 'styled-components'

const Button = styled.button`
    display: block;
    line-height: 32px;
    padding: 0 5%;
    border: 1px solid #A33636;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 0 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
    margin: auto;
    background: #A33636;

    &:focus{
        outline: none;
    }

    &:hover,
    &:active{
        background: #fff;
        color: #A33636;
    }

`;

export default Button
