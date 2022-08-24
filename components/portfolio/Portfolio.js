import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import PortfolioItem from "./PortfolioItem";

const Portfolio = (props) => {
  const { portfolioList } = props;
  const portfolioRef = useRef();
  const q = gsap.utils.selector(portfolioRef);

  useEffect(() => {
    q(".portfolio-details").forEach((item) => {
      gsap.fromTo(
        item,
        { yPercent: 50, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: item,
            scrub: 1,
            once: true,
            start: "top bottom",
            end: "bottom 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={portfolioRef} id="portfolios" className="my-40 px-10">
      <h1 className="text-4xl font-bold mb-12">My Latest Projects</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {portfolioList.map((item, index) => (
          <PortfolioItem key={index} portfolio={item} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
