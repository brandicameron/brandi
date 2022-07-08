import styles from '../../styles/home/TechList.module.css';

export default function TechList() {
  return (
    <aside className={styles.techIcons}>
      <ul className={styles.techList} aria-label="Technologies that I'm proficient in:">
        {techIcons.map((icon) => (
          <li key={icon.title} title={icon.title}>
            <img src={icon.src} alt='' width={25} height={25} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

const techIcons = [
  {
    src: '/images/icons/html5-plain.svg',
    title: 'HTML 5',
  },
  {
    src: '/images/icons/css3-plain.svg',
    title: 'CSS 3',
  },
  {
    src: '/images/icons/javascript-plain.svg',
    title: 'Javascript',
  },
  {
    src: '/images/icons/react-plain.svg',
    title: 'React',
  },
  {
    src: '/images/icons/nextjs-plain.svg',
    title: 'Next JS',
  },
  {
    src: '/images/icons/firebase-plain.svg',
    title: 'Firebase Auth, Firestore and Storage',
  },
  {
    src: '/images/icons/gsap-plain.svg',
    title: 'GSAP/Greensock',
  },
  {
    src: '/images/icons/sass-plain.svg',
    title: 'Sass',
  },
  {
    src: '/images/icons/tailwind-plain.svg',
    title: 'Tailwind CSS',
  },
  {
    src: '/images/icons/a11y-plain.svg',
    title: 'a11y Accessibility',
  },
  {
    src: '/images/icons/shopify-plain.svg',
    title: 'Shopify',
  },
  {
    src: '/images/icons/photoshop-plain.svg',
    title: 'Adobe Photoshop',
  },
];
