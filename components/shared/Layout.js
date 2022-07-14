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
        <link rel='icon' href='/images/favicon.png' />
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
