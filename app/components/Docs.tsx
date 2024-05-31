"use client";

import React, { ReactNode, useEffect } from "react";
import Structure from "@/app/components/DocsStructure";
import Prose from "@/app/components/DocsProse";
import Navigation from "@/app/components/DocsNavigation";
import { Mdx, TreeNode } from "@/app/types/mdx";

interface DocsProps {
  children: ReactNode;
  contents: Mdx[];
  structre: TreeNode[];
}

const Docs: React.FC<DocsProps> = ({ children, contents, structre }) => {
  return (
    <main className="bg-white">
      <div className="relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:flex-row md:py-10">
        <Structure structre={structre}></Structure>
        <Prose>
          {children}
        </Prose>
        <Navigation contents={contents}></Navigation>
      </div>
    </main>
  );
}

export default Docs;
