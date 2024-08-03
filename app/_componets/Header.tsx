import Link from "next/link"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { GithubIcon } from "./icons/GithubIcon"
import { FacebookIcon } from "./icons/FacebookIcon"
import { buttonVariants } from "@/components/ui/button"

export const Header = () => {
    return (
        <header className="sticky top-0 pt-4">
            <Section className="flex items-baseline">
                <Link href="#" className="text-4xl font-bold tex-primary">97mams</Link>
                <div className="flex-1" />
                <ul className="flex gap-4">
                    <Link
                        href={"https//:git.com"}
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded")}
                    >
                        <GithubIcon size={15} className="text-foregroud" />
                    </Link>
                    <Link
                        href={"#"}
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded")}
                    >
                        <FacebookIcon size={15} className="text-foregroud" />
                    </Link>
                </ul>
            </Section>
        </header >
    )
}