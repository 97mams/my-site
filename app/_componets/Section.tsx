import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn("max-w-4xl px-4 m-auto", props.className)}>
      {props.children}
    </div>
  );
};
