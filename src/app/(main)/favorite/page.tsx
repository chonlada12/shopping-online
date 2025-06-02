import { FavoriteHeader, FavoriteList } from "@/components/feature";
import { AppContent } from "@/components/layout";

export default function FavoritePage() {
  return (
    <div className="h-full w-full flex flex-col !overflow-hidden ">
      <FavoriteHeader />
      <AppContent>
        <FavoriteList />
      </AppContent>
    </div>
  );
}
