import LenisScroll from "@/components/providers/lenis-scroll";

const ZoomParalaxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LenisScroll>
      <section className="mt-[50vh]">{children}</section>
    </LenisScroll>
  );
};

export default ZoomParalaxLayout;
