import Header from '@/app/components/Header';
import Render from '@/app/components/MainRender';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text='입력 임계치를 넘었습니다.'></Render>
      <Footer></Footer>
    </>
  );
}
