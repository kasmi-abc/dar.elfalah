"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    try {
      console.error("route error:", error.digest ?? error.message);
    } catch {}
  }, [error]);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
      <p className="font-display text-5xl font-bold text-primary-900">عذراً</p>
      <p className="mt-3 text-ink-500">حدث خطأ غير متوقع. حاول مجدداً.</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-primary-800 px-8 py-3 font-bold text-white"
      >
        إعادة المحاولة
      </button>
    </div>
  );
}
