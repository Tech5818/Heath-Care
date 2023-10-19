import React, {useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {setFirst} from "../../reducer/first";
import FirstTemplate from "../Template/FirstTemplate";

const FirstPage:React.FC = () => {
    const isFirst:boolean = useSelector((state:RootState) => state.first.value).isFirst;
    const dispatch = useDispatch();
    
    
    const isFirstCheck = useCallback(():void => {
        const Storage = window.localStorage;
        if (Storage.length !== 0) {
            dispatch(setFirst({isFirst: !isFirst}))
        }
    },[isFirst,dispatch])

    useEffect(() => {
        isFirstCheck()
        if (isFirst) {
            window.location.href = "/main"
        }
    }, [isFirst,isFirstCheck])

    return (
        <>
            <FirstTemplate />
        </>
    )
}

export default FirstPage;