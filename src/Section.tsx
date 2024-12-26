import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge'

interface SectionProps {
    className: string;
}

export function Section({ className, children }: PropsWithChildren<SectionProps>) {
    return (
        <section className={twMerge('w-full h-full', className)}>
            {children}
        </section>
    )
}
