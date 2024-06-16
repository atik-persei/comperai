import dynamic from "next/dynamic";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Language from "@/app/types/language";

import { redirect } from "next/navigation";
import getInputLimit from "@/app/utils/getInputLimit";


type RenderType = "loading" | "error" | "finish";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const msgLanguage = searchParams.language as Language;
  const msgType = searchParams.type as string;
  const msgQuery = searchParams.query as string;
  
  const inputLimit = getInputLimit();
  if (msgQuery.length > inputLimit) {
    redirect("/input-limit");
    return;
  }

  const renderComponent = (renderType?: RenderType, renderTag?: React.ReactNode) => {
    let content;
    switch (renderType) {
      case "loading":
        content = <span>로딩 중 입니다.</span>;
        break;
      case "error":
        content = <span>유효하지 않은 요청입니다.</span>;
        break;
      case "finish":
        content = renderTag;
        break;
      default:
        content = renderTag;
    }
    return (
      <div className="h-[600px] min-w-[360px] mx-auto pb-[60px] bg-white relative flex flex-col items-center justify-center gap-y-5">
        {content}
      </div>
    );
  };

  // Component type check
  if (![msgLanguage, msgType, msgQuery].every(item => typeof item === "string")) {
    return (
      <>
        <Header />
        {renderComponent("error")}
        <Footer />
      </>
    );
  }

  // Component health
  const Commit = dynamic(() => import("@/app/components/Commit"), {
    loading: () => renderComponent("loading"),
  });

  return (
    <>
      <Header />
      {renderComponent("finish", <Commit msgLanguage={msgLanguage} msgType={msgType} msgQuery={msgQuery} />)}
      <Footer />
    </>
  );
}
