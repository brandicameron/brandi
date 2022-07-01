import styles from '../../styles/shared/Bug.module.css';
import { useFoundBug } from '../../hooks/useFoundBug';

export default function Bug() {
  const { handleFoundBug } = useFoundBug();

  return <img onClick={handleFoundBug} className={styles.bug} src='./images/home/bug.svg' alt='' />;
}
