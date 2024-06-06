import dynamic from "next/dynamic";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Language from "@/app/types/language";

type RenderType = "loading" | "error"

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const msgLanguage = searchParams.language as Language;
  const msgType     = searchParams.type as string;
  const msgQuery    = searchParams.query as string;

  const renderComponent = (props: { renderType?: RenderType, renderTag?: React.ReactNode }) => (
    <div className="h-[600px] min-w-[360px] mx-auto pb-[60px] bg-white relative flex flex-col items-center justify-center gap-y-5">
      {
        props.renderType == "loading" ? <span>로딩 중 입니다.</span>
        : props.renderType == "error" ? <span>유효하지 않은 요청입니다.</span>
        : props.renderTag
      }
    </div>
  );

  // Component type check
  if (![msgLanguage, msgType, msgQuery].every(item => typeof item === "string")) {
    return (
      <>
        <Header></Header>
        {renderComponent({ renderType: "error" })}
        <Footer></Footer>
      </>
    )
  }

  // Component health
  const Commit = dynamic(() => import('../components/Commit'), {
    loading: () => renderComponent({ renderType: "loading" })
  });

  return (
    <>
      <Header></Header>
      {renderComponent({ renderTag: <Commit msgLanguage={msgLanguage} msgType={msgType} msgQuery={msgQuery}></Commit> })}
      <Footer></Footer>
    </>
  );
}
