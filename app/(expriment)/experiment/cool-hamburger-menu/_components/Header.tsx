"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const variants: Variants = {
    open: {
      width: 450,
      height: 650,
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 120,
      height: 40,
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 flex items-center justify-end p-4">
      <div className="absolute top-10 right-10">
        <motion.div
          className="bg-[#c9fd74] w-[480px] h-[650px] rounded-3xl relative"
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isOpen && <Nav />}</AnimatePresence>
        </motion.div>
        <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
    </header>
  );
};

export default Header;
