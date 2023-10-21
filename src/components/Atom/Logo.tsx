import React from "react"
import styled from "styled-components"
import MainColor from "../textColor/MainColor"

const Logo :React.FC<{fontSize : string}> = ({fontSize}) => {
    return (
        <>
            <StyledLogo fontSize={fontSize}>
                    Health <MainColor>Care</MainColor>
            </StyledLogo>
        </>
    )
}

const StyledLogo = styled.div<{fontSize: string}> `
    font-size: ${(props): string => `${props.fontSize}px`};
    font-family: 'NPSfontBold';
`;

export default Logo;