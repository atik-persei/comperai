import { v4 as uuidv4 } from "uuid";
import { Mdx } from "@/app/types/mdx";
import removeSpecialCharacters from "@/app/utils/removeSpecialCharacters";
import { ViewportType } from "@/app/types/viewport";

interface NavigationProps {
  contents: Mdx[];
  viewport?: ViewportType
}

const h1Class = "hover:text-gray-950 block leading-[1.6] text-gray-500 font-medium text-blue-700";
const h2Class = "hover:text-gray-950 block leading-[1.6] text-gray-500 pl-3";
const h3Class = "hover:text-gray-950 block leading-[1.6] text-gray-500 pl-6"

const Navigation: React.FC<NavigationProps> = ({ contents, viewport="lg" }) => {
  const navClass = `order-last w-56 shrink-0 hidden ${
    viewport === "md" ? "md:block" : viewport === "lg" ? "lg:block" : ""
  } sticky top-24 h-[calc(100vh-6rem)]`;

  return (
    <nav className={navClass}>
      <div>
        <div className="text-gray-950 mb-1 mt-[7px] text-sm font-medium">해당 페이지에</div>
        <div className="absolute top-0 left-0 w-full h-3 from-gray-0 z-1 bg-gradient-to-b"></div>
        <ul className="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm">
          {contents.map((content: Mdx) => {
            return (
              <li key={uuidv4()}>
                <a href={`#${removeSpecialCharacters(content.text)}`} className={content.tag == "h1" ? h1Class : content.tag == "h2" ? h2Class : h3Class}>{content.text}</a>
              </li>
            )
          })}
        </ul>

        <div className="pt-5 mt-3 space-y-2 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-300"></div>
        <a href="https://github.com/atik-persei/comperai" target="_blank" className="hover:text-gray-950 mb-3 flex items-center gap-x-1.5 text-sm text-gray-500 transition-opacity">Edit this page on Github</a>
      </div>
    </nav>
  )
}

export default Navigation;
