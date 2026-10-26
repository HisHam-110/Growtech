import React from 'react';
import { Header } from '../Header/Header';
import contactImg from '../../assets/images/image 22.png';
import { Interactive3DVisual } from '../common/Interactive3DVisual';
import styles from './Contact.module.css';

const GRID_COLUMNS_COUNT = 23;

export const ContactHero = ({ onNavigate }) => {
  return (
    <section className={styles.contactHeroContainer}>
      {/* Background Overlay with 23 Grid Columns & 2 Ellipses */}
      <div className={styles.backgroundLayer} aria-hidden="true">
        <div className={styles.gridOverlay}>
          {Array.from({ length: GRID_COLUMNS_COUNT }).map((_, index) => (
            <div key={index} className={styles.gridColumn} />
          ))}
        </div>
        <div className={styles.ellipseLeft} />
        <div className={styles.ellipseRight} />
      </div>

      {/* Top Header Navigation with active 'تواصل معنا' */}
      <Header activePage="تواصل معنا" onNavigate={onNavigate} />

      {/* Center Hero Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.heroCard}>
          <div className={styles.visualContainer}>
            <Interactive3DVisual
              src={contactImg}
              alt="تواصل معنا"
              width={175}
              height={175}
              maxTilt={20}
            />
          </div>
          <h1 className={styles.title}>تواصل معنا</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
