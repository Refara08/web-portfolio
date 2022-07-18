import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

const Hero = (props) => {
  const heroRef = useRef();
  const q = gsap.utils.selector(heroRef);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        q(".hero-content"),
        { yPercent: 10, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        q(".hero-image"),
        { xPercent: 20, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0"
    >
      <div className="hero-content flex flex-col justify-between pt-4 lg:pt-12 px-12 pb-4 gap-16 flex-[1]">
        <HeroContent />
        <HeroSocials />
      </div>
      <div className="hero-image w-fit aspect-square m-auto px-4">
        <Image
          src={"/image/hero-pict-grayscale.jpg"}
          width={"650px"}
          height={"650px"}
          alt={"picture of the author"}
          className={""}
        />
      </div>
    </div>
  );
};

export default Hero;
