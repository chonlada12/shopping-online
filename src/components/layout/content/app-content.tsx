import { cn } from "@/utils";

export const AppContent = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className="py-8 overflow-y-auto">
      <div className={cn("flex-1  justify-center flex", className)}>
        <div className="h-full px-6 md:px-0 md:max-w-8/12 w-full">{children}</div>
      </div>
    </div>
  );
};
