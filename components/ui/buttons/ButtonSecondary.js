import { forwardRef } from "react";

const ButtonSecondary = forwardRef((props, ref) => {
  const { onHover, onLeave, href, target } = props;

  return (
    <a
      target={target}
      href={href}
      ref={ref}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      className={`inline-block text-xl py-2 px-5 rounded-full relative z-10 cursor-pointer before:bg-white before:bg-opacity-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:hover:w-full before:hover:bg-opacity-100 before:transition-all before:duration-300`}
    >
      {props.children}
    </a>
  );
});

ButtonSecondary.displayName = "ButtonSecondary";

export default ButtonSecondary;
