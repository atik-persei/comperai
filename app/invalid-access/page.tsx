import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Render from "@/app/components/MainRender";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text="잘못된 접근입니다."></Render>
      <Footer></Footer>
    </>
  );
}
