"use client";

import { useEffect, useState } from "react";

type ToastMessage = { id: number; text: string };
let toastId = 0;
const listeners: ((msg: ToastMessage) => void)[] = [];

export function showToast(text: string) {
  const msg = { id: ++toastId, text };
  listeners.forEach((l) => l(msg));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handler = (msg: ToastMessage) => {
      setToasts((prev) => [...prev, msg]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== msg.id));
      }, 3000);
    };
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} className="bg-[#2D2D2D] text-white px-4 py-3 rounded-lg shadow-lg text-sm animate-[fadeIn_0.2s_ease-out]">
          {t.text}
        </div>
      ))}
    </div>
  );
}
