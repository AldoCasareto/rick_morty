import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Practice.module.css';

type Props = {};

const index = (props: Props) => {
  return (
    <div>
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
            <Image
              src='https://rickandmortyapi.com/api/character/avatar/379.jpeg'
              width='200%'
              height='200%'
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
    </div>
  );
};

export default index;
