import React from "react";
import styled from "styled-components";

const Input: React.FC<{placeholder: string, onChange?:(evnet: React.ChangeEvent<HTMLInputElement>) => void, name: string}> = ({placeholder, onChange, name}) => {
    return (
        <>
            <StyledInput type="text" placeholder={placeholder ? placeholder : ""} onChange={onChange} name={name}/>
        </>
    )
}

const StyledInput = styled.input`
    width: 190px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #DFDFDF;
    padding: 6px 15px;
    border-radius: 30px;
    font-family: 'NPSfontRegular';
    transition: 0.3s;
    &:focus {
        outline: none;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }
`

export default Input;