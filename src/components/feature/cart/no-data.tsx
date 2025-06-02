import { ShoppingCartIcon } from "lucide-react";

export const NoCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-8">
      <div className="py-3">
        <ShoppingCartIcon className="size-24 stroke-[1.5] text-neutral-400" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center text-neutral-700 text-2xl font-semibold">ไม่มีสินค้าในรถเข็น</p>
        <p className="text-center text-neutral-500 font-medium">
          คุณไม่มีสินค้าในรถเข็น โปรดเลือกหยิบสินค้าที่ต้องการซื้อลงรถเข็น
        </p>
      </div>
    </div>
  );
};
