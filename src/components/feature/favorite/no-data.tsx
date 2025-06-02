"use client";
import { Heart } from "lucide-react";

export const NoDataFavorite = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-8">
      <div className="py-3">
        <Heart className="size-24 stroke-[1.5] text-neutral-400" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center text-neutral-700 text-2xl font-semibold">ไม่มีสินค้าในรายการโปรด</p>
        <p className="text-center text-neutral-500 font-medium">ไปช้อปปิ้งกันเถอะ</p>
      </div>
    </div>
  );
};
