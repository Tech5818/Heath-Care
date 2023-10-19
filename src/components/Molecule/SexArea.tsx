import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Radio from "../Atom/Radio";

const SexArea: React.FC = () => {
    return (
        <>
            <StyledSexArea>
                <Span>성별</Span>
                <StyledRadioArea>
                    <StyledManRadio name="sex" word="남자" />
                    <StyledWomanRadio name="sex" word="여자" />
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
    padding: 0px 22px;
    justify-content: space-between;
`;
const StyledManRadio = styled(Radio)`
    color: #001AFF;
`;
const StyledWomanRadio = styled(Radio)`
    color: #FF0099;
`;

export default SexArea;