import Link from "next/link"

type WorkProps = {
    Image: string
    title: string
    role: string
    date: string
}

export const Work = (props: WorkProps) => {
    return (
        <Link
            href={"https://randevteam.com"}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img
                src={props.Image}
                alt={props.title}
                className="w-10 h-10 bg-white object-contain rounded"
            />
            <div className="mr-auto">
                <p className="text-lg font-semibold">
                    {props.title}
                </p>
                <p className="text-sm text-muted-forgroud">
                    {props.role}
                </p>
            </div>
            <div>
                <p className="text-sm text-end text-muted-foreground">
                    {props.date}
                </p>
            </div>
        </Link>
    )
}