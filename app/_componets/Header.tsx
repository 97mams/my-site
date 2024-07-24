import { Section } from "./Section"

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold tex-primary">Mamisoa.mg</h1>
                <div className="flex-1" />
                <ul>
                    <button className="p-2 border border-foreground rounded" >Git</button>
                </ul>
            </Section>
        </header>
    )
}