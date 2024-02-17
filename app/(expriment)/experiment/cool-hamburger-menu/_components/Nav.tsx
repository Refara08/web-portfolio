import { FOOTER_LINKS, LINKS } from "../config";
import { Variants, motion } from "framer-motion";

import styles from "../_styles/nav.module.scss";
import { perspectiveVariant, slideInVariant } from "../anim";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.body}>
        {LINKS.map((link, i) => (
          <div className={styles.linkContainer} key={i}>
            <motion.div
              variants={perspectiveVariant}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a className="text-black" href={link.href}>
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        {FOOTER_LINKS.map((link, i) => (
          <motion.a
            key={`f_${i}`}
            href={link.href}
            variants={slideInVariant}
            custom={i}
            className={styles.link}
            initial="initial"
            animate="enter"
            exit="exit"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {link.title}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
