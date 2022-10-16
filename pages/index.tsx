import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export type Data = {
  data: { info: Info; results: Characters };
};

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Characters = {
  id: number;
  name: string;
  // status: {
  //   alive: string;
  //   dead: string;
  //   unknown: string;
  // };
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}[];

const Home: NextPage<Data> = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name='description' content='Rick and Morty show' />
      </Head>
      <div className={styles.hero}>
        <header className={`${styles.container} `}>
          <img src='Rick-and-Morty-logo.png' alt='logo' />
        </header>
      </div>

      <main className={`${styles.main} ${styles.container}`}>
        <div className={styles.list}>
          <Link href='/characters'>
            <a>
              <div className='card'>
                <img src='rickmortycharacters.jpg' />
                <h2>Characters</h2>
                <p>
                  You can browse over 826 characters from your favorite TV show
                  and learn amazing details from every character that has been
                  in the show!
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          <img src='rickandmortylocation.png' />
          <h2>Locations</h2>
          <p>Did you know that there are 126 locations? </p>
        </div>
        <div className={styles.list}>
          <img src='rickymortyepisodes.jpg' />
          <h2>Episodes</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
