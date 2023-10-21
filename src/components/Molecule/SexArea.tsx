import React from "react";
import styled from "styled-components";
import Span from "../Atom/Span";
import Radio from "../Atom/Radio";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store";
import { setInfo } from "../../reducer/user";

const SexArea: React.FC = () => {
    const User = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();

    const selectMan = () => {
        dispatch(setInfo({...User, sex: "man"}));
    }

    const selectWoman = () => {
        dispatch(setInfo({...User, sex: "woman"}));
    }

    return (
        <>
            <StyledSexArea>
                <Span fontSize="14" fontColor="#000" font="regular">성별</Span>
                <StyledRadioArea>
                    <Radio name="sex" word="남자" fontColor="#001AFF" onRadioChange={selectMan} />
                    <Radio name="sex" word="여자" fontColor="#FF0099" onRadioChange={selectWoman} />
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