import React, {ReactNode} from "react";
import styled from "styled-components";

const MainColor :React.FC<{ children : ReactNode }> = ({children}) => {
    return <Color>{children}</Color>
}

const Color = styled.span`
    color: #0085FF;
`;

export default MainColor