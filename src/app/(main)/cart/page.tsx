import { CartHeader, CartList } from "@/components/feature";
import { AppContent } from "@/components/layout";

export default function CartPage() {
  return (
    <div className="h-full w-full flex flex-col !overflow-hidden ">
      <CartHeader />
      <AppContent>
        <CartList />
      </AppContent>
    </div>
  );
}
