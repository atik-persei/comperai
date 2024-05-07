"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const commitLanguage = [
  { "language": "en", "text": "English" },
  { "language": "kr", "text": "Korean" },
]

const commitType = [
  { "text": "추가", "value": "add", "description": "기능 추가" },
  { "text": "수정", "value": "update", "description": "기능 추가" },
  { "text": "삭제", "value": "remove", "description": "기능 추가" },
  { "text": "버그", "value": "bug", "description": "기능 추가" },
  { "text": "구조 변경", "value": "refactory", "description": "기능 추가" },
  { "text": "설정 변경", "value": "config", "description": "기능 추가" },
  { "text": "기타", "value": "misc", "description": "기능 추가" }
]

export default function Main(props: {message: string} ) {
  const message = props.message
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
    <div className="h-[600px] min-w-[360px] pb-[60px] bg-white relative mx-auto flex flex-col items-center justify-center gap-y-5">
      <div className="h-[600px] w-full max-w-4xl py-[60px] flex items-center justify-between">
        <span className="w-[330px] text-4xl font-bold leading-relaxed">{message}</span>
        <Image height={248} width={220} src="/rule_book.png" alt=""></Image>
      </div>

      <form className="w-full max-w-3xl py-[60px] bolder flex gap-5" onSubmit={handleSubmit}>
        <select className="w-[82px]" name="language">
          {commitLanguage.map((item) => {
            return(
              <option key={uuidv4()} value={item.language}>{item.text}</option>
            )
          })}
        </select>
        <input className="p-[4px] flex-grow focus:outline-none" placeholder="예) 헤더 컴포넌트에 메뉴 추가" name="query"></input>
        <button className="w-[40px]" type="submit">검색</button>
      </form>
    </div>
  );
}
