import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import HeroContent from "./HeroContent";

const Hero = () => {
  const [cursorTransform, setCursorTransform] = useState({
    x: "0px",
    y: "0px",
  });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const heroRef = useRef();
  const q = gsap.utils.selector(heroRef);
  const tl = useRef();

  // hero animation =============================================

  useEffect(() => {
    if (initialState) {
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
      setInitialState(false);
    }
  }, [q]);

  //image interaction ==================================================

  const mouseMoveHandler = (e) => {
    const mouseX = e.clientX - e.currentTarget.offsetLeft;
    const mouseY = e.clientY - e.currentTarget.offsetTop;

    //biar ga keluar frame
    if (mouseX < 520 && mouseY >= 600) {
      setCursorTransform({ x: `${mouseX}px`, y: `600px` });
    } else if (mouseX >= 520 && mouseY < 600) {
      setCursorTransform({ x: `520px`, y: `${mouseY}px` });
    } else {
      setCursorTransform({ x: `${mouseX}px`, y: `${mouseY}px` });
    }
  };

  //components ===================================================
  const DesktopImage = (
    <div
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => {
        setIsImageHovered(false);
        setCursorTransform({ x: `0px`, y: `0px` });
      }}
      onMouseMove={mouseMoveHandler}
      className={`hidden lg:block h-[75vh] aspect-square m-auto px-4 mix-blend-luminosity hover:mix-blend-normal grayscale hover:grayscale-0 transition-all duration-300 relative cursor-none`}
    >
      <p
        className={`absolute top-0 left-0 flex flex-col items-start z-20 ${
          isImageHovered ? "opacity-100 text-9xl" : "opacity-0 text-sm"
        }`}
        style={{
          transform: `translate3d(${cursorTransform.x}, ${cursorTransform.y}, 0px)`,
          transition: "font-size 0.5s",
        }}
      >
        <span>👋</span>
        <span className="text-xl bg-black text-white py-1 px-3 rounded-full">
          hello!
        </span>
      </p>
      <Image
        src={"/images/hero/hero-pict-grayscale.jpg"}
        className="hero-image rounded-3xl"
        width={"650px"}
        height={"650px"}
        alt={"picture of the author"}
      />
    </div>
  );

  return (
    <div
      ref={heroRef}
      id="hero"
      className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 "
    >
      <div className="hero-content flex flex-col justify-between pt-2 lg:pt-12 px-8 lg:px-12 gap-16 flex-[1]">
        <HeroContent />
      </div>
      <>{DesktopImage}</>
      <div
        className={`block lg:hidden hero-image-mobile h-fit aspect-square m-auto px-4 `}
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
