import { creat } from "zustand";
import type { Product } from "@/types/product";
interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = creat<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),  
}))