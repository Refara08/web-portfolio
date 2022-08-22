import * as React from "react";

import { useState } from "react";

function Eye(props) {
  const [isHover, setIsHover] = useState(false);

  const onHovering = () => {
    setIsHover(true);
  };

  const onLeaveing = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={onHovering}
      onMouseLeave={onLeaveing}
      className={`flex justify-evenly items-center gap-2 py-1 px-3 rounded-full transition-all duration-300 ${
        isHover ? "translate-x-0" : "translate-x-20"
      }`}
    >
      <svg
        stroke={`${isHover ? "#8BCAE3" : "#FFF"}`}
        fill={`${isHover ? "#8BCAE3" : "#FFF"}`}
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1.5em"
        width="1.5em"
        {...props}
      >
        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
      </svg>
      <div
        className={`transition-all duration-500 ${
          isHover ? "translate-x-0 opacity-100" : "-translate-x-11 opacity-0"
        }`}
      >
        <span className="block w-max pb-[0.5px] border-b-2 border-white">
          see details
        </span>
      </div>
    </div>
  );
}

export default Eye;
