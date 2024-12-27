import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge'

interface SectionProps {
    id: string;
    className?: string;
}

export function Section({ className, children, id }: PropsWithChildren<SectionProps>) {
    return (
        <section id={id} className={twMerge('w-full min-h-full p-4 flex items-center justify-center text-center', className)}>
            {children}
        </section>
    )
}
