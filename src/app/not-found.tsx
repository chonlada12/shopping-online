"use client";
import { Card } from "@/components/ui";
import { ROUTES } from "@/constants";
import { FrownIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.replace(ROUTES.HOME);
  };

  return (
    <Card className="m-2 p-2">
      <div className="p-8 text-center flex justify-center flex-col items-center">
        <FrownIcon className="size-40 text-neutral-500 stroke-[1.5]" />
        <span className="text-3xl font-bold">404</span>
        <span className="text-xl text-neutral-400">ไม่พบหน้าที่คุณต้องการ</span>
        <div className="flex justify-center items-center p-4">
          <button onClick={handleGoBack} className="rounded-sm bg-blue-500 px-4 py-2 text-white cursor-pointer">
            กลับสู่หน้าหลัก
          </button>
        </div>
      </div>
    </Card>
  );
}
