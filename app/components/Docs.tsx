import React, { ReactNode } from "react";

import Structure from "@/app/components/DocsStructure";
import Prose from "@/app/components/DocsProse";
import Navigation from "@/app/components/DocsNavigation";

import { Mdx, TreeNode } from "@/app/types/mdx";

import "katex/dist/katex.min.css";
import "prismjs/themes/prism.css";
import { ViewportType, defaultNavigationType } from "@/app/types/viewport";

interface DocsProps {
  children: ReactNode;
  contents: { data: Mdx[], show: boolean, viewport?: ViewportType};
  structre: { data: TreeNode[], show: boolean, viewport?: ViewportType};
}

const Docs: React.FC<DocsProps> = ({ children, contents, structre }) => {
  const contentsViewport = contents.viewport || defaultNavigationType.viewport;

  return (
    <main className="bg-white">
      <div className="relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:flex-row md:py-10">
        { structre.show ? <Structure structre={structre.data}></Structure> : "" }
        <Prose>
          {children}
        </Prose>
        { contents.show ? <Navigation contents={contents.data} viewport={contentsViewport}></Navigation> : "" }
      </div>
    </main>
  );
}

export default Docs;
