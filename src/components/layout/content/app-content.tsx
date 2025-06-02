import { cn } from "@/utils";

export const AppContent = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={cn("flex-1 overflow-y-auto justify-center flex py-8", className)}>
      <div className="h-full px-4 lg:px-0 lg:max-w-8/12 w-full">{children}</div>
    </div>
  );
};
