"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("dlf-cookie")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const close = () => {
    try {
      localStorage.setItem("dlf-cookie", "1");
    } catch {}
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 animate-fade-up">
      <div className="flex items-center gap-3 rounded-2xl border border-cream-300 bg-white p-4 shadow-2xl">
        <Cookie size={22} className="shrink-0 text-gold-600" />
        <p className="flex-1 text-sm text-ink-700">{t("cookieMsg")}</p>
        <button
          onClick={close}
          className="shrink-0 rounded-full bg-primary-800 px-6 py-2 text-sm font-bold text-white"
        >
          {t("cookieOk")}
        </button>
      </div>
    </div>
  );
}
