/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Card, CardContent, CardFooter } from "@/components/ui";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { StarIcon, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
}

export const ProductCard = ({ product, isFavorite = false }: ProductCardProps) => {
  const { id, name, image, price, rating } = product;
  const { addToCart, toggleFavorite } = useProductAction();
  const router = useRouter();

  const onClickCard = () => {
    router.push(`/product/${id}`);
  };

  const onClickAddToCart = () => {
    addToCart(product);
  };

  const onClickDelete = () => {
    toggleFavorite(id, false);
  };

  return (
    <Card className="hover:shadow-lg p-0 flex flex-col gap-2 h-full">
      {isFavorite && (
        <div className="px-1 pt-1">
          <div className="flex justify-end">
            <Button className="cursor-pointer" variant="ghost" size="icon" onClick={onClickDelete}>
              <Trash2 />
            </Button>
          </div>
        </div>
      )}
      <CardContent onClick={onClickCard} className="px-1 pt-1 cursor-pointer">
        <div className="p-3">
          <div className="w-full flex justify-center h-[150px] ">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
        <div className="p-3">
          <div>{name}</div>
          <div className="text-red-500">฿{price.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            <StarIcon className="size-4 text-primary-700 fill-primary-700" /> {rating.rate} (
            {rating.count.toLocaleString()})
          </div>
        </div>
      </CardContent>
      {!isFavorite && (
        <CardFooter className="flex justify-end flex-col px-3 pb-3 ">
          <Button className="cursor-pointer w-full" variant="secondary" onClick={onClickAddToCart}>
            เพิ่มลงรถเข็น
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
