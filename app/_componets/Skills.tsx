import { Section } from "./Section"
import { Badge } from "@/components/ui/badge"
import { ReactIcon } from "./icons/ReactIcon"
import { SymfonyIcon } from "./icons/SymfonyIcon"
import { TailwindIcon } from "./icons/TailwindIcon"

export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"} className="rounded">Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                What I do
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12">
                        <ReactIcon size={50} className="animate-spin" style={{ animationDuration: "10s" }} />
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">
                        React
                    </h3>
                    <p className="text-muted-foreground text-sm">My favorite framework frontend</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12">
                        <TailwindIcon size={50} />
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">TailwindCss</h3>
                    <p className="text-muted-foreground text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ducimus porro aliquid, corruptis</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12">
                        <SymfonyIcon size={50} />
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">Symfony</h3>
                    <p className="text-muted-foreground text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ducimus porro aliquid, corruptis</p>
                </div>
            </div>
        </Section>
    )
}