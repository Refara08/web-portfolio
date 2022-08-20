import { forwardRef } from "react";

const ButtonPrime = forwardRef((props, ref) => {
  const { specialStyle, onHover, onLeave, href } = props;

  return (
    <a
      href={href}
      ref={ref}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      className={`inline-block text-xl py-2 px-5 border-2 border-secondary rounded-full cursor-pointer ${specialStyle} relative hover:text-primary hover:border-opacity-0 z-10 before:bg-white before:bg-opacity-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:rounded-full before:h-full before:w-0 before:hover:w-full before:hover:bg-opacity-100 before:transition-all before:duration-300`}
    >
      {props.children}
    </a>
  );
});

export default ButtonPrime;
