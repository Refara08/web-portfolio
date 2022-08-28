import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className={`fixed bottom-0 right-0 w-full z-30`}>
      <div>{props.children}</div>
    </div>
  );
};

const NotifModal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.querySelector("#notification-overlay")
          )
        : null}
    </>
  );
};

export default NotifModal;
