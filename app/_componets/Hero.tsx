import Image from "next/image"
import { Code } from "./Code"
import { Section } from "./Section"

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[3] ">
                <h2 className="text-4xl">Mamisoa Ratsimbarison</h2>
                <h3 className="text-2xl">Software developer</h3>
                <p>I love coding in <Code>Php</Code>, currently learning <Code>Nextjs</Code>, Always eager to learn and improve.</p>
            </div>
            <div className="hidden md:block md:flex-[2] ml-auto">
                <Image
                    src={"/moi.png"}
                    alt="profil"
                    width={150}
                    height={150}
                    className="h-full w-full rounded-full"
                />
                {/* <img src="https://i.goopics.net/pl41al.png" alt="mamisoa" /> */}
            </div>
        </Section>
    )
}