import styles from '../../styles/home/About.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  return (
    <section className={styles.about} id='about'>
      <div className={styles.content}>
        <h2>Hi, I&apos;m Brandi.</h2>
        <div className={toggled ? `${styles.toggle} ${styles.clicked}` : `${styles.toggle}`}>
          <button
            onClick={handleToggled}
            className={toggled ? `${styles.toggleBtn} ${styles.clicked}` : `${styles.toggleBtn}`}
            aria-label='Click to toggle between a concise or verbose description of Brandi.'
          ></button>
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
          {/* <p>
              I work hard to create sites that are A11y compliant, fully responsive and
              performant...bla bla bla
            </p> */}
          <p>
            A former graphic designer, I spent 10 years building and maintaining a leading Photoshop
            template company for professional photographers. I conceptualized, designed and made
            market ready thousands of products including branding materials, social media graphics,
            greeting cards, albums and easy-to-use mock up templates. The e-commerce website was
            initially built in Adobe Muse, and was later transferred to Shopify. It was working
            within the confines of these no-code site builders that spurred my desire to learn
            coding. With my first line of HTML I knew that writing code was without a doubt what I
            would be doing for the rest of my life.
          </p>
        </div>
        <p>
          I am in search of a place to expand my programming knowledge and grow into a well rounded
          developer.
          <span style={{ display: toggled ? 'contents' : 'none' }}>
            &nbsp; If you feel that my skill set and commitment to excellence would contribute to
            your team,{' '}
          </span>
          <a href='mailto:hello@brandicameron.com?subject=Hi%20Brandi!' className={styles.reachOut}>
            {toggled ? 'reach out' : ' Reach out'}
          </a>{' '}
          — let&apos;s create some cool things together!
        </p>
        <div className={styles.buttons} id='contact'>
          <a
            href='mailto:hello@brandicameron.com?subject=Hi%20Brandi!'
            className='btn'
            target='blank'
            title='Email Brandi'
          >
            <span className='btn-shadow'></span>
            <span className='btn-front'>
              Email
              <img
                alt=''
                src='/images/icons/email-icon.svg'
                width={25}
                height={25}
                className='icon'
              />
            </span>
          </a>
          <a href='www.brandicameron.com' className='btn' target='blank' title='Resume'>
            <span className='btn-shadow'></span>
            <span className='btn-front'>
              Resume
              <img
                alt=''
                src='/images/icons/resume-icon.svg'
                width={25}
                height={25}
                className='icon'
              />
            </span>
          </a>
          <a href='https://github.com/brandicameron' className='btn' target='blank' title='Github'>
            <span className='btn-shadow'></span>
            <span className='btn-front'>
              Github
              <img
                alt=''
                src='/images/icons/github-icon.svg'
                width={25}
                height={25}
                className='icon'
              />
            </span>
          </a>
          <a
            href='https://zoo.sandiegozoo.org/cams/koala-cam'
            className='btn'
            target='blank'
            title='View Live Koala Cam'
          >
            <span className='btn-shadow'></span>
            <span className='btn-front'>
              Koala Cam
              <img
                alt=''
                src='/images/icons/koala-icon.svg'
                width={25}
                height={25}
                className='icon'
              />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.brandi}>
        <Image src='/images/about/brandi-round.png' width={215} height={230} alt='Brandi Cameron' />
      </div>
    </section>
  );
}
