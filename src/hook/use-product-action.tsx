"use client";
import { ProductActionContext } from "@/context/product-action-context";
import { useContext } from "react";

export const useProductAction = () => {
  const context = useContext(ProductActionContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
