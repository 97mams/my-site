import Link from "next/link"
import { Section } from "./Section"
import { Card } from "@/components/ui/card"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3] w-full">
                <Card className="p-4 flex flex-col gap-2 ">
                    <p className="text-lg text-muted-foreground">Side, fun projects</p>
                    {SIDE_PROJECT.map((project, index) => (
                        <SideFunProject
                            key={index}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </Card>
            </div>
            <div className="flex-[2] w-full gap-2">
                <Card className="flex-1 p-4 w-full">
                    work
                </Card>
                <Card className="flex-1 p-4 w-full">
                    contact me
                </Card>
            </div>
        </Section >
    )
}

const SIDE_PROJECT = [
    {
        title: "Calculator",
        description: "project created with php CIL"
    },
    {
        title: "Sakafo",
        description: "project for practice Symfony"
    },
    {
        title: "mySite",
        description: "profolio created with nextjs"
    }
]

type sideProjectProps = {
    title: string,
    description: string
}

const SideFunProject = (props: sideProjectProps) => {
    return (
        <Link
            href={"#"}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p1">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">L</span>
            <div>
                <p className="text-lg font-semibol">{props.title}</p>
                <p className="text-sm font-semibold">{props.description}</p>
            </div>
        </Link>
    )
}