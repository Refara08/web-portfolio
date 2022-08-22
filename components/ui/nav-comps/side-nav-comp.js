import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Modal from "./nav-modal-overlay";

const SideNav = (props) => {
  const { navItems, isOpen, setOpen, onClose } = props;

  const navRef = useRef();
  const q = gsap.utils.selector(navRef);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(q("li"), { xPercent: 500 }, { xPercent: 0, stagger: 0.075 });
    }
  }, [isOpen, q]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ul
        ref={navRef}
        className="flex flex-col items-end justify-start gap-10 bg-primary text-txt-prime pt-8 px-8 md:px-[3rem] h-screen"
      >
        <li className="block">
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </li>
        {navItems.map((item) => (
          <li className="block" key={item.placeholder} onClick={onClose}>
            <Link href={item.link} scroll={false}>
              <a className="text-3xl relative z-10 pr-2 pl-6 py-1 before:absolute before:block before:right-0 before:bottom-1/2 before:translate-y-1/2 before:bg-white before:h-full before:w-0 before:transition-all before:duration-300 before:-z-10 before:hover:w-full hover:text-primary">
                {item.placeholder}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default SideNav;
