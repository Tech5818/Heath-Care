import React from "react";
import styled from "styled-components"
import Logo from "../Atom/Logo";
import UserIcon from "../Atom/UserIcon";

const Header:React.FC = () => {
    return(
        <>
            <StyledHeader>
                <Logo fontSize="18" />
                <UserIcon/>
            </StyledHeader>
        </>
    )
}

const StyledHeader = styled.header`
    width: 100vw;
    height: 55px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    display : flex;
    align-items : center;
    justify-content: center;
    font-family: 'NPSfontBold';
    font-size: 18px;
    position: relative;
`;

export default Header