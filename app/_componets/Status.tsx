import { Section } from "./Section"
import { Card } from "@/components/ui/card"
import { Code, Home, LucideIcon, ArrowUpRight, Share, StickyNote, Weight } from "lucide-react"
import { ContactCard } from "./ContactCard"
import { SideFunProject } from "./SideFunProject"
import { Work } from "./Works"

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
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                        image="/saryko.png"
                        mediumImage="/github-logo.png"
                        name="97mams"
                        description="github"
                    />
                    <ContactCard
                        image="/saryko.png"
                        mediumImage="/google-mail.png"
                        name="anjaniainamamisoa"
                        description="google email"
                    />
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

const WORKS = [
    {
        image: "/Logo-paositra.jpg",
        title: "Paositra Mg",
        role: "developer intern",
        date: "Sep-Déc 2023"
    },
    {
        image: "/logo.png",
        title: "R@ndevTeam",
        role: "developer intern",
        date: "Sep-Déc 2022"
    },

]