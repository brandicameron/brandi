import styles from '../../styles/shared/BrowserBorder.module.css';

export default function BrowserBorder() {
  /*
  The reason for creating the border out of individual divs instead of 
  (for instance) adding a border to the body similar to this: 

  body:before {
    content: '';
    position: fixed;
    z-index: 999;
    inset: 0;
    border: .4rem solid var(--primary);
    pointer-events: none;
}

is because of an irritating iOS behavior where the bottom border "sticks" 
for a sec, then pops back into place when scrolling down due to the bottom 
address bar.

See video demo of behavior here:  https://i.imgur.com/FQ72GzE.mp4
  */

  return (
    <>
      <div className={styles.borderTop}></div>
      <div className={styles.borderLeft}></div>
      <div className={styles.borderRight}></div>
      <div className={styles.borderBottom}></div>
    </>
  );
}
