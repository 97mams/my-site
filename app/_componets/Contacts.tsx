import { Section } from "./Section"
import { ContactCard } from "./ContactCard"
import { Badge } from "@/components/ui/badge"

export const Contacts = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"} className="rounded">Contact me</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I wille be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col gap-4">
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
                <ContactCard
                    image="/saryko.png"
                    mediumImage="/google-mail.png"
                    name="038 16 574 55"
                    description="number phone"
                />
            </div>
        </Section>
    )
}