import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Eye from "../ui/jsx/Eye";

const PortfolioItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { title, image, slug, topic } = props.portfolio;

  const detailPageLink = `/portfolios/${slug}`;
  const imageLink = `/images/portfolios/${slug}/${image}`;

  const mouseIsHovering = () => {
    setIsHover(true);
  };

  const mouseLeaving = () => {
    setIsHover(false);
  };

  return (
    <li
      onMouseEnter={mouseIsHovering}
      onMouseLeave={mouseLeaving}
      className="portfolio-details opacity-0 rounded-xl overflow-hidden bg-primary-2 hover:scale-95 hover:shadow-xl active:scale-95 duration-300 cursor-pointer"
    >
      <Link href={detailPageLink}>
        <a>
          <div className="h-full flex flex-col">
            <div>
              <Image
                src={imageLink}
                alt={title}
                width={"300px"}
                height={"150px"}
                layout={"responsive"}
                className={`transition-all duration-1000 ${
                  isHover
                    ? "scale-105 translate-y-2"
                    : "scale-100 translate-y-0"
                }`}
              />
            </div>
            <div
              className={`w-full h-full px-6 pt-4 pb-6 bg-dark-prime transition-all duration-500 flex flex-col items-start justify-end gap-2`}
            >
              <h1 className="text-2xl font-semibold mb-2">{title}</h1>
              <p className="font-light tracking-wider text-secondary">
                {topic}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioItem;
