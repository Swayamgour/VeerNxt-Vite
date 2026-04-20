import React from 'react';
import Button from '../Button/Button';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Ready to Serve Your Nation?</h2>
          <p>Join the ranks of elite warriors. Your journey starts here.</p>
          <div className={styles.buttons}>
            <Button variant="red" size="large">Enlist Today →</Button>
            <Button variant="gold" size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;