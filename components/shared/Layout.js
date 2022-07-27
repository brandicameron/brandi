import Head from 'next/head';
import BrowserBorder from './BrowserBorder';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Brandi Cameron | hello@brandicameron.com' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#3e50ef' />
        <meta name='msapplication-TileColor' content='#00a300' />
        <meta name='theme-color' content='#ffffff'></meta>
        <meta property='og:title' content='Brandi Cameron | Front-end Developer in Nashville' />
        <meta property='og:image' content='/images/share.jpg' />
      </Head>

      <Nav />
      <main className='main' id='skipToContent'>
        {children}
      </main>
      <Footer />
      <BrowserBorder />
    </>
  );
}
