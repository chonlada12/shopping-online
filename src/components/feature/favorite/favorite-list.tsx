"use client";
import { ProductCard } from "@/components/shared";
import { useProductAction } from "@/hook/use-product-action";
import { NoDataFavorite } from "./no-data";

export const FavoriteList = () => {
  const { products } = useProductAction();

  const findProductFavorite = products.filter((product) => product.isFavorite);
  console.log("findProductFavorite", findProductFavorite);
  return (
    <>
      {findProductFavorite.length < 1 ? (
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
