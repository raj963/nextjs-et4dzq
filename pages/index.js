import Head from 'next/head';
import PriceCurveChart from '../components/Chart';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <PriceCurveChart />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
