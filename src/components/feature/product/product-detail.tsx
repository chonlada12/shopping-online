/* eslint-disable @next/next/no-img-element */
"use client";
import { Loading } from "@/components/shared";
import { Button } from "@/components/ui";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { cn } from "@/utils";
import { HeartIcon, StarIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface ProductDetailProps {
  id: string;
  product: Product;
}

export const ProductDetail = ({ id, product }: ProductDetailProps) => {
  const { products, addToCart, toggleFavorite } = useProductAction();
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

  const findProduct = useMemo(() => products.find((item) => `${item.id}` === id), [id, products]);

  const data = findProduct || product;

  const onClickAddToCart = () => {
    if (!data) return;
    addToCart(data);
  };

  const onClickToggleFavorite = () => {
    if (!data) return;
    if (findProduct?.isFavorite) {
      toggleFavorite(product.id, !findProduct?.isFavorite);
    } else {
      toggleFavorite(product.id, true);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="md:h-[450px] lg:px-4 px-6 gap-4 overflow-y-auto grid grid-cols-1  md:grid-cols-2">
          <section className="flex items-center justify-center bg-neutral-50 rounded-md p-4">
            <img
              src={product?.image}
              alt={product?.name}
              loading="lazy"
              className=" object-contain select-none pointer-events-none"
              draggable={false}
            />
          </section>
          <section className="flex flex-col gap-4 justify-between w-full pb-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{product?.name}</h1>
              <div className="flex items-center justify-between ">
                <span className="flex items-center gap-1 text-neutral-500">
                  <StarIcon className="text-primary-700 fill-primary-700" /> {product?.rating?.rate || "0.0"} (
                  {product?.rating.count.toLocaleString()})
                </span>
                <span className="cursor-pointer" onClick={onClickToggleFavorite}>
                  <HeartIcon className={cn(findProduct?.isFavorite && "fill-red-500 text-red-500")} />
                </span>
              </div>
              <div className="text-3xl bg-neutral-50 p-3 text-red-500 rounded-xs">
                ฿{product?.price.toLocaleString()}
              </div>
              <p className="text-gray-700">{product?.desc}</p>
            </div>
            <div className="w-full flex justify-end flex-col ">
              <Button className="w-fll cursor-pointer" size="xl" variant="primary" onClick={onClickAddToCart}>
                เพิ่มลงรถเข็น
              </Button>
            </div>
          </section>
        </section>
      )}
    </>
  );
};
