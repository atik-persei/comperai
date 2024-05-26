import fs from "fs";
import path from "path";
import "@/app/utils/stringMethod";
import "@/app/utils/arrayMethods";
import { TreeNode } from "@/app/types/mdx";

const getFolderTree = (dirPath: string): TreeNode[] => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items
    .filter(item => item.isDirectory())
    .map(item => {
      return ({
      name: item.name.folderFilter(),
      url: path.join(item.path.replaceAll(path.join(process.cwd(), "/app"), ""), item.name),
      children: getFolderTree(path.join(dirPath, item.name)),
    })});
};

export default function getDocsStructure() {
  const folderPath = path.join(process.cwd(), "/app/docs");
  let folders = getFolderTree(folderPath)
  folders.moveToFront(item => item.name === "Getting Started");
  if (folders[0].name == "Getting Started") {
    folders[0].url = "/docs"
  }

  folders.moveToBack(item => item.name === "Community");
  return folders
}
