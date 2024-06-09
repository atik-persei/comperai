import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Project from "@/app/docs/getting-started/project-structure/project.mdx"
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

export default async function Page() {
  const contents = getDocsNavigation("/getting-started/project-structure/project.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={contents} structre={structre}>
        <Project></Project>
      </Docs>
      <Footer></Footer>
    </>
  );
}
