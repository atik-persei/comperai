export type Mdx = { "text": string, "tag": "h1" | "h2" | "h3" }
export interface TreeNode {
  name: string;
  url: string;
  children: TreeNode[];
}
