import React from "react";
import styled from "styled-components";
import Span from "./Span";

const Button: React.FC = () => {
    return (
        <>
            <StyledButton>
                <StyledSpan>정보 등록</StyledSpan>
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
`;
const StyledSpan = styled(Span)`
    font-size: 16px;
    color: #fff;
`

export default Button;