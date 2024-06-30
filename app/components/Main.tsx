"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const commitLanguage = [
  { "language": "en", "text": "English" },
  { "language": "kr", "text": "Korean" },
]

const commitType = [
  { "text": "패키지", "value": "package", "description": "패키지" },
  { "text": "코드 추가", "value": "feat", "description": "기능 추가" },
  { "text": "코드 수정", "value": "update", "description": "기능 추가" },
  { "text": "코드 삭제", "value": "remove", "description": "기능 추가" },
  { "text": "버그", "value": "bug", "description": "기능 추가" },
  { "text": "구조 변경", "value": "refactory", "description": "기능 추가" },
  { "text": "설정 변경", "value": "config", "description": "기능 추가" },
  { "text": "기타", "value": "misc", "description": "기능 추가" }
]

const placeholderQuery = `diff --git a/app/page.tsx b/app/page.tsx
index f7e7e36..c25a728 100644
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -1,9 +1,11 @@
-import Header from "./components/Header";
-import Main from "./components/Main";
-import Footer from "./components/Footer";`;

export default function Main(props: { message: string, limit: string }) {
  const message = props.message
  const limit = props.limit
  const router = useRouter();

  const [queryLength, setQueryLength] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQueryLength(e.target.value.length);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/commit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const url = response.url; // URL을 직접 얻을 수 있습니다.
        router.push(url);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('서버 에러가 발생했습니다. 다시 시도해 주세요.1');
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center mx-auto bg-white min-w-22 pb-14 gap-y-5">
      <div className="flex items-center justify-between w-full max-w-4xl h-25 py-14">
        <span className="w-87.5 text-4xl font-bold leading-relaxed">{message}</span>
        <Image height={248} width={220} src="/rule_book.png" alt=""></Image>
      </div>

      <form className="flex flex-col w-full max-w-3xl gap-5 pt-15 bolder" onSubmit={handleSubmit} ref={formRef}>
        <div className="flex items-start w-full max-w-3xl gap-5 bolder">
          <select className="w-20" name="language">
            {commitLanguage.map((item) => {
              return (
                <option key={uuidv4()} value={item.language}>{item.text}</option>
              )
            })}
          </select>
          <select className="w-20" name="type">
            {commitType.map((item) => {
              return (
                <option key={uuidv4()} value={item.value}>{item.text}</option>
              )
            })}
          </select>
          <div className="flex flex-col flex-grow h-56">
            <textarea className="h-50 p-1 resize-none focus:outline-none" autoComplete="off" placeholder={placeholderQuery} onKeyDown={handleKeyDown} onChange={handleTextChange} name="query"></textarea>
            <span className={`text-right ${queryLength > Number(limit) ? "text-red-500" : ""}`}>{queryLength} / {limit}자</span>
          </div>
          <button className="w-10" type="submit">검색</button>
        </div>
      </form>
    </div>
  );
}
