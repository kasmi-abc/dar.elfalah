import { NextRequest, NextResponse } from "next/server";

// In-memory per-IP throttle (single instance).
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_POST = 20;

export function checkRateLimit(req: NextRequest, max = MAX_POST): boolean {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const now = Date.now();
  if (hits.size > 5000) hits.clear();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= max;
}

export function rateLimited() {
  return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
}
