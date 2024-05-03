import dynamic from "next/dynamic";

import Header from "../components/Header";
import Footer from "../components/Footer";

type RenderType = "loading" | "error"

export default function Page({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const msgType = searchParams.type;
  const msgQuery = searchParams.query;

  const renderComponent = (props:{renderType?: RenderType, renderTag?: any}) => (
    <div className="h-[600px] min-w-[360px] mx-auto pb-[60px] bg-white relative flex flex-col items-center justify-center gap-y-5">
      {
        props.renderType == "loading" ? <span>로딩 중 입니다.</span>
        : props.renderType == "error" ? <span>유효하지 않은 요청입니다.</span>
        : props.renderTag
      }
    </div>
  );

  // Component type check
  if (!(typeof msgType == "string") || !(typeof msgQuery == "string")) {
    return (
      <>
        <Header></Header>
        {renderComponent({renderType: "error"})}
        <Footer></Footer>
      </>
    )
  }

  // Component health
  const Commit = dynamic(() => import('../components/Commit'), {
    loading: () => renderComponent({renderType: "loading"})
  });

  return (
    <>
      <Header></Header>
      {renderComponent({renderTag: <Commit msgType={msgType} msgQuery={msgQuery}></Commit>})}
      <Footer></Footer>
    </>
  );
}
