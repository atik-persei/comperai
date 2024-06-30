import { Mdx, TreeNode } from "@/app/types/mdx";

import Header from "@/app/components/Header";
import Docs from "@/app/components/Docs";
import Footer from "@/app/components/Footer";

import getDocsNavigation from "@/app/utils/getDocsNavigation";
import getDocsStructure from "@/app/utils/getDocsStructure";

import Notification from "@/app/docs/notification.mdx";

export default async function Page() {
  const contents = getDocsNavigation("notification.mdx") as Mdx[];
  const structre = getDocsStructure() as TreeNode[];

  return (
    <>
      <Header></Header>
      <Docs contents={{data: contents, show: true}} structre={{data: structre, show: false}}>
        <Notification></Notification>
      </Docs>
      <Footer></Footer>
    </>
  );
}
