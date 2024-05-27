import React, { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <article className="w-full max-w-6xl min-w-0 px-1 pb-16 my-1 md:px-6">
      <div className="leading-7 prose prose-vercel max-w-none">
        {children}
      </div>
    </article>
  )
}
