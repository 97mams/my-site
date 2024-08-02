"use client"

import { Header } from "./_componets/Header"
import { Hero } from "./_componets/Hero"
import { Spacing } from "./_componets/Spacing"
import { Status } from "./_componets/Status"
import { Skills } from "./_componets/Skills"
import { Contacts } from "./_componets/Contacts"

export default function Home() {
    return (
        <main>
            <Header />
            <Spacing />
            <Hero />
            <Spacing />
            <Status />
            <Spacing />
            <Skills />
            <Spacing />
            <Contacts />
        </main>
    )
}