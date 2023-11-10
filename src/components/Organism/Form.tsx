import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TitleArea from "../Molecule/TitleArea";
import NameArea from "../Molecule/NameArea";
import SexArea from "../Molecule/SexArea";
import AgeArea from "../Molecule/AgeArea";
import HeightWeightArea from "../Molecule/HeightWeightArea";
import ButtonExplanationArea from "../Molecule/ButtonExplanationArea";
import { useSelector,useDispatch } from "react-redux";
import { setInfo } from "../../reducer/user";
import { RootState } from "../../store";

const Form: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const dispatch = useDispatch();
    const isFirst = useSelector((state:RootState) => state.first.value);
    const naviagte = useNavigate();
    const submitHandler = (e:React.FormEvent):void => {
        e.preventDefault();
        const Form = formRef.current;
        if (Form) {
            const formData = new FormData(Form);
            const name = formData.get("name");
            const age = formData.get("age");
            const sex = formData.get("sex");
            const height = formData.get("height");
            const weight = formData.get("weight");
            console.log(isFirst);
            
            const userInfo = {
                name,
                sex,
                age,
                height,
                weight,
            };
            dispatch(setInfo(userInfo))
            window.localStorage.setItem("user",JSON.stringify(userInfo));
            naviagte("/main")
        }
    }
    
    return (
        <>
            <StyledForm onSubmit={submitHandler} ref={formRef}>
                <TitleArea />
                <NameArea />
                <SexArea />
                <AgeArea />
                <HeightWeightArea />
                <ButtonExplanationArea />
            </StyledForm>
        </>
    )
}

const StyledForm = styled.form`
    margin-top: 96px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export default Form;