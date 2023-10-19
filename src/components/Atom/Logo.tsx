import React from "react"
import styled from "styled-components"
import MainColor from "../textColor/MainColor"

const Logo :React.FC = () => {
    return (
        <>
            <StyledLogo>
                    Health <MainColor>Core</MainColor>
            </StyledLogo>
        </>
    )
}

const StyledLogo = styled.div `
    font-size: 18px;
`;

export default Logo;