import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

import Terms from "@/app/docs/terms.mdx";

export default async function Page() {
  const contents = getDocsNavigation("terms.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={{data: contents, show: true, viewport: "md"}} structre={{data: structre, show: false}}>
        <Terms></Terms>
      </Docs>
      <Footer></Footer>
    </>
  );
}
