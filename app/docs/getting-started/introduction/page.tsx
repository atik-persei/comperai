import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Usage from "@/app/docs/getting-started/introduction/usage.mdx"
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

export default async function Page() {
  const contents = getDocsNavigation("/getting-started/introduction/usage.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={contents} structre={structre}>
        <Usage></Usage>
      </Docs>
      <Footer></Footer>
    </>
  );
}
