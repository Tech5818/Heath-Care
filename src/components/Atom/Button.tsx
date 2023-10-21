import React from "react";
import styled from "styled-components";
import Span from "./Span";

const Button: React.FC = () => {
    return (
        <>
            <StyledButton>
                <StyledSpan fontSize="16" fontColor="#fff" font="bold">정보 등록</StyledSpan>
            </StyledButton>
        </>
    )
}

const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #0085FF;
    border-radius: 30px;
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;
const StyledSpan = styled(Span)`
    font-size: 16px;
    color: #fff;
`

export default Button;