import '../styles/globals.css';
import Layout from '../components/shared/Layout';
import { MotionConfig } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion='user'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;
