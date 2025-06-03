import { ProductCard } from "@/components/shared";
import { mockProduct } from "@/utils/mock-data";

export const ProduceList = async () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 ">
      {mockProduct.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
