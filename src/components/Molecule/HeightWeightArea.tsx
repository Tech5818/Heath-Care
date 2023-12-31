import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Input from "../Atom/Input";

const HeightWeightArea: React.FC = () => {
    return (
        <>
            <StyledHeightWeightArea>
                <Span fontSize="14" fontColor="#000" font="regular">키 / 몸무게</Span>
                <StyledInputArea>
                    <Input placeholder="키를 입력해 주세요." name="height" />
                    <Input placeholder="몸무게를 입력해 주세요." name="weight"/>
                </StyledInputArea>
            </StyledHeightWeightArea>
        </>
    )
}

const StyledHeightWeightArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
`;
const StyledInputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default HeightWeightArea;