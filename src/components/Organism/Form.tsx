import React, { useRef } from "react";
import styled from "styled-components";
import TitleArea from "../Molecule/TitleArea";
import NameArea from "../Molecule/NameArea";
import SexArea from "../Molecule/SexArea";
import AgeArea from "../Molecule/AgeArea";
import HeightWeightArea from "../Molecule/HeightWeightArea";
import ButtonExplanationArea from "../Molecule/ButtonExplanationArea";

const Form: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const submitHandler = (e:React.FormEvent):void => {
        e.preventDefault();
        const Form = formRef.current;
        if (Form) {
            const formData = new FormData(Form);
            const name = formData.get("name")
            console.log(name)
        }
    }
    
    return (
        <>
            <StyledForm onSubmit={submitHandler}>
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