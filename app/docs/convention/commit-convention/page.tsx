import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import CommitConvention from "@/app/docs/convention/commit-convention/commit-convention.mdx"
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

export default async function Page() {
  const contents = getDocsNavigation("/convention/commit-convention/commit-convention.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={{data: contents, show: true}} structre={{data: structre, show: true}}>
        <CommitConvention></CommitConvention>
      </Docs>
      <Footer></Footer>
    </>
  );
}
