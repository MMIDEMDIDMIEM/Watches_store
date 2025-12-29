import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create(
  persist(
    (set) => ({
      orders: [],

      // 🟢 إضافة طلب جديد
      addOrder: (newOrder) =>
        set((state) => ({
          orders: [...state.orders, newOrder],
        })),

      // 🔴 حذف طلب معين
      removeOrder: (index) =>
        set((state) => ({
          orders: state.orders.filter((_, i) => i !== index),
        })),

      // 🟡 إعادة تعيين الطلبات
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "orders-storage", // اسم المفتاح في localStorage
    }
  )
);
