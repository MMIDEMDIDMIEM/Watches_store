// store/AuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // { email, role }

      // 🔐 تسجيل الدخول
      login: (email, password) => {
        // مثال بسيط: ممكن تستبدل ده بـ Firebase Auth
        if (email === "admin@gmail.com" && password === "123456") {
          set({ user: { email, role: "admin" } });
        } else {
          set({ user: { email, role: "user" } });
        }
      },

      // 🚪 تسجيل الخروج
      logout: () => set({ user: null }),
    }),
    { name: "auth-storage" }
  )
);
