import styles from '../../styles/home/About.module.css';
import { useState } from 'react';
import Image from 'next/image';
import LinkBtn from '../shared/LinkBtn';

export default function About() {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  return (
    <section className={styles.about} id='about'>
      <div className={styles.brandi}>
        <Image src='/images/about/brandi-round.png' width={215} height={230} alt='Brandi Cameron' />
      </div>
      <div className={styles.content}>
        <h2>Hi, I&apos;m Brandi.</h2>
        <div className={styles.toggle}>
          <span aria-hidden className={styles.toggleLabel}>
            Concise
          </span>
          <button
            className={toggled ? `${styles.toggleBtn} ${styles.clicked}` : `${styles.toggleBtn}`}
            onClick={handleToggled}
            aria-live='polite'
            aria-label={
              toggled
                ? 'Verbose selected, click to toggle back to concise.'
                : 'Click to toggle between a concise or verbose description of Brandi, concise is currently selected.'
            }
          ></button>
          <span aria-hidden className={styles.toggleLabel}>
            Verbose
          </span>
        </div>
        <p>
          I&apos;m a highly driven, front-end focused developer that thrives in creative
          environments.
          <span style={{ display: toggled ? 'contents' : 'none' }}>
            &nbsp; I love problem solving and feel that restrictions (design or otherwise) tend to
            fuel the most creative solutions.
          </span>
        </p>
        <div style={{ display: toggled ? 'block' : 'none' }}>
          <p>
            A former graphic designer, I spent over 10 years building and maintaining a{' '}
            <a className={styles.inlineLink} href='https://3dollartemplates.com/' target='blank'>
              leading Photoshop template company
            </a>{' '}
            for professional photographers. I conceptualized, designed and made market ready
            thousands of products including branding materials, social media graphics, greeting
            cards, albums and easy-to-use mock up templates. The e-commerce website was initially
            built in Adobe Muse, and was later rebuilt in Shopify. It was working within the
            confines of these no-code site builders that spurred my desire to learn coding. With my
            first line of HTML I knew that writing code was without a doubt what I would be doing
            for the rest of my life.
          </p>
        </div>
        <p>
          I am in search of a place to expand my programming knowledge and grow into a well rounded
          developer.
          <span style={{ display: toggled ? 'contents' : 'none' }}>
            &nbsp; If you feel that my skill set and commitment to excellence would contribute to
            your team,{' '}
          </span>
          <a
            href='mailto:hello@brandicameron.com?subject=Hi%20Brandi!'
            className={styles.inlineLink}
          >
            {toggled ? 'reach out' : ' Reach out'}
          </a>{' '}
          — let&apos;s create some cool things together!
        </p>
        <div className={styles.buttons} id='contact'>
          {linkButtons.map((button) => (
            <LinkBtn
              key={button.title}
              href={button.href}
              title={button.title}
              icon={button.icon}
              ariaLabel={button.ariaLabel}
              src={button.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const linkButtons = [
  {
    title: 'Email',
    href: 'mailto:hello@brandicameron.com?subject=Hi%20Brandi!',
    ariaLabel: 'Email Brandi.',
    src: '/images/icons/email-icon.svg',
  },
  {
    title: 'Resumé',
    href: '/brandi-cameron-resume.pdf',
    ariaLabel: "View PDF of Brandi's resumé, opens in a new window.",
    src: '/images/icons/resume-icon.svg',
  },
  {
    title: 'Github',
    href: 'https://github.com/brandicameron',
    ariaLabel: "View Brandi's github, opens in a new window.",
    src: '/images/icons/github-icon.svg',
  },
  {
    title: 'Koala Cam',
    href: 'https://zoo.sandiegozoo.org/cams/koala-cam',
    ariaLabel: 'View a live Koala cam, opens in a new window.',
    src: '/images/icons/koala-icon.svg',
  },
];
