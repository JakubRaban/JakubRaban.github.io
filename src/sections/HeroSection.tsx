import { PropsWithChildren } from "react"
import { Section } from "../Section"

function SectionLink({ children, to }: PropsWithChildren<{ to: string }>) {
    return (
        <div className="group">
            <a href={`#${to}`} className="relative font-semibold">
                {children}
                <span className="absolute left-0 bottom-[-8px] w-full h-2 bg-black scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <span className="group-last:hidden px-4">&bull;</span>
        </div>
    )
}

export function HeroSection() {
    return (
        <Section id="hero" className="bg-colorful-gradient bg-[size:1200%] animate-moveBackground">
            <div className="text-5xl">
                <div className="text-9xl pb-4 font-bold">Jakub Raban</div>
                <div className="pb-16">
                    Full-Stack Dev fond of colorful backgrounds
                </div>
                <div className="flex flex-wrap justify-center">
                    <SectionLink to="about">About Me</SectionLink>
                    <SectionLink to="projects">Projects</SectionLink>
                    <SectionLink to="contact">Contact</SectionLink>
                </div>
            </div>
        </Section>
    )
}
