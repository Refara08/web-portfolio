import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import gsap from "gsap";

import ButtonPrime from "../ui/buttons/ButtonPrime";
import ArrowRight from "../ui/jsx/arrow-right";

const HeroContent = () => {
  const [isHover, setHover] = useState(false);
  const arrowRef = useRef();
  const tl = useRef();

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  useEffect(() => {
    if (isHover) {
      tl.current = gsap
        .timeline()
        .fromTo(arrowRef.current, { display: "none" }, { display: "block" })
        .fromTo(
          arrowRef.current,
          { opacity: 0, xPercent: -100 },
          { opacity: 1, xPercent: 0, duration: 0.5 },
          "<"
        );
    } else {
      tl.current = gsap
        .timeline()
        .fromTo(
          arrowRef.current,
          { opacity: 1, xPercent: 0 },
          { opacity: 0, xPercent: -100, duration: 0.1 }
        )
        .fromTo(
          arrowRef.current,
          { display: "block" },
          { display: "none" },
          "<-=1.6"
        );
    }
  }, [isHover]);

  return (
    <div>
      <p className="text-secondary text-xl pl-2">Hello, I'm</p>
      <h1 className="w-min text-6xl md:text-8xl 2xl:text-9xl font-bold">
        Gema Refantero
      </h1>
      <h3 className="text-xl md:text-2xl 2xl:text-3xl pl-2 mt-3 mb-9">
        React-Nextjs Frontend Developer
      </h3>
      <Link href="/" passHref>
        <ButtonPrime
          onHover={hoverHandler}
          onLeave={leaveHandler}
          specialStyle={"flex items-center gap-4 w-fit hero-button"}
        >
          <span>See projects</span>
          <span ref={arrowRef} className="hidden">
            <ArrowRight />
          </span>
        </ButtonPrime>
      </Link>
    </div>
  );
};

export default HeroContent;
