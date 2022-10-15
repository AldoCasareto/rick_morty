import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Practice.module.css';

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <nav className={`${styles.nav} `}>
            <ul className={styles.nav__list}>
              <img src='logo.svg' alt='logo' />

              <li className='nav__item'>Home</li>
              <li className='nav__item'>About</li>
              <li className='nav__item'>Contact</li>
              <li className={styles.nav__push_right}>Sign in</li>
              <li className={styles.nav__link__button}>Sign up</li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={styles.hero}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div className={styles.hero__text}>
            <h1>Responsive layout dont have to be a struggle</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              possimus accusantium nemo blanditiis? Officia, quae.
            </p>
            <button className={styles.btn}>I want to learn</button>
          </div>
          <div className={styles.image}>
            <img
              src='https://rickandmortyapi.com/api/character/avatar/379.jpeg'
              alt='image'
            />
          </div>
        </div>
      </div>
      <section className={styles.three__col}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div className='col'>
            <h3>Cheap</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
              ullam sapiente!
            </p>
          </div>
          <div className='col'>
            <h3>Quick</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
              ullam sapiente!
            </p>
          </div>
          <div className='col'>
            <h3>Quality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
              ullam sapiente!
            </p>
          </div>
        </div>
      </section>
      <section className={styles.two__col}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div className='col'>
            <h3>Cheap</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              dignissimos nobis iusto saepe ratione tenetur quos veritatis
              libero aut repellendus?
            </p>
          </div>

          <div className='col'>
            <h3>Quality</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              dignissimos nobis iusto saepe ratione tenetur quos veritatis
              libero aut repellendus?
            </p>
          </div>
        </div>
      </section>
      <main className={`${styles.container} ${styles.main} ${styles.flex}`}>
        <section className={styles.left}>
          <h2>Quality designs made custom, on demand, just for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </section>
        <aside className={styles.right}>
          <h3>Cheap</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
            ullam sapiente!
          </p>

          <h3>Quick</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
            ullam sapiente!
          </p>

          <h3>Quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            aspernatur necessitatibus possimus ex animi ipsa facere nulla iure
            ullam sapiente!
          </p>
        </aside>
      </main>
    </div>
  );
};

export default index;
