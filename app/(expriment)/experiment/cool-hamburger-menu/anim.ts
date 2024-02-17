import { Variants } from "framer-motion";

export const perspectiveVariant: Variants = {
  initial: (i) => ({
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: 25,
  }),
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideInVariant: Variants = {
  initial: (i) => ({
    opacity: 0,
    y: 20,
  }),
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};
