import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const menus = [
  { name: "홈", href: "/" },
  { name: "문서", href: "/docs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 p-2 bg-white z-50">
      <nav className="flex items-center justify-between mx-auto bg-white max-w-7xl lg:2" aria-label="Global">
        <div className="flex gap-8 lg:flex-1">
          <a href="#" className="flex flex-row items-center justify-center pointer-events-none select-none">
            <Image src="/logo.png" height={40} width={40} alt="" priority={true} />
            <span className="text-lg font-bold sm:text-xl">COMPERAI</span>
          </a>

          <div className="flex items-center justify-between gap-4 max-w-7xl">
            {menus.map((item, index) => {
              return (
                <a className="font-medium" href={item.href} key={uuidv4()}>{item.name}</a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
