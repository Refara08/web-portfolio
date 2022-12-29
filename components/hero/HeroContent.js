import Link from "next/link";
import HeroSocials from "./HeroSocials";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <p className="text-secondary text-xl">Hello, I&apos;m</p>
        <h1 className="w-min text-3xl md:text-8xl 2xl:text-9xl font-bold">
          Gema Refantero
        </h1>
        <h3 className="text-xl md:text-2xl 2xl:text-3xl  mt-3 mb-4 lg:mb-9">
          React-Next.js Frontend Developer
        </h3>
        <Link href="/portfolios" legacyBehavior>
          <a className={"button-default"}>See projects</a>
        </Link>
      </div>
      <div className="hidden lg:block">
        <HeroSocials />
      </div>
    </div>
  );
};

export default HeroContent;
