import { useState } from "react";

const SkillIcon = (props) => {
  const { icon } = props;
  const [isHover, setIsHover] = useState(false);

  const onHovering = () => {
    setIsHover(true);
  };

  const onLeaving = () => {
    setIsHover(false);
  };
  return (
    <div
      onMouseEnter={onHovering}
      onMouseLeave={onLeaving}
      className="flex justify-center items-center relative"
    >
      <div className="hover:scale-125 transition-all duration-300">
        {icon.jsx}
      </div>
      <p
        className={`text-sm font-semibold absolute top-14 transition-all duration-300 bg-white text-primary py-1 px-2 rounded-full ${
          isHover ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        {icon.tag}
      </p>
    </div>
  );
};

export default SkillIcon;
