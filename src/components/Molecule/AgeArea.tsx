import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Input from "../Atom/Input";

const AgeArea: React.FC = () => {
    return (
        <>
            <StyeldAgeArea>
                <Span fontSize="14" fontColor="#000" font="regular">나이</Span>
                <Input placeholder="이름을 입력해 주세요" name="age" />
            </StyeldAgeArea>
        </>
    )
}

const StyeldAgeArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export default AgeArea;