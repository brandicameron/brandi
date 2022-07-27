import styles from '../styles/resouces/Resources.module.css';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import ResourceCard from '../components/ResourceCard';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <h1 className={styles.heading}>Resources</h1>
      <section className={styles.container}>
        {resources.map((section) => (
          <ResourceCard key={uuidv4()} section={section} />
        ))}
      </section>
    </>
  );
}

const resources = [
  {
    title: 'HTML',
    links: [
      {
        title: 'HTML Validator',
        href: 'https://validator.w3.org/#validate_by_input',
      },
      {
        title: 'HTML Data List',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist',
      },
      {
        title: 'HTML Best Practices',
        href: 'https://github.com/hail2u/html-best-practices',
      },
    ],
  },
  {
    title: 'CSS',
    links: [
      {
        title: 'CSS Validator',
        href: 'https://jigsaw.w3.org/css-validator/#validate_by_input',
      },
      {
        title: 'Icons',
        href: 'https://ionicons.com/',
      },
      {
        title: 'PX to REM',
        href: 'https://nekocalc.com/px-to-rem-converter',
      },
      {
        title: 'Coolors',
        href: 'https://coolors.co/',
      },
      {
        title: 'Cubic-Bezier Maker',
        href: 'https://cubic-bezier.com/#.17,.67,.83,.67',
      },
      {
        title: 'Clip-Path Maker',
        href: 'https://bennettfeely.com/clippy/',
      },
      {
        title: 'Get Waves',
        href: 'https://getwaves.io/',
      },
      {
        title: 'More Waves',
        href: 'https://www.shapedivider.app/',
      },
      {
        title: 'Clay.CSS',
        href: 'https://codeadrian.github.io/clay.css/',
      },
      {
        title: 'Media Queries for Devices',
        href: 'https://css-tricks.com/snippets/css/media-queries-for-standard-devices/',
      },
      {
        title: 'Smooooth Shadows',
        href: 'https://shadows.brumm.af/',
      },
      {
        title: 'Clever CSS Tips',
        href: 'https://threadreaderapp.com/thread/1546657470604382208.html',
      },
      {
        title: 'Cool Border Animations',
        href: 'https://dev.to/chokcoco/fantastic-css-border-animation-5166',
      },
    ],
  },
  {
    title: 'JavaScript',
    links: [
      {
        title: 'Find Key Codes',
        href: 'https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes',
      },
      {
        title: 'DOM Events',
        href: 'https://www.w3schools.com/jsref/dom_obj_event.asp',
      },
      {
        title: 'Random Users',
        href: 'https://xsgames.co/randomusers/',
      },
      {
        title: 'Fake Data for Testing',
        href: 'https://fakerjs.dev/',
      },
      {
        title: 'RegEx Library',
        href: 'https://uibakery.io/regex-library?ref=webdesignernews.com',
      },
      {
        title: 'JS Array Handbook',
        href: 'https://www.freecodecamp.org/news/the-javascript-array-handbook/',
      },
      {
        title: 'Supabase - Try this!',
        href: 'https://supabase.com/',
      },
    ],
  },
  {
    title: 'React / Next.js',
    links: [
      {
        title: 'Hydrogen',
        href: 'https://hydrogen.shopify.dev/',
      },
      {
        title: 'React Notifications',
        href: 'https://react-hot-toast.com/',
      },
      {
        title: '30 Days of React',
        href: 'https://github.com/Asabeneh/30-Days-Of-React',
      },
      {
        title: 'Create/Deploy Elevety Site',
        href: 'https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website',
      },
      {
        title: 'Host React Project on Github',
        href: 'https://github.com/gitname/react-gh-pages',
      },
    ],
  },
  {
    title: 'Tools',
    links: [
      {
        title: 'Favicon Generator',
        href: 'https://realfavicongenerator.net/',
      },
      {
        title: 'Sitemap Generator',
        href: 'https://www.xml-sitemaps.com/',
      },
      {
        title: 'SVG Optimizer',
        href: 'https://jakearchibald.github.io/svgomg/',
      },
      {
        title: 'Video to Animated Gif',
        href: 'https://ezgif.com/video-to-gif',
      },
      {
        title: 'Bulk JPG to WebP',
        href: 'https://nsspot.herokuapp.com/imagetowebp/',
      },
      {
        title: 'Image Upscaler',
        href: 'https://icons8.com/upscaler/',
      },
      {
        title: 'Facebook Share Crawler',
        href: 'https://developers.facebook.com/tools/debug/',
      },
      {
        title: 'Google PageSpeed',
        href: 'https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect',
      },
      {
        title: 'QR Code Generator',
        href: 'https://www.qr-code-generator.com/',
      },
      {
        title: 'Add to Google Calendar',
        href: 'https://addtocal.sznm.dev/',
      },
      {
        title: 'Duotone Photos',
        href: 'https://duotone.shapefactory.co/?f=10c5f8&t=6736dd&q=_',
      },
      {
        title: 'Carbon - Share Code Pretty',
        href: 'https://carbon.now.sh/',
      },
      {
        title: 'Framework - Responsive Emails',
        href: 'https://mjml.io/',
      },
      {
        title: 'Remove BG',
        href: 'https://www.remove.bg/',
      },
      {
        title: 'ScreenBrush',
        href: 'https://apps.apple.com/us/app/screenbrush/id1233965871?mt=12',
      },
      {
        title: 'SVG Animator',
        href: 'https://www.svgator.com/',
      },
      {
        title: 'Create a Field App',
        href: 'https://www.fastfieldforms.com/',
      },
      {
        title: 'Email Obfuscator',
        href: 'https://creativetechguy.com/utilities/emailobfuscator',
      },
    ],
  },
  {
    title: 'Packages / Hooks',
    links: [
      {
        title: 'UUID',
        href: 'https://www.npmjs.com/package/uuid',
      },
      {
        title: 'React Icons',
        href: 'https://react-icons.github.io/react-icons/',
      },
      {
        title: 'Browser Image Compression',
        href: 'https://www.npmjs.com/package/browser-image-compression',
      },
      {
        title: 'Signature Pad',
        href: 'https://github.com/szimek/signature_pad',
      },
      {
        title: 'useLocalStorage',
        href: 'https://www.npmjs.com/package/use-local-storage',
      },
      {
        title: 'Uppy File Uploading',
        href: 'https://github.com/transloadit/uppy',
      },
      {
        title: 'SuperState State Management',
        href: 'https://superstate.dev/',
      },
      {
        title: 'Parallax Scrolling',
        href: 'https://github.com/nk-o/jarallax',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: '3D Icons',
        href: 'https://3dicons.co/',
      },
      {
        title: "Free API's",
        href: 'https://rapidapi.com/collection/list-of-free-apis',
      },
      {
        title: "Public API's",
        href: 'https://publicapis.sznm.dev/all',
      },
      {
        title: 'Illustrator Color Palette Trick',
        href: 'https://www.pinterest.com/pin/68743205999/',
      },
      {
        title: 'Markdown Cheatsheet',
        href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
      },
      {
        title: 'Oh Shit, Git!?!',
        href: 'https://ohshitgit.com/',
      },
      {
        title: 'CSS Glowing Icons',
        href: 'https://codepen.io/Krishnaa_Gupta/pen/MWoRqmr',
      },
      {
        title: 'Dev Icons',
        href: 'https://devicon.dev/',
      },
      {
        title: 'Page Transitions Article',
        href: 'https://smth.uk/enhance-your-web-page-transitions/',
      },
      {
        title: 'Calendy Web Scheduling',
        href: 'https://calendly.com/',
      },
      {
        title: 'Free Sound Effects',
        href: 'https://freesound.org/browse/',
      },
      {
        title: 'Internet Archives',
        href: 'https://archive.org/',
      },
      {
        title: 'Ladies, Wine & Design',
        href: 'https://ladieswinedesign.com/nashville/',
      },
      {
        title: 'Vector Logos',
        href: 'https://seekvectors.com/',
      },
      {
        title: 'Readymag',
        href: 'https://readymag.com/examples/portfolio',
      },
      {
        title: 'Mac Screen Reader Guide',
        href: 'https://www.456bereastreet.com/archive/200505/voiceover_and_safari_screen_reading_on_the_mac/',
      },
    ],
  },
  {
    title: 'Inspiration',
    links: [
      {
        title: 'Amazing Microanimations 🔥',
        href: 'https://medium.com/@alexpronsky/collection-of-ui-microinteractions-ea66e4da34aa',
      },
      {
        title: 'Creative Portfolios',
        href: 'https://github.com/amnashanwar/awesome-portfolios',
      },
      {
        title: 'CSS Design Awards',
        href: 'https://www.cssdesignawards.com/',
      },
      {
        title: 'Luke Ritchie - Behance',
        href: 'https://www.behance.net/LukeRitchie',
      },
      {
        title: 'Magic Card',
        href: 'https://codepen.io/gayane-gasparyan/pen/jOmaBQK',
      },
      {
        title: 'Eye Follow',
        href: 'https://codepen.io/FlorinPop17/full/XWWMxNz',
      },
    ],
  },
  {
    title: 'Fave Sites',
    links: [
      {
        title: 'Lynn Fisher',
        href: 'https://lynnandtonic.com/',
      },
      {
        title: 'Sam Smith',
        href: 'https://smth.uk/',
      },
      {
        title: 'Gent Media',
        href: 'https://gent.media/',
      },
      {
        title: 'Joe Coleman 🔥',
        href: 'https://getcoleman.com/',
      },
      {
        title: 'Gastronomical',
        href: 'https://gastronomical.global/',
      },
      {
        title: 'Marie - Clean!',
        href: 'https://www.marieoshepherd.com/',
      },
      {
        title: 'Visual Trends 2022',
        href: 'https://www.freepikcompany.com/visual-trends-2022',
      },
      {
        title: 'Caleno',
        href: 'https://calenodrinks.com/',
      },
      {
        title: 'Mekanism - Fun Intro',
        href: 'https://mekanism.com/',
      },
      {
        title: 'David Drake - Transitions',
        href: 'http://www.daviddrakecomedy.com/#home1',
      },
      {
        title: 'Health•Ade',
        href: 'https://health-ade.com/',
      },
      {
        title: 'Milton Textiles',
        href: 'https://www.miltontextiles.com/',
      },
      {
        title: 'Jhey',
        href: 'https://jhey.dev/',
      },
      {
        title: "Cool Hattie B's Sign",
        href: 'https://twitter.com/HattieBs/status/1036072318617964544',
      },
      {
        title: 'Metropolis',
        href: 'https://www.metropolis.io/',
      },
      {
        title: 'Woset - Playful',
        href: 'https://www.woset.world/',
      },
      {
        title: 'Christopher Cherupil',
        href: 'https://cherupil.com/',
      },
      {
        title: 'Seffie Deleeuw',
        href: 'https://steffiedeleeuw.com/',
      },
      {
        title: 'Hiring Chain',
        href: 'https://hiringchain.org/',
      },
    ],
  },
  {
    title: 'Learn',
    links: [
      {
        title: 'React Testing',
        href: 'https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ',
      },
      {
        title: 'Git for Professionals',
        href: 'https://www.freecodecamp.org/news/git-for-professionals/',
      },
      {
        title: 'Github Full Course',
        href: 'https://fireship.io/courses/git/',
      },
      {
        title: 'Foundational Math',
        href: 'https://www.freecodecamp.org/news/freecodecamp-foundational-math-curriculum/',
      },
      {
        title: 'Learn RegEx',
        href: 'https://dev.to/azure/how-you-can-learn-enough-regex-in-javascript-to-be-dangerous-49d',
      },
      {
        title: 'Accessibility Course - 2022',
        href: 'https://testingaccessibility.com/',
      },
      {
        title: 'Essential HTML Jen Simmons',
        href: 'https://www.linkedin.com/learning/html-essential-training-4',
      },
      {
        title: 'CSS Grid - Kevin Powell',
        href: 'https://www.youtube.com/watch?v=rg7Fvvl3taU',
      },
      {
        title: 'Redux Toolkit',
        href: 'https://www.freecodecamp.org/news/learn-redux-toolkit-the-recommended-way-to-use-redux/',
      },
    ],
  },
  {
    title: 'Interview Prep',
    links: [
      {
        title: 'Front-End Checklist',
        href: 'https://frontendchecklist.io/',
      },
      {
        title: 'HTML Trivia for FE',
        href: 'https://www.frontendinterviewhandbook.com/html-questions',
      },
      {
        title: 'FE Interview Handbook',
        href: 'https://www.frontendinterviewhandbook.com/introduction',
      },
    ],
  },
];
