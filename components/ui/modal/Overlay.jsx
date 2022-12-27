import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="cursor-pointer fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-40 backdrop-blur-md"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }) => {
  const modalRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { yPercent: 10, duration: 0.3, ease: "linear" },
      { yPercent: 0 }
    );
  }, []);

  return (
    <div
      ref={modalRef}
      className={`fixed top-[10vh] right-1/2 translate-x-1/2 z-50 select-none`}
    >
      <div>{children}</div>
    </div>
  );
};

const Overlay = ({ onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            <Backdrop onClose={onClose} />,
            document.querySelector("#overlays")
          )
        : null}
      {mounted
        ? createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            document.querySelector("#overlays")
          )
        : null}
    </>
  );
};

export default Overlay;
