import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full animate-spin ">
      <Loader className="text-neutral-400" />
    </div>
  );
};
