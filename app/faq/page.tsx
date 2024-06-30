import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

import Faq from "@/app/docs/faq.mdx";

export default async function Page() {
  const contents = getDocsNavigation("faq.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={{data: contents, show: true, viewport: "md"}} structre={{data: structre, show: false}}>
        <Faq></Faq>
      </Docs>
      <Footer></Footer>
    </>
  );
}
