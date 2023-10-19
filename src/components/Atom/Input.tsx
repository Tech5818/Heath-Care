import React from "react";
import styled from "styled-components";

const Input: React.FC<{placeholder: string}> = ({placeholder}) => {
    return (
        <>
            <StyledInput type="text" placeholder={placeholder ? placeholder : ""} />
        </>
    )
}

const StyledInput = styled.input`
    width: 190px;
    height: 30px;
    font-size: 12px;
    border: 1px solid #DFDFDF;
    padding: 6px 15px;

    :focus {
        outline: none;
    }
`

export default Input;