import Link from "next/link"
import { Section } from "./Section"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold tex-primary">Mamisoa.mg</h1>
                <div className="flex-1" />
                <ul className="flex gap-4">
                    <Link
                        href={"https//:git.com"}
                        className="border border-foreground p-2"
                    >Git</Link>
                    <Link
                        href={"#"}
                        className="p-2 border border-foreground rounded"
                    >LinkDin</Link>
                </ul>
            </Section>
        </header >
    )
}