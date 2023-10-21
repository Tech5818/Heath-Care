import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Logo from "../Atom/Logo";

const TitleArea: React.FC = () => {
    return (
        <>
            <StyeldTitleArea>
                <Logo fontSize="32"/>
                <StyeldTitleExplanation>
                    <Span fontSize="20" fontColor="#000" font="regular">
                        처음 접속 하셨군요
                    </Span>
                    <Span fontSize="20" fontColor="#000" font="regular">
                        정보를 입력해 주세요.
                    </Span>
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
    margin-bottom: 10px;
`;
const StyeldTitleExplanation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default TitleArea;