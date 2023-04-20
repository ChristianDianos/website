import LinkButton from '@/components/LinkButton';
import Circle from '@/svg/Circle';
import ClubLogo from '@/svg/ClubLogo';
import Duck from '@/svg/Duck';
import Star from '@/svg/Star';

export default function Hero() {
    return (
        <section
            className="relative flex h-screen w-full flex-col items-center justify-between
            gap-6 pt-[21vh] max-md:pb-12 md:flex-row md:gap-0 md:pt-24"
        >
            <div className="z-10 flex flex-col gap-6 md:gap-14 lg:gap-20">
                <h1 className="text-left text-5xl font-bold md:text-6xl lg:text-8xl">
                    LEARN,&nbsp;
                    <br />
                    SOCIALISE,&nbsp;
                    <br />
                    CODE.
                </h1>
                <div className="z-20 flex flex-col gap-5 text-2xl font-bold md:flex-row md:gap-12 lg:gap-16 lg:text-4xl">
                    <LinkButton
                        className="bg-accent-highlight px-7 py-3 lg:px-9 lg:py-5"
                        href="/join"
                    >
                        Join Us
                    </LinkButton>
                    <LinkButton className="bg-primary-bg px-7 py-3 lg:px-9 lg:py-5" href="/about">
                        About
                    </LinkButton>
                </div>
            </div>
            <ClubLogo className="w-48 md:w-80 lg:w-[30rem]" />
            {/* SVG decorations */}
            <Circle
                className="absolute bottom-[30%] left-[-60%] -z-50 w-[31rem] fill-accent-blue opacity-30 md:bottom-0
                md:left-[-45%] lg:bottom-[-20%] lg:left-[-58%] lg:w-[57rem]"
            />
            <Star className="absolute right-[23%] top-[30%] -z-50 hidden w-60 fill-accent-red opacity-30 md:flex lg:top-[18%] lg:w-[19rem]" />
            <Duck
                className="absolute bottom-[-4%] right-[-20%] -z-50 w-40 -scale-x-100 opacity-50 md:w-60 lg:bottom-[-7%] lg:right-[-36%] lg:w-96"
                mono
            />
        </section>
    );
}
