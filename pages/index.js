import Head from 'next/head';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import CTA from '../components/home/CTA';
import Projects from '../components/home/Projects';
import Quote from '../components/home/Quote';
import BugCounter from '../components/shared/BugCounter';

export default function Home({ weatherData, sunRiseSet }) {
  return (
    <>
      <Head>
        <title>Brandi Cameron | Front-end Developer in Nashville</title>
        <meta
          name='description'
          content="Hi, I'm Brandi, a front-end developer and graphic designer in Nashville. I love creating projects that engage and delight users — let's make something cool together."
        />
      </Head>
      <Banner weatherData={weatherData} sunRiseSet={sunRiseSet} />
      <Quote />
      <Projects />
      <CTA />
      <About />
      <BugCounter />
    </>
  );
}

export async function getServerSideProps() {
  const SECRET_KEY = process.env.SECRET_KEY;

  const [weatherRes, astroRes] = await Promise.all([
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${SECRET_KEY}&q=Nashville&aqi=no&alerts=yes`,
      {
        mode: 'cors',
      }
    ),
    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${SECRET_KEY}&q=Nashville`, {
      mode: 'cors',
    }),
  ]);
  const [weather, astro] = await Promise.all([weatherRes.json(), astroRes.json()]);

  return {
    props: {
      weatherData: weather,
      sunRiseSet: astro.astronomy.astro,
    },
  };
}
