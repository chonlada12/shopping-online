/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Card, CardContent, CardFooter } from "@/components/ui";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, image, price, rating } = product;
  const { addToCart } = useProductAction();
  const router = useRouter();

  const onClickCard = () => {
    router.push(`/product/${id}`);
  };

  const onClickAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 p-0 flex flex-col justify-between">
      <CardContent onClick={onClickCard} className="px-6 pt-6">
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className=" h-[150px] object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <div>{name}</div>
        <div>฿{price.toLocaleString()}</div>
        <div>
          ⭐ {rating.rate} ({rating.count.toLocaleString()})
        </div>
      </CardContent>
      <CardFooter className="flex justify-end  flex-col px-6 pb-6 ">
        <Button className="cursor-pointer w-full" variant="secondary" onClick={onClickAddToCart}>
          เพิ่มลงรถเข็น
        </Button>
      </CardFooter>
    </Card>
  );
};
