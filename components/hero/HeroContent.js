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
          <a
            className={
              "flex items-center gap-4 w-fit hero-button text-md lg:text-xl py-2 px-5 border-2 border-secondary rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:text-black hover:border-white relative before:absolute before:bottom-0 before:left-0 before:bg-transparent before:-z-20 before:w-full before:h-0 before:transition-all before:duration-300 before:hover:h-full before:hover:bg-white"
            }
          >
            See projects
          </a>
        </Link>
      </div>
      <div className="hidden lg:block">
        <HeroSocials />
      </div>
    </div>
  );
};

export default HeroContent;
