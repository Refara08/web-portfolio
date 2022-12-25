import { useRef, useEffect } from "react";
import gsap from "gsap";

import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ portfolioList }) => {
  const portfolioRef = useRef();
  const q = gsap.utils.selector(portfolioRef);

  useEffect(() => {
    gsap.fromTo(
      q(".portfolio-details"),
      { yPercent: 15, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div id="portfolios" className="px-10 mb-12 h-full overflow-y-auto">
      <h1 className="text-4xl font-bold mb-12">My Latest Projects</h1>
      <ul
        ref={portfolioRef}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 max-h-fit mb-12"
      >
        {portfolioList.map((item, index) => (
          <PortfolioItem key={index} portfolio={item} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
