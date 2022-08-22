import { useState } from "react";

import Link from "next/link";

import ButtonPrime from "../ui/buttons/ButtonPrime";
import ArrowRight from "../ui/jsx/arrow-right";

const HeroContent = () => {
  const [isHover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  return (
    <div>
      <p className="text-secondary text-xl pl-2">Hello, I&apos;m</p>
      <h1 className="w-min text-6xl md:text-8xl 2xl:text-9xl font-bold">
        Gema Refantero
      </h1>
      <h3 className="text-xl md:text-2xl 2xl:text-3xl pl-2 mt-3 mb-9">
        React-Nextjs Frontend Developer
      </h3>
      <Link href="/#portfolios" passHref>
        <ButtonPrime
          onHover={hoverHandler}
          onLeave={leaveHandler}
          specialStyle={"flex items-center gap-4 w-fit hero-button"}
        >
          <span>See projects</span>
          <div
            className={`transition-all duration-300 ${
              isHover
                ? "block translate-x-0 opacity-100"
                : "hidden -translate-x-10 opacity-0"
            }`}
          >
            <ArrowRight />
          </div>
        </ButtonPrime>
      </Link>
    </div>
  );
};

export default HeroContent;
