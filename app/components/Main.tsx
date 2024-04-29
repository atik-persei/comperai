"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

const message = [
  { "title": "컨벤션에 맞는 깃 커밋 메시지를 찾으세요" },
  { "title": "커밋 메시지가 컨벤션에 맞는지 확인해보세요" }
]

const commitType = [
  { "text": "추가", "value": "add", "description": "기능 추가" },
  { "text": "수정", "value": "update", "description": "기능 추가" },
  { "text": "삭제", "value": "remove", "description": "기능 추가" },
  { "text": "버그", "value": "bug", "description": "기능 추가" },
  { "text": "구조 변경", "value": "refactory", "description": "기능 추가" },
  { "text": "설정파일 벼수정", "value": "refactory", "description": "기능 추가" },
  { "text": "기타", "value": "misc", "description": "기능 추가" }
]

export default function Main() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const typeElement = e.currentTarget.elements.namedItem("type") as HTMLInputElement;
    const type = typeElement ? typeElement.value : "";

    const queryElement = e.currentTarget.elements.namedItem("query") as HTMLInputElement;
    const query = queryElement ? queryElement.value : "";

    router.push(`/commit?type=${encodeURIComponent(type)}&query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="h-fit min-w-[360px] pb-[60px] bg-white relative mx-auto flex flex-col items-center justify-center gap-y-5">
      <div className="w-full max-w-4xl py-[60px] flex items-center justify-between">
        <span className="w-[330px] text-4xl font-bold leading-relaxed">컨벤션에 맞는 깃 커밋 메시지를 찾으세요</span>
        <Image height={220} width={220} src="/rule_book.png" alt=""></Image>
      </div>

      <form className="w-full max-w-3xl py-[60px] bolder flex gap-5" onSubmit={handleSubmit}>
        <select className="w-[52px]" name="type">
          {commitType.map((item) => {
            return(
              <option key={uuidv4()} value={item.value}>{item.text}</option>
            )
          })}
        </select>
        <input className="p-[4px] flex-grow focus:outline-none" placeholder="예) 헤더 컴포넌트에 메뉴 추가" name="query"></input>
        <button className="w-[40px]" type="submit">검색</button>
      </form>
    </div>
  );
}
