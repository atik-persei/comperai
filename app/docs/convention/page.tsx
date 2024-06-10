import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Convention from "@/app/docs/convention/convention.mdx"
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

export default async function Page() {
  const contents = getDocsNavigation("/convention/convention.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={{data: contents, show: true}} structre={{data: structre, show: true}}>
        <Convention></Convention>
      </Docs>
      <Footer></Footer>
    </>
  );
}
