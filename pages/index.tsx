import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name='description' content='Rick and Morty show' />
      </Head>
    </div>
  );
};

export default Home;
