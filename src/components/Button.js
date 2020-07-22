import React from "react"
import styled from "styled-components"

const Button = styled.button`
    background-color: ${props => props.color ? props.color : "#2f55d4"};
    border: ${props => props.color ? `1px solid ${props.color}` : `1px solid #2f55d4`};
    border-radius: 4px;
    padding: 18px 16px;
    margin-right: ${props => props.mr ? props.mr : 0};
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 550;
    transition: 0.3s;
    box-shadow: 0 8px 14px rgba(0, 0, 0, .2);
    &:hover {
        box-shadow: 0 8px 14px rgba(0, 0, 0, .2);
        transform: translate(0, -2px)
    }
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.96)
    }
`

export default (props) => (<Button {...props}>
    {props.title}
</Button>)