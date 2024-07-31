import { Header } from "./_componets/Header"
import { Hero } from "./_componets/Hero"
import { Spacing } from "./_componets/Spacing"
import { Status } from "./_componets/Status"

export default function Home() {
    return (
        <main>
            <Header />
            <Spacing />
            <Hero />
            <Spacing />
            <Status />
        </main>
    )
}