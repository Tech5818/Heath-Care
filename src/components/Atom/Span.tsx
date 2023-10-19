import React, {ReactNode} from "react";
import styled from "styled-components";

const Span: React.FC<{children: ReactNode | string}> = ({children}) => {
    return (
        <>
            <StyledSpan>{children}</StyledSpan>
        </>
    )
}

const StyledSpan = styled.span`
    font-size: 14px;
`;

export default Span;