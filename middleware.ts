import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RateLimiter } from "./app/utils/rateLimiterTokenBucket";

const rateLimiter = new RateLimiter({ refillRate: 4000, maxTokens: 4 });

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() as string;
  const isRateLimited = rateLimiter.limit(ip);

  if (isRateLimited) {
    return NextResponse.redirect(new URL("/limit", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/commit",
}