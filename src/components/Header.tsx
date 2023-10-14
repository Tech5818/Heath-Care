import React from "react";
import styled from "styled-components"
import MainColor from "./textColor/MainColor"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header:React.FC = () => {
    return(
        <>
            <StyledHeader>
                <StyledLogo>
                    Health <MainColor>Core</MainColor>
                </StyledLogo>
                <FontAwesomeIcon icon={faUser}
                style={{position:"absolute",right:"27px"}}
                />
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
const StyledLogo = styled.div`

`;

export default Header