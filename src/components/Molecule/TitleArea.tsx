import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Logo from "../Atom/Logo";

const TitleArea: React.FC = () => {
    return (
        <>
            <StyeldTitleArea>
                <StyledLogo />
                <StyeldTitleExplanation>
                    <StyledSpan>
                        처음 접속 하셨군요
                    </StyledSpan>
                    <StyledSpan>
                        정보를 입력해 주세요.
                    </StyledSpan>
                </StyeldTitleExplanation>
            </StyeldTitleArea>
        </>
    )
};

const StyeldTitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`;
const StyeldTitleExplanation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledLogo = styled(Logo)`
    font-size: 20px;
`;
const StyledSpan = styled(Span)`
    font-size: 20px;
`;

export default TitleArea;