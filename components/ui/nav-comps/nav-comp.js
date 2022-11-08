import Link from "next/link";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SideNav from "./side-nav-comp";

gsap.registerPlugin(ScrollTrigger);

const NavComp = (props) => {
  const { logo, navItems, width, ratio } = props;
  const [isOpen, setOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState("bg-opacity-10");

  const navChildRef = useRef();
  const q = gsap.utils.selector(navChildRef);

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBgOpacity("bg-opacity-10");
      } else {
        setBgOpacity("bg-opacity-0");
      }
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (
          self.direction === 1 &&
          window.scrollY > 200 &&
          self.getVelocity() > 0
        ) {
          //scrolling down...
          gsap.to(navChildRef.current, {
            yPercent: -100,
            opacity: 0,
            ease: "power3.in",
          });
          // console.log(self.direction);
          // console.log(self.getVelocity());
        } else if (self.direction === -1) {
          //scrolling up...
          gsap.to(navChildRef.current, {
            yPercent: 0,
            opacity: 1,
            ease: "power3.out",
          });
          // console.log(self.direction);
        }
      },
    });
  });

  useEffect(() => {
    gsap.fromTo(
      q(".nav-child"),
      { yPercent: -200, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.1 }
    );
  }, [q]);

  return (
    <div
      ref={navChildRef}
      className={`px-4 pt-6 pb-4 bg-primary ${bgOpacity} backdrop-blur-lg text-txt-prime sticky top-0 z-20
      `}
    >
      <div className="container mx-auto flex justify-between items-center gap-4 ">
        <div className="pl-0 lg:pl-4 scale-75 lg:scale-100 flex-[1] lg:flex-none grid lg:block place-items-center">
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="logo"
                width={`${width}px`}
                height={`${width / ratio}px`}
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-4">
            {navItems.map((item, index) => (
              <li className="hidden lg:block nav-child" key={index}>
                <Link href={item.link} scroll={false}>
                  <a className="relative z-10 px-4 pt-2 before:absolute before:block before:bottom-0 before:bg-white before:w-full before:h-0 before:transition-all before:duration-300 before:-z-10 before:hover:h-full hover:text-primary">
                    {item.placeholder}
                  </a>
                </Link>
              </li>
            ))}
            <li
              className={`block lg:hidden ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
            </li>
          </ul>
          <SideNav
            navItems={navItems}
            isOpen={isOpen}
            setOpen={setOpen}
            onClose={closeHandler}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavComp;
