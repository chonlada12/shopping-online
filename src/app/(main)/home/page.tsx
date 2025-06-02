import { Header, ProduceList } from "@/components/feature";
import { AppContent } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col !overflow-hidden bg-neutral-50">
      <Header title="หน้าหลัก" />
      <AppContent>
        <ProduceList />
      </AppContent>
    </div>
  );
}
