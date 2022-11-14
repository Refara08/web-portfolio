import { useEffect } from "react";
import { Gradient } from "../../lib/Gradient";
import Navigation from "../nav/Navigation";
import NewNav from "../nav/NewNav";

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
      <div
        className={`bg-primary bg-opacity-40 text-txt-prime min-h-screen flex flex-col`}
      >
        {/* <Navigation items={navItems} /> */}
        <div className="container mx-auto flex-[1] grid items-center overflow-hidden py-4">
          <main className="">{props.children}</main>
        </div>
        <NewNav items={navItems} />
      </div>
    </div>
  );
};

export default Layout;
