import '../styles/globals.css';
import Layout from '../components/layout';
import { Props } from '../types/types';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    < >
      <Head>
        <title>{Component.title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <Layout title={Component.title}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
