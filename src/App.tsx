import {Mobile, PC} from "./responsive"
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Mobile>
        <Header/>
      </Mobile>
      <PC>
        데스크탑
      </PC>
    </>
  );
}