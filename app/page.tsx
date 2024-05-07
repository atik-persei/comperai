import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getRandomItem } from "./utils/getRandomItem";

export default function Page() {
  // Main 컴포넌트 타이틀
  const messageList = [
    "컨벤션에 맞는 깃 커밋 메시지를 찾으세요",
    "커밋 메시지가 컨벤션에 맞는지 확인해보세요"
  ]
  const message = getRandomItem(messageList);

  return (
    <>
      <Header></Header>
      <Main message={message}></Main>
      <Footer></Footer>
    </>
  );
}
