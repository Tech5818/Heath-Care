import React from "react";
import styled from "styled-components";
import Span from "./Span";

const Radio: React.FC<{name:string, word:string}> = ({name, word}) => {
    return (
        <>
            <StyledLabel>
                <StyledInput type="radio" name={name} />
                <Span>{word}</Span>
            </StyledLabel>
        </>
    )
}

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledInput = styled.input`
    width: 30px;
    height: 30px;
    border: 1px solid #E3E3E3;
`;

export default Radio;