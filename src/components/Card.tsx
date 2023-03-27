import type { ReactNode } from 'react';

type CardProps = JSX.IntrinsicElements['div'] & {
    headingClassName?: string;
    heading?: ReactNode;
};

export default function Card({
    className,
    headingClassName,
    heading,
    children,
    ...intrinsicProps
}: CardProps) {
    const headingComponent = heading !== undefined && (
        <div
            className={`border-primary border-b-0 border-black px-6 py-3 leading-none shadow-solid lg:px-8
            lg:py-5 ${headingClassName ?? ''}`}
        >
            <h2 className="text-3xl font-bold lg:text-4xl">{heading}</h2>
        </div>
    );

    return (
        <div {...intrinsicProps} className="flex flex-col">
            {headingComponent}
            <div
                className={`flex-grow border-primary border-black bg-primary-fg shadow-solid ${
                    className ?? ''
                }`}
            >
                {children}
            </div>
        </div>
    );
}
