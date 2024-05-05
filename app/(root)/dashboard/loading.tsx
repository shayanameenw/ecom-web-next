import { Loader2Icon } from "lucide-react";
import { cn } from "~/lib/utils";

export default function Loading() {
  return (
    <section className={cn("h-screen grid place-items-center")}>
      <Loader2Icon className={cn("animate-spin")} size={48} />
    </section>
  );
}
