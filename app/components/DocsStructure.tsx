import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TreeNode } from "@/app/types/mdx";

interface DocsTitleProps {
  type: number
  url: string
  text: string
}
const DocsTitle: React.FC<DocsTitleProps> = ({ type, text, url }) => {
  switch (type) {
    case 1:
      return (
        <a href={url} className={"hover:text-gray-950 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-950 font-medium"}>{text}</a>
      );
      break;
    case 2:
      return (
        <a href={url} className={"hover:text-gray-950 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-500 font-medium"}>{text}</a>
      )
      break;
    case 3:
      break;
    default:
      break;
  }

}

interface RecursiveProps {
  structre: TreeNode[]
}

const Recursive: React.FC<RecursiveProps> = ({ structre }) => {
  return (
    <>
      {structre.map((node) => {
        return (
          <ul className="last-of-type:pb-3" key={uuidv4()}>
            <li className="my-1.5 ml-1">
              <DocsTitle type={1} text={node.name} url={node.url}></DocsTitle>
              <div>
                <ul className="px-0.5 last-of-type:mb-0 mb-8">
                  {node.children.map((children: any) => (
                    <li className="my-1.5 ml-1" key={uuidv4()}>
                      <DocsTitle type={2} text={children.name} url={children.url}></DocsTitle>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        )
      })}
    </>
  )
}


export default function Structure({ structre }: { structre: TreeNode[] }) {
  return (
    <div className="sticky top-24 hidden h-[calc(100vh-6rem)] w-71 md:flex md:shrink-0 md:flex-col md:justify-between">
      <div className="relative overflow-hidden">
        <nav className="flex flex-col pb-4 pr-2 overflow-y-scroll styled-scrollbar dark:text-white">
          <div className="absolute top-0 left-0 z-10 w-full h-3 pointer-events-none from-gray-0 bg-gradient-to-b"></div>
          <Recursive structre={structre}></Recursive>
        </nav>
      </div>
    </div>
  )
}
