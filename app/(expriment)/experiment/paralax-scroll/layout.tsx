import LenisScroll from "@/components/providers/lenis-scroll";

const ParalaxScrolLayout = ({ children }: { children: React.ReactNode }) => {
  return <LenisScroll>{children}</LenisScroll>;
};

export default ParalaxScrolLayout;
