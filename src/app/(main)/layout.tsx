import { ProductActionProvider } from "@/context/product-action-context";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductActionProvider>
      <div className="w-screen h-screen">{children}</div>
    </ProductActionProvider>
  );
}
