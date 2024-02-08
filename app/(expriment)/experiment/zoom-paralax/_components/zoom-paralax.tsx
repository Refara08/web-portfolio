"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ZOOM_PARALAX_IMAGES } from "../config";
import { useScrollYProgress } from "../_hooks/use-scrollyprogress";
import Image from "next/image";

import styles from "./zoom-paralax.module.scss";

const ZoomParalax = () => {
  const { scrollYProgress } = useScrollYProgress();
  const initial = useMotionValue(0);

  const scale4 = useTransform(scrollYProgress ?? initial, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress ?? initial, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress ?? initial, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress ?? initial, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress ?? initial, [0, 1], [1, 9]);

  const images = ZOOM_PARALAX_IMAGES.map((url, index) => {
    let scale: MotionValue<number>;

    if (index === 0) {
      scale = scale4;
    } else if (index === 1 || index === 3) {
      scale = scale5;
    } else if (index === 2 || index === 4) {
      scale = scale6;
    } else if (index === 5) {
      scale = scale8;
    } else {
      scale = scale9;
    }

    return { url, scale };
  });

  return (
    <div className="sticky w-full top-0 h-[100vh] overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          style={{ scale: img.scale }}
          className={styles.el}
        >
          <div className={styles.imageContainer}>
            <Image
              fill
              src={img.url}
              alt="img"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ZoomParalax;
