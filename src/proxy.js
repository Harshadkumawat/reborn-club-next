import { NextResponse } from "next/server";

export default function proxy(request) {
  const isAdmin = request.cookies.get("reborn_admin")?.value === "true";

  if (request.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
