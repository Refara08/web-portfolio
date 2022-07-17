import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import SideNav from "./side-nav-comp";

const NavComp = (props) => {
  const { logo, navItems, width, ratio } = props;
  const [isOpen, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-8 bg-primary text-txt-prime
      `}
    >
      <div className="pl-4">
        <Link href="/">
          <a>
            <Image
              src={logo}
              width={`${width}px`}
              height={`${width / ratio}px`}
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {navItems.map((item) => (
            <li className="hidden lg:block" key={item}>
              <Link href="/" scroll={false}>
                <a className="relative z-10 px-4 pt-2 before:absolute before:block before:bottom-0 before:bg-white before:w-full before:h-0 before:transition-all before:duration-300 before:-z-10 before:hover:h-full hover:text-primary">
                  {item}
                </a>
              </Link>
            </li>
          ))}
          <li className="block lg:hidden">
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
  );
};

export default NavComp;
