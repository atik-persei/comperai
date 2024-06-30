import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Footer from "@/app/components/Footer";

import { getRandomItem } from "@/app/utils/getRandomItem";
import getInputLimit from "@/app/utils/getInputLimit";

export default async function Page() {
  // Main 컴포넌트 타이틀
  const messageList = [
    "컨벤션에 맞는 깃 커밋 메시지를 찾으세요",
    "커밋 메시지가 컨벤션에 맞는지 확인해보세요"
  ]
  const message = getRandomItem(messageList);

  // Main 컴포넌트 인풋 제한
  const inputLimit = getInputLimit();

  return (
    <>
      <Header></Header>
      <Main message={message} limit={inputLimit.toString()}></Main>
      <Footer></Footer>
    </>
  );
}
