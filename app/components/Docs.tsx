import React, { ReactNode } from 'react';

import Structure from '@/app/components/DocsStructure';
import Prose from '@/app/components/DocsProse';
import Navigation from '@/app/components/DocsNavigation';

import { Mdx, TreeNode } from '@/app/types/mdx';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism.css';


interface DocsProps {
  children: ReactNode;
  contents: Mdx[];
  structre: TreeNode[];
  sidetype?: boolean;
}

const Docs: React.FC<DocsProps> = ({ children, contents, structre, sidetype=true }) => {
  return (
    <main className='bg-white'>
      <div className='relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:flex-row md:py-10'>
        { sidetype ? <Structure structre={structre}></Structure> : '' }
        <Prose>
          {children}
        </Prose>
        { sidetype ? <Navigation contents={contents}></Navigation> : '' }
      </div>
    </main>
  );
}

export default Docs;
