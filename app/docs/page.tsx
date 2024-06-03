import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Comperai from "@/app/docs/comperai.mdx"
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

export default async function Page() {
  const contents = getDocsNavigation("comperai.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={contents} structre={structre} sidetype={true}>
        <Comperai></Comperai>
      </Docs>
      <Footer></Footer>
    </>
  );
}
