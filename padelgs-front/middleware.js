// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/validate`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
