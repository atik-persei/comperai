import Header from "./components/Header";
import Footer from "./components/Footer";
import Render from "./components/Render";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text="페이지를 찾을 수 없습니다."></Render>
      <Footer></Footer>
    </>
  );
}
