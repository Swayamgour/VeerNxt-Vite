import React from 'react';
import Button from '../Button/Button';
import styles from './Team.module.css';

const teamData = [
  {
    name: 'General James Carter',
    role: 'Commander-in-Chief',
    image: '👨‍✈️',
    rank: '4-Star General',
    awards: ['Medal of Honor', 'Silver Star']
  },
  {
    name: 'Colonel Sarah Williams',
    role: 'Special Forces Director',
    image: '👩‍✈️',
    rank: 'Colonel',
    awards: ['Bronze Star', 'Purple Heart']
  },
  {
    name: 'Major David Chen',
    role: 'Strategic Operations',
    image: '🎖️',
    rank: 'Major',
    awards: ['Legion of Merit', 'Air Medal']
  }
];

const Team = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>OUR LEADERS</span>
          <h2>Command <span className={styles.highlight}>Structure</span></h2>
          <p>Meet our distinguished military leadership</p>
        </div>
        
        <div className={styles.grid}>
          {teamData.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.image}>{member.image}</div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <div className={styles.rank}>{member.rank}</div>
              <div className={styles.awards}>
                {member.awards.map((award, i) => (
                  <span key={i} className={styles.award}>{award}</span>
                ))}
              </div>
              <Button variant="primary" size="small">View Profile</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;