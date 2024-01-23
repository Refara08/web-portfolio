"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const ParalaxScrolLayout = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis
      root
      options={{
        easing: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ParalaxScrolLayout;
