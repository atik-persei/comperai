import Header from '@/app/components/Header';
import Render from '@/app/components/MainRender';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <>
      <Header></Header>
      <Render text='요청 제한을 초과했습니다.'></Render>
      <Footer></Footer>
    </>
  );
}
