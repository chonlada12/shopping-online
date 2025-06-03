"use client";

import { Badge } from "@/components/ui";
import { useProductAction } from "@/hook/use-product-action";
import { cn } from "@/utils";
import { ChevronLeft, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
  title: React.ReactNode;
  isBack?: boolean;
}

export const Header = ({ title, isBack = false }: ProductHeaderProps) => {
  const router = useRouter();
  const { products } = useProductAction();

  const findProductFavorite = products.filter((product) => product.isFavorite);
  const sumProductQuantity = products.reduce((acc, product) => acc + (product.quantity || 0), 0);

  const headerList = [
    {
      icon: <ShoppingCart className="size-6" />,
      label: "Cart",
      href: "/cart",
      count: sumProductQuantity,
    },
    {
      icon: <Heart className="size-6" />,
      label: "Favorite",
      href: "/favorite",
      count: findProductFavorite.length,
    },
  ];

  const onBack = () => {
    if (!isBack) return;
    router.back();
  };

  return (
    <header className=" h-16 bg-white border-b border-neutral-100  flex justify-center w-full p-4">
      <div className="md:max-w-8/12 w-full flex justify-between items-center h-full">
        <div className={cn("flex items-center gap-0.5 ", isBack && "cursor-pointer")} onClick={onBack}>
          {isBack && <ChevronLeft />}
          <div className="md:text-xl lg:text-2xl font-bold">{title}</div>
        </div>
        <div className="flex items-center gap-4">
          {headerList.map((item, index) => {
            const count = item.count > 99 ? "99+" : item.count;
            return (
              <Link href={item.href} className="flex gap-3 text-neutral-700 items-end" key={index}>
                <div className="relative inline-block cursor-pointer">
                  {item.icon}
                  {item.count > 0 && (
                    <Badge className="absolute -top-2 -right-3 h-5 min-w-5 rounded-full px-1 " variant="destructive">
                      {count}
                    </Badge>
                  )}
                </div>
                <span className="text-sm hidden md:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
