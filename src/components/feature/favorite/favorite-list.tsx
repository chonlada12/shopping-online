"use client";
import { Loading, ProductCard } from "@/components/shared";
import { useProductAction } from "@/hook/use-product-action";
import { useEffect, useState } from "react";
import { NoDataFavorite } from "./no-data";

export const FavoriteList = () => {
  const { products } = useProductAction();
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

  const findProductFavorite = products.filter((product) => product.isFavorite);

  return (
    <>
      {loading ? (
        <Loading />
      ) : findProductFavorite.length < 1 ? (
        <div className="flex items-center justify-center h-full">
          <NoDataFavorite />{" "}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {findProductFavorite.map((product) => {
            return <ProductCard key={product.id} product={product} isFavorite />;
          })}
        </div>
      )}
    </>
  );
};
