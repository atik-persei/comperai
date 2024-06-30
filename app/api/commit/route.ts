import { NextResponse } from "next/server";
import getInputLimit from "@/app/utils/getInputLimit";

export async function POST(request: Request) {
  const inputLimit = getInputLimit();

  try {
    const formData = await request.formData();
    const language = formData.get("language") as string;
    const type = formData.get("type") as string;
    const query = formData.get("query") as string;

    if (query.length >= inputLimit) {
      return NextResponse.json({ error: `입력 값이 ${inputLimit}자 이상입니다.` }, { status: 400 });
    }

    const url = new URL(request.url);
    const redirectUrl = new URL(`/commit?language=${encodeURIComponent(language)}&type=${encodeURIComponent(type)}&query=${encodeURIComponent(query)}`, url.origin);
    return NextResponse.redirect(redirectUrl.toString());
  } catch (error) {
    return NextResponse.json({ error: "서버 에러가 발생했습니다." }, { status: 500 });
  }
}
