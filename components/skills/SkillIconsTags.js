import { useState } from "react";

const SkillIconsTags = ({ skill, iconOnly = false, iconSize = "50px" }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`relative col-span-1 w-fit md:hover:scale-105 transition duration-300 flex flex-row justify-center ${
        iconOnly ? "md:justify-center" : "md:justify-start"
      } items-center gap-4 lg:gap-3`}
    >
      <div
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-start"
      >
        <img src={skill.icon.url} alt={skill.title} />
      </div>
      {!iconOnly && (
        <p
          className={`absolute md:static text-sm md:text-xl transition-all duration-300 md:translate-y-0 md:opacity-100 ${
            isHover ? "translate-y-10 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {skill.title}
        </p>
      )}
      {iconOnly && (
        <p
          className={`absolute text-sm transition-all duration-300 ${
            isHover ? "translate-y-10 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {skill.title}
        </p>
      )}
    </div>
  );
};

export default SkillIconsTags;
