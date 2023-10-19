import React from "react";
import styled from "styled-components";
import Button from "../Atom/Button";
import Span from "../Atom/Span";

const ButtonExplanationArea: React.FC = () => {
    return (
        <>
            <StyledButtonExplanationArea>
                <Button />
                <StyledExplanation>
                    <Span>
                        해당 정보들은 사용자 정보 수정 페이지를
                    </Span>
                    <Span>
                        통해 모두 다시 설정 할 수 있습니다.
                    </Span>
                </StyledExplanation>
            </StyledButtonExplanationArea>
        </>
    )
};

const StyledButtonExplanationArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const StyledExplanation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ButtonExplanationArea;