"use client"

import Link from "next/link"
import { Section } from "./Section"
import { Card } from "@/components/ui/card"
import { Code, Home, LucideIcon, ArrowUpRight, Share, StickyNote, Weight } from "lucide-react"
import Image from "next/image"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col gap-2 items-start">
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
            <div className="flex-[2] flex flex-col w-full gap-2">
                <Card className="flex-1 p-4 ">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                Image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="flex flex-col flex-1 p-4 w-full gap-2">
                    <p className="text-lg text-muted-foreground">contact me</p>
                    <ContactCard
                        image="/saryko.png"
                        mediumImage=""
                        name="97mams"
                        description="5"
                    />
                    <ContactCard
                        image="/saryko.png"
                        mediumImage=""
                        name="97mams"
                        description="5"
                    />
                </Card>
            </div>
        </Section >
    )
}

const ContactCard = (props: {
    image: string
    mediumImage: string
    name: string
    description: string
}) => {
    return (
        <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
            <div className="relative">
                <Image
                    src={props.image}
                    height={40}
                    width={40}
                    alt={props.name}
                    className="rounded-full object-contain"
                />
                <Image
                    src={props.mediumImage}
                    height={16}
                    width={16}
                    alt={props.name}
                    className="absolute -bottom-2 -right-2 rounded-full"
                />
            </div>
            <div className="mr-auto">
                <p className="text-lg font-semibold">
                    {props.name}
                </p>
                <p className="text-sm text-muted-forgroud">
                    {props.description}
                </p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 mr-4" size={16} />
        </Card>
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
        Logo: Code,
        title: "Authe",
        description: "a project for loing account and hash password, create with php",
        url: "https://github.com"
    },
    {
        Logo: Weight,
        title: "Mon Agens",
        description: "project to practice Laravel",
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
        title: "Paositra Mg",
        role: "Stagiaire",
        date: "Sep-Déc 2023"
    },
    {
        image: "/",
        title: "R@ndevTeam",
        role: "Stagiaire",
        date: "Sep-Déc 2022"
    },

]

type WorkProps = {
    Image: string
    title: string
    role: string
    date: string
}

const Work = (props: WorkProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foregroud ">
                <img
                    src={props.Image}
                    alt={props.title}
                    className="w-4 h-4 object-contain"
                />
            </span>
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
        </div>
    )

}