import { LucideIcon } from "lucide-react"
import Link from "next/link"

type sideProjectProps = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}

export const SideFunProject = (props: sideProjectProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm font-muted-foregroud">{props.description}</p>
            </div>
        </Link>
    )
}