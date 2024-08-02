import { Section } from "./Section"

export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                What I do
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-accent lg:h-12">
                    //sary
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">name techo</h3>
                    <p className="text-muted-foreground text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ducimus porro aliquid, corruptis</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-accent lg:h-12">
                    //sary
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">name techo</h3>
                    <p className="text-muted-foreground text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ducimus porro aliquid, corruptis</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-accent lg:h-12">
                    //sary
                    </div>
                    <h3 className="mb-2 text-2xl tracking-tight">name techo</h3>
                    <p className="text-muted-foreground text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ducimus porro aliquid, corruptis</p>
                </div>
            </div>
        </Section>
    )
}