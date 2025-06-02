"use client";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export const FavoriteHeader = () => {
  const router = useRouter();

  const onBack = () => {
    router.push("/");
  };

  return (
    <header className=" h-16 bg-white border-b border-neutral-100  flex justify-center w-full p-4">
      <div className="lg:max-w-8/12 w-full flex justify-between items-center h-full">
        <div className="md:text-xl lg:text-2xl font-bold flex items-center gap-2">
          <Heart /> รายการโปรด
        </div>
        <div className="cursor-pointer text-neutral-700" onClick={onBack}>
          หน้าหลัก
        </div>
      </div>
    </header>
  );
};
