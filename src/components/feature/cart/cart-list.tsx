"use client";

import { Loading } from "@/components/shared";
import { Button } from "@/components/ui";
import { useProductAction } from "@/hook/use-product-action";
import { useEffect, useState } from "react";
import CartItem from "./cart-item";
import { NoCart } from "./no-data";

export const CartList = () => {
  const { products, totalPrice } = useProductAction();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const second = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(second);
    };
  }, []);

  const findProductCart = products.filter((product) => (product.quantity || 0) > 0);

  return (
    <>
      {loading ? (
        <Loading />
      ) : findProductCart.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <NoCart />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {findProductCart.map((product) => {
              return <CartItem key={product.id} item={product} />;
            })}
          </div>
          <div className=" md:col-span-1">
            <div className="bg-neutral-50 p-4 rounded-lg w-full flex flex-col gap-4">
              <span className="text-xl text-neutral-800 font-semibold">สรุปคำสั่งซื้อ</span>
              <div>
                <div className="font-semibold text-neutral-600 text-sm flex justify-between items-center">
                  <span>ราคารวม:</span> <span>฿{totalPrice().toLocaleString()}</span>
                </div>
              </div>
              <div>
                <Button className="w-full cursor-pointer" variant="secondary">
                  ชำระเงิน
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
