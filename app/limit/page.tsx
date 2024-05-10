import Header from "../components/Header";
import Render from "../components/Render";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text="요청 제한을 초과했습니다."></Render>
      <Footer></Footer>
    </>
  );
}
