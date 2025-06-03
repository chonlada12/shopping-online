"use client";
import { Loading, ProductCard } from "@/components/shared";
import { mockProduct } from "@/utils/mock-data";
import { useEffect, useState } from "react";

export const ProduceList = () => {
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 ">
          {mockProduct.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
};
