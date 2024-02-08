import { MotionValue } from "framer-motion";
import { create } from "zustand";

type ScrollY = {
  scrollYProgress: MotionValue<number> | undefined;
  setScrollYProgress: (motionValue: MotionValue<number>) => void;
};

export const useScrollYProgress = create<ScrollY>()((set) => ({
  scrollYProgress: undefined,
  setScrollYProgress: (motionValue) =>
    set(() => ({ scrollYProgress: motionValue })),
}));
