import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import RoundedArrowLeft from "../ui/jsx/rounded-arrow-left";
import RoundedArrowRight from "../ui/jsx/rounded-arrow-right";
import Overlay from "../ui/modal/Overlay";

function PortfolioImgModal({
  onClose,
  imageContent,
  imageIndex,
  title,
  decreaseIndexHandler,
  increaseIndexHandler,
}) {
  const loadedImage = imageContent[imageIndex];

  const imgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, yPercent: 5 },
      { opacity: 1, yPercent: 0 }
    );
  }, [imageIndex]);

  //touch handler
  let touchPosition = {
    xStart: 0,
    xEnd: 0,
    yStart: 0,
    yEnd: 0,
  };

  const getDirection = () => {
    const { xStart, xEnd, yStart, yEnd } = touchPosition;

    const xDiff = Math.abs(xStart - xEnd);
    const yDiff = Math.abs(yStart - yEnd);

    if (xDiff === 0 || yDiff === 0) {
      return;
    }

    if (xDiff > yDiff) {
      if (xEnd > xStart) {
        decreaseIndexHandler();
      } else {
        increaseIndexHandler();
      }
    } else {
      if (yEnd > yStart) {
        onClose();
      } else {
        onClose();
      }
    }
  };

  const startTouchHandler = (e) => {
    touchPosition = {
      ...touchPosition,
      xStart: e.changedTouches[0].screenX,
      yStart: e.changedTouches[0].screenY,
    };
  };

  const endTouchHandler = (e) => {
    touchPosition = {
      ...touchPosition,
      xEnd: e.changedTouches[0].screenX,
      yEnd: e.changedTouches[0].screenY,
    };
    getDirection();
  };

  return (
    <Overlay onClose={onClose}>
      <div
        onTouchStart={startTouchHandler}
        onTouchEnd={endTouchHandler}
        className="relative  h-[80vh] w-[90vw] md:h-[80vh] md:w-[80vw] mx-auto text-white flex items-center"
      >
        {imageContent.length > 1 && (
          <RoundedArrowLeft
            size="2.2rem"
            className="absolute left-3 top-1/2 hover:scale-125 transition duration-300 origin-right cursor-pointer z-10"
            onClick={decreaseIndexHandler}
          />
        )}
        <img
          ref={imgRef}
          src={loadedImage.url}
          alt={title}
          width={loadedImage.width}
          height={loadedImage.height}
          className=""
        />
        {imageContent.length > 1 && (
          <RoundedArrowRight
            size="2.2rem"
            className="absolute right-3 top-1/2 hover:scale-125 transition duration-300 origin-left cursor-pointer z-10"
            onClick={increaseIndexHandler}
          />
        )}
      </div>
    </Overlay>
  );
}

export default PortfolioImgModal;
