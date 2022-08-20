import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Eye from "../ui/jsx/Eye";

const PortfolioItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { title, image, slug, desc, tags } = props.portfolio;

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
      className="rounded-xl overflow-hidden bg-primary-2 hover:scale-105 active:scale-95 duration-300 cursor-pointer"
    >
      <Link href={detailPageLink}>
        <a>
          <div className="relative">
            <div>
              <Image
                src={imageLink}
                alt={title}
                width={"300px"}
                height={"150px"}
                layout={"responsive"}
              />
            </div>
            <div
              className={`absolute bottom-0 w-full px-6 pt-4 pb-6 bg-black bg-opacity-90 transition-all duration-500 flex justify-between items-center ${
                isHover
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <h1 className="text-2xl fonts-semibold">{title}</h1>
              <Eye />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioItem;
