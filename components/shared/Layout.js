import Head from 'next/head';
import BrowserBorder from './BrowserBorder';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  console.log(
    '%cFind a bug? Wanna chat? Email me @ hello@brandicameron.com',
    'background:white; color: #3e50ef; font-size:12px; font-weight: bold; padding:10px 15px; border-radius: 20px;'
  );

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
