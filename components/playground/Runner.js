import styles from '../../styles/playground/Runner.module.css';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export default function Runner() {
  const { scrollY } = useViewportScroll();
  const xLeft = useTransform(scrollY, [0, 4000], ['-80%', '0vw']);

  return (
    <motion.p
      style={{ x: xLeft }}
      className={styles.runner}
      aria-label='All work and no play makes Brandi a dull girl.'
    >
      <span aria-hidden>
        All work and no play makes Brandi a dull girl. &nbsp; &nbsp; All work and no play makes
        Brandi a dull girl. &nbsp; &nbsp;All work and no play makes Brandi a dull girl. &nbsp;
        &nbsp;All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work and no play makes
        Brandi a dull girl.&nbsp; &nbsp; All work and no play makes Brandi a dull girl. &nbsp;
        &nbsp;All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work and no play makes
        Brandi a dull girl. &nbsp; &nbsp;All work and no play makes Brandi a dull girl.&nbsp; &nbsp;
        All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work and no play makes
        Brandi a dull girl.
      </span>
    </motion.p>
  );
}
