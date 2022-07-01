import styles from '../../styles/shared/BugCounter.module.css';
// import { useFoundBug } from '../../hooks/useFoundBug';

export default function BugCounter() {
  // const { bugsFound } = useFoundBug();

  return (
    <>
      <p className={styles.bugContainer}>3</p>
      {/* <p className={styles.bugContainer}>{bugsFound}</p> */}
    </>
  );
}
