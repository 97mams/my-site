import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export const ContactCard = (props: {
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
                    height={20}
                    width={20}
                    alt={props.name}
                    className="absolute -bottom-2 -right-2 rounded-full "
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