import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import CreateArrayLink from "@/app/utils/createArrayLink";

const navigationService = [
  { name: "서비스", description: "", href: "#" },
  { name: "공지사항", description: "", href: "/notification" },
  { name: "자주 묻는 질문", description: "", href: "/faq" },
];

const navigationLegal = [
  { name: "법적 고지", description: "", href: "#" },
  { name: "서비스 이용약관", description: "", href: "/terms" },
];

const navigationSupport = [
  { name: "지원", description: "", href: "#" },
  { name: "고객센터", description: "", href: "https://github.com/atik-persei/comperai/issues" },
];


export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center mx-auto bg-gray-100 h-fit min-w-88 gap-y-5 pt-15 pb-15 text-zinc-500">
      {/* 상단 네비게이션 */}
      <section className="flex flex-row justify-between w-full max-w-4xl mb-20 text-sm">
        <div className="flex flex-col gap-2">
          {navigationService.map((item, index) => (
            <CreateArrayLink menu={item} index={index} key={uuidv4()}></CreateArrayLink>
          ) )}
        </div>

        <div className="flex flex-col gap-2">
          {navigationLegal.map((item, index) => (
            <CreateArrayLink menu={item} index={index} key={uuidv4()}></CreateArrayLink>
          ) )}
        </div>

        <div className="flex flex-col gap-2">
          {navigationSupport.map((item, index) => (
            <CreateArrayLink menu={item} index={index} key={uuidv4()}></CreateArrayLink>
          ) )}
        </div>

      </section>

      {/* 하단 네비게이션 */}
      <section className="flex flex-row items-center justify-between w-full max-w-4xl text-sm">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold">컴퍼레이 | COMPERAI</h3>
          <p>ⓒ {new Date().getFullYear()}. COMPERAI. all rights reserved.</p>
        </div>

        <div>
          <Image height={80} width={80} src="/logo.png" alt="logo" priority={true} />
        </div>
      </section>
    </footer>
  )
}
