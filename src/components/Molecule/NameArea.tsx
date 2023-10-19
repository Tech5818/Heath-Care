import React from "react";
import styled from "styled-components";
import Input from "../Atom/Input";
import Span from "../Atom/Span";

const NameArea: React.FC = () => {
    return(
        <>
            <StyledNameArea>
                <Span>이름</Span>
                <Input placeholder="이름을 입력해 주세요."/>
            </StyledNameArea>
        </>
    )
}

const StyledNameArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export default NameArea;
