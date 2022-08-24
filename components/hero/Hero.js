import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

const Hero = () => {
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
        { xPercent: 10, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        q(".hero-image-mobile"),
        { yPercent: 20, scale: 0.8, opacity: 0 },
        { yPercent: 0, scale: 1, opacity: 1, duration: 0.8 },
        "<"
      );
  }, [q]);

  return (
    <div
      ref={heroRef}
      id="hero"
      className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0"
    >
      <div className="hero-content flex flex-col justify-between pt-4 lg:pt-12 px-8 lg:px-12 pb-4 gap-16 flex-[1]">
        <HeroContent />
        <HeroSocials />
      </div>
      <div
        className={`hidden lg:block hero-image w-fit aspect-square m-auto px-4 `}
      >
        <Image
          src={"/images/hero/hero-pict-grayscale.jpg"}
          width={"650px"}
          height={"650px"}
          alt={"picture of the author"}
        />
      </div>
      <div
        className={`block lg:hidden hero-image-mobile w-fit aspect-square m-auto px-4 `}
      >
        <Image
          src={"/images/hero/hero-pict-grayscale.jpg"}
          width={"650px"}
          height={"650px"}
          alt={"picture of the author"}
        />
      </div>
    </div>
  );
};

export default Hero;
