import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const menus = [
  { name: "홈", href: "/" },
  { name: "커밋", href: "/commit" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 gap-8">
          <a href="#" className="flex flex-row items-center justify-center pointer-events-none select-none">
            <Image src="/logo.png" height={40} width={40} alt="" priority={true} />
            <span className="text-lg sm:text-xl font-bold">COMPERAI</span>
          </a>

          <div className="flex gap-4 max-w-7xl items-center justify-between">
            {menus.map((item, index) => {
              return (
                <a href={item.href} key={uuidv4()}>{item.name}</a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
