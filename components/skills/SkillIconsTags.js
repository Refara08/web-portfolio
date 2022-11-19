import { useState } from "react";

const SkillIconsTags = ({ category }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative col-span-1 w-full md:hover:scale-105 transition duration-300 flex flex-row justify-center md:justify-start items-center gap-4 lg:gap-3"
    >
      <div className="w-[50px] h-[50px] flex items-center justify-start">
        <img src={category.icon.url} alt={category.title} />
      </div>
      <p
        className={`absolute md:static text-sm md:text-xl transition-all duration-300 ${
          isHover ? "translate-y-10 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {category.title}
      </p>
    </div>
  );
};

export default SkillIconsTags;
