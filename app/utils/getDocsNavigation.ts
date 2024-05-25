import fs from "fs";
import path from "path";
import html from "remark-html";
import { remark } from "remark";

export default function getDocsNavigation(file: string) {
  // mdx 파일 경로 조회
  const mdxPath = path.join(process.cwd(), "/app/docs", file);

  // 파일 존재 여부
  if (!fs.existsSync(mdxPath)) {
    console.error("MDX 파일을 찾을 수 없습니다:", mdxPath);
    return null
  }

  const source = fs.readFileSync(mdxPath, "utf8");
  const result = remark().use(html).processSync(source);
  const content = result.toString();

  const Contents = findTags(content);
  return Contents
}

function findTags(htmlContent: string) {
  const regex = /<(h1|h2|h3)([^>]*)>(.*?)<\/\1>/gs;
  const matches = Array.from(htmlContent.matchAll(regex));

  return matches.map(match => {
    const idMatch = match[2].match(/id=["']?([^"']+)["']?/);
    const id = idMatch ? idMatch[1] : null;

    return {
      text: match[3].trim(),
      tag: match[1],
      href: id ? `#${id}` : null 
    };
  });
}
