import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn("bg-accent/30 font-mono border border-accent p-1 py-0.5 hover:bg-accent/50 transition-colors text-primary rounded-sm",
                className
            )}
            {...props}
        />
    )
}