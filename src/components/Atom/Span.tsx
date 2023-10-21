import React, {ReactNode} from "react";
import styled from "styled-components";

interface SpanProps {
    children: ReactNode | string;
    fontSize: string;
    fontColor: string;
    font: string;
}

const Span: React.FC<SpanProps> = ({children, fontSize, fontColor, font}) => {
    return (
        <>
            <StyledSpan fontSize = {fontSize} fontColor={fontColor} font={font}>{children}</StyledSpan>
        </>
    )
}

const StyledSpan = styled.span<{fontSize: string, fontColor: string, font: string}>`
    font-size: ${(props): string => `${props.fontSize}px`};
    color: ${(props) : string => `${props.fontColor}`};
    ${(props) => 
        props.font === "regular" ? `font-family: 'NPSfontRegular';` : 
        props.font === "bold" ? `font-family: 'NPSfontBold';` : 
        props.font === "extra" ? `font-family: 'NPSfontExtraBold';` : ""
    }
`;

export default Span;