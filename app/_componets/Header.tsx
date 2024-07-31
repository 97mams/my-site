import Link from "next/link"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { GithubIcon } from "./icons/GithubIcon"
import { buttonVariants } from "@/components/ui/button"

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold tex-primary">Mamisoa.mg</h1>
                <div className="flex-1" />
                <ul className="flex gap-4">
                    <Link
                        href={"https//:git.com"}
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={12} className="text-foregroud" />
                    </Link>
                    <Link
                        href={"#"}
                        className="p-2 border border-foreground rounded"
                    ></Link>
                </ul>
            </Section>
        </header >
    )
}