import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserIcon:React.FC = () => {
    return (
        <>
            <FontAwesomeIcon icon={faUser}
                style={{position:"absolute",right:"27px"}}
            />
        </>
    )
}

export default UserIcon;