import React, { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Veteran John Smith',
    role: 'Former Special Forces',
    text: 'The training and discipline I received here shaped my entire career. Proud to be part of this legacy.',
    rating: 5,
    image: '⭐'
  },
  {
    id: 2,
    name: 'Captain Lisa Johnson',
    role: 'Active Duty Officer',
    text: 'Exceptional leadership and world-class facilities. The best decision I ever made.',
    rating: 5,
    image: '⭐'
  },
  {
    id: 3,
    name: 'Sergeant Mike Roberts',
    role: 'Combat Veteran',
    text: 'Brotherhood like no other. This is more than service - it\'s family.',
    rating: 5,
    image: '⭐'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>TESTIMONIALS</span>
          <h2>What Our <span className={styles.highlight}>Heroes</span> Say</h2>
          <p>Real stories from those who served</p>
        </div>
        
        <div className={styles.slider}>
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <div className={styles.image}>{testimonial.image}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
          
          <div className={styles.dots}>
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;