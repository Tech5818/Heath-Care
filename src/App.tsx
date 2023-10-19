import {useEffect} from "react"
import {Routes,Route} from "react-router-dom";
import {Mobile, PC} from "./responsive"
import FirstPage from "./components/Page/FirstPage";
import Main from "./components/Template/Main";
import {useSelector, useDispatch} from "react-redux"
import { RootState } from "./store";

export default function App() {
  const isFirst:boolean = useSelector((state : RootState) => state.first.value).isFirst;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isFirst);
  },[isFirst])
  return (
    <>
      <Mobile>
          <Routes>
            <Route path="/" element={<FirstPage/>}/>
            <Route path="/main" element={<Main/>}/>
          </Routes>
      </Mobile>
      <PC>
        데스크탑
      </PC>
    </>
  );
}