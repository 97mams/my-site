import Image from "next/image"
import { Section } from "./Section"

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="fle-[2] felx flex-col gap-2 ">
                <h2 className="text-4xl">Mamisao Ratsimbarison</h2>
                <h3 className="text-2xl">Software developer</h3>
                <p>Young, passionate web developer seeking opportunities to learn and grow in the field of web development .</p>
            </div>
            <div className="flex-1ml-auto">
                <Image
                    src={"/saryko.png"}
                    alt="profil"
                    width={300}
                    height={300}
                    className="h-full w-full"
                />
                {/* <img src="https://i.goopics.net/pl41al.png" alt="mamisoa" /> */}
            </div>
        </Section>
    )
}