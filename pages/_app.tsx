import '../styles/globals.css';
import Layout from '../components/layout';
import { Props } from '../types/types';

function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout title={Component.title}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
