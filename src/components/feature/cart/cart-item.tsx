/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui";
import { ProductDetail } from "@/context/product-action-context";
import { useProductAction } from "@/hook/use-product-action";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  item: ProductDetail;
}

export default function CartItem({ item }: CartItemProps) {
  const { increment, decrement, removeFromCart } = useProductAction();

  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex gap-4 items-center">
        <img src={item.image} className="w-16 h-16 object-contain" alt={item.name} />
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-500">฿{item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={() => decrement(item.id)} className="cursor-pointer" size="icon" variant="ghost">
          -
        </Button>
        <span>{item.quantity}</span>
        <Button onClick={() => increment(item.id)} className="cursor-pointer" size="icon" variant="ghost">
          +
        </Button>
        <Button
          onClick={() => removeFromCart(item.id)}
          className="hover:text-red-500 cursor-pointer"
          size="icon"
          variant="ghost"
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
