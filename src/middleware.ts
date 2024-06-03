import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname === "/stropne-panely" && url.search === "") {
    const newUrl = new URL("/stropne-panely", request.url);
    newUrl.searchParams.set("typ", "ff200");
    return NextResponse.redirect(newUrl);
  }
  if (url.pathname === "/pre-profesionalov" && url.search === "") {
    const newUrl = new URL("/pre-profesionalov", request.url);
    newUrl.searchParams.set("typ", "ff200");
    return NextResponse.redirect(newUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/stropne-panely", "/pre-profesionalov"],
};
