import { useRouter } from "next/router";
import { useEffect } from "react";
import { Gradient } from "../../lib/Gradient";
import NavArrow from "../nav/NavArrow";
import NavProgressBar from "../nav/NavProgressBar";

const Layout = ({ navItems, children }) => {
  const router = useRouter();
  const indexPage = parseInt(
    navItems.findIndex((item) => item.link.includes(router.asPath))
  );
  const links = navItems.map((item) => item.link);
  const isMainPage =
    router.pathname.includes("/") ||
    router.pathname.includes("/services") ||
    router.pathname.includes("/skills") ||
    router.pathname.includes("/portfolios") ||
    router.pathname.includes("/contact");

  // Create your instance
  const gradient = new Gradient();

  useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  // navigation with touch events
  let position = { xStart: 0, xEnd: 0 };

  const touchActionStart = () => {
    const { xStart, xEnd } = position;

    if (xStart === xEnd || Math.abs(xEnd - xStart) < 50) return;

    if (xEnd > xStart) {
      if (indexPage !== 0) {
        router.push(links[indexPage - 1]);
      } else {
        router.push(links[navItems.length - 1]);
      }
    } else {
      if (indexPage !== navItems.length - 1) {
        router.push(links[indexPage + 1]);
      } else {
        router.push(links[0]);
      }
    }
  };

  const touchStartHandler = (e) => {
    position = { ...position, xStart: e.changedTouches[0].screenX };
  };

  const touchEndHandler = (e) => {
    position = { ...position, xEnd: e.changedTouches[0].screenX };
    touchActionStart();
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <canvas id="gradient-canvas" data-transition-in />
      </div>
      <div
        className={`bg-primary bg-opacity-40 text-txt-prime h-screen flex flex-col`}
      >
        <div className="hidden md:block">
          <NavArrow indexPage={indexPage} items={navItems} />
        </div>
        <div className="block md:hidden">
          {isMainPage && (
            <NavProgressBar indexPage={indexPage} items={navItems} />
          )}
        </div>
        <div className="container mx-auto flex-[1] overflow-y-auto hide-scrollbar grid items-center py-4">
          <main
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            className="h-full"
          >
            {children}
          </main>
        </div>
        <div className="block md:hidden">
          <NavArrow indexPage={indexPage} items={navItems} />
        </div>
        <div className="hidden md:block">
          {isMainPage && (
            <NavProgressBar indexPage={indexPage} items={navItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
