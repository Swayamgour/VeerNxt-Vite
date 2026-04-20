import React from 'react';
import Button from '../Button/Button';
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Combat Training',
    description: 'Intensive physical and tactical combat preparation',
    image: '🔫',
    price: 'Professional'
  },
  {
    title: 'Strategic Intel',
    description: 'Advanced intelligence gathering and analysis',
    image: '🗺️',
    price: 'Elite'
  },
  {
    title: 'Medical Corps',
    description: 'Battlefield medical and emergency response',
    image: '🏥',
    price: 'Essential'
  }
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>OUR SERVICES</span>
          <h2>What We <span className={styles.highlight}>Offer</span></h2>
          <p>Comprehensive military solutions for every need</p>
        </div>
        
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.image}>{service.image}</div>
              <div className={styles.badge}>{service.price}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button variant="secondary" size="small">Learn More →</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;