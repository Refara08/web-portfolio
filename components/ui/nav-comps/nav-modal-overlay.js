import { Fragment, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import gsap from "gsap";

const Backdrop = (props) => {
  const backdropRef = useRef();

  // useEffect(() => {
  //   if (props.isOpen) {
  //     gsap.fromTo(
  //       backdropRef.current,
  //       { opacity: 0, zIndex: -20 },
  //       { opacity: 1, zIndex: 20 }
  //     );
  //   } else {
  //     gsap.fromTo(
  //       backdropRef.current,
  //       { opacity: 1, zIndex: 20 },
  //       { opacity: 0, zIndex: -20 }
  //     );
  //   }
  // }, [props.isOpen]);

  return (
    <div
      ref={backdropRef}
      className={`fixed lg:hidden top-0 left-0 w-full h-screen -z-20 bg-black bg-opacity-75 ${
        props.isOpen
          ? "opacity-100 translate-x-0 z-20"
          : "opacity-0 translate-x-5 -z-20"
      }`}
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  const overlayRef = useRef();

  useEffect(() => {
    if (props.isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, zIndex: -20 },
        { opacity: 1, zIndex: 30 }
      );
    } else {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1, zIndex: 30 },
        { opacity: 0, zIndex: -20 }
      );
    }
  }, [props.isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed lg:hidden top-0 right-0 w-full md:w-2/5 lg:w-[400px] -z-30"
    >
      <div>{props.children}</div>
    </div>
  );
};

// const portalOverlays = document.querySelector("#overlays");

const Modal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { isOpen, onClose } = props;

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <Fragment>
      {mounted
        ? createPortal(
            <Backdrop onClose={onClose} isOpen={isOpen} />,
            document.querySelector("#overlays")
          )
        : null}
      {mounted
        ? createPortal(
            <ModalOverlay isOpen={isOpen}>{props.children}</ModalOverlay>,
            document.querySelector("#overlays")
          )
        : null}
    </Fragment>
  );
};

export default Modal;
