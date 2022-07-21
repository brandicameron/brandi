import styles from '../styles/resouces/ResourceCard.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function ResourceCard({ section }) {
  return (
    <div className={styles.card}>
      <h2>{section.title}</h2>
      <ul className={section.links.length > 6 ? `${styles.columns}` : ''}>
        {section.links.map((link) => (
          <li key={uuidv4()}>
            <a target='_blank' rel='noreferrer noopener' href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
