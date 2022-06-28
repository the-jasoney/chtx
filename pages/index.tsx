import Head from 'next/head';
import { type NextPageWithTitle } from '../types/types';
import styles from '../styles/Home.module.css'

const Home: NextPageWithTitle = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
      </Head>
    </div>
  )
}

Home.title = '';

export default Home
