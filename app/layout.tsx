import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "@/app/globals.css";

const noto = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "컴퍼레이",
  description: "깃허브 커밋 헬퍼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
