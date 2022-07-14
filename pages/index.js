import Head from 'next/head';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import CTA from '../components/home/CTA';
import Projects from '../components/home/Projects';
import Quote from '../components/home/Quote';

export default function Home({ weatherData, astroData }) {
  return (
    <>
      <Head>
        <title>Brandi Cameron | Front-end Developer in Nashville</title>
        <meta
          name='description'
          content="Hi, I'm Brandi, a front-end developer and graphic designer in Nashville. I love creating projects that engage and delight users — let's make something cool together."
        />
      </Head>
      <Banner weatherData={weatherData} astroData={astroData} />
      <Quote />
      <Projects />
      <CTA />
      <About />
    </>
  );
}

export async function getServerSideProps() {
  const SECRET_KEY = process.env.SECRET_KEY;
  const fetchWeather = fetch(
    `http://api.weatherapi.com/v1/current.json?key=${SECRET_KEY}&q=Nashville&aqi=no&alerts=yes`,
    {
      mode: 'cors',
    }
  );
  const fetchAstro = fetch(
    `http://api.weatherapi.com/v1/astronomy.json?key=${SECRET_KEY}&q=Nashville`,
    {
      mode: 'cors',
    }
  );

  const [weatherRes, astroRes] = await Promise.all([fetchWeather, fetchAstro]);
  const [weather, astro] = await Promise.all([weatherRes.json(), astroRes.json()]);

  return {
    props: {
      weatherData: weather,
      astroData: astro,
    },
  };
}
