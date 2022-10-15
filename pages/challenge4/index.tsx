import React from 'react';
import styles from '../../styles/Challenge4.module.css';

const index = () => {
  return (
    <div>
      <section className={`${styles.hero} ${styles.center} `}>
        <div className={styles.container}>
          <p className={styles.intro__text}>lorem ipsum sit</p>
          <h1 className={styles.intro__title}>
            Responsive layouts don't have to be a struggle
          </h1>
        </div>
      </section>
      <section className={styles.section__two}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Quality Designs</h2>
          <div className={styles.flex}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
              felis. Sociis natoque penatibus et magnis dis.
            </p>
            <p>
              Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
              amet luctus venenatis. Turpis in eu mi bibendum neque egestas
              congue quisque egestas. Pellentesque sit amet porttitor eget dolor
              morbi non.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section__three}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div className={styles.col}>
            <h2 className={styles.section__title}>Made custom for you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={styles.col}>
            <img className={styles.image} src='image-01.jpg' alt='' />
          </div>
        </div>
        <div className={styles.flex}></div>
      </section>
      <section className={styles.section__four}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div className={styles.col}>
            <img src='image-02.jpg' alt='' />
          </div>
          <div className={styles.col}>
            <h2 className={styles.section__title}>Created with care</h2>
            <p>
              Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
              amet luctus venenatis. Turpis in eu mi bibendum neque egestas
              congue quisque egestas. Pellentesque sit amet porttitor eget dolor
              morbi non.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
