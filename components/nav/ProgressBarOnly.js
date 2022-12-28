import React, { useState } from "react";
import Link from "next/link";

function ProgressBarOnly({ item, index, indexPage }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={item.link}>
      <a
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="block flex-1 py-4"
      >
        {
          <div
            className={`w-full bg-txt-prime transition duration-300  ${
              index === indexPage || isHover
                ? "bg-opacity-100 h-[5px]"
                : "bg-opacity-30 h-[3px]"
            }`}
          />
        }
      </a>
    </Link>
  );
}

export default ProgressBarOnly;
