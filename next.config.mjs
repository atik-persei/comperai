import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

import rehypeFilenamePlugin from "./rehype-filename-plugin.mjs"
import rehypeTablePlugin from "./rehype-table-plugin.mjs"

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeFilenamePlugin,
      rehypeTablePlugin,
      rehypeKatex,
      rehypePrismPlus,
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
