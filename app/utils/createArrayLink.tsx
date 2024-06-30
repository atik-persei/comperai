import React from "react";
import { v4 as uuidv4 } from 'uuid';

interface MenuItem {
  menu: { name: string, description: string, href: string };
  index: number
}

const CreateArrayLink: React.FC<MenuItem> = ({ menu, index }) => {
  if (index === 0) {
    return (
      <span className="font-bold" key={uuidv4()}>
        {menu.name}
      </span>
    );
  }

  if (menu.href?.startsWith('/')) {
    return (
      <a href={menu.href} key={uuidv4()}>
        {menu.name}
      </a>
    );
  }
  if (menu.href?.startsWith('http') || menu.href?.startsWith('https')) {
    return (
      <a href={menu.href} target="_blank" key={uuidv4()}>
        {menu.name}
      </a>
    );
  }

  return (
    <a href={menu.href} key={uuidv4()}>
      {menu.name}
    </a>
  );
};
export default CreateArrayLink;