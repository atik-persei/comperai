import React, { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface TableProps {
  children: ReactNode
  columnStyle: [{ align: string, width: number }]
}

function tableStyle(uniqueClassName: string, columnStyle: [{ align: string, width: number }]) {
  return columnStyle.map((item, index) => {
    return (
      `.${uniqueClassName} th:nth-of-type(${index + 1}) ${item.align == "" ? "{}"  : `{ text-align: ${item.align}; }` }
      .${uniqueClassName}  td:nth-child(${index + 1}) ${item.align == "" ? "{}"  : `{ text-align: ${item.align}; }` }
      .${uniqueClassName}  th:nth-of-type(${index + 1}) { width: ${item.width}rem; }`
    )
  }).join(" ");
}

export const MdxTable: React.FC<TableProps> = ({ children, columnStyle }) => {
  const uniqueClassName = `mdx-table-${uuidv4()}`;
  return (
    <>
      <style>{`${tableStyle(uniqueClassName, columnStyle)}`}</style>
      <div className={uniqueClassName}>
        {children}
      </div>
    </>
  );
};

interface SourcecodeProps {
  children: ReactNode
  filename: string
}

export const MdxSourcecode: React.FC<SourcecodeProps> = ({ children, filename }) => {
  return (
    <>
      <div className="border-t border-l border-r rounded-t-md border-gray-200 px-3 py-2 text-xs">
        {filename}
      </div>
      {children}
    </>
  );
};
