import { mockProduct } from "@/utils/mock-data";
import { ProductCard } from "./product-card";

export const ProduceList = async () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {mockProduct.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
