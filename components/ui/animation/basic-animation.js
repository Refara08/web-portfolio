import { useRef, useEffect } from "react";
import gsap from "gsap";

//is it functional tho?

export const SlideDown = (props) => {
  const el = useRef();

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { yPercent: -200, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return <div ref={el}>{props.children}</div>;
};
