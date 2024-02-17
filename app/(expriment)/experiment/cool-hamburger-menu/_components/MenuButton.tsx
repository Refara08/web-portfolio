import styles from "../_styles/menu-button.module.scss";
import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuButton = ({ isOpen, toggleOpen }: MenuButtonProps) => {
  return (
    <button className={styles.button} onClick={toggleOpen}>
      <motion.div
        className={styles.slider}
        animate={{ top: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.3, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.text}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.text}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </button>
  );
};

export default MenuButton;

const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
