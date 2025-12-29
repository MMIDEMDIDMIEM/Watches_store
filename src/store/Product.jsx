import { create } from "zustand";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  // 🟦 جلب كل المنتجات
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ products: data, loading: false });
    } catch (err) {
      console.error("Error fetching products:", err);
      set({ error: err.message, loading: false });
    }
  },

  // 🟩 تحديث منتج في Firestore
  updateProduct: async (id, updatedData) => {
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, updatedData); // ✅ تعديل المنتج في Firestore

      // ✅ تعديل المنتج محليًا في Zustand
      set((state) => ({
        products: state.products.map((p) =>
          p.id === id ? { ...p, ...updatedData } : p
        ),
      }));

      console.log("✅ Product updated successfully!");
    } catch (err) {
      console.error("❌ Error updating product:", err);
      set({ error: err.message });
    }
  },

    deleteProduct: async (id) => {
    try {
      await deleteDoc(doc(db, "products", id)); // ✅ حذف من Firestore
      set((state) => ({
        products: state.products.filter((p) => p.id !== id), // ✅ حذف من الحالة المحلية
      }));
      console.log("✅ Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product:", err);
      set({ error: err.message });
    }
  },
}));
