import React from "react";
import styled from "styled-components";
import Input from "../Atom/Input";
import Span from "../Atom/Span";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store";
import { setInfo } from "../../reducer/user";

const NameArea: React.FC = () => {
    const User = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();

    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInfo({...User, name : e.target.value}))
    }

    return(
        <>
            <StyledNameArea>
                <Span fontSize="14" fontColor="#000" font="regular">이름</Span>
                <Input placeholder="이름을 입력해 주세요." onChange = {inputChangeHandler} />
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
