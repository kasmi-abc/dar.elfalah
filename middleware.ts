import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, rateLimited } from "./lib/rate-limit";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/api/orders" && req.method === "POST") {
    if (!checkRateLimit(req)) return rateLimited();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/orders"],
};
