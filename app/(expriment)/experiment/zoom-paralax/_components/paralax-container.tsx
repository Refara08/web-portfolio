"use client";

import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "framer-motion";
import { ElementRef, useEffect, useRef } from "react";
import { useScrollYProgress } from "../_hooks/use-scrollyprogress";

interface ParalaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ParalaxContainer = ({ children, className }: ParalaxContainerProps) => {
  const container = useRef<ElementRef<"main">>(null);
  const { setScrollYProgress } = useScrollYProgress();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(
    () => setScrollYProgress(scrollYProgress),
    [scrollYProgress, setScrollYProgress]
  );

  return (
    <main ref={container} className={cn(className)}>
      {children}
    </main>
  );
};

export default ParalaxContainer;
