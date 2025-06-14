"use client";
import { Product } from "@/types/product";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { mockProduct } from "@/utils/mock-data";
import { CircleCheck } from "lucide-react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";

export interface ProductDetail extends Product {
  quantity?: number;
  isFavorite?: boolean;
}

interface ProductActionContextProps {
  products: ProductDetail[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  totalPrice: () => number;
  toggleFavorite: (id: number, isFavorite?: boolean) => void;
}

export const ProductActionContext = createContext<ProductActionContextProps | undefined>(undefined);

export const ProductActionProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductDetail[]>(mockProduct);

  useEffect(() => {
    const a = JSON.stringify(products);
    const b = JSON.stringify(mockProduct);
    if (a !== b) setLocalStorage("product-list", products);
  }, [products]);

  useEffect(() => {
    initialProductList();
  }, []);

  const initialProductList = () => {
    const initialProducts = getLocalStorage("product-list");
    if (initialProducts && Array.isArray(initialProducts)) {
      setProducts(initialProducts);
    } else {
      setProducts(mockProduct);
    }
  };

  const addToCart = (product?: Product | ProductDetail) => {
    if (!product) {
      toast.error("ไม่พบสินค้าที่ต้องการเพิ่มลงรถเข็น", {
        duration: 2000,
        icon: <CircleCheck className=" fill-red-500 text-white" />,
      });
      return;
    }

    setProducts((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast("เพิ่มสินค้าลงรถเข็นสําเร็จ", {
      duration: 2000,
      icon: <CircleCheck className=" fill-green-500 text-white" />,
    });
  };

  const removeFromCart = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    toast("ลบสินค้าจากรถเข็นแล้ว", {
      duration: 2000,
      icon: <CircleCheck className=" fill-green-500 text-white" />,
    });
  };

  const increment = (id: number) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item))
    );
  };

  const decrement = (id: number) => {
    setProducts((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: (item.quantity || 0) - 1 } : item))
        .filter((item) => (item.quantity || 0) > 0)
    );
  };

  const toggleFavorite = (id: number, isFavorite?: boolean) => {
    setProducts((prev) => prev.map((item) => (item.id === id ? { ...item, isFavorite: isFavorite } : item)));
    if (isFavorite) {
      toast("เพิ่มสินค้าลงรายการโปรดสำเร็จ", {
        duration: 2000,
        icon: <CircleCheck className=" fill-green-500 text-white" />,
      });
      return;
    }
    toast("ลบสินค้าออกจากรายการโปรดสำเร็จ", {
      duration: 2000,
      icon: <CircleCheck className=" fill-green-500 text-white" />,
    });
  };

  const totalPrice = () => products.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);

  return (
    <ProductActionContext.Provider
      value={{ products, addToCart, removeFromCart, increment, decrement, totalPrice, toggleFavorite }}
    >
      {children}
    </ProductActionContext.Provider>
  );
};
