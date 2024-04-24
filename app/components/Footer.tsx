import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const navigationService = [
  { name: "서비스", description: "", href: "#" },
  { name: "공지사항", description: "", href: "#" },
  { name: "자주 묻는 질문", description: "", href: "#" },
  { name: "서버 상태", description: "", href: "#" },
];

const navigationLegal = [
  { name: "법적 고지", description: "", href: "#" },
  { name: "서비스 이용약관", description: "", href: "#" },
  { name: "개인정보처리방침", description: "", href: "#" },
  { name: "라이선스", description: "", href: "#" },
];

const navigationSupport = [
  { name: "지원", description: "", href: "#" },
  { name: "고객센터", description: "", href: "#" },
  { name: "이메일", description: "", href: "#" },
];

const navigationPotal = [
  { name: "서비스 포탈", description: "", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mx-auto flex h-fit min-w-[360px] flex-col items-center justify-center gap-y-5 bg-[#f2f2f2] pt-[60px] pb-[60px] text-zinc-500">
      {/* 상단 네비게이션 */}
      <section className="mb-24 flex flex-row justify-between w-full max-w-4xl text-[14px]">
        <div className="flex flex-col">
          {navigationService.map((item, index) => {
            if (index == 0) {
              return (
                <span className="font-bold" key={uuidv4()}>{item.name}</span>
              );
            }
            return (
              <a href={item.href} key={uuidv4()}>{item.name}</a>
            );
          })}
        </div>

        <div className="flex flex-col">
          {navigationLegal.map((item, index) => {
            if (index == 0) {
              return (
                <span className="font-bold" key={uuidv4()}>{item.name}</span>
              );
            }
            return (
              <a href={item.href} key={uuidv4()}>{item.name}</a>
            );
          })}
        </div>

        <div className="flex flex-col">
          {navigationSupport.map((item, index) => {
            if (index == 0) {
              return (
                <span className="font-bold" key={uuidv4()}>{item.name}</span>
              );
            }
            return (
              <a href={item.href} key={uuidv4()}>{item.name}</a>
            );
          })}
        </div>

        <div className="flex flex-col">
          {navigationPotal.map((item, index) => {
            if (index == 0) {
              return (
                <span className="font-bold" key={uuidv4()}>{item.name}</span>
              );
            }
            return (
              <a href={item.href} key={uuidv4()}>{item.name}</a>
            );
          })}
        </div>
      </section>

      {/* 하단 네비게이션 */}
      <section className="flex flex-row items-center justify-between w-full max-w-4xl text-[14px]">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold">컴퍼레이 | COMPERAI</h3>
          <p>서비스 상태에 따라 지연될 수 있습니다.</p>
          <p>ⓒ {new Date().getFullYear()}. COMPERAI. all rights reserved.</p>
        </div>

        <div>
          <Image height={80} width={80} src="/logo.png" alt="logo" priority={true} />
        </div>
      </section>
    </footer>
  )
}
