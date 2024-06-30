import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Render from "@/app/components/MainRender";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text="페이지를 찾을 수 없습니다."></Render>
      <Footer></Footer>
    </>
  );
}
