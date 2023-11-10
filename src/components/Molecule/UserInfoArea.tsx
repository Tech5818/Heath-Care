import React, { useEffect } from "react";
// import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const UserInfoArea = () => {
    const userInfos = useSelector((state:RootState) => state.user.value);

    useEffect(() => {
        const str:any = window.localStorage.getItem("user")
        const userInfo = JSON.parse(str);
        console.log(userInfo, userInfos)
    }, [userInfos])

    return (
        <>
            <button onClick={() => {
                window.localStorage.clear()
                window.location.href = "/";
            }}>초기화</button> 
        </>
    )
};


export default UserInfoArea;