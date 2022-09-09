import { useEffect } from "react";
import { Gradient } from "../../lib/Gradient";

import Navigation from "../nav/Navigation";
import Footer from "../footer/Footer";

const Layout = (props) => {
  const { navItems } = props;
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
      <div className={`bg-primary bg-opacity-40 text-txt-prime`}>
        <Navigation items={navItems} />
        <div className="container mx-auto ">
          <main className="flex-[1]">{props.children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
