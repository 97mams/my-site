"use client"

import Link from "next/link"
import { Section } from "./Section"
import { Card } from "@/components/ui/card"
import { Code, Home, LucideIcon, Notebook, Share, StickyNote, Weight } from "lucide-react"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col gap-4 items-start">
            <div className="flex-[3] w-full">
                <Card className="p-4 flex flex-col gap-2 ">
                    <p className="text-lg text-muted-foreground">Side, fun projects</p>
                    {SIDE_PROJECT.map((project, index) => (
                        <SideFunProject
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                        />
                    ))}
                </Card>
            </div>
            <div className="flex-[2] w-full gap-2">
                <Card className="flex-1 p-4 w-full">
                    {WORKS.map((work, index) => (
                        <Work
                            key={index}
                            Image={work.image}
                            title={work.title}
                            role={work.role}
                            date={work.date}
                        />
                    ))}
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
        Logo: Code,
        title: "Calculator",
        description: "a project to calculate in the terminal, create with php",
        url: "https://github.com"
    },
    {
        Logo: Weight,
        title: "Sakafo",
        description: "project to practice symfony 7",
        url: "https://github.com"
    },
    {
        Logo: StickyNote,
        title: "mySite",
        description: "my portfolio create with nextjs",
        url: "https://github.com"
    }
]

type sideProjectProps = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}

const SideFunProject = (props: sideProjectProps) => {
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

const WORKS = [
    {
        image: "/",
        title: "Paositra",
        role: "Stagiaire",
        date: "Septembre - Décembre 2023"
    },
    {
        image: "/",
        title: "R@ndev",
        role: "Stagiaire",
        date: "Septembre - Décembre 2022"
    },

]

type WorkProps = {
    Image: string
    title: string
    role: string
    date: string
}

const Work = (props: WorkProps) => {
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 rounded">
        <span className="bg-accent text-accent-foregroud ">
            <img
                src={props.Image}
                alt={props.title}
                className="w-4 h-4 object-contain"
            />
        </span>
        <p className="text-lg font-semibold">
            {props.title}
        </p>
        <span>
            <p className="text-sm text-muted-forgroud">
                {props.role}
            </p>
            <p className="ml-auto">
                {props.date}
            </p>
        </span>
    </div>

}