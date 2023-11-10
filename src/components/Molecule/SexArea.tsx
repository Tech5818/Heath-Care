import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Radio from "../Atom/Radio";

const SexArea: React.FC = () => {

    return (
        <>
            <StyledSexArea>
                <Span fontSize="14" fontColor="#000" font="regular">성별</Span>
                <StyledRadioArea>
                    <Radio name="sex" word="남자" fontColor="#001AFF"/>
                    <Radio name="sex" word="여자" fontColor="#FF0099"/>
                </StyledRadioArea>
            </StyledSexArea>
        </>
    )
}

const StyledSexArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const StyledRadioArea = styled.div`
    width: 190px;
    display: flex;
    padding: 0px 30px;
    justify-content: space-between;
`;

export default SexArea;