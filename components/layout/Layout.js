import { useRouter } from "next/router";
import { useEffect } from "react";
import { Gradient } from "../../lib/Gradient";
import NavArrow from "../nav/NavArrow";
import NavProgressBar from "../nav/NavProgressBar";

const Layout = (props) => {
  const { navItems } = props;
  const router = useRouter();

  // Create your instance
  const gradient = new Gradient();

  useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <canvas id="gradient-canvas" data-transition-in />
      </div>
      <div
        className={`bg-primary bg-opacity-40 text-txt-prime h-screen flex flex-col`}
      >
        <NavArrow items={navItems} />
        <div className="container mx-auto flex-[1] overflow-y-auto grid items-center py-4">
          <main className="h-full">{props.children}</main>
        </div>
        {router.pathname !== "/portfolios/[slug]" && (
          <NavProgressBar items={navItems} />
        )}
      </div>
    </div>
  );
};

export default Layout;
