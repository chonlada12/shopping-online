import { Header, ProductDetail } from "@/components/feature";
import { AppContent } from "@/components/layout";
import { getMockProducts } from "@/utils/mock-data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage(props: Props) {
  const { id } = await props.params;
  const products = await getMockProducts();

  const findProduct = products.find((product) => `${product.id}` === id);

  if (!id || !findProduct?.id) {
    return notFound();
  }

  return (
    <div className="h-full w-full flex flex-col !overflow-hidden">
      <Header title={findProduct.name} isBack />
      <AppContent className="bg-white">
        <ProductDetail id={id} product={findProduct} />
      </AppContent>
    </div>
  );
}
